import { SaveBadge } from '../extras5';
import { useEffect, useState } from 'react';
import { ShareButtons, useRecent } from '../extras';
import { Book3D, BuyRow, Bundle } from '../extras2';
import { ZoomIn, ChevronLeft, ExternalLink } from 'lucide-react';
import { waMe } from '../config';
import { Link } from '../router';
import { byHandle, fmtPrice, related, variantOf, permalink, collectionTitle, SHOP, asset } from '../data';
import { Cover, AddButton, WishButton, Availability, Grid } from '../ui';
import { type Book } from '../data';
import { Specs, TrustStrip, AuthorBlock, InsideBook, SameCollection } from '../extras3';

function Zoom({ b, i }: { b: Book; i: number }) {
  const im = b.images[i] as any; const [on, setOn] = useState(false); const [o, setO] = useState('50% 50%');
  const pos = (e: React.PointerEvent<HTMLButtonElement>) => { const r = e.currentTarget.getBoundingClientRect(); setO(`${((e.clientX - r.left) / r.width * 100).toFixed(1)}% ${((e.clientY - r.top) / r.height * 100).toFixed(1)}%`); };
  return <button type="button" aria-pressed={on} aria-label={on ? 'تصغير صورة الغلاف' : 'تكبير صورة الغلاف'} onClick={e => { pos(e as any); setOn(x => !x); }} onPointerMove={e => on && pos(e)} onPointerLeave={() => setOn(false)}
    className={`cover-plate zoom ${on ? 'on' : ''}`}>
    <span className="cover-mat"><img src={asset(im.src)} alt={im.alt || b.title} width={im.w} height={im.h} fetchPriority="high" style={{ transformOrigin: o }} className={`book-img${im.w / im.h < 0.98 ? ' fit-fill' : ''}`} /></span>
    <span className="pointer-events-none absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-[var(--card)] px-2.5 py-1 text-sm font-semibold text-[var(--text-secondary)] shadow"><ZoomIn size={15} aria-hidden="true" />{on ? 'اضغط للتصغير' : 'اضغط للتكبير'}</span>
  </button>;
}
import NotFound from './NotFound';
import { SampleViewer } from '../extras7';
import { themes } from '../extras6';
import { RecentRow } from '../ui';
export default function BookPage({ handle }: { handle: string }) {
  const b = byHandle(handle); const [i, setI] = useState(0); const rec = useRecent();
  useEffect(() => { if (b) rec.push(b.handle); }, [handle]);
  if (!b) return <NotFound />;
  const v = variantOf(b);
  return <main id="main" className="mx-auto max-w-[1320px] px-4 pt-6 sm:px-6">
    <nav className="crumbs" aria-label="مسار التنقل"><ol><li><Link to="">الرئيسية</Link></li><li aria-hidden="true"><ChevronLeft size={14} /></li><li><Link to="books/">كل الكتب</Link></li>{b.collections[0] && <><li aria-hidden="true"><ChevronLeft size={14} /></li><li><Link to={`collection/${b.collections[0]}/`}>{collectionTitle(b.collections[0])}</Link></li></>}<li aria-hidden="true"><ChevronLeft size={14} /></li><li aria-current="page">{b.title}</li></ol></nav>
    <div className="book-layout">
      <div className="book-gallery">
        <div className="book-stage"><Zoom b={b} i={i} /></div>
        {b.images.length > 1 && <ul className="thumbs mt-3" aria-label="صور الكتاب">{b.images.map((im, k) => <li key={im.src}>
          <button type="button" onClick={() => setI(k)} aria-pressed={i === k} aria-label={`الصورة ${k + 1} من ${b.images.length}`} className={`cover-plate cover-thumb ${i === k ? 'is-on' : ''}`}>
            <span className="cover-mat"><img src={asset(im.sm)} alt="" width={im.w} height={im.h} className={`book-img${im.w / im.h < 0.98 ? ' fit-fill' : ''}`} loading="lazy" /></span></button></li>)}</ul>}
        <SampleViewer b={b} />
        <div className="mt-6 hidden sm:block no-print"><Book3D b={b} /></div>
      </div>
      <div className="book-info">
        <h1 className="display book-title">{b.title}</h1>
        <p className="mt-3 text-lg text-[var(--text-secondary)]">{b.author}</p>
        <div className="price-plate"><span className="price-lg">{fmtPrice(b.price)}</span><span className="font-semibold text-[var(--text-secondary)]">+ شحن 25 د.إ.</span>{v.compare && Number(v.compare) > b.price && <s className="text-[var(--text-muted)]">{fmtPrice(v.compare)}</s>}<SaveBadge price={b.price} compare={v.compare} /><Availability b={b} /></div>
        <BuyRow b={b} />
        <div className="mt-3 flex flex-wrap gap-3">{!b.available && <AddButton b={b} />}<WishButton b={b} /><a className="ghost-btn" data-testid="ask-wa" target="_blank" rel="noopener" href={waMe(`مرحباً، أستفسر عن كتاب: ${b.title}`)}>اسأل المتجر على واتساب</a></div>
        <ShareButtons b={b} />
        {themes.some(t => t.handles.includes(b.handle)) && <div className="mt-4 flex flex-wrap items-center gap-2" data-testid="book-themes"><span className="font-semibold text-[var(--text-secondary)]">ضمن مجموعات:</span>{themes.filter(t => t.handles.includes(b.handle)).map(t => <Link key={t.slug} to={`t/${t.slug}/`} className="cat-chip !py-1.5 text-sm">{t.title}</Link>)}</div>}
        <p className="mt-3 text-sm text-[var(--text-muted)]">رسوم الشحن ثابتة: 25 د.إ. لكل طلب. يتم الدفع على متجر الكود الرسمي (alcode.ae).</p>
        <div className="no-print"><TrustStrip compact /></div>
        <div className="print-only mt-4 text-sm">{`السعر ${b.price} د.إ. + شحن 25 د.إ. · ${typeof location !== 'undefined' ? location.href : ''}`}</div>
        <div className="desc-ar book-prose mt-8">{b.description.map((p, k) => <p key={k}>{p}</p>)}</div>
        <Specs b={b} />
        <a href={`${SHOP}/products/${encodeURIComponent(b.handle)}`} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-[var(--accent)] hover:underline">صفحة الكتاب في متجر الكود<ExternalLink size={15} aria-hidden="true" /></a>
      </div>
    </div>
    <InsideBook b={b} />
    <Bundle b={b} />
    <AuthorBlock b={b} />
    <SameCollection b={b} />
    <RecentRow exclude={b.handle} />
    <section aria-labelledby="rel" className="pt-16"><h2 id="rel" className="sec">كتب ذات صلة</h2><div className="mt-5"><Grid items={related(b)} /></div></section>
  </main>;
}
