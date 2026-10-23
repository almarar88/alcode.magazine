// Header instant search, mini-cart panel (non-modal), add-to-cart fly animation, recently viewed, share buttons.
import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, ShoppingCart, X, Lock, Minus, Plus, Trash2, Share2, Link2, Check } from 'lucide-react';
import { Link, navigate } from './router';
import { books, byHandle, fmtPrice, permalink, cartCheckoutHref, asset, type Book } from './data';
import { useCart, useStored, MAXQ } from './store';

export const SHIPPING = 25;
export const norm = (s: string) => s.toLowerCase().replace(/[\u064B-\u0652\u0640]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const thumb = (b: Book) => { const im = b.images[0] as any; return im ? asset(im.cutSm || im.sm) : ''; };

/** Instant search: results appear under the header while typing (no modal); Enter opens the catalog search. */
export function HeaderSearch({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [q, setQ] = useState(''); const [k, setK] = useState(0); const inp = useRef<HTMLInputElement>(null);
  useEffect(() => { if (open) inp.current?.focus(); }, [open]);
  const res = useMemo(() => { const n = norm(q.trim()); if (!n) return []; return books.filter(b => norm([b.title, b.author, ...b.tags, ...b.collections].join(' ')).includes(n)).slice(0, 6); }, [q]);
  useEffect(() => setK(0), [q]);
  if (!open) return null;
  const go = (to: string) => { setOpen(false); setQ(''); navigate(to); };
  return <div id="hsearch" className="panel-in border-t border-[var(--border)] bg-[var(--background)]" onKeyDown={e => { if (e.key === 'Escape') setOpen(false); }}>
    <div className="mx-auto max-w-[760px] px-4 py-4">
      <form role="search" onSubmit={e => { e.preventDefault(); if (res[k] && q) go(`book/${res[k].handle}/`); else go(`books/?q=${encodeURIComponent(q)}`); }} className="flex items-center gap-2">
        <label htmlFor="hq" className="sr-only">ابحث في الكتب</label>
        <div className="relative flex-1"><Search size={18} aria-hidden="true" className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input ref={inp} id="hq" type="search" value={q} onChange={e => setQ(e.target.value)} autoComplete="off" role="combobox" aria-expanded={res.length > 0} aria-controls="hres" aria-activedescendant={res[k] ? `hr-${k}` : undefined}
            onKeyDown={e => { if (e.key === 'ArrowDown') { e.preventDefault(); setK(x => Math.min(res.length - 1, x + 1)); } if (e.key === 'ArrowUp') { e.preventDefault(); setK(x => Math.max(0, x - 1)); } }}
            placeholder="ابحث بالعنوان أو الموضوع… مثال: الظفرة، الكويت، ديوان" className="field-input !ps-10" /></div>
        <button type="button" onClick={() => setOpen(false)} className="tool-btn quick-btn" aria-label="إغلاق البحث"><X size={18} aria-hidden="true" /></button>
      </form>
      {q.trim() && <div className="mt-3">
        <ul id="hres" role="listbox" aria-label="نتائج البحث" className="grid gap-1">{res.map((b, i) => <li key={b.handle} id={`hr-${i}`} role="option" aria-selected={i === k}>
          <Link to={`book/${b.handle}/`} onClick={() => { setOpen(false); setQ(''); }} onMouseEnter={() => setK(i)} className={`flex items-center gap-3 rounded-xl p-2 ${i === k ? 'bg-[var(--accent-subtle)]' : ''}`}>
            <img src={thumb(b)} alt="" width={40} height={52} className="h-[52px] w-10 object-contain" loading="lazy" />
            <span className="flex-1"><span className="clamp-1 font-semibold">{b.title}</span><span className="text-sm text-[var(--text-muted)]">{fmtPrice(b.price)}{!b.available && ' · نفد'}</span></span>
          </Link></li>)}</ul>
        <p className="mt-2 text-sm text-[var(--text-muted)]" aria-live="polite">{res.length ? <Link to={`books/?q=${encodeURIComponent(q)}`} onClick={() => setOpen(false)} className="font-semibold text-[var(--accent)] hover:underline">عرض كل النتائج في صفحة الكتب</Link> : 'لا توجد نتائج مطابقة.'}</p>
      </div>}
    </div>
  </div>;
}

/** Mini cart: an inline panel under the header (no backdrop, page stays usable). */
export function MiniCart({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const { lines, setQty, remove } = useCart();
  if (!open) return null;
  const rows = lines.map(l => { const b = byHandle(l.handle); const v = b?.variants.find(x => x.id === l.id); return b && v ? { l, b, v } : null; }).filter(Boolean) as { l: any; b: Book; v: any }[];
  const sub = rows.reduce((s, r) => s + Number(r.v.price) * r.l.qty, 0); const ship = rows.length ? SHIPPING : 0; const ok = rows.filter(r => r.v.available);
  return <section id="minicart" aria-label="سلة التسوق المختصرة" className="panel-in border-t border-[var(--border)] bg-[var(--background)]" onKeyDown={e => { if (e.key === 'Escape') setOpen(false); }}>
    <div className="mx-auto max-w-[1320px] px-4 py-4 sm:px-6"><div className="ms-auto max-w-[440px] rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
      <div className="flex items-center justify-between"><h2 className="text-lg">سلتك</h2><button type="button" className="tool-btn" onClick={() => setOpen(false)} aria-label="إغلاق السلة المختصرة"><X size={18} aria-hidden="true" /></button></div>
      {rows.length === 0 ? <p className="py-4 text-[var(--text-secondary)]">سلتك فارغة. <Link to="books/" onClick={() => setOpen(false)} className="font-semibold text-[var(--accent)] hover:underline">تصفّح الكتب</Link></p> : <>
        <ul className="mt-2 max-h-[45vh] divide-y divide-[var(--border)] overflow-y-auto">{rows.map(({ l, b, v }) => <li key={l.id} className="flex items-center gap-3 py-2">
          <img src={thumb(b)} alt="" width={40} height={52} className="h-[52px] w-10 object-contain" />
          <div className="min-w-0 flex-1"><Link to={`book/${b.handle}/`} onClick={() => setOpen(false)} className="clamp-1 font-semibold hover:text-[var(--accent)]">{b.title}</Link>
            <div className="mt-1 flex items-center gap-1"><button type="button" className="qty-btn" aria-label={`إنقاص الكمية من «${b.title}»`} onClick={() => setQty(l.id, l.qty - 1)}><Minus size={14} aria-hidden="true" /></button><span className="w-6 text-center tabular-nums" aria-label={`الكمية ${l.qty}`}>{l.qty}</span><button type="button" className="qty-btn" disabled={l.qty >= MAXQ} aria-label={`زيادة الكمية من «${b.title}»`} onClick={() => setQty(l.id, l.qty + 1)}><Plus size={14} aria-hidden="true" /></button>
              <span className="ms-auto font-bold">{fmtPrice(Number(v.price) * l.qty)}</span><button type="button" className="tool-btn !size-8" aria-label={`إزالة «${b.title}»`} onClick={() => remove(l.id)}><Trash2 size={15} aria-hidden="true" /></button></div></div>
        </li>)}</ul>
        <dl className="mt-3 grid grid-cols-[1fr_auto] gap-y-1 border-t border-[var(--border)] pt-3"><dt>المجموع الفرعي</dt><dd data-testid="mc-subtotal">{fmtPrice(sub)}</dd><dt>الشحن (ثابت)</dt><dd data-testid="mc-shipping">{fmtPrice(ship)}</dd><dt className="font-bold">المجموع</dt><dd data-testid="mc-total" className="text-lg font-bold">{fmtPrice(sub + ship)}</dd></dl>
        <div className="mt-3 grid grid-cols-2 gap-2"><Link to="cart/" onClick={() => setOpen(false)} className="ghost-btn justify-center">عرض السلة</Link>
          {ok.length > 0 && <a href={withNote(cartCheckoutHref(ok.map(r => ({ id: r.l.id, qty: r.l.qty }))))} rel="noopener" className="store-btn justify-center"><Lock size={16} aria-hidden="true" />إتمام الشراء</a>}</div>
      </>}
    </div></div>
  </section>;
}

/** Fly-to-cart: a copy of the cover glides to the cart icon (skipped with reduced motion). */
export function flyToCart(from: Element | null) {
  dispatchEvent(new CustomEvent('alcode-added'));
  if (!from || reduced()) return;
  const img = (from.closest('.book-card, main')?.querySelector('img.book-img') as HTMLImageElement | null); const to = document.querySelector('[data-cart-target]');
  if (!img || !to) return;
  const a = img.getBoundingClientRect(), b = to.getBoundingClientRect(); if (!a.width) return;
  const c = img.cloneNode() as HTMLImageElement; c.removeAttribute('srcset'); c.className = 'fly-img'; Object.assign(c.style, { left: a.left + 'px', top: a.top + 'px', width: a.width + 'px', height: a.height + 'px' });
  document.body.appendChild(c);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
  c.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${dx * .6}px,${dy * .6 - 60}px) scale(.45)`, opacity: .95, offset: .6 }, { transform: `translate(${dx}px,${dy}px) scale(.08)`, opacity: .3 }], { duration: 750, easing: 'cubic-bezier(.5,0,.2,1)' }).onfinish = () => { c.remove(); to.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.25)' }, { transform: 'scale(1)' }], { duration: 300 }); };
}

/** Recently viewed books (this device only). */
export function useRecent() {
  const [list, setList] = useStored<string[]>('alcode-recent', []);
  return { list, push: (h: string) => setList(l => [h, ...l.filter(x => x !== h)].slice(0, 12)) };
}

/** Share: native share sheet when available, copy link, and X. */
export function ShareButtons({ b }: { b: Book }) {
  const [copied, setCopied] = useState(false); const [canShare, setCanShare] = useState(false);
  useEffect(() => setCanShare(typeof navigator !== 'undefined' && !!navigator.share), []);
  const url = () => location.origin + location.pathname;
  return <div className="mt-5 flex flex-wrap items-center gap-2"><span className="font-semibold text-[var(--text-secondary)]">شارك الكتاب:</span>
    {canShare && <button type="button" className="ghost-btn !px-3 !py-2 text-sm" onClick={() => navigator.share({ title: b.title, url: url() }).catch(() => {})}><Share2 size={16} aria-hidden="true" />مشاركة</button>}
    <button type="button" className="ghost-btn !px-3 !py-2 text-sm" onClick={async () => { try { await navigator.clipboard.writeText(url()); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {} }}>{copied ? <Check size={16} aria-hidden="true" /> : <Link2 size={16} aria-hidden="true" />}{copied ? 'نُسخ الرابط' : 'نسخ الرابط'}<span className="sr-only" aria-live="polite">{copied ? 'تم نسخ رابط الكتاب' : ''}</span></button>
    <a className="ghost-btn !px-3 !py-2 text-sm" target="_blank" rel="noopener" href={`https://x.com/intent/post?text=${encodeURIComponent(b.title)}&url=${encodeURIComponent(typeof location !== 'undefined' ? location.href : '')}`} onClick={e => { (e.currentTarget as HTMLAnchorElement).href = `https://x.com/intent/post?text=${encodeURIComponent(b.title)}&url=${encodeURIComponent(url())}`; }}>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.8-6.3L6.4 22H3.3l7.3-8.3L1 2h6.3l4.4 5.8zm-1.1 18h1.7L6.3 3.9H4.5z" /></svg>X</a>
  </div>;
}

/** Appends the saved cart note (gift message) as Shopify's documented `note` permalink parameter. */
export function withNote(base: string) {
  if (!/^https?:/.test(base)) return base; // on-site checkout reads the note itself
  let n = ''; try { n = JSON.parse(localStorage.getItem('alcode-note') || '""') || ''; } catch {}
  n = String(n).trim().slice(0, 500); return n ? `${base}?note=${encodeURIComponent(n)}` : base;
}
