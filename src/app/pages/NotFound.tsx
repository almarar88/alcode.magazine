import { useState } from 'react';
import { Search } from 'lucide-react';
import { Link, navigate } from '../router';
import { LogoMark } from '../art';
import { newest } from '../data';
import { Carousel } from '../ui';
export default function NotFound() {
  const [q, setQ] = useState('');
  return <main id="main" className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6">
    <div className="mx-auto grid max-w-[720px] place-items-center text-center">
      <LogoMark className="h-20 w-24 text-[var(--accent)]" />
      <h1 className="mt-6 text-4xl">الصفحة غير موجودة</h1>
      <p className="mt-3 text-[var(--text-secondary)]">ربما نُقلت الصفحة أو حُذف الكتاب من المتجر. ابحث عن الكتاب الذي تريده:</p>
      <form role="search" data-testid="nf-search" onSubmit={e => { e.preventDefault(); navigate(`books/${q.trim() ? '?q=' + encodeURIComponent(q.trim()) : ''}`); }} className="mt-5 flex w-full max-w-lg gap-2">
        <label htmlFor="nfq" className="sr-only">ابحث في الكتب</label>
        <input id="nfq" type="search" value={q} onChange={e => setQ(e.target.value)} className="field-input flex-1" placeholder="عنوان أو موضوع، مثل: الظفرة" />
        <button type="submit" className="ink-btn"><Search size={18} aria-hidden="true" />بحث</button>
      </form>
      <div className="mt-5 flex flex-wrap justify-center gap-3"><Link to="" className="ghost-btn">الرئيسية</Link><Link to="books/" className="ghost-btn">كل الكتب</Link><Link to="help/" className="ghost-btn">الأسئلة الشائعة</Link></div>
    </div>
    <section aria-labelledby="nf-new" className="pt-14"><h2 id="nf-new" className="text-2xl">وصل حديثًا</h2><div className="mt-3"><Carousel items={newest().slice(0, 10)} label="وصل حديثًا" /></div></section>
  </main>;
}
