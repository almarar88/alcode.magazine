import { useEffect, useState } from 'react';
import { FLAGS } from './integrations';
import { arErr, useAuth, type Comment } from './auth';
import { Link } from './router';
import { fmtDate } from './data';

export function Comments({ slug }: { slug: string }) {
  const { sb, user, profile, isPublisher } = useAuth();
  const [list, setList] = useState<Comment[]>([]);
  const [body, setBody] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const [broken, setBroken] = useState(false);

  const load = async () => {
    if (!sb) return;
    const { data, error } = await sb.from('comments').select('*').eq('article_slug', slug).order('created_at', { ascending: true });
    if (error) { setBroken(true); return; }
    setList((data as Comment[]) || []);
  };
  useEffect(() => { load(); }, [sb, slug]);
  if (!FLAGS.accounts || broken) return null;

  const post = async (e: React.FormEvent) => {
    e.preventDefault(); if (!sb || !user) return; setBusy(true); setMsg('');
    const { error } = await sb.from('comments').insert({ article_slug: slug, body: body.trim() });
    setBusy(false);
    if (error) { setMsg(arErr(error)); return; }
    setBody(''); await load();
  };
  const mod = async (id: number, status: 'visible' | 'hidden') => { await sb!.from('comments').update({ status }).eq('id', id); await load(); };
  const del = async (id: number) => { if (!confirm('حذف هذا التعليق؟')) return; await sb!.from('comments').delete().eq('id', id); await load(); };

  return <section aria-labelledby="cm" className="mx-auto mb-14 max-w-[900px] px-4 sm:px-6">
    <div className="rule-orn mb-6"><h2 id="cm" className="text-2xl">التعليقات <span className="text-base font-normal text-[var(--text-muted)]">({list.filter(c => c.status === 'visible' || isPublisher || c.user_id === user?.id).length})</span></h2></div>
    <ul className="space-y-4">
      {list.filter(c => c.status === 'visible' || isPublisher || c.user_id === user?.id).map(c => <li key={c.id} className={`rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 ${c.status === 'hidden' ? 'opacity-60' : ''}`}>
        <div className="flex flex-wrap items-baseline justify-between gap-2"><p className="font-display font-bold">{c.author_name}</p><time className="text-xs text-[var(--text-muted)]" dateTime={c.created_at}>{fmtDate(c.created_at.slice(0, 10))}</time></div>
        <p className="mt-2 whitespace-pre-wrap leading-8">{c.body}</p>
        {c.status === 'hidden' && <p className="mt-1 text-xs text-[var(--text-muted)]">مخفي عن الزوار</p>}
        {(isPublisher || c.user_id === user?.id) && <div className="mt-3 flex flex-wrap gap-2">
          {isPublisher && <button type="button" className="ghost-btn !py-1" onClick={() => mod(c.id, c.status === 'visible' ? 'hidden' : 'visible')}>{c.status === 'visible' ? 'إخفاء' : 'إظهار'}</button>}
          <button type="button" className="ghost-btn !py-1" onClick={() => del(c.id)}>حذف</button>
        </div>}
      </li>)}
      {!list.length && <li className="rounded-2xl border border-dashed border-[var(--border-strong)] p-8 text-center text-[var(--text-muted)]">كن أول من يعلّق.</li>}
    </ul>
    {user ? <form onSubmit={post} className="mt-6 grid gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
      <p className="text-sm text-[var(--text-muted)]">تكتب باسم <b>{profile?.display_name}</b></p>
      <label htmlFor="cm-body" className="sr-only">تعليقك</label>
      <textarea id="cm-body" required minLength={2} maxLength={2000} rows={4} value={body} onChange={e => setBody(e.target.value)} className="field-input" placeholder="تعليقك…" />
      <div className="flex flex-wrap items-center gap-3"><button type="submit" className="ink-btn" disabled={busy}>{busy ? 'جارٍ الإرسال…' : 'أضف تعليقاً'}</button><p aria-live="polite" className="text-sm text-[var(--text-muted)]">{msg}</p></div>
    </form> : <p className="mt-6 rounded-2xl border border-dashed border-[var(--border-strong)] p-5 text-center"><Link to="account/" className="font-bold text-[var(--accent)] underline">سجّل الدخول</Link> للتعليق أو إنشاء حساب.</p>}
  </section>;
}
