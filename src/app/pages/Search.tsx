import { useEffect, useMemo, useState } from 'react';
import { SearchField } from '@/registry/components/search-field/search-field';
import { posts, tags, categories, arNum } from '../data';
import { ArticleCard } from '../cards';
import { Link } from '../router';
import { PageHero } from './Listing';
const norm = (s: string) => s.toLowerCase().replace(/[\u064B-\u0652\u0640]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
export default function Search() {
  const [q, setQ] = useState(() => new URLSearchParams(location.search).get('q') || '');
  useEffect(() => { const u = new URL(location.href); if (q) u.searchParams.set('q', q); else u.searchParams.delete('q'); history.replaceState(null, '', u); }, [q]);
  const res = useMemo(() => { const n = norm(q.trim()); if (!n) return posts; const words = n.split(/\s+/);
    return posts.map(p => { const hay = norm([p.title, p.excerpt, p.tags.join(' '), p.category, p.author, p.body].join(' ')); const title = norm(p.title);
      const score = words.reduce((s, w) => s + (hay.includes(w) ? 1 : 0) + (title.includes(w) ? 2 : 0), 0); return { p, score, all: words.every(w => hay.includes(w)) }; })
      .filter(x => x.all).sort((a, b) => b.score - a.score).map(x => x.p); }, [q]);
  return <main id="main">
    <PageHero kicker="البحث" title="ابحث في المجلة" desc="يبحث في العناوين والملخصات والوسوم والنصوص. يتجاهل التشكيل والهمزات.">
      <div className="search-ar mt-6 max-w-xl"><SearchField label="كلمة البحث" value={q} onValueChange={setQ} placeholder="مثال: المحرر، النشر…" autoFocus /></div>
      <div className="mt-4 flex flex-wrap gap-2">{[...categories.map(c => c.name), ...tags.filter(t => t.count).map(t => t.name)].slice(0, 10).map(s => <button key={s} type="button" className="chip" onClick={() => setQ(s)}>{s}</button>)}</div>
    </PageHero>
    <div className="mx-auto max-w-[1320px] px-4 pt-10 sm:px-6">
      <p className="mb-6 text-[var(--text-muted)]" aria-live="polite">{q ? `${arNum(res.length)} نتيجة لـ «${q}»` : `كل المقالات (${arNum(res.length)})`}</p>
      {res.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{res.map((p, i) => <ArticleCard key={p.slug} p={p} i={i} />)}</div>
        : <p className="rounded-2xl border border-dashed border-[var(--border-strong)] p-10 text-center">لا نتائج. جرّب كلمة أخرى أو <Link to="" className="text-[var(--accent)] underline">عد إلى الرئيسية</Link>.</p>}
    </div>
  </main>;
}
