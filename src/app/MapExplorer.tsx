/* Interactive viewer for an authentic historical map (pan by drag/keys, zoom by wheel/buttons/pinch-free buttons).
   Cities are a chip rail linking to tag pages — no pins are drawn on the old map, so nothing is mislocated. */
import { useRef, useState, type KeyboardEvent, type PointerEvent, type WheelEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Minus, Plus, RotateCcw, MapPin, ExternalLink } from 'lucide-react';
import { Link } from './router';
import { photos, asset, tagSlug } from './data';
export const PLACES = ['الكويت', 'البصرة', 'بوشهر', 'البحرين', 'لنجة', 'أبوظبي', 'صير بني ياس', 'رأس الخيمة', 'الذيد', 'البريمي', 'صحار', 'مسقط', 'مطرح', 'نزوى', 'هرمز', 'غمرون', 'جمرون', 'بندر عباس', 'قشم', 'خارك', 'القطيف', 'دلما', 'ليوا'];
export function MapExplorer({ slug = 'arabia-map-1771' }: { slug?: string }) {
  const m = photos.find(p => p.slug === slug)!;
  const [z, setZ] = useState(1); const [pos, setPos] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const box = useRef<HTMLDivElement>(null); const reduce = useReducedMotion();
  const clampPos = (x: number, y: number, zz = z) => { const r = box.current?.getBoundingClientRect(); if (!r) return { x, y }; const mx = (r.width * (zz - 1)) / 2, my = (r.height * (zz - 1)) / 2; return { x: Math.max(-mx, Math.min(mx, x)), y: Math.max(-my, Math.min(my, y)) }; };
  const zoom = (d: number) => setZ(o => { const n = Math.max(1, Math.min(4, +(o + d).toFixed(2))); setPos(p => clampPos(p.x, p.y, n)); return n; });
  const down = (e: PointerEvent) => { (e.target as Element).setPointerCapture?.(e.pointerId); drag.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y }; };
  const move = (e: PointerEvent) => { const d = drag.current; if (!d) return; setPos(clampPos(d.px + e.clientX - d.x, d.py + e.clientY - d.y)); };
  const key = (e: KeyboardEvent) => { const s = 60; const k: Record<string, [number, number]> = { ArrowLeft: [s, 0], ArrowRight: [-s, 0], ArrowUp: [0, s], ArrowDown: [0, -s] };
    if (k[e.key]) { e.preventDefault(); setPos(p => clampPos(p.x + k[e.key][0], p.y + k[e.key][1])); } if (e.key === '+' || e.key === '=') zoom(.5); if (e.key === '-') zoom(-.5); if (e.key === '0') { setZ(1); setPos({ x: 0, y: 0 }); } };
  return <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
    <figure className="m-0">
      <div ref={box} tabIndex={0} role="application" aria-roledescription="عارض خريطة" aria-label={`${m.label}. اسحب للتحريك، واستخدم الأسهم و + و - للتكبير.`} onKeyDown={key}
        onWheel={(e: WheelEvent) => { if (!e.ctrlKey && !e.metaKey && z === 1 && e.deltaY > 0) return; e.preventDefault(); zoom(e.deltaY < 0 ? .25 : -.25); }}
        onPointerDown={down} onPointerMove={move} onPointerUp={() => (drag.current = null)} onPointerCancel={() => (drag.current = null)}
        className={`relative overflow-hidden rounded-[22px] border border-[var(--border-strong)] bg-[#e9dcc0] shadow-[inset_0_0_80px_rgba(90,45,26,.25)] touch-none select-none ${z > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`} style={{ aspectRatio: `${m.w}/${m.h}` }} onDoubleClick={() => zoom(z >= 3 ? -3 : 1)}>
        <motion.img src={asset(m.file)} alt={m.label} draggable={false} className="absolute inset-0 size-full object-cover" animate={{ scale: z, x: pos.x, y: pos.y }} transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 32 }} width={m.w} height={m.h} loading="lazy" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_10px_rgba(246,239,225,.35)]" />
        <div className="absolute bottom-3 left-3 flex gap-1 rounded-full bg-[#1b1712]/85 p-1 text-[#f6efe1]">
          <button type="button" aria-label="تكبير" onClick={() => zoom(.5)} className="grid size-10 place-items-center rounded-full hover:bg-white/15 active:scale-90"><Plus size={18} /></button>
          <button type="button" aria-label="تصغير" onClick={() => zoom(-.5)} className="grid size-10 place-items-center rounded-full hover:bg-white/15 active:scale-90"><Minus size={18} /></button>
          <button type="button" aria-label="إعادة الضبط" onClick={() => { setZ(1); setPos({ x: 0, y: 0 }); }} className="grid size-10 place-items-center rounded-full hover:bg-white/15 active:scale-90"><RotateCcw size={17} /></button>
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-[#1b1712]/85 px-3 py-1 text-xs font-bold text-[#f6efe1]">×{z.toFixed(1)}</span>
      </div>
      <figcaption className="mt-2 text-sm text-[var(--text-muted)]">{m.label} — {m.author}، {m.date}. {m.licence === 'Public domain' ? 'ملكية عامة' : m.licence}، <a href={m.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--accent)] underline">ويكيميديا كومنز <ExternalLink size={12} aria-hidden="true" /></a></figcaption>
    </figure>
    <div>
      <p className="kicker">تصفّح حسب المدينة</p>
      <p className="mt-1 text-sm text-[var(--text-muted)]">كل مدينة تفتح صفحة الوسم الخاص بها.</p>
      <ul className="mt-4 grid grid-cols-2 gap-2">{PLACES.map((p, i) => <motion.li key={p} initial={reduce ? false : { opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }}>
        <Link to={`tag/${tagSlug(p)}/`} aria-label={`مقالات عن ${p}`} className="group flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-md"><MapPin size={16} aria-hidden="true" className="text-[var(--accent)] transition-transform group-hover:-translate-y-0.5 group-hover:scale-125" />{p}</Link>
      </motion.li>)}</ul>
    </div>
  </div>;
}
