// Ziina webhook: payment_intent.status.updated. The payload is only a hint; status is re-fetched from Ziina's API.
import { admin, applyIntent, env, ziina } from '../_shared/common.ts';
const ZIINA_IPS = ['3.29.184.186', '3.29.190.95', '20.233.47.127', '13.202.161.181'];
const ok = (b: unknown = { ok: true }, status = 200) => new Response(JSON.stringify(b), { status, headers: { 'Content-Type': 'application/json' } });

async function hmacHex(secret: string, body: string) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return [...new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(body)))].map(b => b.toString(16).padStart(2, '0')).join('');
}
const same = (a: string, b: string) => { if (a.length !== b.length) return false; let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i); return d === 0; };

Deno.serve(async (req) => {
  if (req.method !== 'POST') return ok({ error: 'method' }, 405);
  const raw = await req.text();
  const secret = env('ZIINA_WEBHOOK_SECRET');
  if (secret) {
    const sig = (req.headers.get('x-hmac-signature') ?? '').toLowerCase();
    if (!same(sig, await hmacHex(secret, raw))) return ok({ error: 'signature' }, 401);
  }
  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim();
  if (env('ZIINA_ENFORCE_IP') === 'true' && !ZIINA_IPS.includes(ip)) return ok({ error: 'ip' }, 403);
  let evt: any; try { evt = JSON.parse(raw); } catch { return ok({ error: 'bad_json' }, 400); }
  if (evt?.event !== 'payment_intent.status.updated' || typeof evt?.data?.id !== 'string') return ok({ ignored: true });
  const db = admin();
  const { data: order } = await db.from('orders').select('*').eq('ziina_intent_id', evt.data.id).maybeSingle();
  if (!order) return ok({ ignored: 'unknown intent' });
  const r = await ziina(`/payment_intent/${encodeURIComponent(evt.data.id)}`);
  if (!r.ok) return ok({ error: 'verify_failed' }, 502); // non-2xx → Ziina retries
  const res = await applyIntent(db, order, r.data, 'ziina-webhook');
  return ok({ ok: true, changed: res.changed });
});
