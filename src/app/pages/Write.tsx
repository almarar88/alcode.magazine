import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Bold, Heading2, Heading3, Italic, Link2, List, ListOrdered, Quote as QuoteIcon, Info, Footprints, Workflow, Download, Copy, Check, FilePlus2, CloudCheck, Eye, PenLine, Image as ImageIcon } from 'lucide-react';
import { AnimatedTabs } from '@/vendor/easyui/ui/AnimatedTabs';
import { TagInput } from '@/registry/components/tag-input/tag-input';
import { categories, asset, readingMinutes, minutesLabel, arNum, fmtDate } from '../data';
import { useStored, newDraft, toMarkdown, type Draft } from '../store';
import { Prose } from '../Prose';

const SNIPS: [string, any, string, string][] = [
  ['عنوان رئيسي', Heading2, '\n## ', 'عنوان'], ['عنوان فرعي', Heading3, '\n### ', 'عنوان فرعي'], ['عريض', Bold, '**', 'نص عريض'], ['مائل', Italic, '*', 'نص مائل'],
  ['رابط', Link2, '[', 'نص الرابط](https://)'], ['قائمة', List, '\n- ', 'عنصر'], ['قائمة مرقّمة', ListOrdered, '\n1. ', 'عنصر'], ['صورة', ImageIcon, '\n![', 'وصف الصورة](photos/doha-1904.webp)\n'],
  ['تنبيه', Info, '\n<callout type="note" title="ملاحظة">\n\n', 'نص التنبيه\n\n</callout>\n'], ['اقتباس', QuoteIcon, '\n<quote by="القائل">\n\n', 'نص الاقتباس\n\n</quote>\n'],
  ['خطوات', Footprints, '\n<steps title="الخطوات">\n\n1. ', 'الخطوة الأولى\n\n   شرح\n\n2. الخطوة الثانية\n\n   شرح\n\n</steps>\n'], ['مخطط', Workflow, '\n```mermaid\nflowchart RL\n  A[', 'البداية] --> B[النهاية]\n```\n'],
];
const wrapped = new Set(['**', '*']);
export const slugFrom = (s: string) => s.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 60);

export default function Write() {
  const [drafts, setDrafts] = useStored<Draft[]>('alcode-drafts', []);
  const [id, setId] = useState(() => new URLSearchParams(location.search).get('d') || '');
  const [d, setD] = useState<Draft>(() => drafts.find(x => x.id === id) || drafts[0] || newDraft());
  const [saved, setSaved] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [copied, setCopied] = useState(false);
  const [pane, setPane] = useState('write');
  const ta = useRef<HTMLTextAreaElement>(null);
  const reduce = useReducedMotion();
  const first = useRef(true);
  useEffect(() => { if (first.current) { first.current = false; return; } setSaved('saving'); const t = setTimeout(() => {
    setDrafts(list => { const n = { ...d, updated: Date.now() }; const k = list.findIndex(x => x.id === d.id); return k >= 0 ? list.map(x => x.id === d.id ? n : x) : [n, ...list]; }); setSaved('saved'); }, 600); return () => clearTimeout(t); }, [d]);
  useEffect(() => { const u = new URL(location.href); u.searchParams.set('d', d.id); history.replaceState(null, '', u); setId(d.id); }, [d.id]);
  const set = <K extends keyof Draft>(k: K, v: Draft[K]) => setD(o => ({ ...o, [k]: v }));
  const stats = useMemo(() => readingMinutes(d.body), [d.body]);
  const md = toMarkdown(d);
  const file = (d.slug || slugFrom(d.title) || 'article') + '.md';
  const insert = (pre: string, mid: string) => { const el = ta.current; if (!el) return; const s = el.selectionStart, e = el.selectionEnd; const sel = d.body.slice(s, e) || mid;
    const post = wrapped.has(pre) ? pre : ''; const next = d.body.slice(0, s) + pre + sel + post + d.body.slice(e); set('body', next);
    requestAnimationFrame(() => { el.focus(); el.setSelectionRange(s + pre.length, s + pre.length + sel.length); }); };
  const download = () => { const b = new Blob([md], { type: 'text/markdown;charset=utf-8' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = file; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); };
  const preview = <article className="rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-5 sm:p-8">
    {d.cover && <img src={asset(d.cover)} alt="" className="mb-6 aspect-[16/9] w-full rounded-xl object-cover" />}
    <p className="kicker">{d.category}</p>
    <h1 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">{d.title || 'عنوان المقال'}</h1>
    {d.excerpt && <p className="mt-3 text-lg text-[var(--text-secondary)]">{d.excerpt}</p>}
    <p className="mt-3 text-sm text-[var(--text-muted)]">{d.author || 'الكاتب'} · {fmtDate(d.date)} · {minutesLabel(stats.minutes)}</p>
    <hr className="my-6 border-[var(--border)]" />
    <Prose source={d.body} />
  </article>;
  const editor = <div className="space-y-4">
    <div role="toolbar" aria-label="أدوات التنسيق" className="sticky top-[76px] z-10 flex flex-wrap gap-0.5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-1.5 shadow-sm">
      {SNIPS.map(([l, I, pre, mid]) => <button key={l} type="button" title={l} aria-label={l} className="tool-btn" onClick={() => insert(pre, mid)}><I size={18} aria-hidden="true" /></button>)}
    </div>
    <label htmlFor="body" className="sr-only">نص المقال (ماركداون)</label>
    <textarea id="body" ref={ta} value={d.body} onChange={e => set('body', e.target.value)} rows={22} className="field-input min-h-[460px]" dir="auto" spellCheck />
  </div>;
  return <main id="main">
    <header className="paper border-b border-[var(--border)]">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-4 px-4 pb-8 pt-10 sm:px-6">
        <div><p className="kicker">المحرّر</p><h1 className="mt-1 text-[clamp(2.2rem,5vw,3.6rem)] font-black">اكتب مقالاً</h1>
          <p className="mt-2 max-w-2xl text-[var(--text-secondary)]">تُحفظ المسودة تلقائياً في متصفحك فقط. عند الانتهاء صدّر ملف <code className="ltr">.md</code> وأضفه إلى مجلد <code className="ltr">content/</code>.</p></div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)]" aria-live="polite">
            <AnimatePresence mode="wait"><motion.span key={saved} initial={reduce ? false : { opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-1.5">{saved === 'saving' ? 'جارٍ الحفظ…' : saved === 'saved' ? <><CloudCheck size={16} aria-hidden="true" className="text-[var(--accent)]" /> حُفظت المسودة محلياً</> : 'لم تُعدَّل بعد'}</motion.span></AnimatePresence>
          </span>
          <button type="button" className="ghost-btn" onClick={() => setD(newDraft())}><FilePlus2 size={16} aria-hidden="true" /> مسودة جديدة</button>
          <button type="button" className="ghost-btn" onClick={async () => { await navigator.clipboard?.writeText(md).catch(() => {}); setCopied(true); setTimeout(() => setCopied(false), 1600); }}>{copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />} {copied ? 'نُسخ' : 'انسخ'}</button>
          <button type="button" className="ink-btn" onClick={download}><Download size={17} aria-hidden="true" /> تصدير ملف md</button>
        </div>
      </div>
    </header>
    <div className="mx-auto max-w-[1440px] px-4 pt-8 sm:px-6">
      <details open className="group rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-5">
        <summary className="cursor-pointer select-none font-display text-lg font-bold">بيانات المقال <span className="text-sm font-normal text-[var(--text-muted)]">(رأس الملف)</span></summary>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2"><label className="field-label" htmlFor="f-title">العنوان</label><input id="f-title" className="field-input" value={d.title} onChange={e => set('title', e.target.value)} placeholder="عنوان المقال" /></div>
          <div><label className="field-label" htmlFor="f-author">الكاتب</label><input id="f-author" className="field-input" value={d.author} onChange={e => set('author', e.target.value)} /></div>
          <div><label className="field-label" htmlFor="f-cat">القسم</label><select id="f-cat" className="field-input" value={d.category} onChange={e => set('category', e.target.value)}>{categories.map(c => <option key={c.slug}>{c.name}</option>)}</select></div>
          <div><label className="field-label" htmlFor="f-date">التاريخ</label><input id="f-date" type="date" className="field-input" value={d.date} onChange={e => set('date', e.target.value)} /></div>
          <div><label className="field-label" htmlFor="f-slug">اسم الملف/الرابط (لاتيني)</label><input id="f-slug" dir="ltr" className="field-input text-left" value={d.slug} onChange={e => set('slug', slugFrom(e.target.value))} placeholder="my-article" /></div>
          <div className="lg:col-span-2"><label className="field-label" htmlFor="f-cover">الغلاف (مسار أو رابط)</label><input id="f-cover" dir="ltr" className="field-input text-left" value={d.cover} onChange={e => set('cover', e.target.value)} placeholder="photos/doha-1904.webp" /></div>
          <div className="md:col-span-2"><label className="field-label" htmlFor="f-ex">الملخص</label><textarea id="f-ex" rows={2} className="field-input !font-[inherit]" value={d.excerpt} onChange={e => set('excerpt', e.target.value)} /></div>
          <div className="tags-ar md:col-span-2"><TagInput label="الوسوم" value={d.tags} onValueChange={v => set('tags', v)} placeholder="أضف وسماً ثم Enter" /></div>
        </div>
      </details>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-[var(--text-muted)]">{arNum(stats.words)} كلمة · {minutesLabel(stats.minutes)} · الملف: <code className="ltr">{file}</code></p>
        <div className="lg:hidden"><AnimatedTabs className="tabs-heritage" variant="pill" activeTab={pane} onChange={setPane} renderContent={false} tabs={[{ id: 'write', label: 'الكتابة', icon: <PenLine size={15} /> }, { id: 'preview', label: 'المعاينة', icon: <Eye size={15} /> }]} /></div>
      </div>
      <div className="mt-4 grid gap-6 lg:grid-cols-2">
        <div className={pane === 'write' ? '' : 'hidden lg:block'}>{editor}</div>
        <div className={pane === 'preview' ? '' : 'hidden lg:block'} aria-label="العرض الحيّ" role="region"><div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">{preview}</div></div>
      </div>
    </div>
  </main>;
}
