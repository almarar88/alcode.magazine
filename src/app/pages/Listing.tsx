import { useMemo, useState } from 'react';
import { ArrowDownWideNarrow } from 'lucide-react';
import { InViewTitle } from '@/registry/components/in-view-title/in-view-title';
import { posts, categories, tags, tagSlug, arNum } from '../data';
import { ArticleCard } from '../cards';
import { Link } from '../router';
import { StarOrnament } from '../art';
import NotFound from './NotFound';

export function PageHero({ kicker, title, desc, children }: { kicker: string; title: string; desc?: string; children?: React.ReactNode }) {
  return <header className="paper relative overflow-hidden border-b border-[var(--border)]">
    <StarOrnament className="pointer-events-none absolute -left-24 -top-24 size-80 text-[var(--accent)] opacity-20" />
    <div className="relative mx-auto max-w-[1320px] px-4 pb-12 pt-14 sm:px-6">
      <p className="kicker">{kicker}</p>
      <InViewTitle as="h1" variant="word" text={title} className="mt-2 text-[clamp(2.2rem,6vw,4.2rem)] font-black leading-tight" />
      {desc && <p className="mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">{desc}</p>}
      {children}
    </div>
  </header>;
}
export default function Listing({ kind, slug }: { kind: 'category' | 'tag'; slug: string }) {
  const [order, setOrder] = useState<'new' | 'old'>('new');
  const cat = kind === 'category' ? categories.find(c => c.slug === slug) : undefined;
  const tag = kind === 'tag' ? tags.find(t => t.slug === slug) ?? { name: slug.replace(/-/g, ' '), slug } : undefined;
  const list = useMemo(() => {
    const l = posts.filter(p => cat ? p.category === cat.name : p.tags.some(t => tagSlug(t) === slug));
    return order === 'new' ? l : [...l].reverse();
  }, [slug, order]);
  if (kind === 'category' && !cat) return <NotFound />;
  return <main id="main">
    <PageHero kicker={cat ? 'قسم' : 'وسم'} title={cat ? cat.name : `#${tag!.name}`} desc={cat?.blurb || `المقالات الموسومة بـ «${tag!.name}».`}>
      <div className="mt-6 flex flex-wrap gap-2">
        {kind === 'category' ? categories.map(c => <Link key={c.slug} to={`category/${c.slug}/`} aria-current={c.slug === slug ? 'page' : undefined} className={`chip ${c.slug === slug ? '!border-[var(--accent)] !bg-[var(--accent)] !text-[var(--accent-foreground)]' : ''}`}>{c.name}</Link>)
          : tags.filter(t => t.count).map(t => <Link key={t.slug} to={`tag/${t.slug}/`} className={`chip ${t.slug === slug ? '!border-[var(--accent)] !text-[var(--accent)]' : ''}`}>#{t.name} <span className="text-xs">({arNum(t.count)})</span></Link>)}
      </div>
    </PageHero>
    <div className="mx-auto max-w-[1320px] px-4 pt-10 sm:px-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <p className="text-[var(--text-muted)]" aria-live="polite">{list.length ? `${arNum(list.length)} مقال` : 'لا توجد مقالات بعد'}</p>
        {list.length > 1 && <button type="button" className="ghost-btn" onClick={() => setOrder(o => o === 'new' ? 'old' : 'new')}><ArrowDownWideNarrow size={16} aria-hidden="true" /> {order === 'new' ? 'الأحدث أولاً' : 'الأقدم أولاً'}</button>}
      </div>
      {list.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((p, i) => <ArticleCard key={p.slug} p={p} i={i} />)}</div>
        : <div className="grid place-items-center rounded-[28px] border border-dashed border-[var(--border-strong)] bg-[var(--card)] px-6 py-16 text-center">
          <StarOrnament className="size-24 text-[var(--accent)]" />
          <h2 className="mt-4 text-2xl">هذا القسم ينتظر أول مقال</h2>
          <p className="mt-2 max-w-md text-[var(--text-muted)]">اكتب مقالاً واختر هذا القسم في بياناته، ثم انشر الملف.</p>
          <Link to="write/" className="ink-btn mt-6">اكتب مقالاً</Link>
        </div>}
    </div>
  </main>;
}
