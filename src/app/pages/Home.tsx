import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
import { ArrowLeft, PenLine, Images} from 'lucide-react';
import { InViewTitle } from '@/registry/components/in-view-title/in-view-title';
import { MagneticButton } from '@/vendor/easyui/ui/MagneticButton';
import { posts, categories, photos, asset, arNum } from '../data';
import { Link, navigate } from '../router';
import { ArticleCard, FeaturedCard, Reveal, SectionHead } from '../cards';
import { StarOrnament } from '../art';
import { MapExplorer } from '../MapExplorer';
import { useMotionValue, useSpring } from 'motion/react';
import { useState } from 'react';
import { Clock3 } from 'lucide-react';
import { fmtDate, minutesLabel, type Photo } from '../data';
import { Newsletter } from '../chrome';
import { Timeline } from '../Timeline';

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 50]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 12]);
  const hero = ['mascate-1680', 'pearl-fishery-1881', 'muskat-harbour-1813'].map(s => photos.find(p => p.slug === s)!);
  const mx = useMotionValue(0), my = useMotionValue(0); const rx = useSpring(my, { stiffness: 120, damping: 18 }), ry = useSpring(mx, { stiffness: 120, damping: 18 });
  const ease = [.2, .8, .2, 1] as const;
  const rise = (d: number) => reduce ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: .9, delay: d, ease } };
  // Title lines never fade: they slide into place fully opaque (legible from the first frame, and counted for LCP immediately).
  const slide = (d: number) => reduce ? {} : { initial: { y: 36 }, animate: { y: 0 }, transition: { duration: .9, delay: d, ease } };
  return <section ref={ref} aria-labelledby="hero-t" className="relative isolate overflow-hidden bg-[var(--hero-bg)] text-[#f6efe1]">
    <div className="pattern absolute inset-0 -z-10 opacity-80" aria-hidden="true" />
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_85%_10%,rgba(226,184,102,.22),transparent_70%),radial-gradient(50%_60%_at_0%_100%,rgba(29,58,74,.55),transparent_70%)]" />
    <motion.div style={{ rotate: rot }} className="pointer-events-none absolute -left-40 -top-40 -z-10 size-[560px] text-[#e2b866] opacity-30" aria-hidden="true"><StarOrnament spin={!reduce} className="size-full" /></motion.div>
    <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pb-28 lg:pt-20">
      <div>
        <motion.p {...rise(0)} className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#e2b866]">
          <span className="rounded-full border border-[#e2b866]/60 px-3 py-1">العدد التجريبي</span><span>من مكتبة الكود · alcode.ae</span>
        </motion.p>
        <h1 id="hero-t" className="mt-6 text-[#f6efe1]">
          <motion.span {...slide(0)} className="block font-display text-[clamp(3rem,10vw,7.4rem)] font-black leading-[1.05] text-[#f6efe1]">مجلة الكود</motion.span>
          <motion.span {...slide(.1)} className="mt-1 block text-[clamp(2.4rem,7vw,5rem)] leading-[1.15] text-[#e2b866]" style={{ fontFamily: 'Aref Ruqaa, serif' }}>الرقمية</motion.span>
        </h1>
        <motion.p {...rise(.32)} className="mt-6 max-w-xl text-lg leading-9 text-[#e6d9bf] sm:text-xl">مساحة للمقالات عن تاريخ الخليج وتراثه ومخطوطاته وشعره، تُكتب وتُنشر بسهولة من المتصفح.</motion.p>
        <motion.div {...rise(.44)} className="mt-8 flex flex-wrap gap-3">
          <MagneticButton strength={.25} glow={false} onClick={() => navigate(`article/${posts[0].slug}/`)} className="!rounded-full !bg-[#e2b866] !px-6 !py-3 !text-base !font-bold !text-[#1b1712] hover:!bg-[#f1d59c]">ابدأ القراءة <ArrowLeft size={18} aria-hidden="true" /></MagneticButton>
          <Link to="write/" className="inline-flex items-center gap-2 rounded-full border border-[#e2b866]/70 px-6 py-3 font-bold text-[#f6efe1] transition hover:bg-[#e2b866]/15 active:scale-95"><PenLine size={18} aria-hidden="true" /> اكتب مقالاً</Link>
        </motion.div>
        <motion.dl {...rise(.56)} className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6">
          {[[posts.length, 'مقالات'], [categories.length, 'أقسام'], [photos.length, 'عمل أرشيفي']].map(([n, l]) => <div key={l as string}><dt className="text-sm text-[#d9cbb0]">{l}</dt><dd className="font-display text-3xl font-bold text-[#f6efe1]">{arNum(n as number)}</dd></div>)}
        </motion.dl>
      </div>
      <motion.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }} onPointerMove={e => { if (reduce || e.pointerType !== 'mouse') return; const r = e.currentTarget.getBoundingClientRect(); mx.set(((e.clientX - r.left) / r.width - .5) * 14); my.set(-((e.clientY - r.top) / r.height - .5) * 14); }} onPointerLeave={() => { mx.set(0); my.set(0); }} className="relative mx-auto h-[400px] w-full max-w-[560px] sm:h-[500px]" aria-label="لوحات محفورة قديمة للخليج (ملكية عامة)" role="group">
        {hero.map((p, k) => <motion.figure key={p.slug} style={{ y: k === 1 ? y2 : y1 }} initial={false} animate={{ rotate: [-5, 4, -2][k] }} transition={{ duration: 1, delay: .2 + k * .15, ease }}
          className={`absolute m-0 overflow-hidden rounded-md border-[6px] border-[#f3ead8] bg-[#f3ead8] shadow-[0_30px_60px_-20px_rgba(0,0,0,.7)] transition-transform duration-500 hover:z-20 hover:scale-[1.04] ${['right-0 top-0 w-[64%]', 'left-0 top-[34%] w-[56%] z-10', 'right-[10%] bottom-0 w-[52%]'][k]}`}>
          <img src={asset(p.thumb)} alt={p.label} className="block w-full object-cover sepia-[.25]" style={{ aspectRatio: `${p.w}/${p.h}` }} width={p.w} height={p.h} fetchPriority={k === 0 ? 'high' : undefined} />
          <figcaption className="bg-[#f3ead8] px-1 pt-1 text-[.72rem] font-medium text-[#3d3326]">{p.label} · {p.licence === 'Public domain' ? 'ملكية عامة' : p.licence}</figcaption>
        </motion.figure>)}
      </motion.div>
    </div>
    <svg aria-hidden="true" viewBox="0 0 1440 40" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-px block h-8 w-full text-[var(--background)]"><path d="M0 40 L0 20 Q360 0 720 20 T1440 20 L1440 40 Z" fill="currentColor" /></svg>
  </section>;
}

export default function Home() {
  const [feat, ...rest] = posts;
  return <main id="main">
    <Hero />
    <div className="marquee-wrap overflow-hidden border-y border-[var(--border)] bg-[var(--surface-raised)] py-4" aria-hidden="true">
      <div className="marquee font-display text-xl font-bold text-[var(--text-secondary)]">
        {[...categories, ...categories, ...categories, ...categories].map((c, i) => <span key={i} className="flex items-center gap-12 whitespace-nowrap">{c.name}<span className="text-[var(--accent)]">◆</span></span>)}
      </div>
    </div>
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
      <section aria-labelledby="feat" className="pt-16">
        <SectionHead kicker="افتتاحية العدد" title="المقال المختار" id="feat" />
        <FeaturedCard p={feat} />
      </section>
      <section aria-labelledby="latest" className="pt-24">
        <SectionHead kicker="جديد المجلة" title="فهرس العدد" id="latest" to="search/" linkLabel="كل المقالات" />
        <IndexList />
      </section>
    </div>
    <ArchiveReel />
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
      <section aria-labelledby="cats" className="pt-24">
        <div className="mb-8"><p className="kicker">أبواب المجلة</p><InViewTitle as="h2" id="cats" variant="word" text="أقسام تحفظ ذاكرة المكان" className="mt-1 text-3xl sm:text-4xl" /></div>
        <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => { const ph = photos.find(p => p.slug === CAT_ART[c.slug]) ?? photos[0]; const n = posts.filter(p => p.category === c.name).length; return <Reveal key={c.slug} delay={i * .05} className={i === 0 ? 'sm:col-span-2 lg:row-span-2' : i >= 3 ? 'lg:col-span-2' : ''}>
            <Link to={`category/${c.slug}/`} className="group relative flex h-full overflow-hidden rounded-[22px] bg-[#1b1712] text-[#f6efe1]">
              <img src={asset(ph.thumb)} alt="" loading="lazy" className="absolute inset-0 size-full object-cover opacity-70 sepia-[.35] transition duration-[1.2s] ease-out group-hover:scale-110 group-hover:opacity-50" />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#1b1712] via-[#1b1712]/60 to-transparent" />
              <span className="relative mt-auto flex w-full items-end justify-between gap-3 p-5 sm:p-6">
                <span><span className={`block font-display font-black leading-tight text-[#f6efe1] ${i === 0 ? 'text-4xl sm:text-5xl' : 'text-2xl'}`}>{c.name}</span>
                  <span className="mt-1 block max-w-sm text-sm text-[#e6d9bf] transition-all duration-500 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">{c.blurb}</span></span>
                <span className="shrink-0 rounded-full border border-[#e2b866]/70 px-3 py-1 text-xs font-bold text-[#e2b866] transition group-hover:bg-[#e2b866] group-hover:text-[#1b1712]">{n ? `${arNum(n)} مقال` : 'قريباً'}</span>
              </span>
            </Link></Reveal>; })}
        </div>
      </section>
      <section aria-labelledby="map" className="pt-24">
        <SectionHead kicker="خريطة تفاعلية" title="الخليج على خريطة عمرها قرنان ونصف" id="map" />
        <MapExplorer />
      </section>
      <section aria-labelledby="tl" className="pt-24">
        <SectionHead kicker="مكوّن تفاعلي" title="الخط الزمني" id="tl" to="timeline/" linkLabel="عرض كامل" />
        <Timeline />
      </section>
      <section aria-labelledby="cta" className="pt-24">
        <div className="relative overflow-hidden rounded-[30px] bg-[var(--hero-bg)] p-8 text-[#f6efe1] sm:p-14">
          <div className="pattern absolute inset-0 opacity-70" aria-hidden="true" />
          <StarOrnament className="absolute -bottom-16 -left-16 hidden size-72 text-[#e2b866] opacity-40 md:block" />
          <div className="relative max-w-xl">
            <h2 id="cta" className="text-3xl text-[#f6efe1] sm:text-4xl">لديك مقال؟ <span style={{ fontFamily: 'Aref Ruqaa, serif' }} className="text-[#e2b866]">اكتبه الآن</span></h2>
            <p className="mt-3 text-lg text-[#e6d9bf]">محرّر بمعاينة حيّة يحفظ مسودتك في متصفحك ويصدّر ملفاً جاهزاً للنشر.</p>
            <MagneticButton strength={.3} glow={false} onClick={() => navigate('write/')} className="mt-6 !rounded-full !bg-[#e2b866] !px-6 !py-3 !text-base !font-bold !text-[#1b1712] hover:!bg-[#f1d59c]"><PenLine size={18} aria-hidden="true" /> افتح المحرّر</MagneticButton>
          </div>
        </div>
      </section>
      <div className="pt-16"><Newsletter /></div>
    </div>
  </main>;
}

const CAT_ART: Record<string, string> = { history: 'mascate-1680', heritage: 'bahrain-fort-1870', 'manuscripts-travelers': 'arabia-map-1771', poetry: 'joassamee-dow-1837', 'bookstore-news': 'hidaya-school-1919', guide: 'gulf-map-dutch', 'economy-trade': 'bahrain-market-1930s' };

/* Editorial numbered index: hovering a row reveals its cover, which follows the cursor. */
function IndexList() {
  const reduce = useReducedMotion();
  const [hot, setHot] = useState<number | null>(null);
  const x = useSpring(0, { stiffness: 300, damping: 30 }), y = useSpring(0, { stiffness: 300, damping: 30 });
  const ref = useRef<HTMLOListElement>(null);
  return <ol ref={ref} className="relative overflow-x-clip border-t border-[var(--border-strong)]" onPointerMove={e => { const r = ref.current!.getBoundingClientRect(); x.set(e.clientX - r.left); y.set(e.clientY - r.top); }} onPointerLeave={() => setHot(null)}>
    {posts.slice(0, 10).map((p, i) => <li key={p.slug} onPointerEnter={() => setHot(i)} className="group relative border-b border-[var(--border-strong)]">
      <Link to={`article/${p.slug}/`} className="grid grid-cols-[3rem_1fr] items-baseline gap-x-4 gap-y-1 py-6 sm:grid-cols-[5rem_1fr_auto] sm:py-8" onFocus={() => setHot(i)}>
        <span className="font-display text-3xl font-black text-[var(--accent)] sm:text-5xl">{arNum(i + 1).padStart(2, '٠')}</span>
        <span className="min-w-0">
          <span className="flex flex-wrap items-center gap-2 text-sm"><span className="kicker">{p.category}</span>{p.sample && <span className="sample-badge">مقال تجريبي</span>}</span>
          <span className="mt-1 block font-display text-2xl font-bold leading-snug transition-transform duration-500 group-hover:-translate-x-2 sm:text-[2rem]">{p.title}</span>
          <span className="mt-2 block max-w-2xl text-[var(--text-muted)]">{p.excerpt}</span>
        </span>
        <span className="col-start-2 flex items-center gap-3 text-sm text-[var(--text-muted)] sm:col-start-3 sm:flex-col sm:items-end"><time dateTime={p.date}>{fmtDate(p.date)}</time><span className="inline-flex items-center gap-1"><Clock3 size={14} aria-hidden="true" />{minutesLabel(p.minutes)}</span><ArrowLeft size={22} aria-hidden="true" className="text-[var(--accent)] transition-transform group-hover:-translate-x-2" /></span>
      </Link>
    </li>)}
    {!reduce && <motion.div aria-hidden="true" style={{ x, y, translateX: '-50%', translateY: '-50%' }} animate={{ opacity: hot === null ? 0 : 1, scale: hot === null ? .8 : 1, rotate: hot === null ? 0 : -4 }} transition={{ duration: .25 }} className="pointer-events-none absolute left-0 top-0 z-10 hidden w-64 overflow-hidden rounded-lg border-[5px] border-[#f3ead8] shadow-2xl lg:block">
      {hot !== null && <img src={asset(posts[hot].cover)} alt="" className="block aspect-[4/3] w-full object-cover" />}
    </motion.div>}
  </ol>;
}

/* Scroll-driven archive reel: vertical scroll pans a strip of historical engravings and maps. */
function ArchiveReel() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const items = ['muskat-harbour-1813', 'mutra-1813', 'pearl-fishery-1881', 'shinas-1813', 'mascate-1680', 'joassamee-dow-1837', 'ras-al-khaimah-1813', 'arabia-map-1771'].map(s => photos.find(p => p.slug === s)!) as Photo[];
  // Not pinned: the strip drifts sideways while the section crosses the viewport, so the page has no tall spacer.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const row = useRef<HTMLDivElement>(null); const [dist, setDist] = useState(0);
  useEffect(() => { const m = () => row.current && setDist(Math.max(0, row.current.scrollWidth - innerWidth + 48)); m(); addEventListener('resize', m); return () => removeEventListener('resize', m); }, []);
  const x = useTransform(scrollYProgress, v => v * dist);
  const card = (p: Photo, i: number) => <figure key={p.slug} className="group m-0 w-[78vw] shrink-0 snap-center sm:w-[46vw] lg:w-[34vw]">
    <Link to={`gallery/#${p.slug}`} className="block overflow-hidden rounded-md border-[6px] border-[#f3ead8] bg-[#f3ead8] shadow-[0_30px_60px_-30px_rgba(0,0,0,.8)] transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
      <img src={asset(p.thumb)} alt={p.label} loading="lazy" decoding="async" className="block aspect-[4/3] w-full object-cover" width={p.w} height={p.h} />
    </Link>
    <figcaption className="mt-3 flex items-baseline gap-3 text-[#e6d9bf]"><span className="font-display text-2xl font-black text-[#e2b866]">{arNum(i + 1)}</span><span><span className="block font-semibold text-[#f6efe1]">{p.label}</span><span className="text-xs">{p.date} · {p.licence === 'Public domain' ? 'ملكية عامة' : p.licence}</span></span></figcaption>
  </figure>;
  const head = <div className="mx-auto max-w-[1320px] px-4 sm:px-6"><p className="kicker !text-[#e2b866]">من الأرشيف المفتوح</p><h2 id="reel" className="mt-1 text-3xl text-[#f6efe1] sm:text-5xl">الخليج كما رسمه الرحّالة والحفّارون</h2><p className="mt-3 max-w-2xl text-[#e6d9bf]">لوحات محفورة وخرائط قديمة من مجموعات مفتوحة، مع وصف كل مصدر وترخيصه. {reduce ? 'اسحب الشريط أفقياً.' : 'يتحرك الشريط أفقياً مع التمرير.'}</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link to="gallery/" className="inline-flex items-center gap-2 rounded-full bg-[#e2b866] px-5 py-2.5 font-bold text-[#1b1712] transition hover:bg-[#f1d59c] active:scale-95"><Images size={18} aria-hidden="true" /> مكتبة الصور</Link><Link to="credits/" className="inline-flex items-center gap-2 rounded-full border border-[#e2b866]/70 px-5 py-2.5 font-bold text-[#f6efe1] transition hover:bg-[#e2b866]/15">المصادر والتراخيص</Link></div></div>;
  if (reduce) return <section aria-labelledby="reel" className="mt-24 bg-[var(--hero-bg)] py-16 pattern">{head}<div className="mt-10 flex snap-x gap-6 overflow-x-auto px-6 pb-4">{items.map(card)}</div></section>;
  return <section ref={ref} aria-labelledby="reel" className="relative mt-24 bg-[var(--hero-bg)]">
    <div className="pattern relative flex flex-col justify-center overflow-hidden py-16 sm:py-20">
      {head}
      <motion.div ref={row} style={{ x }} className="mt-10 flex w-max gap-8 ps-6">{items.map(card)}</motion.div>
      <motion.div aria-hidden="true" style={{ scaleX: scrollYProgress }} className="absolute inset-x-0 bottom-0 h-1 origin-right bg-[#e2b866]" />
    </div>
  </section>;
}
