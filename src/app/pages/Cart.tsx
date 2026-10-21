import { Minus, Plus, Trash2, Lock } from 'lucide-react';
import { Link } from '../router';
import { byHandle, fmtPrice, permalink } from '../data';
import { useCart, MAXQ } from '../store';
import { Cover, PageHead } from '../ui';
export default function Cart() {
  const { lines, setQty, remove, clear } = useCart();
  const rows = lines.map(l => { const b = byHandle(l.handle); const v = b?.variants.find(x => x.id === l.id); return b && v ? { l, b, v } : null; }).filter(Boolean) as any[];
  const total = rows.reduce((s, r) => s + Number(r.v.price) * r.l.qty, 0);
  const ok = rows.filter(r => r.v.available);
  return <main id="main">
    <PageHead kicker="المتجر" title="سلة التسوق" />
    <div className="mx-auto max-w-[1100px] px-4 pt-8 sm:px-6">
      {rows.length === 0 ? <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 text-center"><p className="text-lg">سلتك فارغة.</p><Link to="books/" className="ink-btn mt-5">تصفّح الكتب</Link></div> :
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
          <dl className="mt-4 grid grid-cols-[1fr_auto] gap-y-2"><dt>عدد النسخ</dt><dd>{rows.reduce((s, r) => s + r.l.qty, 0)}</dd><dt className="font-bold">المجموع</dt><dd className="text-xl font-bold">{fmtPrice(total)}</dd></dl>
          <p className="mt-3 text-sm text-[var(--text-muted)]">تُحسب رسوم الشحن والضرائب (إن وُجدت) في صفحة الدفع على متجر الكود.</p>
          {ok.length > 0 && <a href={permalink(ok.map(r => ({ id: r.l.id, qty: r.l.qty })))} className="store-btn mt-5 w-full justify-center !py-3 text-lg" rel="noopener"><Lock size={18} aria-hidden="true" />إتمام الشراء</a>}
          <p className="mt-3 text-sm text-[var(--text-muted)]">ستنتقل إلى سلة متجر الكود الرسمي (Shopify) لإتمام الدفع بأمان.</p>
          <button type="button" className="ghost-btn mt-4 w-full justify-center" onClick={clear}>إفراغ السلة</button>
        </aside>
      </div>}
    </div>
  </main>;
}
