/* Reader features: resume position, inline glossary, series nav, journey map, before/after slider, highlight-to-share card.
   All data is prepared at build time from sourced files in content/ (see scripts/content.mjs). */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { motion, AnimatePresence, useReducedMotion, useScroll, useMotionValueEvent } from 'motion/react';
import { BookOpen, ChevronLeft, ChevronRight, Download, Image as ImageIcon, MapPinned, Quote as QuoteIcon, RotateCcw, Share2, X, Copy, Check } from 'lucide-react';
import data from '../generated/posts.json';
import { asset, bySlug, arNum, SITE_URL, photos, type Post } from './data';
import { Link } from './router';
import { LOGO_D, LOGO_W, LOGO_H } from './logoPath';

/* ── 2. Continue where you left off ── */
const posKey = (s: string) => `alcode-pos:${s}`;
export function useSavePosition(slug: string) {
  useEffect(() => {
    let t = 0;
    const save = () => { const h = document.documentElement.scrollHeight - innerHeight; if (h <= 0) return; const r = scrollY / h;
      if (r > .96) localStorage.removeItem(posKey(slug)); else if (r > .04) localStorage.setItem(posKey(slug), JSON.stringify({ r: +r.toFixed(4), y: Math.round(scrollY), t: Date.now() })); };
    const on = () => { clearTimeout(t); t = window.setTimeout(save, 400); };
    addEventListener('scroll', on, { passive: true }); return () => { clearTimeout(t); removeEventListener('scroll', on); };
  }, [slug]);
}
export function ResumeBar({ slug }: { slug: string }) {
  const [pos, setPos] = useState<{ r: number; y: number } | null>(null);
  useEffect(() => { try { const v = JSON.parse(localStorage.getItem(posKey(slug)) || 'null'); if (v && v.r > .04 && v.r < .96 && scrollY < 200) setPos(v); } catch {} }, [slug]);
  const reduce = useReducedMotion();
  return <AnimatePresence>{pos && <motion.div initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
    <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--border-strong)] bg-[var(--card)] px-4 py-3">
      <p className="flex items-center gap-2 text-[var(--text-secondary)]"><BookOpen size={18} aria-hidden="true" className="text-[var(--accent)]" /> قرأت من هذا المقال {arNum(Math.round(pos.r * 100))}٪ في زيارة سابقة.</p>
      <div className="flex items-center gap-2">
        <button type="button" className="chip chip-accent" onClick={() => { const h = document.documentElement.scrollHeight - innerHeight; setPos(null); requestAnimationFrame(() => scrollTo({ top: Math.round(pos.r * h), behavior: 'instant' as ScrollBehavior })); }}>تابع من حيث توقفت</button>
        <button type="button" className="chip" aria-label="إخفاء" onClick={() => { localStorage.removeItem(posKey(slug)); setPos(null); }}><X size={14} aria-hidden="true" /></button>
      </div></div></motion.div>}</AnimatePresence>;
}

/* ── 4. Glossary: term underlined in the prose; meaning unfolds inline right after it (no popup) ── */
type G = { term: string; meaning: string; source: string };
export const GlossCtx = createContext<G[]>([]);
export function Gloss({ g, children }: { g: string; children?: ReactNode }) {
  const list = useContext(GlossCtx); const e = list[Number(g)]; const [open, setOpen] = useState(false); const reduce = useReducedMotion();
  if (!e) return <>{children}</>;
  return <><button type="button" className="gloss" aria-expanded={open} onClick={() => setOpen(o => !o)} title="معنى الكلمة">{children}</button>
    <AnimatePresence>{open && <motion.span initial={reduce ? false : { opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="gloss-def" role="note">
      {' '}[{e.meaning}<span className="gloss-src"> — {e.source}</span>]</motion.span>}</AnimatePresence></>;
}
export function GlossaryList({ items }: { items: G[] }) {
  if (!items.length) return null;
  const seen = new Set<string>(); const uniq = items.filter(e => !seen.has(e.term) && seen.add(e.term));
  return <section aria-labelledby="gl" className="mt-12 rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
    <h2 id="gl" className="text-xl">مفردات من هذا المقال</h2>
    <p className="mt-1 text-sm text-[var(--text-muted)]">معانيها كما تُشرح في النص نفسه. اضغط على الكلمة المسطّرة في المقال لترى معناها في موضعها.</p>
    <dl className="mt-4 grid gap-3 sm:grid-cols-2">{uniq.map((e, i) => <motion.div key={e.term} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }} className="rounded-xl border border-[var(--border)] p-3">
      <dt className="font-bold text-[var(--accent)]">«{e.term}»</dt><dd className="mt-1 text-[var(--text-secondary)]">{e.meaning}</dd><dd className="mt-1 text-xs text-[var(--text-muted)]">{e.source}</dd></motion.div>)}</dl>
  </section>;
}

/* ── 7. Series ── */
export function SeriesNav({ p }: { p: Post }) {
  const s = p.series as null | { slug: string; title: string; index: number; items: string[] };
  if (!s) return null;
  const items = s.items.map(bySlug).filter(Boolean) as Post[]; const prev = items[s.index - 1], next = items[s.index + 1];
  return <nav aria-label={`سلسلة ${s.title}`} className="series my-10 rounded-[22px] border border-[var(--border-strong)] bg-[var(--card)] p-5 sm:p-6">
    <p className="kicker">سلسلة · الجزء {arNum(s.index + 1)} من {arNum(items.length)}</p>
    <h2 className="mt-1 text-xl">{s.title}</h2>
    <ol className="mt-4 space-y-2">{items.map((it, i) => <li key={it.slug} className="flex items-baseline gap-3">
      <span className={`series-n ${i === s.index ? 'is-cur' : ''}`}>{arNum(i + 1)}</span>
      {i === s.index ? <span className="font-bold text-[var(--text-primary)]" aria-current="page">{it.title}</span> : <Link to={`article/${it.slug}/`} className="text-[var(--text-secondary)] hover:text-[var(--accent)]"><span className="ulink">{it.title}</span></Link>}
    </li>)}</ol>
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {prev ? <Link to={`article/${prev.slug}/`} className="series-btn"><ChevronRight size={18} aria-hidden="true" /><span><small>السابق</small>{prev.title}</span></Link> : <span />}
      {next ? <Link to={`article/${next.slug}/`} className="series-btn sm:justify-end sm:text-left"><span><small>التالي</small>{next.title}</span><ChevronLeft size={18} aria-hidden="true" /></Link> : <span />}
    </div>
  </nav>;
}

/* ── 5. Journey map: places named in the article, drawn on the 1771 Bonne map in order of mention as you read ── */
type Stop = { name: string; at: number; x: number; y: number; source: string };
export function JourneyMap({ p, target, compact = false }: { p: Post; target: React.RefObject<HTMLElement | null>; compact?: boolean }) {
  const stops = p.journey as Stop[]; const crop = data.mapCrop; const map = photos.find(x => x.slug === 'arabia-map-1771');
  const { scrollYProgress } = useScroll({ target, offset: ['start 0.6', 'end 0.6'] });
  const reduce = useReducedMotion(); const [prog, setProg] = useState(reduce ? 1 : 0);
  useMotionValueEvent(scrollYProgress, 'change', v => { if (!reduce) setProg(v); });
  if (!stops.length || !map) return null;
  const shown = stops.filter((s, i) => i === 0 || s.at <= prog + .001 || reduce);
  const d = shown.map((s, i) => `${i ? 'L' : 'M'}${s.x} ${s.y}`).join(' ');
  return <figure className={`journey rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-3 ${compact ? 'my-8' : ''}`}>
    <figcaption className="mb-2 flex items-center gap-2 px-1 text-sm font-bold text-[var(--text-primary)]"><MapPinned size={16} aria-hidden="true" className="text-[var(--accent)]" /> الأماكن بترتيب ورودها في المقال</figcaption>
    <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: `${crop.w}/${crop.h}` }}>
      <svg viewBox={`0 0 ${crop.w} ${crop.h}`} className="absolute inset-0 size-full" role="img" aria-label={`مسار: ${stops.map(s => s.name).join('، ')}`}>
        <image href={asset(map.file)} x={-crop.x} y={-crop.y} width={1400} height={944} preserveAspectRatio="none" />
        <path d={d} fill="none" stroke="#7a1f12" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="7 6" style={{ transition: 'all .5s' }} />
        {shown.map((s, i) => <g key={s.name} className="j-stop">
          <circle cx={s.x} cy={s.y} r={(i === shown.length - 1 ? 9 : 6) * (compact ? 1 : 1.5)} fill={i === shown.length - 1 ? '#c8962e' : '#7a1f12'} stroke="#fff8e8" strokeWidth={2.5} />
          <text x={s.x} y={s.y - (compact ? 13 : 20)} textAnchor="middle" fontSize={compact ? 20 : 30} fontWeight={700} fill="#2a1a0a" stroke="#fff8e8" strokeWidth={6} paintOrder="stroke" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{s.name}</text>
        </g>)}
      </svg>
    </div>
    <ol className="mt-2 flex flex-wrap gap-1.5 px-1 text-xs">{stops.map((s, i) => <li key={s.name} className={`rounded-full border px-2 py-0.5 transition-colors ${shown.includes(s) ? 'border-[var(--accent)] text-[var(--text-primary)]' : 'border-[var(--border)] text-[var(--text-muted)]'}`}>{arNum(i + 1)}. {s.name}</li>)}</ol>
    <p className="mt-2 px-1 text-[11px] leading-5 text-[var(--text-muted)]">خريطة بونّ للجزيرة العربية (1771، ملكية عامة). المواقع مُسقطة بإحداثياتها الحديثة من ويكيبيديا، فقد لا تطابق رسم الخريطة القديم تمامًا؛ والخط يصل الأماكن بترتيب ذكرها، لا بالضرورة طريق الرحلة.</p>
  </figure>;
}

/* ── 6. Before/after ── */
type BA = { id: string; place: string; note: string; old: { src: string; label: string; credit: string; url?: string }; new: { src: string; label: string; credit: string; url: string; license: string } };
export function BeforeAfter({ id }: { id: string }) {
  const b = (data.beforeAfter as BA[]).find(x => x.id === id); const [v, setV] = useState(50);
  if (!b) return null;
  return <figure className="ba my-10">
    <div className="relative select-none overflow-hidden rounded-2xl border border-[var(--border)]" style={{ aspectRatio: '1024/724' }}>
      <img src={asset(b.new.src)} alt={b.new.label} className="absolute inset-0 size-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${100 - v}%)` }}><img src={asset(b.old.src)} alt={b.old.label} className="absolute inset-0 size-full object-cover" loading="lazy" /></div>
      <div aria-hidden="true" className="absolute inset-y-0 w-0.5 bg-[#f6efe1] shadow" style={{ left: `${100 - v}%` }}><span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] px-2 py-1 text-xs font-bold text-[#1b1208]">⇆</span></div>
      <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-bold text-white">1813</span>
      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-bold text-white">اليوم</span>
      <input type="range" min={0} max={100} value={v} onChange={e => setV(+e.target.value)} aria-label={`قارن ${b.place} بين الأمس واليوم`} className="ba-range absolute inset-0 size-full cursor-ew-resize opacity-0" />
    </div>
    <figcaption><span className="fig-cap">{b.place} بين الأمس واليوم: اسحب للمقارنة. {b.note}</span>
      <span className="fig-src">الأمس: {b.old.label} — {b.old.credit}{b.old.url && <> · <a href={b.old.url} target="_blank" rel="noopener noreferrer">المصدر</a></>}</span>
      <span className="fig-src">اليوم: {b.new.label} — {b.new.credit} · <a href={b.new.url} target="_blank" rel="noopener noreferrer">المصدر والترخيص</a></span></figcaption>
  </figure>;
}

/* ── 3. Highlight → share card ── */
function wrap(ctx: CanvasRenderingContext2D, text: string, max: number) {
  const words = text.split(/\s+/); const lines: string[] = []; let cur = '';
  for (const w of words) { const t = cur ? cur + ' ' + w : w; if (ctx.measureText(t).width > max && cur) { lines.push(cur); cur = w; } else cur = t; }
  if (cur) lines.push(cur); return lines;
}
async function drawCard(quote: string, p: Post) {
  await document.fonts.ready; await Promise.all(["700 52px 'Noto Kufi Arabic'", "500 40px 'IBM Plex Sans Arabic'", "600 30px 'IBM Plex Sans Arabic'"].map(f => document.fonts.load(f, 'ابت').catch(() => {})));
  const W = 1080, H = 1350, c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d')!;
  const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#1f150b'); g.addColorStop(1, '#3a2614'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.strokeStyle = 'rgba(226,184,102,.55)'; x.lineWidth = 3; x.strokeRect(48, 48, W - 96, H - 96); x.strokeRect(60, 60, W - 120, H - 120);
  x.save(); const s = 150 / LOGO_W; x.translate(W / 2 - 75, 110); x.scale(s, s); x.fillStyle = '#e2b866'; x.fill(new Path2D(LOGO_D), 'evenodd'); x.restore();
  x.direction = 'rtl'; x.textAlign = 'center'; x.fillStyle = '#e2b866'; x.font = "600 30px 'IBM Plex Sans Arabic', sans-serif"; x.fillText('مجلة الكود الرقمية', W / 2, 110 + LOGO_H * 150 / LOGO_W + 50);
  let size = 52, lines: string[] = [];
  for (; size >= 34; size -= 2) { x.font = `700 ${size}px 'Noto Kufi Arabic', sans-serif`; lines = wrap(x, `«${quote}»`, W - 220); if (lines.length * size * 1.75 < 620) break; }
  if (lines.length * size * 1.75 >= 620) { lines = lines.slice(0, Math.floor(620 / (size * 1.75))); lines[lines.length - 1] += ' …'; }
  const lh = size * 1.75, top = 380 + (620 - lines.length * lh) / 2 + size;
  x.fillStyle = '#f6efe1'; lines.forEach((l, i) => x.fillText(l, W / 2, top + i * lh));
  x.fillStyle = '#e2b866'; x.fillRect(W / 2 - 60, 1040, 120, 3);
  x.font = "500 34px 'IBM Plex Sans Arabic', sans-serif"; x.fillStyle = '#f6efe1'; wrap(x, p.title, W - 220).slice(0, 2).forEach((l, i) => x.fillText(l, W / 2, 1100 + i * 48));
  x.font = "500 26px 'IBM Plex Sans Arabic', sans-serif"; x.fillStyle = '#d9c9a8';
  x.fillText(p.book ? `عن كتاب «${p.book}»`.slice(0, 80) : p.author, W / 2, 1215); x.direction = 'ltr'; x.fillText('blog.alcode.ae', W / 2, 1262);
  return new Promise<Blob>(r => c.toBlob(b => r(b!), 'image/png'));
}
export function HighlightShare({ p, root }: { p: Post; root: React.RefObject<HTMLElement | null> }) {
  const [sel, setSel] = useState(''); const [img, setImg] = useState<{ url: string; blob: Blob } | null>(null); const [busy, setBusy] = useState(false); const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion(); const url = `${SITE_URL}article/${p.slug}/`;
  useEffect(() => {
    const on = () => { const s = getSelection(); const t = s?.toString().replace(/\s+/g, ' ').trim() || '';
      if (s && t.length >= 12 && t.length <= 600 && root.current && s.rangeCount && root.current.contains(s.getRangeAt(0).commonAncestorContainer)) setSel(t);
      else if (!t && !img) setSel(''); };
    document.addEventListener('selectionchange', on); return () => document.removeEventListener('selectionchange', on);
  }, [root, img]);
  useEffect(() => () => { if (img) URL.revokeObjectURL(img.url); }, [img]);
  const cite = `«${sel}»\n— ${p.title}${p.book ? `، عن كتاب «${p.book}»` : ''}\nمجلة الكود الرقمية: ${url}`;
  const close = () => { setSel(''); setImg(null); getSelection()?.removeAllRanges(); };
  const make = async () => { setBusy(true); try { const blob = await drawCard(sel, p); setImg({ blob, url: URL.createObjectURL(blob) }); } finally { setBusy(false); } };
  const file = () => new File([img!.blob], `alcode-${p.slug.slice(0, 2)}.png`, { type: 'image/png' });
  return <AnimatePresence>{sel && <motion.div role="region" aria-label="مشاركة المقتطف" initial={reduce ? false : { y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    className="share-dock fixed inset-x-0 bottom-0 z-[70] border-t border-[var(--border-strong)] bg-[var(--card)]/95 px-4 pb-[max(.75rem,env(safe-area-inset-bottom))] pt-3 sm:px-6">
    <div className="mx-auto flex max-w-[900px] flex-col gap-3">
      <div className="flex items-start justify-between gap-3"><p className="line-clamp-2 text-sm text-[var(--text-secondary)]"><QuoteIcon size={14} aria-hidden="true" className="me-1 inline text-[var(--accent)]" />{sel}</p><button type="button" onClick={close} className="chip shrink-0" aria-label="إغلاق"><X size={14} aria-hidden="true" /></button></div>
      {img && <motion.img initial={reduce ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} src={img.url} alt="بطاقة المقتطف" className="mx-auto max-h-[38vh] rounded-xl border border-[var(--border)]" />}
      <div className="flex flex-wrap gap-2">
        {!img && <button type="button" className="chip chip-accent" onClick={make} disabled={busy}><ImageIcon size={14} aria-hidden="true" /> {busy ? 'جارٍ التصميم…' : 'اصنع بطاقة صورة'}</button>}
        {img && typeof navigator.canShare === 'function' && navigator.canShare({ files: [file()] }) && <button type="button" className="chip chip-accent" onClick={() => navigator.share({ files: [file()], title: p.title, text: `${p.title}\n${url}` }).catch(() => {})}><Share2 size={14} aria-hidden="true" /> شارك الصورة</button>}
        {img && <a className="chip" href={img.url} download={`alcode-${p.slug.slice(0, 2)}.png`}><Download size={14} aria-hidden="true" /> نزّل الصورة</a>}
        <a className="chip" href={`https://wa.me/?text=${encodeURIComponent(cite)}`} target="_blank" rel="noopener noreferrer">واتساب</a>
        <button type="button" className="chip" onClick={async () => { try { await navigator.clipboard.writeText(cite); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch {} }}>{copied ? <><Check size={14} aria-hidden="true" /> نُسخ مع التوثيق</> : <><Copy size={14} aria-hidden="true" /> انسخ مع التوثيق</>}</button>
        {img && <button type="button" className="chip" onClick={() => setImg(null)}><RotateCcw size={14} aria-hidden="true" /> رجوع</button>}
      </div>
    </div></motion.div>}</AnimatePresence>;
}
