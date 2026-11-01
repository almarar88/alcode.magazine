import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, SlidersHorizontal, X } from 'lucide-react';
import { books, collections, collectionTitle, type Book } from '../data';
import { Grid, PageHead, ViewToggle, useView } from '../ui';
import { Link } from '../router';
import { navigate } from '../router';
import { smartSearch } from '../search';
const norm = (s: string) => s.toLowerCase().replace(/[\u064B-\u0652\u0640]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
// price bands derived from the real catalog prices
const PR = books.map(b => b.price).sort((a, b) => a - b); const lo = PR[Math.floor(PR.length / 3)], hi = PR[Math.floor(PR.length * 2 / 3)];
const PRICES = [{ v: '', l: 'كل الأسعار' }, { v: `0-${lo}`, l: `حتى ${lo} د.إ.` }, { v: `${lo}-${hi}`, l: `${lo}–${hi} د.إ.` }, { v: `${hi}-9999`, l: `${hi} د.إ. فأكثر` }];
const inPrice = (p: number, r: string) => { if (!r) return true; const [a, b] = r.split('-').map(Number); return p >= a && p <= b; };
const SORTS = [{ v: 'featured', l: 'الترتيب الافتراضي' }, { v: 'new', l: 'الأحدث' }, { v: 'price-asc', l: 'السعر: من الأقل' }, { v: 'price-desc', l: 'السعر: من الأعلى' }, { v: 'title', l: 'العنوان (أ–ي)' }];
export default function Catalog({ collection }: { collection?: string }) {
  const [q, setQ] = useState(''); const [cs, setCs] = useState<string[]>([]); const c = collection || ''; const [sort, setSort] = useState('featured'); const [stock, setStock] = useState(false); const [view, setView] = useView(); const [price, setPrice] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false); const launchRef = useRef<HTMLButtonElement>(null);
  const closeFilters = () => { setFiltersOpen(false); requestAnimationFrame(() => launchRef.current?.focus()); };
  useEffect(() => { const p = new URLSearchParams(location.search); setQ(p.get('q') || ''); if (!collection) setCs((p.get('c') || '').split(',').filter(x => collections.some(y => y.handle === x))); setSort(p.get('sort') || 'featured'); setStock(p.get('stock') === '1'); setPrice(p.get('price') || ''); }, [collection]);
  useEffect(() => { const p = new URLSearchParams(); if (q) p.set('q', q); if (cs.length && !collection) p.set('c', cs.join(',')); if (sort !== 'featured') p.set('sort', sort); if (stock) p.set('stock', '1'); if (price) p.set('price', price); const s = p.toString(); history.replaceState(null, '', location.pathname + (s ? '?' + s : '')); }, [q, cs, sort, stock, price]);
  useEffect(() => {
    if (!filtersOpen) return;
    const root = document.getElementById('filters');
    (document.getElementById('q') as HTMLInputElement | null)?.focus();
    const prev = document.body.style.overflow;
    if (matchMedia('(max-width: 1023px)').matches) document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closeFilters(); return; }
      if (e.key !== 'Tab' || !root) return;
      const f = [...root.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([disabled]),select,textarea')];
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [filtersOpen]);
  const items = useMemo(() => {
    const n = norm(q.trim());
    let r: Book[] = books.filter(b => (c ? b.collections.includes(c) : !cs.length || cs.some(x => b.collections.includes(x))) && (!stock || b.available) && inPrice(b.price, price) && true);
    if (n) r = smartSearch(q, r);
    const s = [...r];
    if (n && sort === 'featured') return s;
    if (sort === 'new') s.sort((a, b) => b.published.localeCompare(a.published));
    if (sort === 'price-asc') s.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') s.sort((a, b) => b.price - a.price);
    if (sort === 'title') s.sort((a, b) => a.title.localeCompare(b.title, 'ar'));
    return s;
  }, [q, c, cs, sort, stock, price]);
  const col = collections.find(x => x.handle === (collection || c));
  const nFilters = (q ? 1 : 0) + (collection ? 0 : cs.length) + (sort !== 'featured' ? 1 : 0) + (stock ? 1 : 0) + (price ? 1 : 0);
  const sortLabel = SORTS.find(x => x.v === sort)?.l;
  return <main id="main">
    <PageHead title={collection ? collectionTitle(collection) : 'كل الكتب'} desc={collection ? col?.description[0] : `جميع إصدارات مؤسسة الكود: ${books.length} كتابًا.`} />
    <div className="mx-auto max-w-[1320px] px-4 pb-4 sm:px-6">
      <button ref={launchRef} type="button" className="filter-launch" data-testid="filter-launch" aria-expanded={filtersOpen} aria-controls="filters" onClick={() => setFiltersOpen(true)}><SlidersHorizontal size={18} aria-hidden="true" />تصفية وترتيب{nFilters ? ` (${nFilters})` : ''}</button>
      {filtersOpen && <button type="button" className="filter-scrim" aria-label="إغلاق لوحة التصفية" onClick={closeFilters} />}
      <div id="filters" className={`filter-drawer mt-4 ${filtersOpen ? 'is-open' : ''}`} role={filtersOpen ? 'dialog' : 'region'} aria-modal={filtersOpen || undefined} aria-labelledby="filters-title">
        <div className="filter-bar">
          <p className="filter-drawer-title" id="filters-title">تصفية وترتيب</p>
          <button type="button" className="filter-mobile-only tool-btn" onClick={closeFilters} aria-label="إغلاق التصفية"><X size={18} aria-hidden="true" /></button>
        </div>
        <form role="search" onSubmit={e => e.preventDefault()} className="filter-form grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-[2fr_1.2fr_1fr_auto] xl:items-end">
          <div><label htmlFor="q" className="field-label">ابحث بالعنوان أو المؤلف أو الموضوع</label><input id="q" type="search" value={q} onChange={e => setQ(e.target.value)} className="field-input" placeholder="مثال: الظفرة، الكويت، رحلة" /></div>
          <div><label htmlFor="c" className="field-label">التصنيف</label><select id="c" value={collection || (cs.length === 1 ? cs[0] : '')} onChange={e => collection ? navigate(e.target.value ? `collection/${e.target.value}/` : 'books/') : setCs(e.target.value ? [e.target.value] : [])} className="field-input">
            <option value="">كل التصنيفات</option>{collections.map(x => <option key={x.handle} value={x.handle}>{x.title} ({x.count})</option>)}</select></div>
          <div><label htmlFor="s" className="field-label">الترتيب</label><select id="s" value={sort} onChange={e => setSort(e.target.value)} className="field-input">{SORTS.map(x => <option key={x.v} value={x.v}>{x.l}</option>)}</select></div>
          <label className="flex items-center gap-2 py-3 font-semibold"><input type="checkbox" checked={stock} onChange={e => setStock(e.target.checked)} className="size-5 accent-[var(--accent)]" />المتوفر فقط</label>
        </form>
        <div role="group" aria-label="التصنيفات (يمكن اختيار أكثر من تصنيف)" className="mt-4 flex flex-wrap gap-2">{collection
          ? <><Link to="books/" className="cat-chip">كل الكتب</Link>{collections.map(x => <Link key={x.handle} to={`collection/${x.handle}/`} aria-current={x.handle === collection ? 'page' : undefined} className="cat-chip">{x.title} ({x.count})</Link>)}</>
          : <><button type="button" aria-pressed={!cs.length} onClick={() => setCs([])} className="cat-chip">الكل ({books.length})</button>{collections.map(x => { const on = cs.includes(x.handle); return <button key={x.handle} type="button" data-testid="cat-multi" aria-pressed={on} onClick={() => setCs(on ? cs.filter(y => y !== x.handle) : [...cs, x.handle])} className="cat-chip">{on && <Check size={14} aria-hidden="true" />}{x.title} ({x.count})</button>; })}<span className="self-center text-sm text-[var(--text-muted)]">يمكنك اختيار أكثر من تصنيف</span></>}</div>
        <div role="group" aria-label="السعر" className="mt-3 flex flex-wrap items-center gap-2"><span className="font-semibold text-[var(--text-secondary)]">السعر:</span>{PRICES.map(x => <button key={x.v} type="button" aria-pressed={price === x.v} onClick={() => setPrice(x.v)} className="cat-chip !py-1.5 text-sm">{x.l}</button>)}</div>
        <button type="button" className="filter-mobile-only ink-btn mt-5 w-full justify-center" onClick={closeFilters}>عرض النتائج ({items.length})</button>
      </div>
      {nFilters > 0 && <div className="active-filters" aria-label="التصفية المفعّلة">
        {q && <button type="button" className="active-chip" onClick={() => setQ('')}><span>بحث: {q}</span><X size={14} aria-hidden="true" /></button>}
        {!collection && cs.map(h => <button key={h} type="button" className="active-chip" onClick={() => setCs(cs.filter(x => x !== h))}><span>{collectionTitle(h)}</span><X size={14} aria-hidden="true" /></button>)}
        {price && <button type="button" className="active-chip" onClick={() => setPrice('')}><span>{PRICES.find(x => x.v === price)?.l}</span><X size={14} aria-hidden="true" /></button>}
        {stock && <button type="button" className="active-chip" onClick={() => setStock(false)}><span>المتوفر فقط</span><X size={14} aria-hidden="true" /></button>}
        {sort !== 'featured' && <button type="button" className="active-chip" onClick={() => setSort('featured')}><span>{sortLabel}</span><X size={14} aria-hidden="true" /></button>}
      </div>}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3"><p className="text-[var(--text-muted)]" aria-live="polite">{items.length ? `${items.length} ${items.length === 1 ? 'كتاب' : items.length <= 10 ? 'كتب' : 'كتابًا'}` : 'لا توجد كتب مطابقة. جرّب كلمة أخرى أو تصنيفًا آخر.'}</p><ViewToggle view={view} setView={setView} /></div>
      <div className="mt-4"><Grid items={items} eager={4} view={view} /></div>
    </div>
  </main>;
}
