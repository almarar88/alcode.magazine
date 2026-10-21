/* Brand mark: Ahmed's «الكود» logo (vectorised from his file, scripts/logo.py). Flat, no 3D. */
import { LOGO_VB, LOGO_D } from './logoPath';
export function LogoMark({ className = '', title }: { className?: string; title?: string }) {
  return <svg viewBox={LOGO_VB} className={className} role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
    <path d={LOGO_D} fill="currentColor" fillRule="evenodd" />
  </svg>;
}
