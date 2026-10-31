// Batch 6: themed collections (shareable short links for Instagram), heritage ornament, collection share.
import { useEffect, useState } from 'react';
import { Link2, Check, Layers } from 'lucide-react';
import data from '../generated/store.json';
import { byHandle, fmtPrice, asset, type Book } from './data';
import { Grid, PageHead, Cover } from './ui';
import { Link } from './router';
export type Theme = { slug: string; title: string; desc: string; handles: string[] };
export const themes = ((data as any).themes || []) as Theme[];
export const themeBooks = (t: Theme) => t.handles.map(byHandle).filter(Boolean) as Book[];
/** Sadu-inspired woven band (pure CSS/SVG, brand colours). */
export function Sadu({ className = '' }: { className?: string }) { return <div aria-hidden="true" className={`sadu ${className}`} />; }
function CopyLink({ label = 'نسخ رابط المجموعة' }: { label?: string }) {
  const [ok, setOk] = useState(false);
  return <button type="button" className="ghost-btn !px-3 !py-2 text-sm" onClick={async () => { try { await navigator.clipboard.writeText(location.origin + location.pathname); setOk(true); setTimeout(() => setOk(false), 1800); } catch {} }}>
    {ok ? <Check size={16} aria-hidden="true" /> : <Link2 size={16} aria-hidden="true" />}{ok ? 'نُسخ الرابط' : label}<span className="sr-only" aria-live="polite">{ok ? 'تم نسخ الرابط' : ''}</span></button>;
}
function WaLink({ text }: { text: string }) {
  const [href, setHref] = useState(`https://wa.me/?text=${encodeURIComponent(text)}`);
  useEffect(() => setHref(`https://wa.me/?text=${encodeURIComponent(text + '\n' + location.origin + location.pathname)}`), [text]);
  return <a className="ghost-btn !px-3 !py-2 text-sm" target="_blank" rel="noopener" href={href}>واتساب</a>;
}
export function ThemePage({ slug }: { slug: string }) {
  const t = themes.find(x => x.slug === slug)!; const items = themeBooks(t);
  const prices = items.map(b => b.price);
  return <main id="main">
    <PageHead kicker="مجموعة مختارة" title={t.title} desc={t.desc}>
      <p className="mt-2 text-[var(--text-muted)]">{items.length} كتب · من {fmtPrice(Math.min(...prices))} إلى {fmtPrice(Math.max(...prices))}</p>
      <div className="mt-4 flex flex-wrap gap-2"><CopyLink /><WaLink text={t.title} /></div>
    </PageHead>
    <Sadu />
    <div className="mx-auto max-w-[1320px] px-4 pt-8 sm:px-6"><Grid items={items} eager={4} /></div>
    <OtherThemes exclude={slug} />
  </main>;
}
function ThemeCard({ t }: { t: Theme }) {
  const bs = themeBooks(t).slice(0, 3);
  return <Link to={`t/${t.slug}/`} className="theme-card group" data-testid="theme-card">
    <div className="theme-fan" aria-hidden="true">{bs.map(b => { const im = b.images[0] as any; return <img key={b.handle} src={asset(im.cutSm || im.sm)} className={im.cutSm ? "is-cut" : undefined} alt="" width={240} height={300} loading="lazy" decoding="async" />; })}</div>
    <div className="p-4"><h3 className="text-lg group-hover:text-[var(--accent)]">{t.title}</h3><p className="mt-1 text-sm text-[var(--text-muted)]">{t.handles.length} كتب</p></div>
  </Link>;
}
export function OtherThemes({ exclude }: { exclude?: string }) {
  const list = themes.filter(t => t.slug !== exclude); if (!list.length) return null;
  return <section aria-labelledby="themes-h" className="mx-auto max-w-[1320px] px-4 pt-14 sm:px-6">
    <div className="flex items-end justify-between gap-3"><h2 id="themes-h" className="flex items-center gap-2 text-2xl sm:text-3xl"><Layers size={24} aria-hidden="true" className="text-[var(--accent)]" />مجموعات مختارة</h2><Link to="t/" className="font-semibold text-[var(--accent)] hover:underline">كل المجموعات</Link></div>
    <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">{list.map(t => <ThemeCard key={t.slug} t={t} />)}</div>
  </section>;
}
export function ThemesIndex() {
  return <main id="main"><PageHead kicker="المتجر" title="مجموعات مختارة" desc="مجموعات موضوعية من إصداراتنا، بروابط قصيرة يسهل مشاركتها." /><Sadu />
    <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-4 px-4 pt-8 sm:px-6 md:grid-cols-3 lg:grid-cols-5">{themes.map(t => <ThemeCard key={t.slug} t={t} />)}</div></main>;
}
