import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { Lock, ShieldCheck, Truck, ArrowRight, CheckCircle2, AlertTriangle, Loader2, ExternalLink, FlaskConical, Mail } from 'lucide-react';
import { Link } from '../router';
import { books, byHandle, fmtPrice, BASE } from '../data';
import { useCart, useStored } from '../store';
import { EMAIL, ZIINA_EMBED } from '../config';
import { createCheckout, orderStatus, EMIRATES, fils, LAST, PAY_AR, STATUS_AR, type CreateResult, type Customer } from '../checkout';
import { Cover, PageHead } from '../ui';

const SHIP = 25;
type Row = { handle: string; qty: number; title: string; price: number; available: boolean; b: any };
const byVariant = (id: number) => books.find(b => b.variants.some(v => v.id === id));
function useItems(): { rows: Row[]; buyNow: boolean } {
  const { lines } = useCart(); const [buy, setBuy] = useState<string | null>(null);
  useEffect(() => { setBuy(new URLSearchParams(location.search).get('buy')); }, []);
  return useMemo(() => {
    const src = buy ? buy.split(',').map(p => { const [id, q] = p.split(':').map(Number); const b = byVariant(id); return b ? { handle: b.handle, qty: Math.min(20, Math.max(1, q || 1)) } : null; }).filter(Boolean) as { handle: string; qty: number }[]
      : lines.map(l => ({ handle: l.handle, qty: l.qty }));
    const rows = src.map(s => { const b = byHandle(s.handle); return b ? { ...s, title: b.title, price: Number(b.variants[0].price), available: b.available, b } : null; }).filter(Boolean) as Row[];
    return { rows, buyNow: !!buy };
  }, [buy, lines]);
}

const FIELD_AR: Record<string, string> = { name: 'اكتب الاسم الكامل.', phone: 'اكتب رقم هاتف صحيحًا (أرقام فقط، مثل 0501234567).', email: 'اكتب بريدًا إلكترونيًا صحيحًا.', emirate: 'اختر الإمارة.', city: 'اكتب المدينة أو المنطقة.', address: 'اكتب العنوان بالتفصيل (الشارع، المبنى، الشقة).' };
function validate(c: Customer) {
  const e: Record<string, string> = {};
  if (c.name.trim().length < 2) e.name = FIELD_AR.name;
  if (!/^\+?\d{7,15}$/.test(c.phone.replace(/[\s-]/g, ''))) e.phone = FIELD_AR.phone;
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c.email.trim())) e.email = FIELD_AR.email;
  if (!EMIRATES.includes(c.emirate)) e.emirate = FIELD_AR.emirate;
  if (c.city.trim().length < 2) e.city = FIELD_AR.city;
  if (c.address.trim().length < 5) e.address = FIELD_AR.address;
  return e;
}

function TestBanner() {
  return <p data-testid="test-banner" className="flex items-start gap-2 rounded-2xl border border-[var(--accent)] bg-[var(--accent-subtle)] p-3 text-[.95rem] font-semibold text-[var(--text-primary)]"><FlaskConical size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--accent)]" />وضع الدفع التجريبي: لن يُخصم أي مبلغ. استخدم بطاقة اختبار مثل 4242 4242 4242 4242.</p>;
}

export default function Checkout() {
  const { rows, buyNow } = useItems();
  const [note, setNote] = useStored<string>('alcode-note', '');
  const [cust, setCust] = useStored<Customer>('alcode-customer', { name: '', phone: '', email: '', emirate: '', city: '', address: '' });
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false); const [res, setRes] = useState<CreateResult | null>(null); const [fail, setFail] = useState('');
  const [back, setBack] = useState<'' | 'cancelled' | 'failed'>('');
  const hp = useRef<HTMLInputElement>(null); const errRef = useRef<HTMLDivElement>(null);
  useEffect(() => { const q = new URLSearchParams(location.search); setBack(q.get('cancelled') ? 'cancelled' : q.get('failed') ? 'failed' : ''); }, []);
  const ok = rows.filter(r => r.available); const sub = ok.reduce((s, r) => s + r.price * r.qty, 0);
  const set = (k: keyof Customer) => (e: { target: { value: string } }) => { setCust(c => ({ ...c, [k]: e.target.value })); if (errs[k]) setErrs(x => { const y = { ...x }; delete y[k]; return y; }); };

  async function submit(e: FormEvent) {
    e.preventDefault(); setFail('');
    const v = validate(cust); setErrs(v);
    if (Object.keys(v).length) { setTimeout(() => (document.getElementById(`f-${Object.keys(v)[0]}`) as HTMLElement | null)?.focus(), 0); return; }
    setBusy(true);
    const r = await createCheckout({ items: ok.map(r => ({ handle: r.handle, qty: r.qty })), customer: { ...cust, phone: cust.phone.replace(/[\s-]/g, '') }, note, website: hp.current?.value || '', base: BASE });
    setBusy(false);
    if (r.order_id) try { localStorage.setItem(LAST, JSON.stringify({ o: r.order_id, t: r.token, label: r.label, fromCart: !buyNow })); } catch {}
    if (r.error === 'validation' && r.fields) { const m: Record<string, string> = {}; for (const k of Object.keys(r.fields)) m[k] = FIELD_AR[k] || 'تحقق من هذا الحقل.'; setErrs(m); return; }
    if (r.error === 'unavailable') { setFail('بعض الكتب لم تعد متوفرة. ارجع إلى السلة وحدّثها.'); return; }
    if (r.error === 'payment_provider') { setRes(r); setFail('تعذّر فتح صفحة الدفع الآن، ولم يُخصم أي مبلغ (مرجع المحاولة: ' + r.label + '). حاول مرة أخرى بعد قليل أو راسلنا.'); return; }
    if (r.error || !r.order_id) { setFail('تعذّر إنشاء الطلب. تحقق من الاتصال وحاول مرة أخرى.'); return; }
    setRes(r);
    if (r.payment && !ZIINA_EMBED) location.assign(r.payment.redirect_url);
  }

  useEffect(() => { if (fail) errRef.current?.focus(); }, [fail]);
  // Embedded checkout events (only when Ziina has approved the domain).
  useEffect(() => {
    if (!res?.payment || !ZIINA_EMBED) return;
    const on = (ev: MessageEvent) => {
      const f = document.getElementById('ziina-checkout') as HTMLIFrameElement | null;
      if (ev.origin !== 'https://pay.ziina.com' || ev.source !== f?.contentWindow || ev.data?.type !== 'ZIINA_PAYMENT_STATUS_CHANGE') return;
      const st = ev.data?.data?.status;
      if (st === 'COMPLETED') location.assign(`${BASE}checkout/success/?o=${res.order_id}&t=${res.token}`);
      if (st === 'FAILED') setFail('لم يكتمل الدفع. يمكنك المحاولة مرة أخرى بالبطاقة نفسها أو بطاقة أخرى.');
      if (st === 'CANCELED') setFail('أُلغي الدفع. طلبك محفوظ بانتظار الدفع.');
    };
    addEventListener('message', on); return () => removeEventListener('message', on);
  }, [res]);

  const fieldCls = (k: string) => `field-input${errs[k] ? ' field-bad' : ''}`;
  const F = ({ k, label, children, hint }: any) => <div className={k === 'address' ? 'sm:col-span-2' : ''}>
    <label htmlFor={`f-${k}`} className="field-label">{label} <span aria-hidden="true" className="text-[var(--accent)]">*</span></label>{children}
    {hint && !errs[k] && <p id={`h-${k}`} className="mt-1 text-sm text-[var(--text-muted)]">{hint}</p>}
    {errs[k] && <p id={`e-${k}`} className="field-err mt-1 text-sm font-semibold" role="alert">{errs[k]}</p>}</div>;
  const aria = (k: string) => ({ id: `f-${k}`, 'aria-invalid': !!errs[k] || undefined, 'aria-describedby': errs[k] ? `e-${k}` : undefined, className: fieldCls(k) });

  return <main id="main">
    <PageHead kicker="المتجر" title="إتمام الطلب" desc="بيانات التوصيل ثم الدفع الآمن عبر Ziina." />
    <div className="mx-auto max-w-[1100px] px-4 pt-8 sm:px-6">
      {back && <div data-testid="back-notice" role="status" className="mb-5 flex items-start gap-2 rounded-2xl border border-[var(--border-strong)] bg-[var(--card)] p-4"><AlertTriangle size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--accent)]" /><p>{back === 'cancelled' ? 'ألغيت الدفع ولم يُخصم أي مبلغ. يمكنك مراجعة البيانات والمحاولة مرة أخرى.' : 'لم يكتمل الدفع. يمكنك المحاولة مرة أخرى بالبطاقة نفسها أو بطاقة أخرى.'}</p></div>}
      {ok.length === 0 && !res ? <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 text-center"><p className="text-lg">لا توجد كتب لإتمام طلبها.</p><Link to="books/" className="ink-btn mt-5">تصفّح الكتب</Link></div> :
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <section aria-labelledby="ship-h">
          <TestBanner />
          {res?.payment && ZIINA_EMBED ? <div data-testid="pay-embed" className="mt-5 rounded-3xl border border-[var(--border-strong)] bg-[var(--card)] p-4">
              <h2 id="ship-h" className="text-xl">الدفع — طلب رقم <span dir="ltr">{res.label}</span></h2>
              <iframe id="ziina-checkout" title="نموذج الدفع الآمن من Ziina" src={`${res.payment.embedded_url}${res.payment.embedded_url.includes('?') ? '&' : '?'}version=v1&locale=ar`} allow="payment" className="mx-auto mt-4 block h-[820px] w-full max-w-[450px] rounded-2xl border-0 bg-white" />
              <p className="mt-3 text-center text-sm text-[var(--text-muted)]">لا يظهر نموذج الدفع؟ <a href={res.payment.redirect_url} className="font-semibold text-[var(--accent)] underline">افتح صفحة الدفع الآمنة</a></p></div>
          : res?.payment ? <div data-testid="pay-redirect" role="status" className="mt-5 rounded-3xl border border-[var(--border-strong)] bg-[var(--card)] p-6 text-center"><Loader2 size={28} aria-hidden="true" className="spin mx-auto text-[var(--accent)]" />
              <h2 id="ship-h" className="mt-3 text-xl">جارٍ تحويلك إلى صفحة الدفع الآمنة من Ziina…</h2><p className="mt-2 text-[var(--text-secondary)]">رقم طلبك <b dir="ltr">{res.label}</b>.</p>
              <a href={res.payment.redirect_url} className="store-btn mt-4"><Lock size={18} aria-hidden="true" />متابعة إلى الدفع<ExternalLink size={16} aria-hidden="true" /></a></div>
          : res?.stub ? <div data-testid="stub" role="status" className="mt-5 rounded-3xl border border-[var(--border-strong)] bg-[var(--card)] p-6"><h2 id="ship-h" className="text-xl">حُفظ طلبك برقم <span dir="ltr">{res.label}</span></h2><p className="mt-2 text-[var(--text-secondary)]">بوابة الدفع غير مفعّلة بعد، لذلك بقي الطلب بانتظار الدفع.</p><Link to={`checkout/success/?o=${res.order_id}&t=${res.token}`} className="ink-btn mt-4">عرض حالة الطلب</Link></div>
          : <form noValidate onSubmit={submit} data-testid="checkout-form" className="mt-5 rounded-3xl border border-[var(--border-strong)] bg-[var(--card)] p-5 sm:p-6" aria-describedby="req-note">
            <h2 id="ship-h" className="flex items-center gap-2 text-xl"><Truck size={22} aria-hidden="true" className="text-[var(--accent)]" />بيانات التوصيل</h2>
            <p id="req-note" className="mt-1 text-sm text-[var(--text-muted)]">الحقول المعلّمة بـ * مطلوبة. التوصيل داخل دولة الإمارات.</p>
            {fail && <div ref={errRef} tabIndex={-1} data-testid="checkout-error" role="alert" className="field-errbox mt-4 rounded-2xl p-4 font-semibold">{fail}</div>}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {F({ k: 'name', label: 'الاسم الكامل', children: <input {...aria('name')} autoComplete="name" value={cust.name} onChange={set('name')} maxLength={120} /> })}
              {F({ k: 'phone', label: 'رقم الهاتف', hint: 'للتواصل بشأن التوصيل.', children: <input {...aria('phone')} type="tel" inputMode="tel" dir="ltr" autoComplete="tel" placeholder="05X XXX XXXX" value={cust.phone} onChange={set('phone')} maxLength={20} /> })}
              {F({ k: 'email', label: 'البريد الإلكتروني', hint: 'لتأكيد الطلب.', children: <input {...aria('email')} type="email" dir="ltr" autoComplete="email" placeholder="name@example.com" value={cust.email} onChange={set('email')} maxLength={200} /> })}
              {F({ k: 'emirate', label: 'الإمارة', children: <select {...aria('emirate')} autoComplete="address-level1" value={cust.emirate} onChange={set('emirate')}><option value="">اختر الإمارة</option>{EMIRATES.map(x => <option key={x}>{x}</option>)}</select> })}
              {F({ k: 'city', label: 'المدينة / المنطقة', children: <input {...aria('city')} autoComplete="address-level2" value={cust.city} onChange={set('city')} maxLength={80} /> })}
              {F({ k: 'address', label: 'العنوان التفصيلي', hint: 'الشارع، رقم المبنى أو الفيلا، الشقة، أي علامة مميزة.', children: <textarea {...aria('address')} rows={2} autoComplete="street-address" value={cust.address} onChange={set('address')} maxLength={400} /> })}
              <div className="sm:col-span-2"><label htmlFor="f-note" className="field-label">ملاحظة أو إهداء (اختياري)</label><textarea id="f-note" data-testid="co-note" className="field-input" rows={2} value={note} onChange={e => setNote(e.target.value)} maxLength={500} placeholder="مثال: هدية إلى … مع عبارة إهداء" /></div>
              <input ref={hp} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
            </div>
            <button type="submit" data-testid="pay" disabled={busy} className="store-btn mt-6 w-full justify-center !py-3 text-lg disabled:opacity-60">{busy ? <Loader2 size={18} aria-hidden="true" className="spin" /> : <Lock size={18} aria-hidden="true" />}{busy ? 'جارٍ إنشاء الطلب…' : `ادفع ${fmtPrice(sub + SHIP)} بأمان`}</button>
            <p className="mt-3 flex items-start gap-2 text-sm text-[var(--text-muted)]"><ShieldCheck size={17} aria-hidden="true" className="mt-0.5 shrink-0" />الدفع عبر Ziina بالبطاقة أو Apple Pay أو Google Pay. لا نرى بيانات بطاقتك ولا نحفظها.</p>
          </form>}
          {fail && res?.error === 'payment_provider' && <p className="mt-3 text-sm">للمساعدة: <a href={`mailto:${EMAIL}`} dir="ltr" className="font-semibold text-[var(--accent)] underline">{EMAIL}</a></p>}
        </section>
        <aside aria-label="ملخص الطلب" data-testid="co-summary" className="h-fit rounded-3xl border border-[var(--border-strong)] bg-[var(--card)] p-6 lg:sticky lg:top-24">
          <h2 className="text-xl">ملخص الطلب{buyNow && <span className="chip ms-2 align-middle">شراء مباشر</span>}</h2>
          <ul className="mt-4 grid gap-3">{ok.map(r => <li key={r.handle} className="grid grid-cols-[52px_1fr_auto] items-center gap-3"><div className="w-[52px]"><Cover b={r.b} /></div><div className="min-w-0"><p className="clamp-2 font-semibold leading-snug">{r.title}</p><p className="text-sm text-[var(--text-muted)]">الكمية {r.qty}</p></div><span className="font-bold">{fmtPrice(r.price * r.qty)}</span></li>)}</ul>
          <dl className="mt-4 grid grid-cols-[1fr_auto] gap-y-2 border-t border-[var(--border)] pt-3"><dt>المجموع الفرعي</dt><dd data-testid="co-subtotal">{fmtPrice(res ? fils(res.subtotal_fils) : sub)}</dd><dt>الشحن (ثابت)</dt><dd data-testid="co-shipping">{fmtPrice(SHIP)}</dd><dt>الضريبة</dt><dd>لا توجد</dd><dt className="border-t border-[var(--border)] pt-2 font-bold">المجموع</dt><dd data-testid="co-total" className="border-t border-[var(--border)] pt-2 text-xl font-bold">{fmtPrice(res ? fils(res.total_fils) : sub + SHIP)}</dd></dl>
          <p className="mt-3 text-sm text-[var(--text-muted)]">يُحسب المبلغ النهائي على خادم المتجر من أسعار الكتب المعتمدة.</p>
          {!buyNow && <Link to="cart/" className="ghost-btn mt-4 w-full justify-center"><ArrowRight size={18} aria-hidden="true" />تعديل السلة</Link>}
        </aside>
      </div>}
    </div>
  </main>;
}

export function CheckoutSuccess() {
  const [q, setQ] = useState<{ o: string; t: string } | null>(null); const [d, setD] = useState<any>(null); const [miss, setMiss] = useState(false);
  const { clear } = useCart(); const [, setNote] = useStored<string>('alcode-note', '');
  useEffect(() => { const p = new URLSearchParams(location.search); const o = p.get('o') || '', t = p.get('t') || ''; if (o && t) setQ({ o, t }); else setMiss(true); }, []);
  useEffect(() => {
    if (!q) return; let n = 0, stop = false;
    const tick = async () => { const r = await orderStatus(q.o, q.t); if (stop) return; if (!r) { setMiss(true); return; } setD(r);
      if (r.payment_status === 'completed') { try { const last = JSON.parse(localStorage.getItem(LAST) || 'null'); if (last?.o === q.o && last.fromCart) { clear(); setNote(''); } } catch {} return; }
      if (['failed', 'canceled'].includes(r.payment_status) || ++n > 15) return; setTimeout(tick, 2000); };
    tick(); return () => { stop = true; };
  }, [q]);
  const paid = d?.payment_status === 'completed';
  return <main id="main">
    <PageHead kicker="المتجر" title={paid ? 'شكرًا لطلبك' : 'حالة الطلب'} />
    <div className="mx-auto max-w-[760px] px-4 pt-8 sm:px-6">
      {miss ? <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 text-center"><p className="text-lg">لم نعثر على هذا الطلب.</p><p className="mt-2 text-[var(--text-secondary)]">راسلنا على <a href={`mailto:${EMAIL}`} dir="ltr" className="font-semibold text-[var(--accent)] underline">{EMAIL}</a> مع رقم الطلب.</p></div>
      : !d ? <p role="status" className="flex items-center gap-2"><Loader2 size={20} aria-hidden="true" className="spin" />جارٍ التحقق من الدفع…</p>
      : <section data-testid="order-result" aria-live="polite" className="rounded-3xl border border-[var(--border-strong)] bg-[var(--card)] p-6">
          {d.test && <TestBanner />}
          <div className="mt-4 flex items-center gap-3">{paid ? <CheckCircle2 size={36} aria-hidden="true" className="shrink-0 text-[var(--success,#2f7d4f)]" /> : <AlertTriangle size={32} aria-hidden="true" className="shrink-0 text-[var(--accent)]" />}
            <div><p className="text-sm text-[var(--text-muted)]">رقم الطلب</p><p data-testid="order-no" dir="ltr" className="text-right text-3xl font-bold tracking-wide">{d.label}</p></div></div>
          <p className="mt-4 text-lg">{paid ? `شكرًا ${d.name}، تم استلام الدفع وطلبك قيد التجهيز.` : d.payment_status === 'failed' ? 'لم يكتمل الدفع.' : d.payment_status === 'canceled' ? 'أُلغي الدفع ولم يُخصم أي مبلغ.' : 'لم يُؤكَّد الدفع بعد. ستتحدث هذه الصفحة تلقائيًا.'}</p>
          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2"><dt className="text-[var(--text-muted)]">حالة الطلب</dt><dd data-testid="order-status" className="font-semibold">{STATUS_AR[d.status] || d.status}</dd><dt className="text-[var(--text-muted)]">الدفع</dt><dd data-testid="pay-status" className="font-semibold">{PAY_AR[d.payment_status] || d.payment_status}</dd><dt className="text-[var(--text-muted)]">التوصيل إلى</dt><dd>{d.emirate}، {d.city}</dd></dl>
          <ul className="mt-5 grid gap-2 border-t border-[var(--border)] pt-4">{d.items.map((i: any) => <li key={i.handle} className="flex justify-between gap-3"><span>{i.title} × {i.qty}</span><span className="font-semibold">{fmtPrice(fils(i.line_fils))}</span></li>)}
            <li className="flex justify-between"><span>الشحن</span><span>{fmtPrice(fils(d.shipping_fils))}</span></li><li className="flex justify-between border-t border-[var(--border)] pt-2 text-lg font-bold"><span>المجموع</span><span data-testid="order-total">{fmtPrice(fils(d.total_fils))}</span></li></ul>
          <p className="mt-4 flex items-start gap-2 text-sm text-[var(--text-muted)]"><Mail size={16} aria-hidden="true" className="mt-0.5 shrink-0" />{d.email_sent ? 'أرسلنا تأكيد الطلب إلى بريدك الإلكتروني.' : `احتفظ برقم الطلب. للاستفسار راسلنا على ${EMAIL}.`}</p>
          <div className="mt-5 flex flex-wrap gap-3"><Link to="books/" className="ink-btn">متابعة التسوق</Link>{!paid && d.payment_status !== 'completed' && <Link to="checkout/" className="ghost-btn">العودة إلى إتمام الطلب</Link>}</div>
        </section>}
    </div>
  </main>;
}
