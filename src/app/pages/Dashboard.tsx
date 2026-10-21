import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, PencilLine, Trash2, Upload, BarChart3, Images, ExternalLink, FilePlus2 } from 'lucide-react';
import { AnimatedTabs } from '@/vendor/easyui/ui/AnimatedTabs';
import { Gauge, GaugeTrack, GaugeArc, GaugeValue, GaugeText } from '@/components/gauge';
import { posts, categories, arNum, fmtDate, minutesLabel, photos, asset } from '../data';
import { useStored, newDraft, type Draft, type Media } from '../store';
import { Link, navigate } from '../router';

function Stat({ n, l }: { n: number; l: string }) { return <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"><p className="text-sm text-[var(--text-muted)]">{l}</p><p className="mt-1 font-display text-4xl font-bold">{arNum(n)}</p></div>; }
export default function Dashboard() {
  const [tab, setTab] = useState('articles');
  const [drafts, setDrafts] = useStored<Draft[]>('alcode-drafts', []);
  const [media, setMedia] = useStored<Media[]>('alcode-media', []);
  const [saved] = useStored<string[]>('alcode-saved', []);
  const [err, setErr] = useState('');
  const words = useMemo(() => posts.reduce((s, p) => s + p.words, 0), []);
  const goal = 10; const pct = Math.min(100, Math.round(((posts.length + drafts.length) / goal) * 100));
  const upload = (files: FileList | null) => { setErr(''); [...(files || [])].forEach(f => { if (!f.type.startsWith('image/')) return; if (f.size > 400_000) { setErr(`«${f.name}» أكبر من ٤٠٠ ك.ب — مساحة التخزين في المتصفح محدودة.`); return; }
    const r = new FileReader(); r.onload = () => setMedia(m => [{ id: Math.random().toString(36).slice(2), name: f.name, data: String(r.result), size: f.size, added: Date.now() }, ...m]); r.readAsDataURL(f); }); };
  const newOne = () => { const d = newDraft(); setDrafts(l => [d, ...l]); navigate(`write/?d=${d.id}`); };
  return <main id="main" className="mx-auto max-w-[1320px] px-4 pt-10 sm:px-6">
    <div role="note" className="flex items-start gap-3 rounded-2xl border-2 border-dashed border-[#1d3a4a] bg-[color-mix(in_oklab,#1d3a4a_10%,var(--card))] p-4">
      <FileText size={22} aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--accent)]" />
      <p><b>مساحة عمل في متصفحك.</b> المسودات والوسائط تُحفظ على هذا الجهاز فقط؛ للنشر صدّر المقال بصيغة ‎.md‎ وأرسله إلى فريق التحرير.</p>
    </div>
    <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
      <div><p className="kicker">لوحة الناشر</p><h1 className="mt-1 text-[clamp(2.2rem,5vw,3.4rem)] font-black">مرحباً بك في غرفة التحرير</h1></div>
      <button type="button" className="ink-btn" onClick={newOne}><FilePlus2 size={18} aria-hidden="true" /> مقال جديد</button>
    </div>
    <div className="mt-6"><AnimatedTabs className="tabs-heritage" variant="pill" activeTab={tab} onChange={setTab} renderContent={false} tabs={[
      { id: 'articles', label: 'المقالات', icon: <FileText size={15} />, badge: arNum(posts.length) }, { id: 'drafts', label: 'المسودات', icon: <PencilLine size={15} />, badge: arNum(drafts.length) },
      { id: 'stats', label: 'الإحصاءات', icon: <BarChart3 size={15} /> }, { id: 'media', label: 'الوسائط', icon: <Images size={15} /> }]} /></div>
    <AnimatePresence mode="wait"><motion.section key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .25 }} className="mt-6">
      {tab === 'articles' && <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--card)]"><table className="w-full min-w-[640px] text-start text-sm">
        <thead className="bg-[var(--surface-raised)] text-[var(--text-secondary)]"><tr>{['العنوان', 'القسم', 'التاريخ', 'القراءة', 'الحالة', ''].map(h => <th key={h} className="p-3 text-start font-display">{h}</th>)}</tr></thead>
        <tbody>{posts.map(p => <tr key={p.slug} className="border-t border-[var(--border)] transition-colors hover:bg-[var(--accent-subtle)]">
          <td className="p-3 font-semibold">{p.title}</td><td className="p-3">{p.category}</td><td className="p-3">{fmtDate(p.date)}</td><td className="p-3">{minutesLabel(p.minutes)}</td>
          <td className="p-3"><span className="sample-badge">منشور</span></td><td className="p-3"><Link to={`article/${p.slug}/`} className="inline-flex items-center gap-1 text-[var(--accent)] underline">عرض <ExternalLink size={13} aria-hidden="true" /></Link></td></tr>)}</tbody></table></div>}
      {tab === 'drafts' && (drafts.length ? <ul className="grid gap-3 md:grid-cols-2">{drafts.map(d => <li key={d.id} className="lift flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
          <div className="min-w-0"><p className="truncate font-display font-bold">{d.title || 'مسودة بلا عنوان'}</p><p className="text-sm text-[var(--text-muted)]">{d.category} · آخر تعديل {new Date(d.updated).toLocaleString('ar-AE-u-nu-arab', { dateStyle: 'medium', timeStyle: 'short' })}</p></div>
          <div className="flex shrink-0 gap-1"><Link to={`write/?d=${d.id}`} className="ghost-btn !py-1.5">تحرير</Link><button type="button" className="tool-btn" aria-label={`حذف ${d.title || 'المسودة'}`} onClick={() => confirm('حذف هذه المسودة من المتصفح؟') && setDrafts(l => l.filter(x => x.id !== d.id))}><Trash2 size={17} /></button></div>
        </li>)}</ul> : <p className="rounded-2xl border border-dashed border-[var(--border-strong)] p-10 text-center">لا توجد مسودات. <button type="button" onClick={newOne} className="font-bold text-[var(--accent)] underline">ابدأ مقالاً جديداً</button></p>)}
      {tab === 'stats' && <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"><Stat n={posts.length} l="مقالات منشورة" /><Stat n={drafts.length} l="مسودات محلية" /><Stat n={categories.length} l="أقسام" /><Stat n={words} l="كلمة منشورة" /><Stat n={saved.length} l="محفوظات القارئ (هذا المتصفح)" /><Stat n={photos.length + media.length} l="ملفات وسائط" /></div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"><p className="font-display font-bold">هدف النشر: {arNum(goal)} مقالات</p>
          <div className="mx-auto mt-2 w-56"><Gauge value={pct} min={0} max={100} padding={10} aria-label={`نسبة الإنجاز ${pct} بالمئة`}><GaugeTrack width={22} color="var(--border)" opacity={1} /><GaugeArc width={22} color="var(--accent)" /><GaugeValue y={10} fontSize={64} suffix="%" color="var(--text-primary)" /><GaugeText y={70} fontSize={26} color="var(--text-muted)">منشور + مسودات</GaugeText></Gauge></div>
          <p className="text-center text-xs text-[var(--text-muted)]">أرقام محسوبة محلياً — لا يوجد تتبّع للزوار.</p></div>
      </div>}
      {tab === 'media' && <div>
        <label className="lift flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-[var(--border-strong)] bg-[var(--card)] p-8 text-center hover:border-[var(--accent)]">
          <Upload size={28} aria-hidden="true" className="text-[var(--accent)]" /><span className="font-bold">ارفع صورة إلى مكتبة المتصفح</span><span className="text-sm text-[var(--text-muted)]">حتى ٤٠٠ ك.ب للصورة · تبقى على هذا الجهاز فقط</span>
          <input type="file" accept="image/*" multiple className="sr-only" onChange={e => upload(e.target.files)} />
        </label>
        {err && <p role="alert" className="mt-3 text-sm font-semibold text-[#b3261e] dark:text-[#ffb4a8]">{err}</p>}
        <ul className="mt-6 columns-2 gap-3 md:columns-4">{media.map(m => <li key={m.id} className="group relative mb-3 break-inside-avoid overflow-hidden rounded-xl border border-[var(--border)]"><img src={m.data} alt={m.name} className="w-full" /><button type="button" aria-label={`حذف ${m.name}`} onClick={() => setMedia(l => l.filter(x => x.id !== m.id))} className="tool-btn absolute left-2 top-2 bg-[var(--card)]"><Trash2 size={16} /></button><p className="truncate bg-[var(--card)] p-2 text-xs">{m.name}</p></li>)}
          {photos.slice(0, 8).map(p => <li key={p.slug} className="mb-3 break-inside-avoid overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]"><img src={asset(p.thumb)} alt={p.label} loading="lazy" className="w-full" width={p.w} height={p.h} /><p className="p-2 text-xs"><code className="ltr">{p.file}</code></p></li>)}</ul>
      </div>}
    </motion.section></AnimatePresence>
  </main>;
}
