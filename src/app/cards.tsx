import { ArrowLeft, Clock3 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SpotlightCard } from '@/vendor/easyui/ui/SpotlightCard';
import { Link } from './router';
import { asset, fmtDate, minutesLabel, type Post } from './data';
import { SaveButton } from './chrome';

export function Meta({ p, light = false }: { p: Post; light?: boolean }) {
  return <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${light ? 'text-[#e6d9bf]' : 'text-[var(--text-muted)]'}`}>
    <span>{p.author}</span><span aria-hidden="true">·</span><time dateTime={p.date}>{fmtDate(p.date)}</time><span aria-hidden="true">·</span>
    <span className="inline-flex items-center gap-1"><Clock3 size={14} aria-hidden="true" />{minutesLabel(p.minutes)}</span>
  </p>;
}
export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7, delay, ease: [.2, .8, .2, 1] }}>{children}</motion.div>;
}
export function ArticleCard({ p, i = 0 }: { p: Post; i?: number }) {
  return <Reveal delay={i * .06} className="h-full">
    <article className="lift group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)]">
      <div className="cover-zoom relative aspect-[16/10] overflow-hidden">
        <img src={asset(p.cover)} alt="" loading="lazy" className="size-full object-cover" width="1200" height="750" />
        <div className="absolute inset-x-3 top-3 flex items-center justify-between">
          {p.sample ? <span className="sample-badge">مقال تجريبي</span> : <span />}
          <SaveButton slug={p.slug} compact />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Link to={`category/${p.categorySlug}/`} className="kicker w-fit hover:underline">{p.category}</Link>
        <h3 className="text-xl leading-snug"><Link to={`article/${p.slug}/`} className="after:absolute after:inset-0 after:content-['']"><span className="ulink">{p.title}</span></Link></h3>
        <p className="line-clamp-3 text-[var(--text-muted)]">{p.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-2"><Meta p={p} /><ArrowLeft size={18} aria-hidden="true" className="text-[var(--accent)] transition-transform group-hover:-translate-x-1.5" /></div>
      </div>
    </article>
  </Reveal>;
}
export function FeaturedCard({ p }: { p: Post }) {
  return <Reveal>
    <SpotlightCard spotlightColor="rgba(226,184,102,.16)" spotlightSize={520} className="!rounded-[30px] !border-[var(--border-strong)] !bg-[var(--card)] !p-0">
      <article className="group relative grid lg:grid-cols-[1.25fr_1fr]">
        <div className="cover-zoom relative min-h-[260px] overflow-hidden lg:min-h-[480px]">
          <img src={asset(p.cover)} alt="" className="absolute inset-0 size-full object-cover" width="1200" height="750" />
          <span className="absolute start-4 top-4 rounded-full bg-[var(--hero-bg)] px-3 py-1 text-sm font-bold text-[#e2b866]">المقال المختار</span>
        </div>
        <div className="relative flex flex-col justify-center gap-4 p-6 sm:p-10">
          <div className="flex items-center gap-2">{p.sample && <span className="sample-badge">مقال تجريبي</span>}<Link to={`category/${p.categorySlug}/`} className="kicker hover:underline">{p.category}</Link></div>
          <h3 className="text-3xl leading-tight sm:text-[2.6rem]"><Link to={`article/${p.slug}/`} className="after:absolute after:inset-0 after:content-['']"><span className="ulink">{p.title}</span></Link></h3>
          <p className="text-lg text-[var(--text-secondary)]">{p.excerpt}</p>
          <Meta p={p} />
          <span className="relative z-10 mt-2 inline-flex w-fit items-center gap-2 font-bold text-[var(--accent)]">اقرأ المقال <ArrowLeft size={18} aria-hidden="true" className="transition-transform group-hover:-translate-x-2" /></span>
        </div>
      </article>
    </SpotlightCard>
  </Reveal>;
}
export function SectionHead({ kicker, title, to, linkLabel, id }: { kicker: string; title: string; to?: string; linkLabel?: string; id?: string }) {
  return <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
    <div><p className="kicker">{kicker}</p><h2 id={id} className="mt-1 text-3xl sm:text-4xl">{title}</h2></div>
    {to && <Link to={to} className="group inline-flex items-center gap-2 font-bold text-[var(--accent)]"><span className="ulink">{linkLabel}</span><ArrowLeft size={18} aria-hidden="true" className="transition-transform group-hover:-translate-x-1" /></Link>}
  </div>;
}
