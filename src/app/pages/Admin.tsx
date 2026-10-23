import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { LogIn, LogOut, RefreshCw, Loader2, Mail, KeyRound, ChevronDown, FlaskConical } from 'lucide-react';
import { SUPABASE_URL, SUPABASE_KEY } from '../config';
import { fmtPrice, BASE } from '../data';
import { fils, PAY_AR, STATUS_AR } from '../checkout';
import { PageHead } from '../ui';

type SB = import('@supabase/supabase-js').SupabaseClient;
let client: Promise<SB> | null = null;
const sb = () => (client ??= import('@supabase/supabase-js').then(m => m.createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: true, detectSessionInUrl: true, storageKey: 'alcode-store-auth' } })));
const STATUSES = ['new', 'paid', 'shipped', 'delivered', 'canceled'];
const dt = new Intl.DateTimeFormat('ar-AE-u-nu-latn', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Dubai' });

export default function Admin() {
  const [phase, setPhase] = useState<'loading' | 'login' | 'denied' | 'ok'>('loading');
  const [email, setEmail] = useState(''); const [pw, setPw] = useState(''); const [msg, setMsg] = useState(''); const [busy, setBusy] = useState(false);
  const [orders, setOrders] = useState<any[]>([]); const [filter, setFilter] = useState('all'); const [open, setOpen] = useState<string | null>(null);
  const [items, setItems] = useState<Record<string, any[]>>({}); const [saving, setSaving] = useState<string | null>(null); const [toast, setToast] = useState('');
  const live = useRef<HTMLParagraphElement>(null);

  async function check() {
    const c = await sb(); const { data } = await c.auth.getSession();
    if (!data.session) return setPhase('login');
    const { data: own } = await c.rpc('is_store_owner'); if (!own) return setPhase('denied');
    setPhase('ok'); load();
  }
  async function load() {
    const c = await sb(); const { data, error } = await c.from('orders').select('id, order_no, status, payment_status, customer_name, phone, email, emirate, city, address, note, subtotal_fils, shipping_fils, total_fils, ziina_test, created_at, paid_at').order('created_at', { ascending: false }).limit(200);
    if (error) setMsg('تعذّر تحميل الطلبات.'); else setOrders(data || []);
  }
  // Never call auth methods inside onAuthStateChange (supabase-js holds its lock there → deadlock); defer instead.
  useEffect(() => { let sub: { unsubscribe(): void } | undefined; check(); sb().then(c => { sub = c.auth.onAuthStateChange(ev => { if (ev === 'SIGNED_IN' || ev === 'SIGNED_OUT') setTimeout(check, 0); }).data.subscription; }); return () => sub?.unsubscribe(); }, []);

  async function login(e: FormEvent) {
    e.preventDefault(); setBusy(true); setMsg(''); const c = await sb();
    const { error } = await c.auth.signInWithPassword({ email: email.trim(), password: pw }); setBusy(false);
    if (error) setMsg('تعذّر الدخول. تحقق من البريد وكلمة المرور، أو اطلب رابط دخول.'); else check();
  }
  async function magic() {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) return setMsg('اكتب بريدك الإلكتروني أولًا.');
    setBusy(true); const c = await sb();
    const { error } = await c.auth.signInWithOtp({ email: email.trim(), options: { shouldCreateUser: false, emailRedirectTo: location.origin + BASE + 'admin/' } }); setBusy(false);
    setMsg(error ? 'تعذّر إرسال الرابط الآن. حاول بعد قليل.' : 'أرسلنا رابط الدخول إلى بريدك إن كان الحساب مسجّلًا.');
  }
  async function logout() { const c = await sb(); await c.auth.signOut(); setOrders([]); setPhase('login'); }
  async function toggle(id: string) {
    setOpen(o => o === id ? null : id);
    if (!items[id]) { const c = await sb(); const { data } = await c.from('order_items').select('title, qty, unit_price_fils, line_fils').eq('order_id', id); setItems(x => ({ ...x, [id]: data || [] })); }
  }
  async function setStatus(id: string, status: string) {
    setSaving(id); const c = await sb(); const { data, error } = await c.rpc('set_order_status', { p_order: id, p_status: status }); setSaving(null);
    if (error) { setToast('لم يُحفظ التغيير.'); return; }
    setOrders(os => os.map(o => o.id === id ? { ...o, status: data.status } : o)); setToast(`تم تحديث الطلب إلى «${STATUS_AR[status]}».`);
  }
  const counts = useMemo(() => Object.fromEntries(['all', ...STATUSES].map(s => [s, s === 'all' ? orders.length : orders.filter(o => o.status === s).length])), [orders]);
  const shown = filter === 'all' ? orders : orders.filter(o => o.status === filter);

  return <main id="main">
    <PageHead kicker="لوحة المالك" title="الطلبات" desc="خاصة بحساب مالك المتجر فقط." />
    <div className="mx-auto max-w-[1100px] px-4 pt-8 sm:px-6">
      <p ref={live} role="status" aria-live="polite" className="sr-only">{toast}</p>
      {phase === 'loading' && <p role="status" className="flex items-center gap-2"><Loader2 size={20} aria-hidden="true" className="spin" />جارٍ التحقق…</p>}
      {phase === 'login' && <form onSubmit={login} data-testid="admin-login" className="mx-auto max-w-[460px] rounded-3xl border border-[var(--border-strong)] bg-[var(--card)] p-6">
        <h2 className="flex items-center gap-2 text-xl"><KeyRound size={22} aria-hidden="true" className="text-[var(--accent)]" />دخول المالك</h2>
        <label htmlFor="a-email" className="field-label mt-4">البريد الإلكتروني</label><input id="a-email" type="email" dir="ltr" autoComplete="username" className="field-input" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="a-pw" className="field-label mt-3">كلمة المرور</label><input id="a-pw" type="password" dir="ltr" autoComplete="current-password" className="field-input" value={pw} onChange={e => setPw(e.target.value)} />
        {msg && <p role="alert" className="mt-3 font-semibold">{msg}</p>}
        <button type="submit" disabled={busy} className="ink-btn mt-5 w-full justify-center"><LogIn size={18} aria-hidden="true" />دخول</button>
        <button type="button" disabled={busy} onClick={magic} className="ghost-btn mt-3 w-full justify-center"><Mail size={18} aria-hidden="true" />أرسل لي رابط دخول بالبريد</button>
      </form>}
      {phase === 'denied' && <div data-testid="admin-denied" className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6"><p className="text-lg">هذا الحساب لا يملك صلاحية لوحة الطلبات.</p><button type="button" onClick={logout} className="ghost-btn mt-4"><LogOut size={18} aria-hidden="true" />تسجيل الخروج</button></div>}
      {phase === 'ok' && <section data-testid="admin-orders" aria-label="قائمة الطلبات">
        <div className="flex flex-wrap items-center gap-2">
          <div role="group" aria-label="تصفية حسب الحالة" className="flex flex-wrap gap-2">{['all', ...STATUSES].map(s => <button key={s} type="button" aria-pressed={filter === s} onClick={() => setFilter(s)} className={`chip ${filter === s ? 'chip-accent' : ''}`}>{s === 'all' ? 'الكل' : STATUS_AR[s]} <span className="tabular-nums">({counts[s]})</span></button>)}</div>
          <div className="ms-auto flex gap-2"><button type="button" onClick={load} className="ghost-btn"><RefreshCw size={17} aria-hidden="true" />تحديث</button><button type="button" onClick={logout} className="ghost-btn"><LogOut size={17} aria-hidden="true" />خروج</button></div>
        </div>
        {msg && <p role="alert" className="mt-3 font-semibold">{msg}</p>}
        {shown.length === 0 ? <p className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center">لا توجد طلبات في هذه الحالة.</p> :
        <ul className="mt-5 grid gap-3">{shown.map(o => <li key={o.id} data-testid="admin-order" className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span dir="ltr" className="text-lg font-bold">AL-{o.order_no}</span>
            <span className={`status-pill s-${o.status}`}>{STATUS_AR[o.status]}</span>
            <span className="text-sm text-[var(--text-secondary)]">الدفع: {PAY_AR[o.payment_status] || o.payment_status}</span>
            {o.ziina_test && <span className="chip"><FlaskConical size={14} aria-hidden="true" />تجريبي</span>}
            <span className="ms-auto font-bold">{fmtPrice(fils(o.total_fils))}</span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[.95rem] text-[var(--text-secondary)]"><span className="font-semibold text-[var(--text-primary)]">{o.customer_name}</span><span>{o.emirate}، {o.city}</span><time dateTime={o.created_at}>{dt.format(new Date(o.created_at))}</time></div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <label htmlFor={`st-${o.id}`} className="text-sm font-semibold">تغيير الحالة</label>
            <select id={`st-${o.id}`} data-testid="admin-status" className="field-input !w-auto !py-1.5" value={o.status} disabled={saving === o.id} onChange={e => setStatus(o.id, e.target.value)}>{STATUSES.map(s => <option key={s} value={s}>{STATUS_AR[s]}</option>)}</select>
            {saving === o.id && <Loader2 size={18} aria-hidden="true" className="spin" />}
            <button type="button" aria-expanded={open === o.id} aria-controls={`d-${o.id}`} onClick={() => toggle(o.id)} className="ghost-btn ms-auto !py-1.5">التفاصيل<ChevronDown size={16} aria-hidden="true" className={open === o.id ? 'rotate-180' : ''} /></button>
          </div>
          {open === o.id && <div id={`d-${o.id}`} className="mt-3 grid gap-3 border-t border-[var(--border)] pt-3 sm:grid-cols-2">
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[.95rem]"><dt className="text-[var(--text-muted)]">الهاتف</dt><dd><a dir="ltr" href={`tel:${o.phone}`} className="underline">{o.phone}</a></dd><dt className="text-[var(--text-muted)]">البريد</dt><dd><a dir="ltr" href={`mailto:${o.email}`} className="underline">{o.email}</a></dd><dt className="text-[var(--text-muted)]">العنوان</dt><dd>{o.address}</dd>{o.note && <><dt className="text-[var(--text-muted)]">ملاحظة</dt><dd>{o.note}</dd></>}</dl>
            <ul className="grid gap-1 text-[.95rem]">{(items[o.id] || []).map((i, k) => <li key={k} className="flex justify-between gap-3"><span>{i.title} × {i.qty}</span><span>{fmtPrice(fils(i.line_fils))}</span></li>)}<li className="flex justify-between"><span>الشحن</span><span>{fmtPrice(fils(o.shipping_fils))}</span></li><li className="flex justify-between font-bold"><span>المجموع</span><span>{fmtPrice(fils(o.total_fils))}</span></li></ul>
          </div>}
        </li>)}</ul>}
        {toast && <p className="mt-4 text-sm text-[var(--text-secondary)]" aria-hidden="true">{toast}</p>}
      </section>}
    </div>
  </main>;
}
