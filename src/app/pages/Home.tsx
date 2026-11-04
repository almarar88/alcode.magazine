import { Link } from '../router';
import data from '../../generated/store.json';
import { books, featured, newest, byHandle, asset, type Book } from '../data';
import { Carousel, RecentRow, SecHead } from '../ui';
import { AuthorTeaser } from './Author';
import { Shelves, TrustStrip } from '../extras3';
import { ShelfCards, HowToOrder } from '../extras5';
import { OtherThemes, Sadu } from '../extras6';
import { FollowCTA } from '../extras7';
import { Hero3, CoverRibbon, Bento, BigType, ScrollFilament, useV3Reveal } from '../v3';
type Inside = { src: string; sm: string; w: number; h: number; caption: string; handle: string };
const inside = (data as any).inside as Inside[];
const short = (h: string) => (byHandle(h)?.title || '').split(/[:،(]/)[0].trim();
function Marquee() {
  const row = [...inside, ...inside];
  return <section aria-labelledby="inside-h" className="marquee-wrap overflow-hidden border-y border-[var(--border)] bg-[var(--surface-raised)] py-6">
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6"><SecHead id="inside-h" title="من داخل الكتب" sub="صور وخرائط ووثائق من صفحات إصداراتنا. اضغط على أي صورة لتصل إلى كتابها." /></div>
    <ul className="marquee mt-4 flex w-max gap-4 px-4">{row.map((im, i) => <li key={i} aria-hidden={i >= inside.length || undefined} className="w-56 shrink-0 sm:w-64">
      <Link to={`book/${im.handle}/`} tabIndex={i >= inside.length ? -1 : undefined} className="group block">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--muted)]"><img src={asset(im.sm)} alt={`${im.caption}، من كتاب ${short(im.handle)}`} width={480} height={360} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
        <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">{im.caption}</p>
        <p className="clamp-1 text-sm text-[var(--text-muted)] group-hover:text-[var(--accent)]">من «{short(im.handle)}»</p>
      </Link></li>)}</ul>
  </section>;
}
export default function Home() {
  useV3Reveal();
  const fe = featured.map(byHandle).filter(Boolean) as Book[];
  const nw = newest().slice(0, 12);
  const pick = fe.filter(b => !nw.includes(b)).slice(0, 10);
  return <main id="main" className="home-flow">
    <ScrollFilament />
    <Hero3 />
    <CoverRibbon />
    <Sadu />
    <section aria-labelledby="new-h" className="home-block mx-auto max-w-[1320px] px-4 sm:px-6">
      <SecHead id="new-h" title="وصل حديثًا" to="books/?sort=new" sub="أحدث ما أُضيف إلى المتجر" />
      <div className="mt-4"><Carousel items={nw} label="وصل حديثًا" /></div>
    </section>
    <div className="home-block mx-auto max-w-[1320px] px-4 sm:px-6"><TrustStrip /></div>
    <Bento />
    <ShelfCards />
    <OtherThemes />
    <Marquee />
    <AuthorTeaser />
    <Shelves skip={['new']} />
    <div className="home-block mx-auto max-w-[1320px] px-4 sm:px-6"><RecentRow /></div>
    <HowToOrder />
    {pick.length > 0 && <section aria-labelledby="fe" className="home-block mx-auto max-w-[1320px] px-4 sm:px-6">
      <SecHead id="fe" title="مختارات المتجر" to="books/" more="كل الكتب" />
      <div className="mt-4"><Carousel items={pick} label="مختارات المتجر" /></div>
    </section>}
    <BigType />
    <FollowCTA />
  </main>;
}
