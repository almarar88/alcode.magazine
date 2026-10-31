import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { Link } from '../router';
import data from '../../generated/store.json';
import { books, collections, featured, newest, byHandle, fmtPrice, asset, type Book } from '../data';
import { Carousel, Cover, AddButton, RecentRow } from '../ui';
import { LogoMark } from '../art';
import { AuthorTeaser } from './Author';
import { Shelves, TrustStrip } from '../extras3';
import { ShelfCards, HowToOrder } from '../extras5';
import { OtherThemes, Sadu } from '../extras6';
type Inside = { src: string; sm: string; w: number; h: number; caption: string; handle: string };
const inside = (data as any).inside as Inside[];
const slides = inside.filter(i => i.w >= 1000 && i.w / i.h > 1.1); // wide, sharp ones for the full-bleed hero
const short = (h: string) => (byHandle(h)?.title || '').split(/[:،(]/)[0].trim();

/** Ken-Burns slideshow of images from inside the books; each slide credits and links to its book. */
function Slides() {
  const [k, setK] = useState(0); const [paused, setPaused] = useState(false); const [rm, setRm] = useState(false);
  useEffect(() => { setRm(matchMedia('(prefers-reduced-motion: reduce)').matches); }, []);
  useEffect(() => { if (paused || rm) return; const t = setInterval(() => setK(x => (x + 1) % slides.length), 7000); return () => clearInterval(t); }, [paused, rm]);
  const cur = slides[k];
  return <>
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">{slides.map((im, i) => (Math.abs(i - k) <= 1 || (k === slides.length - 1 && i === 0)) && <div key={im.src} className={`kb ${i === k ? 'on' : ''}`}>
      <img src={asset(im.src)} srcSet={`${asset(im.src.replace(".webp", "-md.webp"))} 760w, ${asset(im.src)} ${im.w}w`} sizes="100vw" alt="" width={im.w} height={im.h} loading={i === 0 ? 'eager' : 'lazy'} {...(i === 0 ? { fetchPriority: 'high' } : { decoding: 'async' })} />
    </div>)}</div>
    <div className="hero-shade absolute inset-0" aria-hidden="true" />
    <div className="absolute bottom-3 left-3 z-10 flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full bg-black/70 py-1 pe-3 ps-1 text-sm text-[#f6efe1]">
      <button type="button" onClick={() => setPaused(p => !p)} aria-label={paused ? 'تشغيل عرض الصور' : 'إيقاف عرض الصور مؤقتًا'} className="grid size-8 place-items-center rounded-full hover:bg-white/15">{paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}</button>
      <Link to={`book/${cur.handle}/`} className="truncate hover:underline">{cur.caption} — من كتاب «{short(cur.handle)}»</Link>
    </div>
  </>;
}
function Marquee() {
  const row = [...inside, ...inside];
  return <section aria-labelledby="inside-h" className="marquee-wrap overflow-hidden border-y border-[var(--border)] bg-[var(--surface-raised)] py-6">
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6"><h2 id="inside-h" className="text-xl sm:text-2xl">من داخل الكتب</h2><p className="mt-1 text-[var(--text-muted)]">صور وخرائط ووثائق من صفحات إصداراتنا. اضغط على أي صورة لتصل إلى كتابها.</p></div>
    <ul className="marquee mt-4 flex w-max gap-4 px-4">{row.map((im, i) => <li key={i} aria-hidden={i >= inside.length || undefined} className="w-56 shrink-0 sm:w-64">
      <Link to={`book/${im.handle}/`} tabIndex={i >= inside.length ? -1 : undefined} className="group block">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--muted)]"><img src={asset(im.sm)} alt={`${im.caption}، من كتاب ${short(im.handle)}`} width={480} height={360} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
        <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">{im.caption}</p>
        <p className="clamp-1 text-sm text-[var(--text-muted)] group-hover:text-[var(--accent)]">من «{short(im.handle)}»</p>
      </Link></li>)}</ul>
  </section>;
}
export default function Home() {
  const fe = featured.map(byHandle).filter(Boolean) as Book[];
  const hero = newest()[0];
  const nw = newest().slice(0, 12);
  const pick = fe.filter(b => !nw.includes(b)).slice(0, 10);
  return <main id="main">
    <section className="relative isolate overflow-hidden bg-[var(--hero-bg)] text-[#f6efe1]">
      <Slides />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-4 pb-20 pt-14 sm:px-6 md:grid-cols-[1.3fr_1fr] md:pb-24 md:pt-20">
        <div>
          <LogoMark className="h-16 w-[76px] text-[#e2b866]" />
          <h1 className="mt-5 text-4xl leading-tight text-[#f6efe1] sm:text-5xl">إصدارات مؤسسة الكود لنشر الكتب</h1>
          <p className="mt-4 max-w-xl text-lg leading-9 text-[#efe5cf]">{books.length} كتابًا في تاريخ الخليج العربي والظفرة وأبوظبي وأدب الرحلات والشعر. تصفّح الكتب، وأضفها إلى السلة، وأتمّ الدفع على متجر الكود الرسمي.</p>
          <div className="mt-7 flex flex-wrap gap-3"><Link to="books/" className="store-btn !px-6 !py-3 text-lg">تصفّح كل الكتب</Link>{collections[0] && <Link to={`collection/${collections[0].handle}/`} className="ghost-btn !border-white/50 !bg-black/30 !text-[#f6efe1] hover:!bg-black/50">{collections[0].title}</Link>}</div>
        </div>
        {hero && <div className="book-card group">
          <p className="kicker !text-[#e2b866]">أحدث إصدار</p>
          <Link to={`book/${hero.handle}/`} className="mx-auto mt-3 block max-w-[340px]"><Cover b={hero} size="lg" eager float /></Link>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-black/55 p-3"><div><h2 className="text-xl text-[#f6efe1]"><Link to={`book/${hero.handle}/`} className="hover:underline">{hero.title}</Link></h2><p className="text-[#efe5cf]">{fmtPrice(hero.price)}</p></div><AddButton b={hero} className="!bg-[#e2b866] !text-[#1b1712]" /></div>
        </div>}
      </div>
    </section>
    <Sadu />
    <Marquee />
    <div className="mx-auto max-w-[1320px] px-4 pt-10 sm:px-6"><TrustStrip /></div>
    <ShelfCards />
    <OtherThemes />
    <AuthorTeaser />
    <Shelves />
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6"><RecentRow /></div>
    <HowToOrder />
    {pick.length > 0 && <section aria-labelledby="fe" className="mx-auto max-w-[1320px] px-4 pt-14 sm:px-6">
      <div className="flex items-end justify-between gap-3"><h2 id="fe" className="text-2xl sm:text-3xl">مختارات المتجر</h2><Link to="books/" className="font-semibold text-[var(--accent)] hover:underline">كل الكتب</Link></div>
      <div className="mt-5"><Carousel items={pick} label="مختارات المتجر" /></div>
    </section>}
  </main>;
}
