import { Heart, ShoppingCart, Check, Eye, X, ChevronLeft, ChevronRight, LayoutGrid, List } from 'lucide-react';
import { Fragment, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Link } from './router';
import { asset, fmtPrice, variantOf, permalink, collectionTitle, type Book } from './data';
import { useCart, useWishlist, useStored } from './store';
import { flyToCart, useRecent } from './extras';
import { byHandle } from './data';

type Img = Book['images'][number] & { cut?: string; cutSm?: string };
const imgOf = (b: Book, i = 0) => b.images[i] as Img | undefined;

/** Pointer-following tilt (≤8deg), tap tilt on touch; CSS vars only, so it's cheap and reduced-motion safe (see .tilt in styles.css). */
function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current; if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const set = (x: number, y: number) => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { el.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`); el.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`); }); };
    const move = (e: PointerEvent) => { if (e.pointerType !== 'mouse') return; const r = el.getBoundingClientRect(); set((e.clientX - r.left) / r.width - .5, (e.clientY - r.top) / r.height - .5); };
    const leave = () => set(0, 0);
    const down = (e: PointerEvent) => { if (e.pointerType === 'mouse') return; const r = el.getBoundingClientRect(); set(((e.clientX - r.left) / r.width - .5) * .6, ((e.clientY - r.top) / r.height - .5) * .6); setTimeout(leave, 450); };
    el.addEventListener('pointermove', move); el.addEventListener('pointerleave', leave); el.addEventListener('pointerdown', down);
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); el.removeEventListener('pointerdown', down); cancelAnimationFrame(raf); };
  }, []);
  return ref;
}

/** Book image without a box: transparent cut-out on the page with a soft drop shadow; original image as fallback. */
export function Cover({ b, i = 0, size = 'sm', eager = false, className = '', float = false }: { b: Book; i?: number; size?: 'sm' | 'lg'; eager?: boolean; className?: string; float?: boolean }) {
  const im = imgOf(b, i); const tilt = useTilt<HTMLDivElement>(); const [loaded, setLoaded] = useState(true); const ir = useRef<HTMLImageElement>(null);
  useEffect(() => { const el = ir.current; if (el && !el.complete) setLoaded(false); }, [b.handle, i, size]);
  if (!im) return <div className={`aspect-[4/5] ${className}`} />;
  const cut = size === 'sm' ? im.cutSm : im.cut; const src = cut || (size === 'sm' ? im.sm : im.src);
  return <div ref={tilt} className={`tilt grid aspect-[4/5] place-items-center ${className}`}>
    <div className={`tilt-in relative grid h-full w-full place-items-center ${float ? 'float' : ''}`} style={float ? { animationDelay: `${(b.handle.length % 7) * -.6}s` } : undefined}>
      {!loaded && <span className="skel absolute inset-[8%] rounded-xl" aria-hidden="true" />}
      <img ref={ir} onLoad={() => setLoaded(true)} onError={() => setLoaded(true)} src={asset(src)} alt={im.alt || b.title} width={im.w} height={im.h} loading={eager ? 'eager' : 'lazy'} decoding="async" {...(eager ? { fetchPriority: 'high' } : {})}
        className={`book-img max-h-full max-w-full object-contain ${cut ? 'is-cut' : 'rounded-xl'}`} />
    </div>
  </div>;
}
export function Availability({ b }: { b: Book }) {
  return b.available ? <span className="chip avail-ok">متوفر</span> : <span className="chip avail-no">نفد من المخزون</span>;
}
export function AddButton({ b, className = '', label = 'أضف إلى السلة', icon = false }: { b: Book; className?: string; label?: string; icon?: boolean }) {
  const { add } = useCart(); const [done, setDone] = useState(false); const v = variantOf(b);
  if (!b.available) return icon ? null : <button type="button" disabled className={`ghost-btn opacity-60 ${className}`}>غير متوفر</button>;
  const go = (e?: React.MouseEvent) => { add(v.id, b.handle); flyToCart(e?.currentTarget ?? null); setDone(true); setTimeout(() => setDone(false), 1600); };
  if (icon) return <button type="button" onClick={go} aria-label={`أضف «${b.title}» إلى السلة`} className={`tool-btn quick-btn ${className}`}>{done ? <Check size={18} aria-hidden="true" /> : <ShoppingCart size={18} aria-hidden="true" />}<span className="sr-only" aria-live="polite">{done ? `أُضيف «${b.title}» إلى السلة` : ''}</span></button>;
  return <button type="button" className={`ink-btn ${className}`} onClick={go}>
    {done ? <Check size={18} aria-hidden="true" /> : <ShoppingCart size={18} aria-hidden="true" />}{done ? 'أُضيف إلى السلة' : label}
    <span className="sr-only" aria-live="polite">{done ? `أُضيف «${b.title}» إلى السلة` : ''}</span>
  </button>;
}
export function WishButton({ b, compact = false, className = '' }: { b: Book; compact?: boolean; className?: string }) {
  const w = useWishlist(); const on = w.has(b.handle);
  return <button type="button" aria-pressed={on} aria-label={on ? `إزالة «${b.title}» من قائمة الأمنيات` : `أضف «${b.title}» إلى قائمة الأمنيات`} onClick={() => w.toggle(b.handle)} className={compact ? `tool-btn quick-btn ${className}` : 'ghost-btn'}>
    <Heart size={18} aria-hidden="true" className={on ? 'fill-[var(--accent)] text-[var(--accent)]' : ''} />{!compact && (on ? 'في قائمة الأمنيات' : 'أضف للأمنيات')}
  </button>;
}

/** Staggered fade-in on scroll. SSR html stays visible; only the client adds the pre-reveal state. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const root = ref.current; if (!root || matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const els = [...root.querySelectorAll<HTMLElement>('[data-reveal]')].filter(e => e.getBoundingClientRect().top > innerHeight);
    els.forEach(e => e.classList.add('pre-reveal'));
    const io = new IntersectionObserver(es => { let k = 0; es.forEach(en => { if (en.isIntersecting) { const el = en.target as HTMLElement; el.style.transitionDelay = `${Math.min(k++, 6) * 70}ms`; el.classList.add('revealed'); io.unobserve(el); } }); }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e)); return () => io.disconnect();
  });
  return ref;
}

export function BookCard({ b, eager = false, list = false, onQuick, quickOpen = false }: { b: Book; eager?: boolean; list?: boolean; onQuick?: () => void; quickOpen?: boolean }) {
  return <article className={`book-card group relative h-full ${list ? 'grid grid-cols-[96px_1fr] items-center gap-4 sm:grid-cols-[120px_1fr_auto]' : 'flex flex-col'}`}>
    <div className="relative">
      <Link to={`book/${b.handle}/`} className="block rounded-2xl" aria-label={b.title} tabIndex={-1}><Cover b={b} eager={eager} float={!list} /></Link>
      {!list && <div className="quick mt-2 flex justify-center gap-2">
        <AddButton b={b} icon /><WishButton b={b} compact />
        {onQuick && <button type="button" onClick={onQuick} aria-expanded={quickOpen} aria-label={`نظرة سريعة على «${b.title}»`} className="tool-btn quick-btn"><Eye size={18} aria-hidden="true" /></button>}
      </div>}
    </div>
    <div className={`flex flex-1 flex-col ${list ? 'gap-1' : 'gap-1.5 px-1 pt-3'}`}>
      <h3 className={`text-[1.02rem] leading-snug ${list ? '' : 'clamp-2 min-h-[2.75em]'}`}><Link to={`book/${b.handle}/`} className="hover:text-[var(--accent)]">{b.title}</Link></h3>
      <p className="clamp-1 text-sm text-[var(--text-muted)]">{b.author}</p>
      <div className="mt-auto flex items-center justify-between gap-2 pt-1">
        <span className="text-lg font-bold text-[var(--text-primary)]">{fmtPrice(b.price)}</span>
        {!b.available && <span className="chip avail-no">نفد</span>}
      </div>
      {list && <p className="clamp-2 hidden text-sm text-[var(--text-secondary)] sm:block">{b.description[0]}</p>}
    </div>
    {list && <div className="col-span-2 flex flex-wrap items-center gap-2 sm:col-span-1">
      <AddButton b={b} className="!px-3 !py-2 text-sm" label="أضف للسلة" /><WishButton b={b} compact />
      {onQuick && <button type="button" onClick={onQuick} aria-expanded={quickOpen} aria-label={`نظرة سريعة على «${b.title}»`} className="tool-btn quick-btn"><Eye size={18} aria-hidden="true" /></button>}
    </div>}
  </article>;
}

/** Inline "quick look": expands inside the grid (no modal). */
function QuickLook({ b, onClose }: { b: Book; onClose: () => void }) {
  const h = useRef<HTMLHeadingElement>(null); const v = variantOf(b);
  useEffect(() => { h.current?.focus({ preventScroll: true }); h.current?.closest('li')?.scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }, [b.handle]);
  return <div className="quicklook grid gap-5 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 sm:grid-cols-[180px_1fr] sm:p-6" onKeyDown={e => e.key === 'Escape' && onClose()}>
    <Cover b={b} size="lg" className="mx-auto w-40 sm:w-full" />
    <div>
      <div className="flex items-start justify-between gap-3"><h3 ref={h} tabIndex={-1} className="text-2xl leading-snug outline-none">{b.title}</h3>
        <button type="button" onClick={onClose} className="tool-btn quick-btn shrink-0" aria-label="إغلاق النظرة السريعة"><X size={18} aria-hidden="true" /></button></div>
      <p className="mt-1 text-[var(--text-secondary)]">{b.author}</p>
      <div className="mt-3 flex flex-wrap items-center gap-3"><span className="text-2xl font-bold">{fmtPrice(b.price)}</span><span className="font-semibold text-[var(--text-secondary)]">+ شحن 25 د.إ.</span><Availability b={b} /></div>
      <div className="desc-ar mt-3 clamp-5">{b.description.slice(0, 2).map((p, k) => <p key={k}>{p}</p>)}</div>
      {b.collections.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{b.collections.map(c => <Link key={c} to={`collection/${c}/`} className="chip">{collectionTitle(c)}</Link>)}</div>}
      <div className="mt-4 flex flex-wrap gap-2"><AddButton b={b} />{b.available && <a href={permalink([{ id: v.id, qty: 1 }])} className="store-btn" rel="noopener">اشترِ الآن</a>}<WishButton b={b} /><Link to={`book/${b.handle}/`} className="ghost-btn">صفحة الكتاب</Link></div>
    </div>
  </div>;
}

export function ViewToggle({ view, setView }: { view: string; setView: (v: 'grid' | 'list') => void }) {
  return <div role="group" aria-label="طريقة العرض" className="inline-flex rounded-xl border border-[var(--border)] bg-[var(--card)] p-1">
    {([['grid', 'شبكة', LayoutGrid], ['list', 'قائمة', List]] as const).map(([v, l, I]) => <button key={v} type="button" aria-pressed={view === v} onClick={() => setView(v)} className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold ${view === v ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'text-[var(--text-secondary)]'}`}><I size={16} aria-hidden="true" />{l}</button>)}
  </div>;
}
export const useView = () => useStored<'grid' | 'list'>('alcode-view', 'grid');

/** Uniform grid with FLIP (motion layout) for filter/sort changes, reveal-on-scroll and inline quick look. */
export function Grid({ items, eager = 0, view = 'grid' }: { items: Book[]; eager?: number; view?: 'grid' | 'list' }) {
  const ref = useReveal<HTMLUListElement>(); const [open, setOpen] = useState<string | null>(null); const [cols, setCols] = useState(4); const rm = useReducedMotion();
  const list = view === 'list';
  useLayoutEffect(() => { const el = ref.current; if (!el) return; const f = () => setCols(list ? 1 : getComputedStyle(el).gridTemplateColumns.split(' ').length || 1); f(); const ro = new ResizeObserver(f); ro.observe(el); return () => ro.disconnect(); }, [list]);
  useEffect(() => { if (open && !items.some(b => b.handle === open)) setOpen(null); }, [items, open]);
  const idx = open ? items.findIndex(b => b.handle === open) : -1;
  const after = idx < 0 ? -1 : Math.min(items.length - 1, Math.floor(idx / cols) * cols + cols - 1);
  const ob = idx >= 0 ? items[idx] : null;
  const t = rm ? { duration: 0 } : { type: 'spring' as const, stiffness: 380, damping: 34 };
  return <ul ref={ref} className={list ? 'grid gap-4' : 'grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4'} data-view={view}>
    <AnimatePresence mode="popLayout" initial={false}>
      {items.map((b, i) => <Fragment key={b.handle}>
        <motion.li layout={!rm} transition={t} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} data-reveal className={list ? 'border-b border-[var(--border)] pb-4' : ''}>
          <BookCard b={b} eager={i < eager} list={list} quickOpen={open === b.handle} onQuick={() => setOpen(open === b.handle ? null : b.handle)} />
        </motion.li>
        {ob && i === after && <motion.li key={'ql-' + ob.handle} layout={!rm} className="col-span-full" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={t}><QuickLook b={ob} onClose={() => setOpen(null)} /></motion.li>}
      </Fragment>)}
    </AnimatePresence>
  </ul>;
}

/** Horizontal scroll-snap row with arrow buttons (RTL aware). */
export function Carousel({ items, label }: { items: Book[]; label: string }) {
  const ref = useRef<HTMLUListElement>(null); const [edge, setEdge] = useState({ s: true, e: false });
  const upd = () => { const el = ref.current; if (!el) return; const x = Math.abs(el.scrollLeft); setEdge({ s: x < 4, e: x + el.clientWidth >= el.scrollWidth - 4 }); };
  useEffect(() => { upd(); const el = ref.current; el?.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd); return () => { el?.removeEventListener('scroll', upd); removeEventListener('resize', upd); }; }, []);
  const go = (d: 1 | -1) => { const el = ref.current; if (!el) return; el.scrollBy({ left: -d * el.clientWidth * .85, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); };
  return <div className="relative">
    <ul ref={ref} aria-label={label} className="carousel -mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-4 pt-4 sm:gap-6">
      {items.map((b, i) => <li key={b.handle} className="w-[44%] shrink-0 snap-start sm:w-[30%] md:w-[23%] lg:w-[18.5%]"><BookCard b={b} eager={i < 2} /></li>)}
    </ul>
    <div className="mt-1 flex justify-end gap-2">
      <button type="button" onClick={() => go(-1)} disabled={edge.s} aria-label={`السابق في ${label}`} className="tool-btn quick-btn disabled:opacity-40"><ChevronRight size={20} aria-hidden="true" /></button>
      <button type="button" onClick={() => go(1)} disabled={edge.e} aria-label={`التالي في ${label}`} className="tool-btn quick-btn disabled:opacity-40"><ChevronLeft size={20} aria-hidden="true" /></button>
    </div>
  </div>;
}

export function PageHead({ kicker, title, desc, children }: { kicker?: string; title: string; desc?: string; children?: ReactNode }) {
  return <div className="border-b border-[var(--border)] paper"><div className="mx-auto max-w-[1320px] px-4 py-10 sm:px-6">
    {kicker && <p className="kicker">{kicker}</p>}<h1 className="mt-2 text-3xl sm:text-4xl">{title}</h1>{desc && <p className="mt-3 max-w-3xl text-[var(--text-secondary)]">{desc}</p>}{children}
  </div></div>;
}

/** "Recently viewed" row from this device's history; renders nothing until there is history. */
export function RecentRow({ exclude }: { exclude?: string }) {
  const { list } = useRecent(); const items = list.filter(h => h !== exclude).map(byHandle).filter(Boolean) as Book[];
  if (!items.length) return null;
  return <section aria-labelledby="recent" className="pt-14"><h2 id="recent" className="text-2xl sm:text-3xl">شاهدتها مؤخرًا</h2><p className="mt-1 text-sm text-[var(--text-muted)]">محفوظة على جهازك فقط.</p><div className="mt-5"><Carousel items={items} label="شاهدتها مؤخرًا" /></div></section>;
}
