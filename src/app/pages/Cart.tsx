import { EmptyArt } from '../extras2';
import { Minus, Plus, Trash2, Lock } from 'lucide-react';
import { Link } from '../router';
import { byHandle, fmtPrice, cartCheckoutHref } from '../data';
import { useCart, MAXQ, useStored } from '../store';
import { useRecent } from '../extras';
import { EMAIL, CHECKOUT } from '../config';
import { Mail, ArrowRight, Gift } from 'lucide-react';
import { TrustStrip } from '../extras3';
import { Cover, PageHead } from '../ui';
export default function Cart() {
  const { lines, setQty, remove, clear } = useCart();
  const rows = lines.map(l => { const b = byHandle(l.handle); const v = b?.variants.find(x => x.id === l.id); return b && v ? { l, b, v } : null; }).filter(Boolean) as any[];
  const total = rows.reduce((s, r) => s + Number(r.v.price) * r.l.qty, 0);
  const ok = rows.filter(r => r.v.available);
  const [note, setNote] = useStored<string>('alcode-note', ''); const rec = useRecent(); const last = rec.list.map(byHandle).find(Boolean);
  const href = (base: string) => CHECKOUT === 'ziina' ? base : note.trim() ? `${base}?note=${encodeURIComponent(note.trim().slice(0, 500))}` : base;
  const SHIP = 25; const ship = rows.length ? SHIP : 0;
  return <main id="main">
    <PageHead kicker="المتجر" title="سلة التسوق" />
    <div className="mx-auto max-w-[1100px] px-4 pt-8 sm:px-6">
      {rows.length === 0 ? <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 text-center"><EmptyArt kind="cart" /><p className="mt-4 text-lg">سلتك فارغة.</p><Link to="books/" className="ink-btn mt-5">تصفّح الكتب</Link><p className="mt-5 text-[var(--text-secondary)]">للاستفسار: <a href={`mailto:${EMAIL}`} dir="ltr" className="font-semibold text-[var(--accent)] underline">{EMAIL}</a></p></div> :
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <ul className="grid gap-3" aria-label="الكتب في السلة">{rows.map(({ l, b, v }) => <li key={l.id} className="grid grid-cols-[84px_1fr] gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3 sm:grid-cols-[100px_1fr]">
          <Link to={`book/${b.handle}/`} aria-label={b.title}><Cover b={b} /></Link>
          <div className="flex min-w-0 flex-col gap-2">
            <h2 className="text-lg leading-snug"><Link to={`book/${b.handle}/`} className="hover:text-[var(--accent)]">{b.title}</Link></h2>
            <p className="text-sm text-[var(--text-muted)]">{fmtPrice(v.price)} للنسخة{!v.available && <span className="chip avail-no ms-2">غير متوفر حاليًا</span>}</p>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2" role="group" aria-label={`كمية «${b.title}»`}>
                <button type="button" className="qty-btn" aria-label="إنقاص الكمية" onClick={() => setQty(l.id, l.qty - 1)}><Minus size={16} /></button>
                <span className="min-w-8 text-center text-lg font-bold" aria-live="polite">{l.qty}</span>
                <button type="button" className="qty-btn" aria-label="زيادة الكمية" disabled={l.qty >= MAXQ} onClick={() => setQty(l.id, l.qty + 1)}><Plus size={16} /></button>
              </div>
              <div className="flex items-center gap-3"><span className="font-bold">{fmtPrice(Number(v.price) * l.qty)}</span><button type="button" className="tool-btn" aria-label={`حذف «${b.title}» من السلة`} onClick={() => remove(l.id)}><Trash2 size={18} /></button></div>
            </div>
          </div>
        </li>)}</ul>
        <aside aria-label="ملخص الطلب" className="h-fit rounded-3xl border border-[var(--border-strong)] bg-[var(--card)] p-6 lg:sticky lg:top-24">
          <h2 className="text-xl">ملخص الطلب</h2>
          <dl className="mt-4 grid grid-cols-[1fr_auto] gap-y-2"><dt>عدد النسخ</dt><dd>{rows.reduce((s, r) => s + r.l.qty, 0)}</dd><dt>المجموع الفرعي</dt><dd data-testid="subtotal">{fmtPrice(total)}</dd><dt>الشحن</dt><dd data-testid="shipping">{fmtPrice(ship)}</dd><dt className="border-t border-[var(--border)] pt-2 font-bold">المجموع</dt><dd data-testid="total" className="border-t border-[var(--border)] pt-2 text-xl font-bold">{fmtPrice(total + ship)}</dd></dl>
          <p className="mt-3 rounded-xl border border-[var(--accent)] bg-[var(--accent-subtle)] p-3 text-[.95rem] font-semibold text-[var(--text-primary)]">رسوم الشحن ثابتة: 25 د.إ. لكل طلب، والمبلغ النهائي الذي تدفعه هو المجموع أعلاه.</p><TrustStrip col />
          <div className="mt-5"><label htmlFor="note" className="field-label flex items-center gap-2"><Gift size={18} aria-hidden="true" className="text-[var(--accent)]" />ملاحظة أو إهداء مع الطلب (اختياري)</label>
            <textarea id="note" data-testid="note" value={note} maxLength={500} onChange={e => setNote(e.target.value)} rows={3} className="field-input mt-1 resize-y" placeholder="مثال: هدية إلى … مع عبارة إهداء" />
            <p className="mt-1 text-sm text-[var(--text-muted)]">تُرسل الملاحظة مع طلبك إلى متجر الكود، ويمكنك تعديلها في صفحة إتمام الطلب.</p></div>
          {ok.length > 0 && <a data-testid="checkout" href={href(cartCheckoutHref(ok.map(r => ({ id: r.l.id, qty: r.l.qty }))))} className="store-btn mt-5 w-full justify-center !py-3 text-lg" rel="noopener"><Lock size={18} aria-hidden="true" />إتمام الشراء</a>}
          <p className="mt-3 text-sm text-[var(--text-muted)]">{CHECKOUT === 'ziina' ? 'تُدخل بيانات التوصيل في الخطوة التالية، ثم تدفع بأمان عبر Ziina (بطاقة أو Apple Pay أو Google Pay).' : 'ستنتقل إلى سلة متجر الكود الرسمي (Shopify) لإتمام الدفع بأمان.'}</p>
          <Link to={last ? `book/${last.handle}/` : 'books/'} data-testid="continue" className="ghost-btn mt-4 w-full justify-center"><ArrowRight size={18} aria-hidden="true" />متابعة التسوق{last ? ` («${last.title.split(/[:،(]/)[0].trim()}»)` : ''}</Link>
          <button type="button" className="ghost-btn mt-3 w-full justify-center" onClick={clear}>إفراغ السلة</button>
          <div data-testid="cart-help" className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-raised)] p-4"><p className="font-bold">تحتاج مساعدة في طلبك؟</p><p className="mt-1 text-[.95rem] leading-7 text-[var(--text-secondary)]">راسلنا على <a href={`mailto:${EMAIL}`} dir="ltr" className="font-semibold text-[var(--accent)] underline underline-offset-4">{EMAIL}</a> أو اطّلع على <Link to="help/" className="font-semibold text-[var(--accent)] underline underline-offset-4">الشحن والأسئلة الشائعة</Link>.</p>
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent('استفسار عن طلب من متجر الكود')}`} className="ink-btn mt-3 !py-2"><Mail size={17} aria-hidden="true" />راسلنا</a></div>
        </aside>
      </div>}
    </div>
  </main>;
}
