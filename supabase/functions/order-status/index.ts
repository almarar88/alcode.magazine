// GET ?o=<order id>&t=<access token>: customer-facing order status. Re-verifies with Ziina if payment isn't final yet.
import { admin, applyIntent, cors, json, orderLabel, ziina } from '../_shared/common.ts';
const UUID = /^[0-9a-f-]{36}$/i;
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors(req) });
  const u = new URL(req.url); const o = u.searchParams.get('o') ?? '', t = u.searchParams.get('t') ?? '';
  if (!UUID.test(o) || !UUID.test(t)) return json(req, { error: 'not_found' }, 404);
  const db = admin();
  let { data: order } = await db.from('orders').select('*').eq('id', o).eq('access_token', t).maybeSingle();
  if (!order) return json(req, { error: 'not_found' }, 404);
  if (order.ziina_intent_id && !['completed', 'failed', 'canceled'].includes(order.payment_status)) {
    const r = await ziina(`/payment_intent/${encodeURIComponent(order.ziina_intent_id)}`);
    if (r.ok) { const res = await applyIntent(db, order, r.data, 'order-status'); if (res.order) order = res.order; }
  }
  const { data: items } = await db.from('order_items').select('handle, title, qty, unit_price_fils, line_fils').eq('order_id', o);
  return json(req, { label: orderLabel(order.order_no), order_no: order.order_no, status: order.status, payment_status: order.payment_status, test: order.ziina_test,
    subtotal_fils: order.subtotal_fils, shipping_fils: order.shipping_fils, total_fils: order.total_fils, created_at: order.created_at, paid_at: order.paid_at,
    name: order.customer_name.split(' ')[0], emirate: order.emirate, city: order.city, email_sent: !!order.email_sent_at, items });
});
