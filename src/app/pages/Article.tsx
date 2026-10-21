import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useMotionValueEvent } from 'motion/react';
import { Copy, Check, Share2, Tag as TagIcon, Type } from 'lucide-react';
import { Gauge, GaugeTrack, GaugeArc, GaugeValue, GaugeText } from '@/components/gauge';
import { Knob, KnobDial, KnobTrack, KnobRange, KnobPointer, KnobLabel } from '@/components/ui/knob';
import { asset, bySlug, fmtDate, minutesLabel, tagSlug, arNum, SITE_URL, type Post } from '../data';
import { Link } from '../router';
import { Prose, headings } from '../Prose';
import { ArticleCard, Meta } from '../cards';
import { SaveButton } from '../chrome';
import NotFound from './NotFound';

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: .001 });
  return <motion.div aria-hidden="true" style={{ scaleX: x }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-right bg-[var(--accent)]" />;
}
function ProgressGauge() {
  const { scrollYProgress } = useScroll();
  const [v, setV] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', n => setV(Math.round(n * 100)));
  return <div className="w-32" title="تقدّم القراءة">
    <Gauge value={v} min={0} max={100} padding={8} aria-label={`تقدّم القراءة ${v} بالمئة`}>
      <GaugeTrack width={20} color="var(--border)" opacity={1} />
      <GaugeArc width={20} color="var(--accent)" />
      <GaugeValue y={10} fontSize={64} suffix="%" color="var(--text-primary)" />
      <GaugeText y={70} fontSize={30} color="var(--text-muted)">قراءة</GaugeText>
    </Gauge>
  </div>;
}
function Share({ p }: { p: Post }) {
  const [ok, setOk] = useState(false);
  const url = `${SITE_URL}article/${p.slug}/`; const t = encodeURIComponent(p.title); const u = encodeURIComponent(url);
  const links = [['X', `https://x.com/intent/post?text=${t}&url=${u}`], ['واتساب', `https://wa.me/?text=${t}%20${u}`], ['تيليجرام', `https://t.me/share/url?url=${u}&text=${t}`], ['لينكدإن', `https://www.linkedin.com/sharing/share-offsite/?url=${u}`]];
  return <div className="flex flex-wrap items-center gap-2">
    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-muted)]"><Share2 size={16} aria-hidden="true" /> شارك:</span>
    {links.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="chip">{l}</a>)}
    <button type="button" className="chip" onClick={async () => { try { if (navigator.share) await navigator.share({ title: p.title, url }); else { await navigator.clipboard.writeText(url); } setOk(true); setTimeout(() => setOk(false), 1800); } catch {} }}>
      {ok ? <><Check size={14} aria-hidden="true" /> تم النسخ</> : <><Copy size={14} aria-hidden="true" /> انسخ الرابط</>}
    </button>
  </div>;
}
export default function Article({ slug }: { slug: string }) {
  const p = bySlug(slug);
  const reduce = useReducedMotion();
  const [scale, setScale] = useState(() => Number(localStorage.getItem('alcode-scale') || 100));
  useEffect(() => { document.documentElement.style.setProperty('--reader-scale', String(scale / 100)); localStorage.setItem('alcode-scale', String(scale)); return () => { document.documentElement.style.setProperty('--reader-scale', '1'); }; }, [scale]);
  useEffect(() => { if (p) document.title = `${p.title} — مجلة الكود الرقمية`; }, [p]);
  if (!p) return <NotFound />;
  const toc = headings(p.body);
  const related = p.related.map(bySlug).filter(Boolean) as Post[];
  return <>
    <ProgressBar />
    <main id="main">
      <header className="relative overflow-hidden bg-[var(--hero-bg)] text-[#f6efe1]">
        <img src={asset(p.cover)} alt="" className="absolute inset-0 size-full object-cover opacity-45" width="1200" height="750" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[var(--hero-bg)] via-[var(--hero-bg)]/80 to-[var(--hero-bg)]/30" />
        <div className="relative mx-auto max-w-[1000px] px-4 pb-14 pt-20 sm:px-6 sm:pt-28">
          <motion.nav aria-label="مسار التنقل" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap items-center gap-2 text-sm text-[#e6d9bf]"><Link to="" className="hover:text-[#e2b866]">الرئيسية</Link><span aria-hidden="true">‹</span><Link to={`category/${p.categorySlug}/`} className="font-bold text-[#e2b866] hover:underline">{p.category}</Link></motion.nav>
          <div className="mt-5 flex flex-wrap gap-2">{p.sample && <span className="sample-badge !bg-[#e2b866] !text-[#1b1712]">مقال تجريبي</span>}</div>
          <motion.h1 initial={reduce ? false : { y: 24 }} animate={{ y: 0 }} transition={{ duration: .8, ease: [.2, .8, .2, 1] }} className="mt-4 text-[clamp(2rem,5.5vw,3.8rem)] font-black leading-[1.25] text-[#f6efe1]">{p.title}</motion.h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-[#e6d9bf] sm:text-xl">{p.excerpt}</p>
          {p.book && <p className="mt-4 text-base font-semibold text-[#e2b866]">عن كتاب «{p.book}» · {p.author} · تحقيق: أحمد علي المرر</p>}
          <div className="mt-6"><Meta p={p} light /></div>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_260px]">
        <article className="mx-auto w-full max-w-[720px] min-w-0">
          <Prose source={p.body} />
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-[var(--border)] pt-6">
            <TagIcon size={16} aria-hidden="true" className="text-[var(--accent)]" />
            {p.tags.map(t => <Link key={t} to={`tag/${tagSlug(t)}/`} className="chip">#{t}</Link>)}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4"><Share p={p} /><SaveButton slug={p.slug} /></div>
        </article>
        <aside className="order-first lg:order-none" aria-label="أدوات القراءة">
          <div className="space-y-5 lg:sticky lg:top-28">
            <div className="flex items-center justify-around gap-4 rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-4">
              <ProgressGauge />
              <div className="flex flex-col items-center gap-1 text-[var(--text-primary)]">
                <Knob value={scale} min={85} max={135} step={5} largeStep={10} onValueChange={v => setScale(v)} aria-label="حجم خط المقال" size="lg" style={{ ['--color-knob-range' as any]: 'var(--accent)' }}>
                  <KnobDial><KnobTrack /><KnobRange className="stroke-[var(--accent)]" /><KnobPointer /></KnobDial><KnobLabel className="sr-only">حجم خط المقال</KnobLabel>
                </Knob>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)]"><Type size={13} aria-hidden="true" /> حجم الخط {arNum(scale)}٪</span>
              </div>
            </div>
            <p className="text-center text-sm text-[var(--text-muted)]">مدة القراءة: {minutesLabel(p.minutes)} · {arNum(p.words)} كلمة</p>
            {toc.length > 0 && <nav aria-label="محتويات المقال" className="hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-5 lg:block">
              <p className="kicker">في هذا المقال</p>
              <ol className="mt-3 space-y-2">{toc.map(h => <li key={h.id} className={h.level === 3 ? 'ps-4' : ''}><a href={`#${h.id}`} className="text-[var(--text-secondary)] hover:text-[var(--accent)]"><span className="ulink">{h.text}</span></a></li>)}</ol>
            </nav>}
          </div>
        </aside>
      </div>
      {related.length > 0 && <section aria-labelledby="rel" className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="rule-orn mb-8"><h2 id="rel" className="text-2xl">مقالات ذات صلة</h2></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{related.map((r, i) => <ArticleCard key={r.slug} p={r} i={i} />)}</div>
      </section>}
    </main>
  </>;
}
export { fmtDate };
