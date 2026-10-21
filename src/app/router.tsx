import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react';
import { BASE } from './data';
const strip = (p: string) => decodeURIComponent(p.startsWith(BASE) ? p.slice(BASE.length) : p.replace(/^\//, ''));
export function usePath() {
  const [path, setPath] = useState(() => strip(location.pathname));
  useEffect(() => { const on = () => setPath(strip(location.pathname)); addEventListener('popstate', on); return () => removeEventListener('popstate', on); }, []);
  return path.replace(/\/+$/, '');
}
export function navigate(to: string) {
  history.pushState(null, '', BASE + to);
  dispatchEvent(new PopStateEvent('popstate'));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  scrollTo({ top: 0, behavior: reduce ? 'auto' : 'instant' as ScrollBehavior });
}
export function Link({ to, onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  const href = BASE + to;
  return <a href={href} {...rest} onClick={(e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault(); navigate(to);
  }} />;
}
