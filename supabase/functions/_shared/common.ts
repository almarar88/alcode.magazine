// Shared helpers for the store checkout functions. Secrets come only from the function environment.
import { createClient } from 'npm:@supabase/supabase-js@2.45.4';

export const ALLOWED_ORIGINS = ['https://blog.alcode.ae', 'https://alcode.ae', 'https://www.alcode.ae', 'http://127.0.0.1:4173', 'http://localhost:4173'];
export const SHIPPING_FILS = 2500;            // flat 25 AED per order, no tax
export const MIN_TOTAL_FILS = 200;            // Ziina minimum: 2 AED
export const ZIINA_API = 'https://api-v2.ziina.com/api';
export const STATUSES = ['new', 'paid', 'shipped', 'delivered', 'canceled'] as const;

export const env = (k: string) => Deno.env.get(k) ?? '';
export const admin = () => createClient(env('SUPABASE_URL'), env('SUPABASE_SERVICE_ROLE_KEY'), { auth: { persistSession: false } });
// Test mode is forced unless the owner explicitly sets ZIINA_LIVE=yes later.
export const ziinaTest = () => env('ZIINA_LIVE') !== 'yes';

export function cors(req: Request) {
  const o = req.headers.get('origin') ?? '';
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(o) ? o : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Vary': 'Origin',
  };
}
export const json = (req: Request, body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors(req), 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });

export async function ziina(path: string, init: RequestInit = {}) {
  const token = env('ZIINA_API_TOKEN');
  if (!token) return { ok: false, status: 0, data: { message: 'ZIINA_API_TOKEN not set' } };
  const r = await fetch(ZIINA_API + path, { ...init, headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', 'Accept': 'application/json', 'User-Agent': 'alcode-store/1.0 (+https://blog.alcode.ae)', ...(init.headers ?? {}) } });
  const txt = await r.text(); let data: any = null; try { data = JSON.parse(txt); } catch { data = { message: txt.slice(0, 200) }; }
  return { ok: r.ok, status: r.status, data };
}

export const orderLabel = (n: number) => `AL-${n}`;
const aed = (f: number) => (f / 100).toFixed(2).replace(/\.00$/, '');

/** Apply a Ziina payment intent (fetched from Ziina's API, never from the client) to an order. Idempotent. */
export async function applyIntent(db: ReturnType<typeof admin>, order: any, intent: any, actor: string) {
  if (!intent || intent.id !== order.ziina_intent_id) return { changed: false, reason: 'intent mismatch' };
  if (Number(intent.amount) !== order.total_fils || String(intent.currency_code).toUpperCase() !== 'AED') return { changed: false, reason: 'amount mismatch' };
  const ps = String(intent.status);
  if (ps === order.payment_status) return { changed: false };
  const patch: Record<string, unknown> = { payment_status: ps, updated_at: new Date().toISOString() };
  if (ps === 'completed' && order.status === 'new') { patch.status = 'paid'; patch.paid_at = new Date().toISOString(); }
  // Only move forward from pending states; never overwrite a completed payment.
  const { data: upd } = await db.from('orders').update(patch).eq('id', order.id).neq('payment_status', 'completed').select('*').maybeSingle();
  if (!upd) return { changed: false };
  await db.from('order_events').insert({ order_id: order.id, kind: 'payment', value: ps, actor });
  if (patch.status) await db.from('order_events').insert({ order_id: order.id, kind: 'status', value: 'paid', actor });
  if (ps === 'completed' && !upd.email_sent_at) await sendConfirmation(db, upd);
  return { changed: true, order: upd };
}

/** Optional confirmation email over SMTP (port 465). Skipped silently when SMTP secrets are absent. */
export async function sendConfirmation(db: ReturnType<typeof admin>, order: any) {
  const host = env('SMTP_HOST'), user = env('SMTP_USER'), pass = env('SMTP_PASS');
  if (!host || !user || !pass) return false;
  try {
    const { data: items } = await db.from('order_items').select('title, qty, line_fils').eq('order_id', order.id);
    const nodemailer = (await import('npm:nodemailer@6.9.15')).default;
    const t = nodemailer.createTransport({ host, port: Number(env('SMTP_PORT') || 465), secure: true, auth: { user, pass } });
    const lines = (items ?? []).map((i: any) => `• ${i.title} × ${i.qty} — ${aed(i.line_fils)} د.إ.`).join('\n');
    const text = `مرحبًا ${order.customer_name}،\n\nشكرًا لطلبك من متجر الكود. تم استلام الدفع.\nرقم الطلب: ${orderLabel(order.order_no)}\n\n${lines}\nالشحن: ${aed(order.shipping_fils)} د.إ.\nالمجموع: ${aed(order.total_fils)} د.إ.\n\nالعنوان: ${order.emirate}، ${order.city}، ${order.address}\n${order.ziina_test ? '\n(طلب تجريبي — لم يُخصم أي مبلغ)\n' : ''}\nللاستفسار: info@alcode.ae\nمتجر الكود — Alcode Books`;
    await t.sendMail({ from: env('SMTP_FROM') || `متجر الكود <${user}>`, to: order.email, bcc: env('ORDER_NOTIFY_EMAIL') || undefined, replyTo: 'info@alcode.ae',
      subject: `${order.ziina_test ? '[تجريبي] ' : ''}تأكيد طلبك ${orderLabel(order.order_no)} — متجر الكود`, text });
    await db.from('orders').update({ email_sent_at: new Date().toISOString() }).eq('id', order.id);
    await db.from('order_events').insert({ order_id: order.id, kind: 'email', value: 'sent', actor: 'system' });
    return true;
  } catch (e) {
    await db.from('order_events').insert({ order_id: order.id, kind: 'email', value: 'failed: ' + String((e as Error).message).slice(0, 120), actor: 'system' });
    return false;
  }
}
