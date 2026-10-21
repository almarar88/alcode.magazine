// Publisher-only. Hidden and blocked for everyone else.
import { useEffect, useState } from 'react';
import { PageHero } from './Listing';
import { FLAGS } from '../integrations';
import { useAuth } from '../auth';
import { Link, navigate } from '../router';
import { categories, posts, arNum } from '../data';
import { Trash2, Upload, FilePlus2, ExternalLink } from 'lucide-react';

type Art = { slug: string; title: string; author: string; book: string; category: string; date: string; cover: string; coverCaption: string; excerpt: string; tags: string; era: string; eraSort: string; body: string };
const empty = (): Art => ({ slug: '', title: '', author: '', book: '', category: categories[0]?.name || 'التاريخ', date: new Date().toISOString().slice(0, 10), cover: '', coverCaption: '', excerpt: '', tags: '', era: '', eraSort: '', body: '' });

export default function Studio() {
  const { ready, isPublisher, sb, publish } = useAuth();
  const [tab, setTab] = useState<'list' | 'edit' | 'comments'>('list');
  const [art, setArt] = useState<Art>(empty);
  const [images, setImages] = useState<{ name: string; base64: string }[]>([]);
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    if (!ready) return;
    if (!FLAGS.accounts || !isPublisher) navigate('account/');
  }, [ready, isPublisher]);

  useEffect(() => {
    if (!sb || !isPublisher || tab !== 'comments') return;
    sb.from('comments').select('*').order('created_at', { ascending: false }).limit(100).then(({ data }) => setComments(data || []));
  }, [sb, isPublisher, tab]);

  if (!ready || !isPublisher) return <main id="main" className="min-h-[50vh]" aria-busy="true" />;

  const set = (k: keyof Art, v: string) => setArt(a => ({ ...a, [k]: v }));
  const load = async (slug: string) => {
    const p = posts.find(x => x.slug === slug);
    if (!p) return;
    setArt({ slug: p.slug, title: p.title, author: (p as any).author || '', book: (p as any).book || '', category: p.category, date: p.date, cover: p.cover, coverCaption: (p as any).coverCaption || '', excerpt: p.excerpt, tags: (p.tags || []).join(', '), era: (p as any).era || '', eraSort: String((p as any).eraSort || ''), body: '' });
    setImages([]); setTab('edit'); setMsg('جارٍ تحميل النص من المستودع…');
    try { const r = await fetch(`https://raw.githubusercontent.com/almarar88/alcode.magazine/main/content/${slug}.md`, { cache: 'no-store' }); const t = await r.text(); const m = t.match(/^---[\s\S]*?\n---\n?([\s\S]*)$/); setArt(a => ({ ...a, body: (m ? m[1] : t).trim() })); setMsg(''); } catch { setMsg('تعذّر تحميل النص.'); }
  };
  const onFiles = async (files: FileList | null) => {
    if (!files) return;
    const out: { name: string; base64: string }[] = [];
    for (const f of [...files].slice(0, 12)) {
      if (!/^image\//.test(f.type) || f.size > 2_500_000) { setMsg(`تخطّي «${f.name}» (صورة حتى ٢٫٥ م.ب).`); continue; }
      const buf = new Uint8Array(await f.arrayBuffer());
      let bin = ''; for (let i = 0; i < buf.length; i++) bin += String.fromCharCode(buf[i]);
      const name = f.name.toLowerCase().replace(/[^a-z0-9._-]/g, '-');
      out.push({ name, base64: btoa(bin) });
    }
    setImages(o => [...o, ...out]);
  };
  const save = async () => {
    setBusy(true); setMsg('');
    const tags = art.tags.split(/[,،]/).map(t => t.trim()).filter(Boolean);
    const r = await publish({ action: 'save', article: { ...art, tags, eraSort: art.eraSort ? Number(art.eraSort) : undefined }, images });
    setBusy(false);
    setMsg(r.ok ? `نُشر في GitHub (${r.sha}). سيُحدَّث الموقع خلال دقيقتين.` : `فشل: ${r.error}${r.detail ? ' — ' + r.detail : ''}`);
  };
  const del = async (slug: string) => {
    if (!confirm(`حذف المقال «${slug}» من المستودع؟`)) return;
    setBusy(true); const r = await publish({ action: 'delete', slug }); setBusy(false);
    setMsg(r.ok ? `حُذف (${r.sha}).` : `فشل: ${r.error}`);
  };
  const mod = async (id: number, status: string) => { await sb!.from('comments').update({ status }).eq('id', id); setComments(c => c.map(x => x.id === id ? { ...x, status } : x)); };
  const kill = async (id: number) => { if (!confirm('حذف؟')) return; await sb!.from('comments').delete().eq('id', id); setComments(c => c.filter(x => x.id !== id)); };

  return <main id="main"><PageHero kicker="لناشر المجلة فقط" title="لوحة الناشر" desc="النشر يكتب في مستودع GitHub ثم يبني الموقع تلقائياً." />
    <div className="mx-auto max-w-[1100px] px-4 pt-6 sm:px-6">
      <div className="flex flex-wrap gap-2">
        {([['list', 'المقالات'], ['edit', 'تحرير / نشر'], ['comments', `التعليقات (${arNum(comments.length || 0)})`]] as const).map(([id, l]) => <button key={id} type="button" className={tab === id ? 'ink-btn' : 'ghost-btn'} onClick={() => setTab(id)}>{l}</button>)}
        <button type="button" className="ghost-btn" onClick={() => { setArt(empty()); setImages([]); setTab('edit'); }}><FilePlus2 size={16} /> مقال جديد</button>
      </div>
      {msg && <p role="status" className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-3 text-sm">{msg}</p>}
      {tab === 'list' && <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--card)]"><table className="w-full min-w-[640px] text-start text-sm">
        <thead className="bg-[var(--surface-raised)]"><tr>{['العنوان', 'القسم', 'التاريخ', ''].map(h => <th key={h} className="p-3 text-start">{h}</th>)}</tr></thead>
        <tbody>{posts.map(p => <tr key={p.slug} className="border-t border-[var(--border)]">
          <td className="p-3 font-semibold">{p.title}</td><td className="p-3">{p.category}</td><td className="p-3">{p.date}</td>
          <td className="p-3"><div className="flex gap-1"><button type="button" className="ghost-btn !py-1" onClick={() => load(p.slug)}>تحرير</button><Link to={`article/${p.slug}/`} className="ghost-btn !py-1"><ExternalLink size={14} /></Link><button type="button" className="tool-btn" aria-label="حذف" onClick={() => del(p.slug)}><Trash2 size={16} /></button></div></td>
        </tr>)}</tbody></table></div>}
      {tab === 'edit' && <form className="mt-6 grid gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 md:grid-cols-2" onSubmit={e => { e.preventDefault(); save(); }}>
        {([['slug', 'المعرّف اللاتيني'], ['title', 'العنوان'], ['author', 'المؤلف'], ['book', 'الكتاب'], ['date', 'التاريخ YYYY-MM-DD'], ['cover', 'مسار الغلاف (مثل articles/slug/1.webp)'], ['coverCaption', 'تعليق الغلاف'], ['era', 'الحقبة'], ['eraSort', 'ترتيب الحقبة (رقم)']] as const).map(([k, l]) => <div key={k} className={k === 'title' || k === 'coverCaption' ? 'md:col-span-2' : ''}><label className="mb-1 block font-semibold">{l}</label><input className="field-input" dir={k === 'slug' || k === 'cover' || k === 'date' || k === 'eraSort' ? 'ltr' : undefined} value={art[k]} onChange={e => set(k, e.target.value)} required={['slug', 'title', 'author', 'date'].includes(k)} /></div>)}
        <div><label className="mb-1 block font-semibold">القسم</label><select className="field-input" value={art.category} onChange={e => set('category', e.target.value)}>{categories.map(c => <option key={c.slug}>{c.name}</option>)}</select></div>
        <div className="md:col-span-2"><label className="mb-1 block font-semibold">الوسوم (فاصلة)</label><input className="field-input" value={art.tags} onChange={e => set('tags', e.target.value)} /></div>
        <div className="md:col-span-2"><label className="mb-1 block font-semibold">الملخّص</label><textarea className="field-input" rows={2} required value={art.excerpt} onChange={e => set('excerpt', e.target.value)} /></div>
        <div className="md:col-span-2"><label className="mb-1 block font-semibold">النص (ماركداون)</label><textarea className="field-input min-h-[280px] font-mono text-[.95rem]" dir="rtl" required value={art.body} onChange={e => set('body', e.target.value)} /></div>
        <div className="md:col-span-2"><label className="mb-1 block font-semibold">صور تُرفع مع النشر</label>
          <label className="ghost-btn inline-flex cursor-pointer gap-2"><Upload size={16} /><input type="file" accept="image/*" multiple className="sr-only" onChange={e => onFiles(e.target.files)} /> اختر صوراً</label>
          <ul className="mt-2 text-sm text-[var(--text-muted)]">{images.map(i => <li key={i.name}>{i.name}</li>)}</ul>
        </div>
        <button className="ink-btn md:col-span-2 justify-self-start" disabled={busy}>{busy ? 'جارٍ النشر…' : 'انشر في المستودع'}</button>
      </form>}
      {tab === 'comments' && <ul className="mt-6 space-y-3">{comments.map(c => <li key={c.id} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
        <p className="text-sm text-[var(--text-muted)]"><Link to={`article/${c.article_slug}/`} className="underline">{c.article_slug}</Link> · {c.author_name} · {c.status}</p>
        <p className="mt-1 whitespace-pre-wrap">{c.body}</p>
        <div className="mt-2 flex gap-2"><button type="button" className="ghost-btn !py-1" onClick={() => mod(c.id, c.status === 'visible' ? 'hidden' : 'visible')}>{c.status === 'visible' ? 'إخفاء' : 'إظهار'}</button><button type="button" className="ghost-btn !py-1" onClick={() => kill(c.id)}>حذف</button></div>
      </li>)}</ul>}
    </div></main>;
}
