// v3 redesign sections (clean-room; ideas from the inspiration galleries, no copied code/assets).
import { useEffect, useRef } from 'react';
import { Link } from './router';
import { books, collections, newest, byHandle, asset, fmtPrice, type Book } from './data';

const reduce = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const coverOf = (b: Book) => b.images[0];

/** Thin gold reading-progress filament fixed at top. */
export function ScrollFilament() {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => { const el = r.current; if (!el) return; let raf = 0;
    const f = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { const h = document.documentElement; el.style.transform = `scaleX(${Math.min(1, h.scrollTop / Math.max(1, h.scrollHeight - innerHeight))})`; }); };
    f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  return <div ref={r} className="v3-filament" aria-hidden="true" />;
}

/** Hero: oversized Ruqaa type over a fanned 3D stack of the newest real covers; pointer parallax; covers slide out like records from a sleeve. */
export function Hero3() {
  const stack = newest().slice(0, 5); const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const el = ref.current; if (!el || reduce()) return; let raf = 0;
    const mv = (e: PointerEvent) => { if (e.pointerType !== 'mouse') return; const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { el.style.setProperty('--px', x.toFixed(3)); el.style.setProperty('--py', y.toFixed(3)); }); };
    const lv = () => { el.style.setProperty('--px', '0'); el.style.setProperty('--py', '0'); };
    el.addEventListener('pointermove', mv); el.addEventListener('pointerleave', lv); return () => { el.removeEventListener('pointermove', mv); el.removeEventListener('pointerleave', lv); }; }, []);
  const lead = stack[0];
  return <section ref={ref} className="v3-hero" aria-labelledby="v3-hero-h">
    <div className="v3-grain" aria-hidden="true" />
    <div className="v3-hero-in">
      <div className="v3-hero-copy">
        <p className="v3-kicker"><span className="v3-dot" aria-hidden="true" />مؤسسة الكود لنشر الكتب</p>
        <h1 id="v3-hero-h" className="v3-mega"><span className="v3-line"><span>ذاكرة الخليج</span></span><span className="v3-line"><span className="v3-gold">بين دفّتين</span></span></h1>
        <p className="v3-lead">{books.length} كتابًا في تاريخ الخليج العربي والظفرة وأبوظبي وأدب الرحلات والشعر. تصفّح، ثم أتمّ الدفع على متجر الكود الرسمي.</p>
        <div className="v3-cta"><Link to="books/" className="v3-btn">تصفّح كل الكتب <span aria-hidden="true">←</span></Link><Link to="t/" className="v3-btn-ghost">مجموعات مختارة</Link></div>
      </div>
      <div className="v3-stack" aria-label="أحدث الإصدارات">
        {stack.map((b, i) => { const im = coverOf(b); if (!im) return null;
          return <Link key={b.handle} to={`book/${b.handle}/`} className="v3-card" style={{ ['--i' as any]: i, ['--n' as any]: stack.length }} aria-label={`${b.title} — ${fmtPrice(b.price)}`}>
            <img src={asset(im.sm)} alt="" width={im.w} height={im.h} loading={i < 2 ? 'eager' : 'lazy'} decoding="async" />
          </Link>; })}
        {lead && <p className="v3-stack-cap">الأحدث: <Link to={`book/${lead.handle}/`}>{lead.title.split(/[:،(]/)[0]}</Link></p>}
      </div>
    </div>
  </section>;
}

/** Two counter-scrolling ribbons of real covers (pauses on hover/focus, static under reduced motion). */
export function CoverRibbon() {
  const all = books.filter(b => b.images[0]);
  const half = Math.ceil(all.length / 2); const rows = [all.slice(0, half), all.slice(half)];
  return <section className="v3-ribbon" aria-label="رفّ الإصدارات">
    {rows.map((row, k) => <div key={k} className={`v3-ribbon-row ${k ? 'rev' : ''}`}><ul className="v3-ribbon-track">
      {[...row, ...row].map((b, i) => { const im = coverOf(b)!; const dup = i >= row.length;
        return <li key={i} aria-hidden={dup || undefined}><Link to={`book/${b.handle}/`} tabIndex={dup ? -1 : undefined} title={b.title}>
          <img src={asset(im.sm)} alt={dup ? '' : b.title} width={im.w} height={im.h} loading="lazy" decoding="async" /></Link></li>; })}
    </ul></div>)}
  </section>;
}

/** Bento grid of real collections with counts and a cover from each. */
export function Bento() {
  const cs = collections.map(c => ({ c, items: books.filter(b => b.collections.includes(c.handle)) })).filter(x => x.items.length).slice(0, 6);
  return <section className="v3-bento-wrap" aria-labelledby="v3-bento-h">
    <div className="v3-sec-top"><h2 id="v3-bento-h" className="v3-h2 v3-ink-reveal">رفوف المتجر</h2><Link to="books/" className="v3-more">كل الكتب ←</Link></div>
    <ul className="v3-bento">{cs.map(({ c, items }, i) => { const im = items[0].images[0];
      return <li key={c.handle} className={`v3-tile t${i}`} data-v3reveal><Link to={`collection/${c.handle}/`}>
        <span className="v3-tile-n">{items.length} {items.length > 10 || items.length < 3 ? 'كتابًا' : 'كتب'}</span>
        <h3>{c.title}</h3>
        {c.description?.[0] && <p>{c.description[0]}</p>}
        {im && <img src={asset(im.sm)} alt="" width={im.w} height={im.h} loading="lazy" decoding="async" />}
      </Link></li>; })}</ul>
  </section>;
}

/** Big-type closing band. */
export function BigType() {
  return <section className="v3-big" aria-label="ختام">
    <div className="v3-big-row" aria-hidden="true"><span>اقرأ · الخليج · الظفرة · أبوظبي · الرحلات · الشعر · </span><span>اقرأ · الخليج · الظفرة · أبوظبي · الرحلات · الشعر · </span></div>
    <Link to="books/" className="v3-btn v3-big-cta">ابدأ من الرفّ <span aria-hidden="true">←</span></Link>
  </section>;
}

/** Adds .in to [data-v3reveal] and .v3-ink-reveal elements as they enter. */
export function useV3Reveal() {
  useEffect(() => { if (reduce() || !('IntersectionObserver' in window)) return;
    const els = [...document.querySelectorAll<HTMLElement>('[data-v3reveal], .v3-ink-reveal')].filter(e => e.getBoundingClientRect().top > innerHeight * .9);
    els.forEach(e => e.classList.add('v3-pre'));
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -10% 0px' });
    els.forEach(e => io.observe(e)); return () => io.disconnect(); }, []);
}
export { byHandle };

/** Site-wide: staggered fade-up for sections/cards and ink reveal for section titles, re-run per route. */
export function useV4Reveal(path: string) {
  useEffect(() => { if (reduce() || !('IntersectionObserver' in window)) return;
    let io: IntersectionObserver | null = null;
    const t = setTimeout(() => {
      const sel = 'main h2.sec, main .v3-h2, main .book-card, main .shelf-card, main .theme-card, main .v3-tile, main .step, main .essay, main [data-v3reveal]';
      const els = [...document.querySelectorAll<HTMLElement>(sel)].filter(e => !e.closest('.carousel,.v3-ribbon,.marquee') && e.getBoundingClientRect().top > innerHeight * .92);
      els.forEach(e => e.classList.add(e.matches('h2.sec,.v3-h2') ? 'v4-ink' : 'v4-fade'));
      let k = 0; io = new IntersectionObserver(es => { es.forEach(en => { if (en.isIntersecting) { const el = en.target as HTMLElement; el.style.transitionDelay = `${(k++ % 4) * 70}ms`; el.classList.add('v4-in'); io!.unobserve(el); } }); k = 0; }, { rootMargin: '0px 0px -8% 0px' });
      els.forEach(e => io!.observe(e));
    }, 60);
    return () => { clearTimeout(t); io?.disconnect(); }; }, [path]);
}
