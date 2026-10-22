import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Award, BookOpen, Briefcase, GraduationCap, Users, Mic, Sparkles } from 'lucide-react';
import { Link } from '../router';
import A from '../../../content/author.json';
import { books, asset, type Book } from '../data';
import { Carousel, Grid } from '../ui';
export const AUTHOR = 'علي أحمد الكندي المرر';
export const authorBooks = () => books.filter(b => b.author === AUTHOR);
const norm = (s: string) => s.replace(/[\u064B-\u0652\u0640]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
// CV wording differs slightly from the store title for these two
const ALIAS: Record<string, string> = { 'الزبارة: تاريخ وحضارة.': 'الزبارة-التاريخ-والحضارة-1766-1938م', 'إتحاف الناس بشرح ما قاله ابن عديم في قبيلة بني ياس.': 'إتحاف-الناس-بشرح-قصيدة-ابن-عديم-في-قبيلة-بني-ياس' };
const storeBook = (w: string): Book | undefined => { if (ALIAS[w]) return books.find(b => b.handle === ALIAS[w]); const n = norm(w); return books.find(b => { const t = norm(b.title); return n.startsWith(t.slice(0, Math.min(t.length, 28))) || t.startsWith(n.slice(0, Math.min(n.length, 28))); }); };
const reduced = () => typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Counts up when scrolled into view; SSR shows the final number. */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null); const [v, setV] = useState(to);
  useEffect(() => { const el = ref.current; if (!el || reduced() || !('IntersectionObserver' in window)) return; setV(0);
    const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; io.disconnect(); const t0 = performance.now(); const step = (t: number) => { const p = Math.min(1, (t - t0) / 1100); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); });
    io.observe(el); return () => io.disconnect(); }, [to]);
  return <span ref={ref} className="tabular-nums">{v.toLocaleString('ar-AE-u-nu-latn')}{suffix}</span>;
}
export function Portrait({ className = '', eager = false, sizes = '(min-width: 768px) 340px, 60vw' }: { className?: string; eager?: boolean; sizes?: string }) {
  return <img src={asset('author/ali-alkindi-720.webp')} srcSet={`${asset('author/ali-alkindi-360.webp')} 360w, ${asset('author/ali-alkindi-720.webp')} 720w`} sizes={sizes}
    alt={`صورة المؤلف ${A.name}`} width={720} height={829} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`object-cover object-top ${className}`} />;
}
type Item = { k: string; icon: any; tag: string; title: string; detail: string };
const TIMELINE: Item[] = [
  { k: 'e1998', icon: GraduationCap, tag: '1998', title: 'بكالوريوس في الإدارة الدولية', detail: A.education[1].text },
  { k: 'adnoc', icon: Briefcase, tag: A.career[0].dur, title: A.career[0].org, detail: A.career[0].text },
  { k: 'diwan1', icon: Mic, tag: A.career[1].dur, title: 'باحث إعلامي (منتدب)', detail: A.career[1].text },
  { k: 'diwan2', icon: Briefcase, tag: A.career[2].dur, title: 'مستشار', detail: A.career[2].text },
  { k: 'e2021', icon: GraduationCap, tag: '2021', title: 'ماجستير في إدارة الأعمال', detail: A.education[0].text },
];
function Timeline() {
  const [open, setOpen] = useState<string | null>('adnoc'); const ref = useRef<HTMLOListElement>(null);
  useEffect(() => { const root = ref.current; if (!root || reduced() || !('IntersectionObserver' in window)) return;
    const els = [...root.querySelectorAll<HTMLElement>('[data-reveal]')].filter(e => e.getBoundingClientRect().top > innerHeight); els.forEach(e => e.classList.add('pre-reveal'));
    const io = new IntersectionObserver(es => es.forEach((en, i) => { if (en.isIntersecting) { (en.target as HTMLElement).style.transitionDelay = `${i * 90}ms`; en.target.classList.add('revealed'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -10% 0px' });
    els.forEach(e => io.observe(e)); return () => io.disconnect(); }, []);
  return <ol ref={ref} className="tl relative space-y-4 ps-8">
    {TIMELINE.map(t => { const on = open === t.k; const I = t.icon; return <li key={t.k} data-reveal className="relative">
      <span aria-hidden="true" className={`tl-dot absolute -start-8 top-3 grid size-6 place-items-center rounded-full border-2 ${on ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]' : 'border-[var(--border-strong)] bg-[var(--card)] text-[var(--accent)]'}`}><I size={13} /></span>
      <button type="button" aria-expanded={on} aria-controls={`tl-${t.k}`} onClick={() => setOpen(on ? null : t.k)} className={`flex w-full items-center justify-between gap-3 rounded-2xl border bg-[var(--card)] p-4 text-start transition-colors hover:border-[var(--accent)] ${on ? 'border-[var(--accent)]' : 'border-[var(--border)]'}`}>
        <span><span className="chip !py-0.5 text-sm">{t.tag}</span><span className="mt-1.5 block text-lg font-bold">{t.title}</span></span>
        <ChevronDown size={20} aria-hidden="true" className={`shrink-0 text-[var(--accent)] transition-transform ${on ? 'rotate-180' : ''}`} />
      </button>
      <div id={`tl-${t.k}`} className="expand" data-open={on} hidden={!on}><p className="px-4 pt-3 leading-8 text-[var(--text-secondary)]">{t.detail}</p></div>
    </li>; })}
  </ol>;
}
const TABS = [
  { k: 'works', l: 'المؤلفات والإصدارات', icon: BookOpen },
  { k: 'research', l: 'الخبرات البحثية والإعلامية', icon: Mic },
  { k: 'skills', l: 'المهارات الشخصية', icon: Sparkles },
  { k: 'members', l: 'العضويات واللجان', icon: Users },
  { k: 'awards', l: 'الجوائز والتكريمات', icon: Award },
] as const;
function Works() {
  const [q, setQ] = useState(''); const n = norm(q);
  const list = A.works.map(w => ({ w, b: storeBook(w) })).filter(x => !n || norm(x.w).includes(n));
  return <div>
    <p className="font-semibold">{A.worksIntro}</p>
    <label htmlFor="wq" className="field-label mt-4">ابحث في المؤلفات</label>
    <input id="wq" type="search" value={q} onChange={e => setQ(e.target.value)} className="field-input max-w-md" placeholder="مثال: الظفرة، ديوان، رحلة" />
    <p className="mt-3 text-sm text-[var(--text-muted)]" aria-live="polite">{list.length} عنوانًا · العناوين المميزة متوفرة في المتجر</p>
    <ul className="mt-3 grid gap-2 md:grid-cols-2">{list.map(({ w, b }) => <li key={w}>{b
      ? <Link to={`book/${b.handle}/`} className="flex h-full items-start gap-2 rounded-xl border border-[var(--accent)] bg-[var(--accent-subtle)] p-3 font-semibold hover:underline"><BookOpen size={18} aria-hidden="true" className="mt-1 shrink-0 text-[var(--accent)]" /><span>{w} <span className="text-sm text-[var(--accent-strong)]">— في المتجر</span></span></Link>
      : <span className="flex h-full items-start gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] p-3"><span aria-hidden="true" className="mt-1 text-[var(--accent)]">◆</span>{w}</span>}</li>)}</ul>
  </div>;
}
const Bullets = ({ items }: { items: string[] }) => <ul className="grid gap-3 md:grid-cols-2">{items.map(t => <li key={t} className="flex items-start gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 leading-8"><span aria-hidden="true" className="mt-0.5 text-[var(--accent)]">◆</span>{t}</li>)}</ul>;
function Tabs() {
  const [t, setT] = useState<(typeof TABS)[number]['k']>('works');
  const move = (e: React.KeyboardEvent, i: number) => { const d = e.key === 'ArrowLeft' ? 1 : e.key === 'ArrowRight' ? -1 : 0; if (!d) return; e.preventDefault(); const nx = TABS[(i + d + TABS.length) % TABS.length].k; setT(nx); document.getElementById(`tab-${nx}`)?.focus(); };
  return <div>
    <div role="tablist" aria-label="أقسام السيرة" className="flex flex-wrap gap-2">{TABS.map((x, i) => { const I = x.icon; return <button key={x.k} id={`tab-${x.k}`} role="tab" type="button" aria-selected={t === x.k} aria-controls={`panel-${x.k}`} tabIndex={t === x.k ? 0 : -1} onKeyDown={e => move(e, i)} onClick={() => setT(x.k)} className="cat-chip tab-chip gap-1.5"><I size={16} aria-hidden="true" />{x.l}</button>; })}</div>
    {TABS.map(x => <div key={x.k} id={`panel-${x.k}`} role="tabpanel" aria-labelledby={`tab-${x.k}`} hidden={t !== x.k} className="tab-panel mt-6">
      {x.k === 'works' && <Works />}
      {x.k === 'research' && <Bullets items={A.research} />}
      {x.k === 'skills' && <Bullets items={A.skills} />}
      {x.k === 'members' && <Bullets items={A.memberships} />}
      {x.k === 'awards' && <div className="flex items-start gap-4 rounded-2xl border border-[var(--accent)] bg-[var(--accent-subtle)] p-6"><Award size={36} aria-hidden="true" className="shrink-0 text-[var(--accent)]" /><p className="text-lg leading-9">{A.award}</p></div>}
    </div>)}
  </div>;
}
export default function Author() {
  const mine = authorBooks();
  return <main id="main">
    <section className="relative overflow-hidden bg-[var(--hero-bg)] text-[#f6efe1]"><div className="pattern"><div className="mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-[340px_1fr] md:py-16">
      <div className="mx-auto w-56 md:w-full"><div className="portrait-frame overflow-hidden rounded-[2rem] border-4 border-[#e2b866]/70 bg-[#f6efe1]"><Portrait eager className="aspect-[720/829] w-full" /></div></div>
      <div>
        <p className="kicker !text-[#e2b866]">عن المؤلف</p>
        <h1 className="mt-2 text-4xl leading-tight text-[#f6efe1] sm:text-5xl">{A.name}</h1>
        <p className="mt-3 text-xl text-[#e2b866]">{A.title.replace(/\.$/, '')}</p>
        <p className="mt-4 max-w-3xl text-lg leading-9 text-[#efe5cf]">{A.bio}</p>
        <p className="mt-3 text-[#e0d4bb]"><span className="font-bold text-[#f6efe1]">تاريخ ومكان الميلاد: </span>{A.born}</p>
        <div className="mt-6 flex flex-wrap gap-3"><a href="#books" className="store-btn">كتبه في المتجر</a><a href="#cv" className="ghost-btn !border-white/50 !text-[#f6efe1] hover:!bg-white/10">السيرة والمؤلفات</a></div>
      </div>
    </div></div></section>
    <section aria-label="أرقام من السيرة" className="mx-auto max-w-[1320px] px-4 sm:px-6"><ul className="-mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
      {[{ n: 26, s: '', l: 'سنة في القطاع الحكومي' }, { n: 20, s: '+', l: 'عامًا في البحث العلمي' }, { n: A.works.length, s: '', l: 'عنوانًا في قائمة المؤلفات' }, { n: mine.length, s: '', l: 'كتابًا متوفرًا في المتجر' }].map(x =>
        <li key={x.l} className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center shadow-sm"><p className="text-4xl font-bold text-[var(--accent)]"><Counter to={x.n} suffix={x.s} /></p><p className="mt-1 font-semibold text-[var(--text-secondary)]">{x.l}</p></li>)}
    </ul></section>
    <section aria-labelledby="journey" className="mx-auto grid max-w-[1320px] gap-10 px-4 pt-14 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
      <div><h2 id="journey" className="text-2xl sm:text-3xl">المسيرة والتأهيل العلمي</h2><p className="mt-2 text-[var(--text-secondary)]">{A.careerIntro}</p><p className="mt-1 text-sm text-[var(--text-muted)]">اضغط على أي محطة لعرض تفاصيلها.</p><div className="mt-6"><Timeline /></div><p className="mt-5 flex items-start gap-2 text-[var(--text-secondary)]"><span aria-hidden="true" className="text-[var(--accent)]">◆</span>{A.courses}</p></div>
      <div id="cv" className="scroll-mt-28"><h2 className="text-2xl sm:text-3xl">من السيرة</h2><div className="mt-5"><Tabs /></div></div>
    </section>
    <section id="books" aria-labelledby="ab" className="mx-auto max-w-[1320px] scroll-mt-28 px-4 pt-16 sm:px-6"><div className="flex items-end justify-between gap-3"><h2 id="ab" className="text-2xl sm:text-3xl">كتبه في المتجر</h2><Link to="books/" className="font-semibold text-[var(--accent)] hover:underline">كل الكتب</Link></div><div className="mt-5"><Grid items={mine} /></div></section>
  </main>;
}
export function AuthorTeaser() {
  const mine = authorBooks();
  return <section aria-labelledby="author-t" className="mx-auto max-w-[1320px] px-4 pt-14 sm:px-6">
    <div className="grid items-center gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 sm:p-8 md:grid-cols-[220px_1fr]">
      <Link to="author/" className="mx-auto block w-40 overflow-hidden rounded-[1.5rem] border-4 border-[var(--accent)]/40 md:w-full" aria-label={`عن المؤلف ${A.name}`} tabIndex={-1}><Portrait sizes="(min-width: 768px) 220px, 160px" className="aspect-[720/829] w-full transition-transform duration-500 hover:scale-105" /></Link>
      <div><p className="kicker">عن المؤلف</p><h2 id="author-t" className="mt-1 text-2xl sm:text-3xl">{A.name}</h2><p className="mt-1 font-semibold text-[var(--accent)]">{A.title.replace(/\.$/, '')}</p>
        <p className="mt-3 leading-8 text-[var(--text-secondary)] clamp-5">{A.bio.split('. ').slice(0, 2).join('. ')}.</p>
        <div className="mt-4 flex flex-wrap gap-2"><span className="chip">{A.award.split('،')[0]}</span><span className="chip">{mine.length} كتابًا في المتجر</span></div>
        <Link to="author/" className="ink-btn mt-5">اقرأ سيرة المؤلف</Link></div>
    </div>
  </section>;
}
