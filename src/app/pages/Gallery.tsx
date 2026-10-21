import { BeforeAfter } from '../reader';
import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink, X, ZoomIn } from 'lucide-react';
import { AnimatedTabs } from '@/vendor/easyui/ui/AnimatedTabs';
import { photos, asset, arNum, type Photo } from '../data';
import { Link } from '../router';
import { PageHero } from './Listing';

const KINDS = [['all', 'الكل'], ['art', 'لوحات ورسوم محفورة'], ['photo', 'صور فوتوغرافية'], ['map', 'خرائط']] as const;
const licAr = (l: string) => l === 'Public domain' ? 'ملكية عامة' : l === 'No restrictions' ? 'بلا قيود معروفة' : l;

function Lightbox({ list, i, setI }: { list: Photo[]; i: number; setI: (n: number | null) => void }) {
  const p = list[i]; const reduce = useReducedMotion(); const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null; closeRef.current?.focus(); document.body.style.overflow = 'hidden';
    const on = (e: KeyboardEvent) => { if (e.key === 'Escape') setI(null); if (e.key === 'ArrowLeft') setI((i + 1) % list.length); if (e.key === 'ArrowRight') setI((i - 1 + list.length) % list.length); };
    addEventListener('keydown', on); return () => { removeEventListener('keydown', on); document.body.style.overflow = ''; prev?.focus?.(); };
  }, [i]);
  return <motion.div role="dialog" aria-modal="true" aria-label={p.label} className="fixed inset-0 z-[80] flex flex-col bg-[#0b0a07]/95 text-[#f6efe1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setI(null)}>
    <div className="flex items-center justify-between gap-3 p-3 sm:p-4" onClick={e => e.stopPropagation()}>
      <span className="text-sm text-[#d9cbb0]">{arNum(i + 1)} / {arNum(list.length)}</span>
      <button ref={closeRef} type="button" aria-label="إغلاق" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20" onClick={() => setI(null)}><X size={22} /></button>
    </div>
    <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16" onClick={e => e.stopPropagation()}>
      <AnimatePresence mode="wait"><motion.img key={p.slug} src={asset(p.file)} alt={p.label} className="max-h-full max-w-full rounded-md object-contain" initial={reduce ? { opacity: 0 } : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .25 }} /></AnimatePresence>
      <button type="button" aria-label="الصورة السابقة" onClick={() => setI((i - 1 + list.length) % list.length)} className="absolute right-2 grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/25 sm:right-4"><ChevronRight size={24} /></button>
      <button type="button" aria-label="الصورة التالية" onClick={() => setI((i + 1) % list.length)} className="absolute left-2 grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/25 sm:left-4"><ChevronLeft size={24} /></button>
    </div>
    <div className="mx-auto w-full max-w-3xl p-4 text-sm" onClick={e => e.stopPropagation()}>
      <p className="font-display text-lg font-bold text-[#f6efe1]">{p.label}</p>
      {p.caption && <p className="mt-1 text-[#d9cbb0]" dir="auto"><span className="text-[#e2b866]">وصف المصدر: </span><span dir="ltr" className="ltr">{p.caption}</span></p>}
      <p className="mt-1 text-[#d9cbb0]">{[p.author && `المؤلف: ${p.author}`, p.date && `التاريخ حسب المصدر: ${p.date}`, `الترخيص: ${licAr(p.licence)}`].filter(Boolean).join(' · ')} · <a href={p.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#e2b866] underline">المصدر <ExternalLink size={13} aria-hidden="true" /></a></p>
    </div>
  </motion.div>;
}
export default function Gallery() {
  const [type, setType] = useState('all');
  const [group, setGroup] = useState('all');
  const [open, setOpen] = useState<number | null>(null);
  const groups = useMemo(() => [...new Map(photos.map(p => [p.group, p.groupLabel])).entries()], []);
  const list = useMemo(() => photos.filter(p => (group === 'all' || p.group === group) && (type === 'all' || p.kind === type)), [group, type]);
  useEffect(() => { const h = decodeURIComponent(location.hash.slice(1)); const k = list.findIndex(p => p.slug === h); if (k >= 0) { setOpen(k); } }, []);
  return <main id="main">
    <PageHero kicker="مكتبة الصور" title="ذاكرة الخليج المصوّرة" desc="لوحات محفورة وخرائط قديمة وصور فوتوغرافية تاريخية للخليج، كلها بتراخيص ملكية عامة أو مفتوحة. اضغط على أي صورة لتكبيرها وقراءة بيانات مصدرها." />
    <div className="mx-auto max-w-[1320px] px-4 pt-8 sm:px-6">
      <AnimatedTabs className="tabs-heritage" variant="pill" activeTab={type} onChange={setType} renderContent={false} tabs={KINDS.map(([id, label]) => ({ id, label, badge: arNum(photos.filter(p => id === 'all' || p.kind === id).length) }))} />
      {<>
        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="تصفية حسب الموضوع">
          {[['all', 'الكل'], ...groups].map(([g, l]) => <button key={g} type="button" aria-pressed={group === g} onClick={() => setGroup(g)} className={`chip ${group === g ? '!border-[var(--accent)] !bg-[var(--accent)] !text-[var(--accent-foreground)]' : ''}`}>{l}</button>)}
        </div>
        <LayoutGroup><motion.ul layout className="mt-6 columns-2 gap-4 md:columns-3 xl:columns-4">
          <AnimatePresence>{list.map(p => <motion.li layout key={p.slug} initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .95 }} className="mb-4 break-inside-avoid">
            <figure className="group m-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <button type="button" onClick={() => setOpen(list.indexOf(p))} className="cover-zoom relative block w-full overflow-hidden" aria-label={`تكبير: ${p.label}`}>
                <img src={asset(p.thumb)} alt={p.label} loading="lazy" className="block w-full" width={p.w} height={p.h} style={{ aspectRatio: `${p.w}/${p.h}` }} />
                <span className="absolute bottom-2 left-2 grid size-9 place-items-center rounded-full bg-[#1b1712]/80 text-[#f6efe1] opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"><ZoomIn size={18} aria-hidden="true" /></span>
              </button>
              <figcaption className="p-3 text-sm"><span className="block font-semibold text-[var(--text-primary)]">{p.label}</span><span className="text-xs text-[var(--text-muted)]">{licAr(p.licence)} · ويكيميديا كومنز</span></figcaption>
            </figure>
          </motion.li>)}</AnimatePresence>
        </motion.ul></LayoutGroup>
      </>}
      <section aria-labelledby="ba-h" className="mt-14"><h2 id="ba-h" className="text-2xl">بين الأمس واليوم</h2><BeforeAfter id="mutrah" /></section>
      <p className="mt-8 text-sm text-[var(--text-muted)]">تفاصيل كل صورة وترخيصها في <Link to="credits/" className="text-[var(--accent)] underline">صفحة الحقوق والمصادر</Link>.</p>
    </div>
    <AnimatePresence>{open !== null && <Lightbox list={list} i={open} setI={setOpen} />}</AnimatePresence>
  </main>;
}
