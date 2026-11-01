import { Link } from '../router';
import data from '../../generated/store.json';
import { books, collections, featured, newest, byHandle, fmtPrice, asset, type Book } from '../data';
import { Carousel, Cover, AddButton, RecentRow } from '../ui';
import { LogoMark } from '../art';
import { AuthorTeaser } from './Author';
import { Shelves, TrustStrip } from '../extras3';
import { ShelfCards, HowToOrder } from '../extras5';
import { OtherThemes, Sadu } from '../extras6';
import { FollowCTA } from '../extras7';
type Inside = { src: string; sm: string; w: number; h: number; caption: string; handle: string };
const inside = (data as any).inside as Inside[];
const short = (h: string) => (byHandle(h)?.title || '').split(/[:،(]/)[0].trim();

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
  const fan = newest().slice(0, 3);
  const pick = fe.filter(b => !nw.includes(b)).slice(0, 10);
  return <main id="main">
    <section className="hero2 relative isolate overflow-hidden text-[#f6efe1]">
      <div className="hero2-grain" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1.15fr_1fr] md:pb-24 md:pt-20">
        <div className="hero2-copy min-w-0">
          <LogoMark className="h-14 w-[66px] text-[#e2b866]" />
          <h1 className="hero-title mt-5 text-[2.35rem] leading-[1.3] text-[#f6efe1] sm:text-6xl">إصدارات مؤسسة الكود لنشر الكتب</h1>
          <p className="mt-4 max-w-xl text-lg leading-9 text-[#efe5cf]">{books.length} كتابًا في تاريخ الخليج العربي والظفرة وأبوظبي وأدب الرحلات والشعر. تصفّح الكتب، وأضفها إلى السلة، وأتمّ الدفع على متجر الكود الرسمي.</p>
          <div className="mt-7 flex flex-wrap gap-3"><Link to="books/" className="store-btn !px-6 !py-3 text-lg">تصفّح كل الكتب</Link>{hero && <Link to={`book/${hero.handle}/`} className="ghost-btn !border-white/40 !text-[#f6efe1] hover:!bg-white/10">أحدث إصدار</Link>}</div>
          <dl className="hero2-stats mt-9 grid max-w-md grid-cols-2 gap-3">
            <div><dt>كتابًا</dt><dd>{books.length}</dd></div>
            <div><dt>تصنيفات</dt><dd>{collections.length}</dd></div>
          </dl>
        </div>
        {fan.length > 0 && <div className="hero2-fan" aria-label="أحدث الإصدارات">
          {fan.map((b, i) => <Link key={b.handle} to={`book/${b.handle}/`} className={`fan-${i}`} aria-label={b.title}><Cover b={b} size="lg" eager={i === 0} /></Link>)}
          {hero && <div className="hero2-tag"><p className="text-sm text-[#e2b866]">أحدث إصدار</p><p className="clamp-1 font-semibold"><Link to={`book/${hero.handle}/`} className="hover:underline">{hero.title}</Link></p><div className="mt-2 flex items-center justify-between gap-3"><span>{fmtPrice(hero.price)}</span><AddButton b={hero} className="!bg-[#e2b866] !text-[#1b1712]" /></div></div>}
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
    <FollowCTA />
  </main>;
}
