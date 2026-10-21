import { motion } from 'motion/react';
import { travelers, bySlug, asset, arNum, type Post } from '../data';
import { ArticleCard } from '../cards';
import { Link } from '../router';
import { PageHero } from './Listing';
import NotFound from './NotFound';
import { useEffect } from 'react';

export function TravelersIndex() {
  return <main id="main"><PageHero kicker="الرحالة والكتب" title="رحّالة المجلة وكتبهم" desc="صفحة لكل رحالة أو كتاب، فيها ما تقوله مقالات المجلة عنه، ومقالاته، وصوره." />
    <div className="mx-auto grid max-w-[1320px] gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">{travelers.map((t, i) => {
      const first = bySlug(t.posts[0]);
      return <motion.div key={t.slug} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * .05 }}>
        <Link to={`traveler/${t.slug}/`} className="trav-card group block overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)]">
          {first?.cover && <img src={asset(first.cover)} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105" />}
          <div className="p-5"><h2 className="text-xl">{t.name}</h2><p className="mt-1 text-sm text-[var(--text-muted)]">«{t.book}» · {arNum(t.posts.length)} {t.posts.length > 2 ? 'مقالات' : t.posts.length === 2 ? 'مقالان' : 'مقال'}</p></div>
        </Link></motion.div>; })}</div></main>;
}
export default function Traveler({ slug }: { slug: string }) {
  const t = travelers.find(x => x.slug === slug);
  useEffect(() => { if (t) document.title = `${t.name} — مجلة الكود الرقمية`; }, [t]);
  if (!t) return <NotFound />;
  const ps = t.posts.map(bySlug).filter(Boolean) as Post[];
  return <main id="main">
    <PageHero kicker="رحالة وكتاب" title={t.name} desc={`كتاب «${t.book}»`}><p className="mt-3"><Link to="travelers/" className="chip">كل الرحالة والكتب</Link></p></PageHero>
    <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6">
      {t.bio.length > 0 && <section aria-labelledby="bio" className="max-w-3xl">
        <h2 id="bio" className="text-2xl">من مقالات المجلة</h2>
        <div className="mt-4 space-y-4">{t.bio.map((b, i) => { const p = bySlug(b.slug); return <motion.blockquote key={i} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border-s-4 border-[var(--accent)] ps-4 text-lg leading-9 text-[var(--text-secondary)]">
          {b.text}{p && <footer className="mt-1 text-sm text-[var(--text-muted)]">من مقال: <Link to={`article/${p.slug}/`} className="text-[var(--accent)] hover:underline">{p.title}</Link></footer>}</motion.blockquote>; })}</div>
      </section>}
      <section aria-labelledby="arts" className="mt-12"><div className="rule-orn mb-8"><h2 id="arts" className="text-2xl">المقالات ({arNum(ps.length)})</h2></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{ps.map((p, i) => <ArticleCard key={p.slug} p={p} i={i} />)}</div></section>
      {t.images.length > 0 && <section aria-labelledby="imgs" className="mt-14"><div className="rule-orn mb-8"><h2 id="imgs" className="text-2xl">صور من مقالاته</h2></div>
        <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">{t.images.map((im, i) => <motion.li key={im.src} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * .06 }} className="mb-4 break-inside-avoid">
          <Link to={`article/${im.slug}/`} className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"><img src={asset(im.src)} alt={im.alt} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-[1.03]" />
            {im.cap && <p className="p-3 text-sm leading-7 text-[var(--text-secondary)]">{im.cap}</p>}</Link></motion.li>)}</ul></section>}
    </div></main>;
}
