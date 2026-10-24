import { SaveBadge } from '../extras5';
import { useEffect, useState } from 'react';
import { ShareButtons, useRecent } from '../extras';
import { Book3D, BuyRow, Bundle } from '../extras2';
import { ZoomIn } from 'lucide-react';
import { Zap, ExternalLink } from 'lucide-react';
import { Link } from '../router';
import { byHandle, fmtPrice, related, variantOf, permalink, collectionTitle, SHOP, asset } from '../data';
import { Cover, AddButton, WishButton, Availability, Grid } from '../ui';
import { type Book } from '../data';
import { Specs, TrustStrip, AuthorBlock, InsideBook, SameCollection } from '../extras3';

function Zoom({ b, i }: { b: Book; i: number }) {
  const im = b.images[i] as any; const [on, setOn] = useState(false); const [o, setO] = useState('50% 50%');
  const pos = (e: React.PointerEvent<HTMLButtonElement>) => { const r = e.currentTarget.getBoundingClientRect(); setO(`${((e.clientX - r.left) / r.width * 100).toFixed(1)}% ${((e.clientY - r.top) / r.height * 100).toFixed(1)}%`); };
  return <button type="button" aria-pressed={on} aria-label={on ? 'تصغير صورة الغلاف' : 'تكبير صورة الغلاف'} onClick={e => { pos(e as any); setOn(x => !x); }} onPointerMove={e => on && pos(e)} onPointerLeave={() => setOn(false)}
    className={`zoom relative block aspect-[4/5] w-full rounded-2xl ${on ? 'on bg-[var(--surface-raised)]' : ''}`}>
    <img src={asset(on ? im.src : (im.cut || im.src))} alt={im.alt || b.title} width={im.w} height={im.h} fetchPriority="high" style={{ transformOrigin: o }} className={`book-img h-full w-full object-contain ${im.cut && !on ? 'is-cut' : ''}`} />
    <span className="pointer-events-none absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-[var(--card)] px-2.5 py-1 text-sm font-semibold text-[var(--text-secondary)] shadow"><ZoomIn size={15} aria-hidden="true" />{on ? 'اضغط للتصغير' : 'اضغط للتكبير'}</span>
  </button>;
}
import NotFound from './NotFound';
import { RecentRow } from '../ui';
export default function BookPage({ handle }: { handle: string }) {
  const b = byHandle(handle); const [i, setI] = useState(0); const rec = useRecent();
  useEffect(() => { if (b) rec.push(b.handle); }, [handle]);
  if (!b) return <NotFound />;
  const v = variantOf(b);
  return <main id="main" className="mx-auto max-w-[1320px] px-4 pt-6 sm:px-6">
    <nav aria-label="مسار التنقل" className="text-sm text-[var(--text-muted)]"><ol className="flex flex-wrap items-center gap-1.5"><li><Link to="" className="hover:text-[var(--accent)]">الرئيسية</Link></li><li aria-hidden="true">/</li><li><Link to="books/" className="hover:text-[var(--accent)]">كل الكتب</Link></li>{b.collections[0] && <><li aria-hidden="true">/</li><li><Link to={`collection/${b.collections[0]}/`} className="hover:text-[var(--accent)]">{collectionTitle(b.collections[0])}</Link></li></>}</ol></nav>
    <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
      <div>
        <Zoom b={b} i={i} />
        <div className="mt-6 hidden sm:block no-print"><Book3D b={b} /></div>
        {b.images.length > 1 && <ul className="mt-3 flex flex-wrap gap-2" aria-label="صور الكتاب">{b.images.map((im, k) => <li key={im.src}>
          <button type="button" onClick={() => setI(k)} aria-pressed={i === k} aria-label={`الصورة ${k + 1} من ${b.images.length}`} className={`block w-20 overflow-hidden rounded-xl border-2 bg-[var(--surface-raised)] ${i === k ? 'border-[var(--accent)]' : 'border-[var(--border)]'}`}>
            <img src={asset((im as any).cutSm || im.sm)} alt="" width={im.w} height={im.h} className="aspect-[4/5] w-full object-contain" loading="lazy" /></button></li>)}</ul>}
      </div>
      <div>
        <h1 className="text-3xl leading-snug sm:text-4xl">{b.title}</h1>
        <p className="mt-2 text-lg text-[var(--text-secondary)]">{b.author}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3"><span className="text-3xl font-bold">{fmtPrice(b.price)}</span><span className="font-semibold text-[var(--text-secondary)]">+ شحن 25 د.إ.</span>{v.compare && Number(v.compare) > b.price && <s className="text-[var(--text-muted)]">{fmtPrice(v.compare)}</s>}<SaveBadge price={b.price} compare={v.compare} /><Availability b={b} /></div>
        <BuyRow b={b} />
        <div className="mt-3 flex flex-wrap gap-3">{!b.available && <AddButton b={b} />}<WishButton b={b} /></div>
        <ShareButtons b={b} />
        <p className="mt-3 text-sm text-[var(--text-muted)]">رسوم الشحن ثابتة: 25 د.إ. لكل طلب. يتم الدفع على متجر الكود الرسمي (alcode.ae).</p>
        <div className="no-print"><TrustStrip compact /></div>
        <div className="print-only mt-4 text-sm">{`السعر ${b.price} د.إ. + شحن 25 د.إ. · ${typeof location !== 'undefined' ? location.href : ''}`}</div>
        <div className="desc-ar mt-8">{b.description.map((p, k) => <p key={k}>{p}</p>)}</div>
        <Specs b={b} />
        <a href={`${SHOP}/products/${encodeURIComponent(b.handle)}`} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-[var(--accent)] hover:underline">صفحة الكتاب في متجر الكود<ExternalLink size={15} aria-hidden="true" /></a>
      </div>
    </div>
    <InsideBook b={b} />
    <Bundle b={b} />
    <AuthorBlock b={b} />
    <SameCollection b={b} />
    <RecentRow exclude={b.handle} />
    <section aria-labelledby="rel" className="pt-16"><h2 id="rel" className="text-2xl sm:text-3xl">كتب ذات صلة</h2><div className="mt-5"><Grid items={related(b)} /></div></section>
  </main>;
}
