import { Heart, ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import { Link } from './router';
import { asset, fmtPrice, variantOf, type Book } from './data';
import { useCart, useWishlist } from './store';
export function Cover({ b, i = 0, size = 'sm', eager = false, className = '' }: { b: Book; i?: number; size?: 'sm' | 'lg'; eager?: boolean; className?: string }) {
  const im = b.images[i]; if (!im) return <div className={`aspect-[4/5] rounded-2xl bg-[var(--surface-raised)] ${className}`} />;
  return <div className={`grid aspect-[4/5] place-items-center overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-raised)] ${className}`}>
    <img src={asset(size === 'sm' ? im.sm : im.src)} alt={im.alt || b.title} width={im.w} height={im.h} loading={eager ? 'eager' : 'lazy'} decoding="async" {...(eager ? { fetchPriority: 'high' } : {})} className="h-full w-full object-contain" />
  </div>;
}
export function Availability({ b }: { b: Book }) {
  return b.available ? <span className="chip avail-ok">متوفر</span> : <span className="chip avail-no">نفد من المخزون</span>;
}
export function AddButton({ b, className = '', label = 'أضف إلى السلة' }: { b: Book; className?: string; label?: string }) {
  const { add } = useCart(); const [done, setDone] = useState(false); const v = variantOf(b);
  if (!b.available) return <button type="button" disabled className={`ghost-btn opacity-60 ${className}`}>غير متوفر</button>;
  return <button type="button" className={`ink-btn ${className}`} onClick={() => { add(v.id, b.handle); setDone(true); setTimeout(() => setDone(false), 1600); }}>
    {done ? <Check size={18} aria-hidden="true" /> : <ShoppingCart size={18} aria-hidden="true" />}{done ? 'أُضيف إلى السلة' : label}
    <span className="sr-only" aria-live="polite">{done ? `أُضيف «${b.title}» إلى السلة` : ''}</span>
  </button>;
}
export function WishButton({ b, compact = false }: { b: Book; compact?: boolean }) {
  const w = useWishlist(); const on = w.has(b.handle);
  return <button type="button" aria-pressed={on} aria-label={on ? `إزالة «${b.title}» من قائمة الأمنيات` : `أضف «${b.title}» إلى قائمة الأمنيات`} onClick={() => w.toggle(b.handle)} className={compact ? 'tool-btn border border-[var(--border)] bg-[var(--card)]' : 'ghost-btn'}>
    <Heart size={18} aria-hidden="true" className={on ? 'fill-[var(--accent)] text-[var(--accent)]' : ''} />{!compact && (on ? 'في قائمة الأمنيات' : 'أضف للأمنيات')}
  </button>;
}
export function BookCard({ b, eager = false }: { b: Book; eager?: boolean }) {
  return <article className="group flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--card)] p-3 lift">
    <Link to={`book/${b.handle}/`} className="block rounded-2xl" aria-label={b.title}><Cover b={b} eager={eager} /></Link>
    <div className="flex flex-1 flex-col gap-2 px-1 pt-3">
      <h3 className="text-[1.05rem] leading-snug"><Link to={`book/${b.handle}/`} className="hover:text-[var(--accent)]">{b.title}</Link></h3>
      <p className="text-sm text-[var(--text-muted)]">{b.author}</p>
      <div className="mt-auto flex items-center justify-between gap-2 pt-1">
        <span className="text-lg font-bold text-[var(--text-primary)]">{fmtPrice(b.price)}</span>
        {!b.available && <span className="chip avail-no">نفد</span>}
      </div>
      <div className="flex items-center gap-2"><AddButton b={b} className="flex-1 justify-center !px-3 !py-2 text-sm" label="أضف للسلة" /><WishButton b={b} compact /></div>
    </div>
  </article>;
}
export function Grid({ items, eager = 0 }: { items: Book[]; eager?: number }) {
  return <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">{items.map((b, i) => <li key={b.handle}><BookCard b={b} eager={i < eager} /></li>)}</ul>;
}
export function PageHead({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
  return <div className="border-b border-[var(--border)] paper"><div className="mx-auto max-w-[1320px] px-4 py-10 sm:px-6">
    {kicker && <p className="kicker">{kicker}</p>}<h1 className="mt-2 text-3xl sm:text-4xl">{title}</h1>{desc && <p className="mt-3 max-w-3xl text-[var(--text-secondary)]">{desc}</p>}
  </div></div>;
}
