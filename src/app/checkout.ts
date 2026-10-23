// On-site checkout client (Ziina via Supabase edge functions). Prices shown here are for display only;
// the server recomputes every total from the database.
import { FUNCTIONS_URL, SUPABASE_KEY } from './config';
export const EMIRATES = ['أبوظبي', 'دبي', 'الشارقة', 'عجمان', 'أم القيوين', 'رأس الخيمة', 'الفجيرة'];
export const STATUS_AR: Record<string, string> = { new: 'جديد', paid: 'مدفوع', shipped: 'تم الشحن', delivered: 'تم التسليم', canceled: 'ملغي' };
export const PAY_AR: Record<string, string> = { pending: 'بانتظار الدفع', requires_payment_instrument: 'بانتظار الدفع', requires_user_action: 'بانتظار تأكيد البنك', completed: 'تم الدفع', failed: 'فشل الدفع', canceled: 'أُلغي الدفع' };
export const fils = (f: number) => f / 100;
export type Customer = { name: string; phone: string; email: string; emirate: string; city: string; address: string };
export type CreateResult = { order_id: string; order_no: number; label: string; token: string; total_fils: number; subtotal_fils: number; shipping_fils: number; test: boolean; stub?: boolean;
  payment?: { intent_id: string; redirect_url: string; embedded_url: string } | null; error?: string; fields?: Record<string, string>; handles?: string[]; code?: string | null };
const H = { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' };
export async function createCheckout(body: { items: { handle: string; qty: number }[]; customer: Customer; note: string; website?: string; base: string }): Promise<CreateResult> {
  const r = await fetch(`${FUNCTIONS_URL}/create-checkout`, { method: 'POST', headers: H, body: JSON.stringify(body) });
  return r.json().catch(() => ({ error: 'network' }));
}
export async function orderStatus(o: string, t: string) {
  const r = await fetch(`${FUNCTIONS_URL}/order-status?o=${encodeURIComponent(o)}&t=${encodeURIComponent(t)}`, { headers: { apikey: SUPABASE_KEY } });
  if (!r.ok) return null; return r.json();
}
export const LAST = 'alcode-last-order';
