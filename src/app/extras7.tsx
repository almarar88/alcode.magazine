// Batch 7: mobile bottom nav, full-screen "read sample" viewer, follow CTA.
import { useEffect, useRef, useState } from 'react';
import { Home, BookOpen, Layers, Heart, ShoppingBag, X, ChevronRight, ChevronLeft, Mail } from 'lucide-react';
import data from '../generated/store.json';
import { asset, type Book } from './data';
import { Link } from './router';
import { useCart, useWishlist } from './store';
import { SOCIAL } from './chrome';
import { EMAIL } from './config';
type Inside = { src: string; sm: string; w: number; h: number; caption: string; handle: string };
const inside = (data as any).inside as Inside[];

export function BottomNav({ path }: { path: string }) {
  const { count } = useCart(); const { list } = useWishlist();
  const items = [{ to: '', l: 'الرئيسية', I: Home }, { to: 'books/', l: 'الكتب', I: BookOpen }, { to: 't/', l: 'المجموعات', I: Layers }, { to: 'wishlist/', l: 'الأمنيات', I: Heart, n: list.length }, { to: 'cart/', l: 'السلة', I: ShoppingBag, n: count }];
  const cur = (to: string) => (to === '' ? path === '' : (path + '/').startsWith(to));
  return <nav aria-label="التنقل السريع" className="bnav md:hidden">
    <ul>{items.map(({ to, l, I, n }) => <li key={to}><Link to={to} aria-current={cur(to) ? 'page' : undefined} data-testid={`bnav-${to || 'home'}`}>
      <span className="relative"><I size={22} aria-hidden="true" />{!!n && <span className="bnav-badge" aria-label={`${n}`}>{n}</span>}</span><span>{l}</span></Link></li>)}</ul>
  </nav>;
}

/** Pages to preview: the book's own photos (cover, back, spreads from Shopify) + captioned inside images. */
export function samplePages(b: Book) {
  return [...b.images.map((im, i) => ({ src: im.src, w: im.w, h: im.h, caption: i === 0 ? 'الغلاف' : `صورة ${i + 1} من صور الكتاب` })),
    ...inside.filter(x => x.handle === b.handle).map(x => ({ src: x.src, w: x.w, h: x.h, caption: x.caption }))];
}
export function SampleViewer({ b }: { b: Book }) {
  const pages = samplePages(b); const [open, setOpen] = useState(false); const [k, setK] = useState(0); const dlg = useRef<HTMLDialogElement>(null); const x0 = useRef(0);
  useEffect(() => { const d = dlg.current; if (!d) return; if (open && !d.open) d.showModal(); if (!open && d.open) d.close(); }, [open]);
  if (pages.length < 2) return null;
  const go = (d: number) => setK(v => (v + d + pages.length) % pages.length);
  const p = pages[k];
  return <>
    <button type="button" className="ghost-btn mt-3 w-full justify-center sm:w-auto" data-testid="sample-open" onClick={() => { setK(0); setOpen(true); }}>
      <img src={asset('art/open-book.svg')} alt="" width={18} height={18} className="dark:invert" />تصفّح صور الكتاب ({pages.length})</button>
    <dialog ref={dlg} className="sample" aria-label={`صور من كتاب ${b.title}`} onClose={() => setOpen(false)}
      onKeyDown={e => { if (e.key === 'ArrowLeft') go(1); if (e.key === 'ArrowRight') go(-1); }}>
      {open && <div className="sample-in" onTouchStart={e => (x0.current = e.touches[0].clientX)} onTouchEnd={e => { const dx = e.changedTouches[0].clientX - x0.current; if (Math.abs(dx) > 40) go(dx > 0 ? 1 : -1); }}>
        <div className="flex items-center justify-between gap-3 p-3 text-[#f6efe1]"><p className="clamp-1 font-semibold">{b.title}</p>
          <button type="button" autoFocus onClick={() => setOpen(false)} className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="إغلاق"><X size={20} aria-hidden="true" /></button></div>
        <figure className="relative grid flex-1 place-items-center overflow-hidden px-12">
          <img key={p.src} src={asset(p.src)} alt={p.caption} width={p.w} height={p.h} className="sample-img max-h-[72vh] max-w-full rounded-lg object-contain shadow-2xl" />
          <figcaption className="mt-3 text-center text-[#efe5cf]">{p.caption} · {k + 1} / {pages.length}</figcaption>
          <button type="button" onClick={() => go(-1)} aria-label="السابق" className="sample-nav right-2"><ChevronRight size={26} aria-hidden="true" /></button>
          <button type="button" onClick={() => go(1)} aria-label="التالي" className="sample-nav left-2"><ChevronLeft size={26} aria-hidden="true" /></button>
        </figure>
        <ul className="flex gap-2 overflow-x-auto p-3">{pages.map((q, i) => <li key={q.src} className="shrink-0"><button type="button" onClick={() => setK(i)} aria-label={`صورة ${i + 1}`} aria-current={i === k || undefined}
          className={`block h-16 w-14 overflow-hidden rounded-md border-2 ${i === k ? 'border-[#e2b866]' : 'border-transparent opacity-60'}`}><img src={asset(q.src.replace('.webp', q.src.startsWith('inside/') ? '-sm.webp' : '-sm.webp'))} alt="" className="h-full w-full object-cover" loading="lazy" /></button></li>)}</ul>
      </div>}
    </dialog>
  </>;
}

export function FollowCTA() {
  return <section aria-labelledby="follow-h" className="mx-auto max-w-[1320px] px-4 pt-14 sm:px-6">
    <div className="follow relative overflow-hidden rounded-3xl p-8 text-[#f6efe1] sm:p-12">
      <h2 id="follow-h" className="text-3xl text-[#f6efe1] sm:text-4xl">تابع إصداراتنا الجديدة</h2>
      <p className="mt-3 max-w-xl text-lg leading-8 text-[#efe5cf]">نعلن عن الكتب الجديدة والمجموعات المختارة على حساباتنا، ويسعدنا تواصلك بالبريد لأي استفسار عن الطلبات.</p>
      <div className="mt-6 flex flex-wrap gap-3">{SOCIAL.map(({ href, label, Icon }) => <a key={href} href={href} target="_blank" rel="noopener" className="follow-btn"><Icon />{label}</a>)}
        <a href={`mailto:${EMAIL}`} className="follow-btn"><Mail size={18} aria-hidden="true" />{EMAIL}</a></div>
    </div>
  </section>;
}
