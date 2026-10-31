// Arabic-aware fuzzy search over title, author, tags, collections and description (all from the real catalog).
import { books, collections, type Book } from './data';
const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';
export const normAr = (s: string) => s.toLowerCase()
  .replace(/[\u064B-\u0652\u0670\u0640]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/ؤ/g, 'و').replace(/ئ/g, 'ي')
  .replace(/[٠-٩]/g, d => String(AR_DIGITS.indexOf(d))).replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
const stem = (w: string) => { let x = w; for (const p of ['وال', 'بال', 'كال', 'فال', 'لل', 'ال']) if (x.startsWith(p) && x.length - p.length >= 3) { x = x.slice(p.length); break; } return x; };
const words = (s: string) => normAr(s).split(' ').filter(Boolean).map(stem);
function lev(a: string, b: string, max: number) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) { const cur = [i]; let best = i;
    for (let j = 1; j <= b.length; j++) { cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); best = Math.min(best, cur[j]); }
    if (best > max) return max + 1; prev = cur; }
  return prev[b.length];
}
type Idx = { b: Book; f: [string[], number][] };
let idx: Idx[] | null = null;
const index = () => idx ||= books.map(b => ({ b, f: [
  [words(b.title), 6], [words(b.author || ''), 3], [words([...b.tags, ...b.collections.map(h => collections.find(c => c.handle === h)?.title || '')].join(' ')), 3], [words(b.description.join(' ')), 1]] as [string[], number][] }));
function tokScore(t: string, f: [string[], number][]) {
  let s = 0;
  for (const [ws, w] of f) for (const x of ws) {
    if (x === t) { s = Math.max(s, w * 1.2); continue; }
    if (x.startsWith(t) || (t.length >= 3 && x.includes(t))) { s = Math.max(s, w); continue; }
    const max = t.length >= 7 ? 2 : t.length >= 4 ? 1 : 0;
    if (max && lev(t, x, max) <= max) s = Math.max(s, w * 0.6);
  }
  return s;
}
/** Returns books ranked by relevance; every query word must match something (exactly, by prefix, or with a small typo). */
export function smartSearch(q: string, pool: Book[] = books): Book[] {
  const toks = words(q); if (!toks.length) return pool;
  const allow = new Set(pool.map(b => b.handle));
  return index().filter(x => allow.has(x.b.handle)).map(x => { let s = 0; for (const t of toks) { const v = tokScore(t, x.f); if (!v) return [0, x.b] as const; s += v; } return [s, x.b] as const; })
    .filter(x => x[0] > 0).sort((a, c) => c[0] - a[0]).map(x => x[1]);
}
