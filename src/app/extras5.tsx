import { Shuffle, Search, ShoppingCart, ShieldCheck } from 'lucide-react';
import { Link, navigate } from './router';
import { books, collections, asset, fmtPrice, type Book } from './data';
/** Free Streamline illustrations (streamlinehq.com), served as static SVG and lazy-loaded. */
export function Illo({ name, className = '' }: { name: 'reading' | 'inspired'; className?: string }) {
  return <img src={asset(`art/${name}.svg`)} alt="" aria-hidden="true" width={240} height={240} loading="lazy" decoding="async" className={`illo mx-auto h-40 w-auto ${className}`} />;
}
const sm = (b: Book) => b.images[0]?.sm || '';
/** Collection shelves as cards with a fan of real covers from that collection. */
export function ShelfCards() {
  return <section aria-labelledby="cats" className="mx-auto max-w-[1320px] px-4 pt-12 sm:px-6">
    <h2 id="cats" className="sec">تصفّح حسب التصنيف</h2>
    <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{collections.map(c => {
      const bs = books.filter(b => b.collections.includes(c.handle) && b.images[0]).slice(0, 3);
      const min = Math.min(...books.filter(b => b.collections.includes(c.handle)).map(b => b.price));
      return <li key={c.handle}><Link to={`collection/${c.handle}/`} className="shelf-card group block h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4">
        <div className="fan relative mx-auto h-40 w-full" aria-hidden="true">{bs.map((b, i) => <span key={b.handle} className="cover-plate fan-plate" style={{ ['--i' as any]: i - (bs.length - 1) / 2 }}><span className="cover-mat"><img src={asset(sm(b))} alt="" width={b.images[0].w} height={b.images[0].h} loading="lazy" decoding="async" className={`book-img${b.images[0].w / b.images[0].h < 0.98 ? ' fit-fill' : ''}`} /></span></span>)}</div>
        <h3 className="mt-3 text-lg group-hover:text-[var(--accent)]">{c.title}</h3>
        <p className="text-sm text-[var(--text-muted)]">{c.count} كتب{Number.isFinite(min) ? ` · من ${fmtPrice(min)}` : ''}</p>
      </Link></li>;
    })}</ul>
  </section>;
}
/** Picks a random available book and opens it. */
export function SurpriseButton({ className = '' }: { className?: string }) {
  return <button type="button" className={`ghost-btn ${className}`} onClick={() => { const a = books.filter(b => b.available); const b = a[Math.floor(Math.random() * a.length)]; if (b) navigate(`book/${b.handle}/`); }}><Shuffle size={18} aria-hidden="true" />اقترح عليّ كتابًا</button>;
}
/** Three-step ordering explainer (facts only: Shopify checkout, flat 25 AED shipping). */
export function HowToOrder() {
  const steps = [{ I: Search, t: 'اختر كتابك', d: 'تصفّح التصنيفات أو ابحث بالعنوان أو الموضوع.' }, { I: ShoppingCart, t: 'أضفه إلى السلة', d: 'عدّل الكميات وأضف ملاحظة للطلب إن أردت.' }, { I: ShieldCheck, t: 'ادفع بأمان', d: 'يتم الدفع على متجر الكود الرسمي عبر Shopify، والشحن 25 د.إ.' }];
  return <section aria-labelledby="how-h" className="mx-auto max-w-[1320px] px-4 pt-14 sm:px-6">
    <div className="how-panel grid items-center gap-6 border border-[var(--border)] bg-[var(--surface-raised)] p-6 md:grid-cols-[1fr_220px]">
      <div><h2 id="how-h" className="sec">كيف تطلب؟</h2>
        <ol className="mt-5 grid gap-4 sm:grid-cols-3">{steps.map((s, i) => <li key={i} className="step flex gap-3"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)]"><s.I size={20} aria-hidden="true" /></span><div><p className="font-bold">{i + 1}. {s.t}</p><p className="text-[var(--text-secondary)]">{s.d}</p></div></li>)}</ol>
        <div className="mt-5 flex flex-wrap gap-3"><Link to="books/" className="ink-btn">ابدأ التصفّح</Link><SurpriseButton /><Link to="help/" className="ghost-btn">الأسئلة الشائعة</Link></div>
      </div>
      <Illo name="reading" className="hidden md:block !h-52" />
    </div>
  </section>;
}
/** Real discount from Shopify compare-at price. */
export function SaveBadge({ price, compare }: { price: number; compare?: string | null }) {
  const c = Number(compare); if (!c || c <= price) return null;
  return <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-sm font-bold text-[var(--accent-foreground)]">وفّر {fmtPrice(c - price)} ({Math.round((1 - price / c) * 100)}%)</span>;
}
