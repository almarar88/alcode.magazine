import { Link } from '../router';
import { books, collections, featured, newest, byHandle, fmtPrice, type Book } from '../data';
import { Grid, Cover, AddButton } from '../ui';
import { LogoMark } from '../art';
export default function Home() {
  const fe = featured.map(byHandle).filter(Boolean) as Book[];
  const hero = newest()[0];
  const nw = newest().slice(0, 8);
  const pick = fe.filter(b => !nw.includes(b)).slice(0, 8);
  return <main id="main">
    <section className="bg-[var(--hero-bg)] text-[#f6efe1]"><div className="pattern"><div className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr] md:py-20">
      <div>
        <LogoMark className="h-16 w-[76px] text-[#e2b866]" />
        <h1 className="mt-5 text-4xl leading-tight text-[#f6efe1] sm:text-5xl">إصدارات مؤسسة الكود لنشر الكتب</h1>
        <p className="mt-4 max-w-xl text-lg leading-9 text-[#e0d4bb]">{books.length} كتابًا في تاريخ الخليج العربي والظفرة وأبوظبي وأدب الرحلات والشعر. تصفّح الكتب، وأضفها إلى السلة، وأتمّ الدفع على متجر الكود الرسمي.</p>
        <div className="mt-7 flex flex-wrap gap-3"><Link to="books/" className="store-btn !px-6 !py-3 text-lg">تصفّح كل الكتب</Link>{collections[0] && <Link to={`collection/${collections[0].handle}/`} className="ghost-btn !border-white/40 !text-[#f6efe1] hover:!bg-white/10">{collections[0].title}</Link>}</div>
      </div>
      {hero && <div className="rounded-3xl border border-white/15 bg-white/5 p-4">
        <p className="kicker !text-[#e2b866]">أحدث إصدار</p>
        <Link to={`book/${hero.handle}/`} className="mt-3 block"><Cover b={hero} size="lg" eager /></Link>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-xl text-[#f6efe1]"><Link to={`book/${hero.handle}/`} className="hover:underline">{hero.title}</Link></h2><p className="text-[#e0d4bb]">{fmtPrice(hero.price)}</p></div><AddButton b={hero} className="!bg-[#e2b866] !text-[#1b1712]" /></div>
      </div>}
    </div></div></section>
    <section aria-labelledby="cats" className="mx-auto max-w-[1320px] px-4 pt-12 sm:px-6">
      <h2 id="cats" className="text-2xl sm:text-3xl">التصنيفات</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{collections.map(c => <li key={c.handle}><Link to={`collection/${c.handle}/`} className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 lift hover:border-[var(--accent)]">
        <span className="text-lg font-bold">{c.title}</span><span className="mt-1 text-sm text-[var(--text-muted)]">{c.count} {c.count > 10 ? 'كتابًا' : 'كتب'}</span>
      </Link></li>)}</ul>
    </section>
    <section aria-labelledby="new" className="mx-auto max-w-[1320px] px-4 pt-14 sm:px-6">
      <div className="flex items-end justify-between gap-3"><h2 id="new" className="text-2xl sm:text-3xl">وصل حديثًا</h2><Link to="books/?sort=new" className="font-semibold text-[var(--accent)] hover:underline">عرض الكل</Link></div>
      <div className="mt-5"><Grid items={nw} /></div>
    </section>
    {pick.length > 0 && <section aria-labelledby="fe" className="mx-auto max-w-[1320px] px-4 pt-14 sm:px-6">
      <div className="flex items-end justify-between gap-3"><h2 id="fe" className="text-2xl sm:text-3xl">مختارات المتجر</h2><Link to="books/" className="font-semibold text-[var(--accent)] hover:underline">كل الكتب</Link></div>
      <div className="mt-5"><Grid items={pick} /></div>
    </section>}
  </main>;
}
