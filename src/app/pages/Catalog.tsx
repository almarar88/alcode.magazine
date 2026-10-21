import { useEffect, useMemo, useState } from 'react';
import { books, collections, collectionTitle, type Book } from '../data';
import { Grid, PageHead } from '../ui';
import { navigate } from '../router';
const norm = (s: string) => s.toLowerCase().replace(/[\u064B-\u0652\u0640]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
const SORTS = [{ v: 'featured', l: 'الترتيب الافتراضي' }, { v: 'new', l: 'الأحدث' }, { v: 'price-asc', l: 'السعر: من الأقل' }, { v: 'price-desc', l: 'السعر: من الأعلى' }, { v: 'title', l: 'العنوان (أ–ي)' }];
export default function Catalog({ collection }: { collection?: string }) {
  const [q, setQ] = useState(''); const [c, setC] = useState(collection || ''); const [sort, setSort] = useState('featured'); const [stock, setStock] = useState(false);
  useEffect(() => { const p = new URLSearchParams(location.search); setQ(p.get('q') || ''); if (!collection) setC(p.get('c') || ''); setSort(p.get('sort') || 'featured'); setStock(p.get('stock') === '1'); }, [collection]);
  useEffect(() => { const p = new URLSearchParams(); if (q) p.set('q', q); if (c && !collection) p.set('c', c); if (sort !== 'featured') p.set('sort', sort); if (stock) p.set('stock', '1'); const s = p.toString(); history.replaceState(null, '', location.pathname + (s ? '?' + s : '')); }, [q, c, sort, stock]);
  const items = useMemo(() => {
    const n = norm(q.trim());
    let r: Book[] = books.filter(b => (!c || b.collections.includes(c)) && (!stock || b.available) && (!n || norm([b.title, b.author, ...b.tags, ...b.description].join(' ')).includes(n)));
    const s = [...r];
    if (sort === 'new') s.sort((a, b) => b.published.localeCompare(a.published));
    if (sort === 'price-asc') s.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') s.sort((a, b) => b.price - a.price);
    if (sort === 'title') s.sort((a, b) => a.title.localeCompare(b.title, 'ar'));
    return s;
  }, [q, c, sort, stock]);
  const col = collections.find(x => x.handle === (collection || c));
  return <main id="main">
    <PageHead kicker={collection ? 'تصنيف' : 'المتجر'} title={collection ? collectionTitle(collection) : 'كل الكتب'} desc={collection ? col?.description[0] : `جميع إصدارات مؤسسة الكود: ${books.length} كتابًا.`} />
    <div className="mx-auto max-w-[1320px] px-4 pt-8 sm:px-6">
      <form role="search" onSubmit={e => e.preventDefault()} className="grid gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 sm:grid-cols-2 lg:grid-cols-[2fr_1.2fr_1fr_auto] lg:items-end">
        <div><label htmlFor="q" className="field-label">ابحث بالعنوان أو المؤلف أو الموضوع</label><input id="q" type="search" value={q} onChange={e => setQ(e.target.value)} className="field-input" placeholder="مثال: الظفرة، الكويت، رحلة" /></div>
        <div><label htmlFor="c" className="field-label">التصنيف</label><select id="c" value={collection || c} onChange={e => collection ? navigate(e.target.value ? `collection/${e.target.value}/` : 'books/') : setC(e.target.value)} className="field-input">
          <option value="">كل التصنيفات</option>{collections.map(x => <option key={x.handle} value={x.handle}>{x.title} ({x.count})</option>)}</select></div>
        <div><label htmlFor="s" className="field-label">الترتيب</label><select id="s" value={sort} onChange={e => setSort(e.target.value)} className="field-input">{SORTS.map(x => <option key={x.v} value={x.v}>{x.l}</option>)}</select></div>
        <label className="flex items-center gap-2 py-3 font-semibold"><input type="checkbox" checked={stock} onChange={e => setStock(e.target.checked)} className="size-5 accent-[var(--accent)]" />المتوفر فقط</label>
      </form>
      <p className="mt-5 text-[var(--text-muted)]" aria-live="polite">{items.length ? `${items.length} ${items.length === 1 ? 'كتاب' : items.length <= 10 ? 'كتب' : 'كتابًا'}` : 'لا توجد كتب مطابقة. جرّب كلمة أخرى أو تصنيفًا آخر.'}</p>
      <div className="mt-4"><Grid items={items} eager={4} /></div>
    </div>
  </main>;
}
