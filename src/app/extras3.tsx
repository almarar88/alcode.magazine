import { ShieldCheck, Truck, Wallet, BadgeCheck } from 'lucide-react';
import { Link } from './router';
import data from '../generated/store.json';
import A from '../../content/author.json';
import { books, collections, collectionTitle, asset, newest, type Book } from './data';
import { Carousel } from './ui';
import { Portrait, AUTHOR } from './pages/Author';

type Inside = { src: string; sm: string; w: number; h: number; caption: string; handle: string };
const inside = (data as any).inside as Inside[];
const dateAr = (s: string) => new Date(s).toLocaleDateString('ar-AE-u-nu-latn', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Dubai' });

/** Specs built only from real Shopify fields. */
export function Specs({ b }: { b: Book }) {
  const ed = b.tags.find(t => t.startsWith('الطبعة'));
  const other = b.tags.filter(t => t !== ed && !b.collections.some(c => collectionTitle(c) === t));
  const imgs = inside.filter(i => i.handle === b.handle).length;
  const rows: [string, React.ReactNode][] = [
    ['المؤلف', b.author === AUTHOR ? <Link to="author/" className="font-semibold text-[var(--accent)] hover:underline">{b.author}</Link> : b.author],
    ['نوع المنتج', b.type || 'كتاب'],
    ...(ed ? [['الطبعة', ed] as [string, string]] : []),
    ...(b.collections.length ? [['التصنيف', <span className="flex flex-wrap gap-2">{b.collections.map(c => <Link key={c} to={`collection/${c}/`} className="chip">{collectionTitle(c)}</Link>)}</span>] as [string, React.ReactNode]] : []),
    ...(other.length ? [['الوسوم', other.join('، ')] as [string, string]] : []),
    ['أُضيف إلى المتجر', dateAr(b.published)],
    ['التوفّر', b.available ? 'متوفر للطلب' : 'غير متوفر حاليًا'],
    ...(imgs ? [['صور من الداخل', `${imgs} في هذه الصفحة`] as [string, string]] : []),
  ];
  return <section aria-labelledby="specs-h" className="mt-8">
    <h2 id="specs-h" className="text-xl">تفاصيل الكتاب</h2>
    <dl data-testid="specs" className="specs mt-3 grid grid-cols-[auto_1fr] gap-x-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-2">
      {rows.map(([k, v]) => <div key={k} className="contents"><dt className="border-b border-[var(--border)] py-2.5 font-semibold text-[var(--text-muted)]">{k}</dt><dd className="border-b border-[var(--border)] py-2.5">{v}</dd></div>)}
    </dl>
  </section>;
}

export function TrustStrip({ compact = false, col = false }: { compact?: boolean; col?: boolean }) {
  const items = [
    [ShieldCheck, 'دفع آمن', 'يتم الدفع عبر متجر الكود الرسمي على Shopify'],
    [Truck, 'شحن ثابت 25 د.إ.', 'رسوم واحدة لكل طلب مهما كان عدد الكتب'],
    [Wallet, 'بلا ضرائب إضافية', 'السعر المعروض + الشحن هو ما تدفعه'],
    [BadgeCheck, 'إصدارات أصلية', 'من منشورات مؤسسة الكود لنشر الكتب'],
  ] as const;
  return <ul data-testid="trust" aria-label="مزايا الشراء" className={`trust grid gap-3 ${col ? 'mt-4' : compact ? 'mt-5 sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
    {items.map(([I, t, d]) => <li key={t} className="trust-item flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3.5">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--accent-subtle)] text-[var(--accent)]"><I size={20} aria-hidden="true" /></span>
      <span><b className="block text-[1.02rem]">{t}</b><span className="text-sm leading-6 text-[var(--text-secondary)]">{d}</span></span></li>)}
  </ul>;
}

export function AuthorBlock({ b }: { b: Book }) {
  if (b.author !== AUTHOR) return null;
  const n = books.filter(x => x.author === AUTHOR).length;
  return <section aria-labelledby="ab-h" data-testid="author-block" className="pt-14">
    <div className="grid items-center gap-5 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 sm:grid-cols-[140px_1fr] sm:p-7">
      <Link to="author/" tabIndex={-1} aria-hidden="true" className="mx-auto block w-28 overflow-hidden rounded-[1.25rem] border-4 border-[var(--accent)]/40 sm:w-full"><Portrait sizes="140px" className="aspect-[720/829] w-full transition-transform duration-500 hover:scale-105" /></Link>
      <div><p className="kicker">عن المؤلف</p><h2 id="ab-h" className="mt-1 text-2xl">{A.name}</h2><p className="mt-1 font-semibold text-[var(--accent)]">{A.title.replace(/\.$/, '')}</p>
        <p className="mt-2 leading-8 text-[var(--text-secondary)] clamp-3">{A.bio.split('. ')[0]}.</p>
        <div className="mt-3 flex flex-wrap items-center gap-3"><Link to="author/" className="ink-btn">سيرة المؤلف</Link><span className="chip">{n} كتابًا في المتجر</span></div></div>
    </div>
  </section>;
}

export function InsideBook({ b }: { b: Book }) {
  const im = inside.filter(i => i.handle === b.handle);
  if (!im.length) return null;
  return <section aria-labelledby="ib-h" data-testid="inside-book" className="pt-14">
    <h2 id="ib-h" className="text-2xl sm:text-3xl">من داخل الكتاب</h2>
    <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{im.map(i => <li key={i.src}><figure>
      <a href={asset(i.src)} target="_blank" rel="noopener" className="block aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--muted)]"><img src={asset(i.sm)} alt={i.caption} width={480} height={360} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></a>
      <figcaption className="mt-2 text-sm font-semibold">{i.caption}</figcaption></figure></li>)}</ul>
  </section>;
}

/** Other books from the book's first collection. */
export function SameCollection({ b, exclude = [] }: { b: Book; exclude?: string[] }) {
  const c = b.collections[0]; if (!c) return null;
  const items = books.filter(x => x.handle !== b.handle && x.collections.includes(c) && !exclude.includes(x.handle));
  if (!items.length) return null;
  return <section aria-labelledby="sc-h" data-testid="same-collection" className="pt-14">
    <div className="flex items-end justify-between gap-3"><h2 id="sc-h" className="text-2xl sm:text-3xl">المزيد من «{collectionTitle(c)}»</h2><Link to={`collection/${c}/`} className="font-semibold text-[var(--accent)] hover:underline">عرض التصنيف</Link></div>
    <div className="mt-3"><Carousel items={items} label={`المزيد من ${collectionTitle(c)}`} /></div>
  </section>;
}

/** Curated shelves: one per real Shopify collection, plus newest. */
export function Shelves() {
  const shelves = [
    { key: 'new', title: 'وصل حديثًا', to: 'books/?sort=new', items: newest().slice(0, 12), sub: 'أحدث ما أُضيف إلى المتجر' },
    ...collections.map(c => ({ key: c.handle, title: c.title, to: `collection/${c.handle}/`, items: books.filter(b => b.collections.includes(c.handle)), sub: `${c.count} ${Number(c.count) > 10 ? 'كتابًا' : 'كتب'}` })),
  ].filter(s => s.items.length);
  return <div data-testid="shelves">{shelves.map(s => <section key={s.key} aria-labelledby={`sh-${s.key}`} className="shelf mx-auto max-w-[1320px] px-4 pt-14 sm:px-6">
    <div className="flex items-end justify-between gap-3"><div><h2 id={`sh-${s.key}`} className="text-2xl sm:text-3xl">{s.title}</h2><p className="mt-1 text-[var(--text-muted)]">{s.sub}</p></div><Link to={s.to} className="font-semibold text-[var(--accent)] hover:underline">عرض الكل</Link></div>
    <div className="mt-3"><Carousel items={s.items} label={s.title} /></div>
    <div aria-hidden="true" className="shelf-board" />
  </section>)}</div>;
}
