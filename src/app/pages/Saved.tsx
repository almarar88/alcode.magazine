import { Trash2 } from 'lucide-react';
import { bySlug, arNum, type Post } from '../data';
import { useStored } from '../store';
import { ArticleCard } from '../cards';
import { Link } from '../router';
import { PageHero } from './Listing';
import { StarOrnament } from '../art';
export default function Saved() {
  const [saved, setSaved] = useStored<string[]>('alcode-saved', []);
  const list = saved.map(bySlug).filter(Boolean) as Post[];
  return <main id="main">
    <PageHero kicker="قائمة القراءة" title="المقالات المحفوظة" desc="تُحفظ القائمة في متصفحك فقط على هذا الجهاز." />
    <div className="mx-auto max-w-[1320px] px-4 pt-10 sm:px-6">
      {list.length ? <>
        <div className="mb-6 flex items-center justify-between"><p className="text-[var(--text-muted)]">{arNum(list.length)} محفوظ</p><button type="button" className="ghost-btn" onClick={() => setSaved([])}><Trash2 size={16} aria-hidden="true" /> مسح القائمة</button></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((p, i) => <ArticleCard key={p.slug} p={p} i={i} />)}</div>
      </> : <div className="grid place-items-center rounded-[28px] border border-dashed border-[var(--border-strong)] bg-[var(--card)] px-6 py-16 text-center">
        <StarOrnament className="size-20 text-[var(--accent)]" /><h2 className="mt-4 text-2xl">لم تحفظ أي مقال بعد</h2>
        <p className="mt-2 text-[var(--text-muted)]">اضغط على أيقونة الحفظ في أي مقال ليظهر هنا.</p><Link to="" className="ink-btn mt-6">تصفّح المقالات</Link></div>}
    </div>
  </main>;
}
