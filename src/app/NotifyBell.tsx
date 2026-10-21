import { useEffect, useState } from 'react';
import { FLAGS } from './integrations';
import { useAuth, type FeedItem } from './auth';
import { Link } from './router';
import { Bell } from 'lucide-react';

export function NotifyBell() {
  const { sb, user, profile, updateProfile } = useAuth();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<FeedItem[]>([]);
  useEffect(() => {
    if (!sb || !user || !profile?.notify_site) return;
    sb.from('feed').select('*').order('published_at', { ascending: false }).limit(20).then(({ data }) => setItems((data as FeedItem[]) || []));
  }, [sb, user, profile?.notify_site, open]);
  if (!FLAGS.accounts || !user || !profile?.notify_site) return null;
  const unseen = items.filter(i => new Date(i.published_at) > new Date(profile.last_seen_feed)).length;
  const mark = async () => { await updateProfile({ last_seen_feed: new Date().toISOString() }); setOpen(o => !o); };
  return <div className="relative">
    <button type="button" className="tool-btn relative" aria-label="الإشعارات" aria-expanded={open} onClick={mark}>
      <Bell size={18} />{unseen > 0 && <span className="absolute -start-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-[#1b1712]">{unseen}</span>}
    </button>
    {open && <div role="dialog" aria-label="المقالات الجديدة" className="absolute start-0 top-full z-40 mt-2 w-72 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-xl">
      {items.length ? items.slice(0, 8).map(i => <Link key={i.id} to={`article/${i.slug}/`} className="block rounded-xl px-3 py-2 hover:bg-[var(--accent-subtle)]" onClick={() => setOpen(false)}><p className="line-clamp-2 text-sm font-semibold">{i.title}</p></Link>) : <p className="p-3 text-sm text-[var(--text-muted)]">لا إشعارات بعد.</p>}
    </div>}
  </div>;
}
