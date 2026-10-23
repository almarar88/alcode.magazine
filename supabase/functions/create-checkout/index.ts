// POST: validate the cart against DB prices, create a pending order, then a Ziina payment intent (test mode).
import { admin, ALLOWED_ORIGINS, cors, env, json, MIN_TOTAL_FILS, orderLabel, SHIPPING_FILS, ziina, ziinaTest } from '../_shared/common.ts';

const EMIRATES = ['أبوظبي', 'دبي', 'الشارقة', 'عجمان', 'أم القيوين', 'رأس الخيمة', 'الفجيرة'];
const s = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().replace(/\s+/g, ' ').slice(0, max) : '');

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors(req) });
  if (req.method !== 'POST') return json(req, { error: 'method' }, 405);
  let body: any; try { body = await req.json(); } catch { return json(req, { error: 'bad_json' }, 400); }
  if (body?.website) return json(req, { error: 'rejected' }, 400); // honeypot

  const c = body?.customer ?? {};
  const customer = { customer_name: s(c.name, 120), phone: s(c.phone, 20).replace(/[^\d+]/g, ''), email: s(c.email, 200).toLowerCase(),
    emirate: s(c.emirate, 40), city: s(c.city, 80), address: s(c.address, 400) };
  const note = typeof body?.note === 'string' ? body.note.trim().slice(0, 500) : '';
  const errors: Record<string, string> = {};
  if (customer.customer_name.length < 2) errors.name = 'required';
  if (!/^\+?\d{7,15}$/.test(customer.phone)) errors.phone = 'invalid';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(customer.email)) errors.email = 'invalid';
  if (!EMIRATES.includes(customer.emirate)) errors.emirate = 'invalid';
  if (customer.city.length < 2) errors.city = 'required';
  if (customer.address.length < 5) errors.address = 'required';

  // Merge cart lines by handle; quantities 1..20; prices are NEVER taken from the client.
  const want = new Map<string, number>();
  for (const it of Array.isArray(body?.items) ? body.items.slice(0, 40) : []) {
    const h = s(it?.handle, 200), q = Math.floor(Number(it?.qty));
    if (h && q > 0) want.set(h, Math.min(20, (want.get(h) ?? 0) + q));
  }
  if (!want.size) errors.items = 'empty';
  if (Object.keys(errors).length) return json(req, { error: 'validation', fields: errors }, 422);

  const db = admin();
  const { data: products, error: pe } = await db.from('products').select('id, handle, title, price_fils, available').in('handle', [...want.keys()]);
  if (pe) return json(req, { error: 'db' }, 500);
  const missing = [...want.keys()].filter(h => !products!.some(p => p.handle === h && p.available));
  if (missing.length) return json(req, { error: 'unavailable', handles: missing }, 409);
  const items = products!.map(p => ({ product_id: p.id, handle: p.handle, title: p.title, unit_price_fils: p.price_fils, qty: want.get(p.handle)!, line_fils: p.price_fils * want.get(p.handle)! }));
  const subtotal = items.reduce((a, i) => a + i.line_fils, 0), total = subtotal + SHIPPING_FILS;
  if (total < MIN_TOTAL_FILS) return json(req, { error: 'min_amount' }, 422);

  // Signed-in customer (optional): link the order so they can see it under RLS.
  let user_id: string | null = null;
  const auth = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  if (auth && auth.split('.').length === 3) { const { data } = await db.auth.getUser(auth); user_id = data?.user?.id ?? null; }

  const test = ziinaTest();
  const { data: order, error: oe } = await db.from('orders').insert({ ...customer, note: note || null, subtotal_fils: subtotal, shipping_fils: SHIPPING_FILS, total_fils: total, user_id, ziina_test: test })
    .select('id, order_no, access_token, total_fils').single();
  if (oe) return json(req, { error: 'db', detail: oe.message }, 500);
  await db.from('order_items').insert(items.map(i => ({ ...i, order_id: order.id })));
  await db.from('order_events').insert({ order_id: order.id, kind: 'status', value: 'new', actor: 'checkout' });

  const reqOrigin = req.headers.get('origin') ?? '';
  const site = ALLOWED_ORIGINS.includes(reqOrigin) ? reqOrigin : (env('SITE_ORIGIN') || ALLOWED_ORIGINS[0]);
  const base = site + (typeof body?.base === 'string' && /^\/[\w\-/]*$/.test(body.base) ? body.base.replace(/\/?$/, '/') : '/');
  const q = `o=${order.id}&t=${order.access_token}`;
  const out = { order_id: order.id, order_no: order.order_no, label: orderLabel(order.order_no), token: order.access_token, total_fils: total, subtotal_fils: subtotal, shipping_fils: SHIPPING_FILS, test };

  if (!env('ZIINA_API_TOKEN')) return json(req, { ...out, payment: null, stub: true });
  const r = await ziina('/payment_intent', { method: 'POST', body: JSON.stringify({
    amount: total, currency_code: 'AED', test, allow_tips: false,
    message: `طلب ${orderLabel(order.order_no)} — متجر الكود`,
    success_url: `${base}checkout/success/?${q}`, cancel_url: `${base}checkout/?cancelled=1&${q}`, failure_url: `${base}checkout/?failed=1&${q}`,
  }) });
  if (!r.ok || !r.data?.id) {
    await db.from('orders').update({ status: 'canceled', payment_status: 'failed', updated_at: new Date().toISOString() }).eq('id', order.id);
    await db.from('order_events').insert({ order_id: order.id, kind: 'payment', value: `intent_error ${r.status} ${r.data?.code ?? ''}`.trim(), actor: 'checkout' });
    return json(req, { ...out, error: 'payment_provider', status: r.status, code: r.data?.code ?? null }, 502);
  }
  await db.from('orders').update({ ziina_intent_id: r.data.id, payment_status: r.data.status ?? 'requires_payment_instrument' }).eq('id', order.id);
  return json(req, { ...out, stub: false, payment: { intent_id: r.data.id, redirect_url: r.data.redirect_url, embedded_url: r.data.embedded_url } });
});
