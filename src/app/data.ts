import data from '../generated/store.json';
export type Book = (typeof data.books)[number];
export const books = data.books as Book[];
export const collections = data.collections;
export const featured = data.featured as string[];
export const SHOP = data.shop as string; // https://alcode.ae (real Shopify store; checkout happens there)
export const BASE = import.meta.env.BASE_URL;
export const asset = (p: string) => (/^https?:/.test(p) ? p : BASE + p.replace(/^\//, ''));
export const byHandle = (h: string) => books.find(b => b.handle === h);
export const variantOf = (b: Book) => b.variants.find(v => v.available) || b.variants[0];
const money = new Intl.NumberFormat('ar-AE-u-nu-latn', { style: 'currency', currency: 'AED', numberingSystem: 'latn', minimumFractionDigits: 0, maximumFractionDigits: 2 } as any);
export const fmtPrice = (n: number | string) => money.format(Number(n));
export const arNum = (n: number) => n.toLocaleString('ar-AE-u-nu-latn');
export const collectionTitle = (h: string) => collections.find(c => c.handle === h)?.title || h;
export const newest = () => [...books].sort((a, b) => b.published.localeCompare(a.published));
/** Shopify cart permalink: /cart/VARIANT:QTY,VARIANT:QTY → opens the real Shopify cart/checkout. */
export const permalink = (items: { id: number; qty: number }[]) => `${SHOP}/cart/${items.map(i => `${i.id}:${i.qty}`).join(',')}`;
export function related(b: Book, n = 4) {
  const score = (x: Book) => x.collections.filter(c => b.collections.includes(c)).length * 2 + x.tags.filter(t => b.tags.includes(t)).length;
  return books.filter(x => x.handle !== b.handle).map(x => [score(x), x] as const).sort((a, c) => c[0] - a[0]).slice(0, n).map(x => x[1]);
}
