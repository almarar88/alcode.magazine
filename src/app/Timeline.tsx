/* Interactive timeline built from the published articles' era field (dates as given in each article). */
import { useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { arNum, posts } from './data';
import { Link } from './router';
const REAL = posts.filter((p: any) => p.era).sort((a: any, b: any) => a.eraSort - b.eraSort).map((p: any) => ({ id: p.slug, label: p.title, era: p.era, body: p.excerpt, slug: p.slug }));
type Ev = { id: string; label: string; era: string; body: string; slug?: string };
export function Timeline({ events = REAL as Ev[] }: { events?: Ev[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const go = (n: number) => { const k = (n + events.length) % events.length; setI(k); refs.current[k]?.focus(); refs.current[k]?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' }); };
  const onKey = (e: KeyboardEvent) => { if (e.key === 'ArrowLeft') { e.preventDefault(); go(i + 1); } if (e.key === 'ArrowRight') { e.preventDefault(); go(i - 1); } if (e.key === 'Home') go(0); if (e.key === 'End') go(events.length - 1); };
  const e = events[i];
  return <div className="rounded-[28px] border border-[var(--border-strong)] bg-[var(--card)] p-5 sm:p-8">
    <div className="flex items-center justify-between gap-3">
      <span className="kicker">من مقالات المجلة</span>
      <div className="flex gap-1"><button type="button" className="tool-btn" aria-label="السابق" onClick={() => go(i - 1)}><ChevronRight size={20} /></button><button type="button" className="tool-btn" aria-label="التالي" onClick={() => go(i + 1)}><ChevronLeft size={20} /></button></div>
    </div>
    <div className="relative mt-6 overflow-x-auto pb-2" role="tablist" aria-label="محطات الخط الزمني" onKeyDown={onKey}>
      <div className="relative flex min-w-max gap-2 px-1">
        <div aria-hidden="true" className="absolute inset-x-4 top-[1.15rem] h-0.5 bg-[var(--border-strong)]" />
        <motion.div aria-hidden="true" className="absolute right-4 top-[1.15rem] h-0.5 origin-right bg-[var(--accent)]" animate={{ width: `calc(${(i / (events.length - 1)) * 100}% - ${(i / (events.length - 1)) * 2}rem)` }} transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 160, damping: 24 }} />
        {events.map((ev, k) => <button key={ev.id} ref={el => { refs.current[k] = el; }} role="tab" aria-selected={k === i} tabIndex={k === i ? 0 : -1} onClick={() => setI(k)} className="group relative flex w-28 flex-col items-center gap-2 rounded-xl py-1 text-center sm:w-32">
          <span className={`relative z-10 grid size-9 place-items-center rotate-45 rounded-md border-2 transition-all duration-300 ${k <= i ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-[var(--border-strong)] bg-[var(--card)] group-hover:border-[var(--accent)]'}`}><span className={`-rotate-45 text-xs font-bold ${k <= i ? 'text-[var(--accent-foreground)]' : 'text-[var(--text-muted)]'}`}>{arNum(k + 1)}</span></span>
          <span className={`text-sm font-semibold ${k === i ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'}`}>{ev.era}</span>
        </button>)}
      </div>
    </div>
    <div className="relative mt-4 min-h-[120px]" role="tabpanel" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.div key={e.id} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }} transition={{ duration: .3 }}>
          <h3 className="text-2xl">{e.label}</h3><p className="mt-2 max-w-2xl text-[var(--text-secondary)]">{e.body}</p>{e.slug && <Link to={`article/${e.slug}/`} className="mt-3 inline-flex font-bold text-[var(--accent)] underline-offset-4 hover:underline">اقرأ المقال ←</Link>}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>;
}
