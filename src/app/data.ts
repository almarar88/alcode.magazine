import data from '../generated/posts.json';
export type Post = (typeof data.posts)[number];
export const posts = data.posts as Post[];
export const categories = data.categories;
export const tags = data.tags;
export const BASE = import.meta.env.BASE_URL; // "/"
export const SITE_URL = location.origin + BASE;
export const asset = (p: string) => (/^https?:/.test(p) ? p : BASE + p.replace(/^\//, ''));
export const tagSlug = (t: string) => t.trim().replace(/\s+/g, '-');
export const bySlug = (s: string) => posts.find(p => p.slug === s);
const fmt = new Intl.DateTimeFormat('ar-AE-u-nu-arab', { day: 'numeric', month: 'long', year: 'numeric' });
export const fmtDate = (d: string) => { try { return fmt.format(new Date(d + 'T12:00:00')); } catch { return d; } };
export const arNum = (n: number) => n.toLocaleString('ar-AE-u-nu-arab');
export const minutesLabel = (m: number) => m === 1 ? 'دقيقة واحدة' : m === 2 ? 'دقيقتان' : m <= 10 ? `${arNum(m)} دقائق` : `${arNum(m)} دقيقة`;
export function readingMinutes(md: string) { const w = md.replace(/```[\s\S]*?```/g, ' ').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length; return { words: w, minutes: Math.max(1, Math.round(w / 200)) }; }
export const photos = data.photos;
export type Photo = (typeof data.photos)[number];
export const travelers = (data as any).travelers as { slug: string; name: string; book: string; bio: { text: string; slug: string }[]; posts: string[]; images: { src: string; alt: string; cap: string; slug: string }[] }[];
export const travelerOf = (p: Post) => travelers.find(t => t.slug === p.traveler);
