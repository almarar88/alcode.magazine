/* Brand ornament: Ahmed's «الكود» logo (vectorised from his file, scripts/logo.py). All artwork on the site is historical, from open-licence archives. */
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import { LOGO_VB, LOGO_D } from './logoPath';

export function LogoMark({ className = '', title }: { className?: string; title?: string }) {
  return <svg viewBox={LOGO_VB} className={className} role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
    <path d={LOGO_D} fill="currentColor" fillRule="evenodd" />
  </svg>;
}

/** Interactive logo ornament: tilts toward the cursor, lifts on hover; the dotted ring turns slowly. Name kept for existing call sites. */
export function StarOrnament({ className = '', spin = false, ring = true }: { className?: string; spin?: boolean; ring?: boolean }) {
  const ref = useRef<HTMLDivElement>(null); const reduce = useReducedMotion();
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 120, damping: 16 }), sy = useSpring(ry, { stiffness: 120, damping: 16 });
  useEffect(() => {
    if (reduce || typeof window === 'undefined') return;
    const on = (e: PointerEvent) => { const el = ref.current; if (!el) return; const b = el.getBoundingClientRect(); if (b.bottom < 0 || b.top > innerHeight) return;
      const dx = (e.clientX - (b.left + b.width / 2)) / Math.max(innerWidth, 1), dy = (e.clientY - (b.top + b.height / 2)) / Math.max(innerHeight, 1);
      ry.set(Math.max(-1, Math.min(1, dx)) * 22); rx.set(Math.max(-1, Math.min(1, dy)) * -18); };
    addEventListener('pointermove', on, { passive: true }); return () => removeEventListener('pointermove', on);
  }, [reduce, rx, ry]);
  return <div ref={ref} className={`logo-orn ${className}`} aria-hidden="true" style={{ perspective: 700 }}>
    <motion.div className="relative size-full" style={{ rotateX: sx, rotateY: sy, transformStyle: 'preserve-3d' }}
      whileHover={reduce ? undefined : { scale: 1.08, rotate: -4 }} transition={{ type: 'spring', stiffness: 260, damping: 14 }}>
      {ring && <svg viewBox="0 0 200 200" className={`absolute inset-0 size-full ${spin && !reduce ? 'star-spin' : ''}`}>
        <circle cx="100" cy="100" r="97" fill="none" stroke="currentColor" strokeOpacity=".4" strokeWidth="1" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="1.5 9" strokeLinecap="round" />
      </svg>}
      <div className={`absolute grid place-items-center ${ring ? 'inset-[22%]' : 'inset-0'}`} style={{ transform: 'translateZ(30px)' }}>
        <LogoMark className="size-full drop-shadow-[0_2px_0_rgba(0,0,0,.12)]" />
      </div>
    </motion.div>
  </div>;
}
