// Second batch: back-to-top, "/" search shortcut, empty-state art, 3D book with spine, qty + sticky buy bar, bundle from real related books.
import { useEffect, useRef, useState } from 'react';
import { ArrowUp, Minus, Plus, ShoppingCart, Zap, Check, PackagePlus } from 'lucide-react';
import { Link } from './router';
import { asset, fmtPrice, permalink, variantOf, related, type Book } from './data';
import { useCart, MAXQ } from './store';
import { flyToCart, SHIPPING } from './extras';
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { const on = () => setShow(scrollY > 900); on(); addEventListener('scroll', on, { passive: true }); return () => removeEventListener('scroll', on); }, []);
  return <button type="button" onClick={() => scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' })} aria-label="العودة إلى أعلى الصفحة" inert={!show}
    className={`to-top tool-btn quick-btn fixed bottom-5 left-5 z-30 !size-12 ${show ? 'on' : ''}`}><ArrowUp size={22} aria-hidden="true" /></button>;
}
/** "/" focuses search (ignored while typing in a field). */
export function useSlashSearch(open: () => void) {
  useEffect(() => { const on = (e: KeyboardEvent) => { const t = e.target as HTMLElement; if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey || /input|textarea|select/i.test(t.tagName) || t.isContentEditable) return; e.preventDefault(); open(); };
    addEventListener('keydown', on); return () => removeEventListener('keydown', on); }, []);
}
/** Simple line illustration for empty cart / wishlist (pure SVG, theme colours). */
export function EmptyArt({ kind }: { kind: 'cart' | 'wish' }) {
  return <svg viewBox="0 0 220 150" className="empty-art mx-auto h-36 w-auto" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 128h180" opacity=".35" />
    <g className="empty-books"><rect x="60" y="54" width="26" height="74" rx="3" /><rect x="90" y="40" width="22" height="88" rx="3" /><path d="M118 58l22-6 18 70-22 6z" /><path d="M66 70h14M95 56h12M66 112h14M95 112h12" opacity=".6" /></g>
    {kind === 'cart' ? <g className="text-[var(--accent)]" stroke="currentColor"><path d="M150 30h10l8 40h34l6-28h-44" /><circle cx="172" cy="80" r="4" /><circle cx="196" cy="80" r="4" /></g>
      : <path className="text-[var(--accent)]" stroke="currentColor" d="M176 34c-6-8-20-6-20 6 0 10 20 22 20 22s20-12 20-22c0-12-14-14-20-6z" />}
  </svg>;
}
/** Book shown as a 3D object with spine; turns on hover / tap to reveal the spine. */
export function Book3D({ b }: { b: Book }) {
  const im = b.images[0] as any; const [turn, setTurn] = useState(false);
  if (!im?.cut || !im.flat) return null; // only flat front covers make a convincing 3D book
  return <button type="button" aria-pressed={turn} onClick={() => setTurn(t => !t)} aria-label={turn ? 'إظهار واجهة الكتاب' : 'تدوير الكتاب لرؤية الكعب'} className="book3d-wrap mx-auto block">
    <span className={`book3d ${turn ? 'turn' : ''}`}>
      <img src={asset(im.cutSm)} alt="" className="book3d-front" loading="lazy" decoding="async" />
      <span className="book3d-spine"><span className="clamp-2">{b.title}</span><span className="text-[.6rem] opacity-80">الكود</span></span>
      <span className="book3d-pages" />
    </span>
    <span className="mt-3 block text-center text-sm font-semibold text-[var(--text-muted)]">{turn ? 'اضغط لإظهار الواجهة' : 'مرّر أو اضغط لتدوير الكتاب'}</span>
  </button>;
}
export function Qty({ q, set, label }: { q: number; set: (n: number) => void; label: string }) {
  return <div className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--card)] p-1" role="group" aria-label={`الكمية: ${label}`}>
    <button type="button" className="qty-btn" disabled={q <= 1} onClick={() => set(q - 1)} aria-label="إنقاص الكمية"><Minus size={15} aria-hidden="true" /></button>
    <span className="w-7 text-center font-bold tabular-nums" aria-live="polite">{q}</span>
    <button type="button" className="qty-btn" disabled={q >= MAXQ} onClick={() => set(q + 1)} aria-label="زيادة الكمية"><Plus size={15} aria-hidden="true" /></button>
  </div>;
}
/** Quantity + add/buy row; on phones a sticky bar appears once the main buttons scroll away. */
export function BuyRow({ b }: { b: Book }) {
  const v = variantOf(b); const { add } = useCart(); const [q, setQ] = useState(1); const [done, setDone] = useState(false); const ref = useRef<HTMLDivElement>(null); const [stick, setStick] = useState(false);
  useEffect(() => { let raf = 0; const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { const el = ref.current; if (el) setStick(el.getBoundingClientRect().bottom < 0); }); }; on(); addEventListener('scroll', on, { passive: true }); return () => { removeEventListener('scroll', on); cancelAnimationFrame(raf); }; }, []);
  if (!b.available) return null;
  const go = (e: React.MouseEvent) => { add(v.id, b.handle, q); flyToCart(e.currentTarget); setDone(true); setTimeout(() => setDone(false), 1600); };
  return <>
    <div ref={ref} className="mt-6 flex flex-wrap items-center gap-3">
      <Qty q={q} set={setQ} label={b.title} />
      <button type="button" className="ink-btn" onClick={go} data-testid="add-qty">{done ? <Check size={18} aria-hidden="true" /> : <ShoppingCart size={18} aria-hidden="true" />}{done ? 'أُضيف إلى السلة' : 'أضف إلى السلة'}<span className="sr-only" aria-live="polite">{done ? `أُضيف ${q} من «${b.title}» إلى السلة` : ''}</span></button>
      <a href={permalink([{ id: v.id, qty: q }])} className="store-btn !px-5 !py-3" rel="noopener" data-testid="buy-now"><Zap size={18} aria-hidden="true" />اشترِ الآن <span className="text-sm font-semibold">(+ شحن 25 د.إ.)</span></a>
    </div>
    <div className={`buy-bar fixed inset-x-0 bottom-0 z-30 border-t border-[var(--border)] bg-[var(--background)] px-3 py-2 md:hidden ${stick ? 'on' : ''}`} inert={!stick}>
      <div className="flex items-center gap-2"><div className="min-w-0 flex-1"><p className="clamp-1 text-sm font-semibold">{b.title}</p><p className="text-sm"><span className="font-bold">{fmtPrice(b.price * q)}</span> <span className="text-[var(--text-muted)]">+ شحن 25 د.إ.</span></p></div>
        <Qty q={q} set={setQ} label={b.title} />
        <button type="button" tabIndex={stick ? 0 : -1} className="ink-btn !px-3 !py-2" onClick={go} aria-label={`أضف ${q} إلى السلة`}><ShoppingCart size={18} aria-hidden="true" /></button></div>
    </div>
  </>;
}
/** Bundle: this book + its 2 most related in-stock books (same category/tags), totals from real prices. */
export function Bundle({ b }: { b: Book }) {
  const { add } = useCart(); const [done, setDone] = useState(false);
  const items = [b, ...related(b, 8).filter(x => x.available)].filter(x => x.available).slice(0, 3);
  if (items.length < 3) return null;
  const sub = items.reduce((s, x) => s + x.price, 0);
  return <section aria-labelledby="bundle" className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
    <h2 id="bundle" className="flex items-center gap-2 text-xl sm:text-2xl"><PackagePlus size={22} aria-hidden="true" className="text-[var(--accent)]" />اقتنِها معًا</h2>
    <p className="mt-1 text-sm text-[var(--text-muted)]">كتب من التصنيف نفسه. الشحن ثابت 25 د.إ. للطلب كله.</p>
    <ul className="mt-4 flex flex-wrap items-center gap-3">{items.map((x, i) => <li key={x.handle} className="flex items-center gap-3">{i > 0 && <span aria-hidden="true" className="text-2xl font-bold text-[var(--accent)]">+</span>}
      <Link to={`book/${x.handle}/`} className="flex w-28 flex-col items-center gap-1 text-center text-sm hover:text-[var(--accent)]"><img src={asset((x.images[0] as any)?.cutSm || x.images[0]?.sm)} alt="" width={110} height={140} loading="lazy" className="book-img h-32 w-auto object-contain" /><span className="clamp-2">{x.title}</span><span className="font-bold">{fmtPrice(x.price)}</span></Link></li>)}</ul>
    <dl className="mt-4 grid max-w-xs grid-cols-[1fr_auto] gap-y-1"><dt>مجموع الكتب</dt><dd data-testid="bundle-sub">{fmtPrice(sub)}</dd><dt>الشحن</dt><dd>{fmtPrice(SHIPPING)}</dd><dt className="font-bold">المجموع</dt><dd className="font-bold" data-testid="bundle-total">{fmtPrice(sub + SHIPPING)}</dd></dl>
    <div className="mt-4 flex flex-wrap gap-2">
      <button type="button" className="ink-btn" onClick={e => { items.forEach(x => add(variantOf(x).id, x.handle)); flyToCart(e.currentTarget); setDone(true); setTimeout(() => setDone(false), 1600); }}>{done ? <Check size={18} aria-hidden="true" /> : <ShoppingCart size={18} aria-hidden="true" />}{done ? 'أُضيفت الكتب الثلاثة' : 'أضف الثلاثة إلى السلة'}</button>
      <a href={permalink(items.map(x => ({ id: variantOf(x).id, qty: 1 })))} rel="noopener" className="store-btn" data-testid="bundle-buy"><Zap size={18} aria-hidden="true" />اشترِ الثلاثة الآن</a>
    </div>
  </section>;
}
