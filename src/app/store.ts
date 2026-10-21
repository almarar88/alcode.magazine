// Browser-only persistence (cart, wishlist, theme). Nothing leaves the device until checkout on Shopify.
import { useEffect, useState } from 'react';
const read = <T,>(k: string, d: T): T => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
const write = (k: string, v: unknown) => { try { localStorage.setItem(k, JSON.stringify(v)); dispatchEvent(new CustomEvent('alcode-store', { detail: k })); } catch {} };
export function useStored<T>(key: string, initial: T) {
  const [v, setV] = useState<T>(initial); // initial on first render (matches prerendered HTML), then load
  useEffect(() => { setV(read(key, initial)); const on = (e: Event) => { if ((e as CustomEvent).detail === key) setV(read(key, initial)); }; addEventListener('alcode-store', on); return () => removeEventListener('alcode-store', on); }, [key]);
  return [v, (n: T | ((o: T) => T)) => { const val = typeof n === 'function' ? (n as (o: T) => T)(read(key, initial)) : n; write(key, val); setV(val); }] as const;
}
export type Line = { id: number; handle: string; qty: number };
export const MAXQ = 20;
export function useCart() {
  const [lines, setLines] = useStored<Line[]>('alcode-cart', []);
  const add = (id: number, handle: string, qty = 1) => setLines(ls => { const f = ls.find(l => l.id === id); return f ? ls.map(l => l.id === id ? { ...l, qty: Math.min(MAXQ, l.qty + qty) } : l) : [...ls, { id, handle, qty }]; });
  const setQty = (id: number, qty: number) => setLines(ls => qty <= 0 ? ls.filter(l => l.id !== id) : ls.map(l => l.id === id ? { ...l, qty: Math.min(MAXQ, qty) } : l));
  const remove = (id: number) => setLines(ls => ls.filter(l => l.id !== id));
  const clear = () => setLines([]);
  return { lines, count: lines.reduce((s, l) => s + l.qty, 0), add, setQty, remove, clear };
}
export function useWishlist() {
  const [list, setList] = useStored<string[]>('alcode-wishlist', []);
  return { list, has: (h: string) => list.includes(h), toggle: (h: string) => setList(l => l.includes(h) ? l.filter(x => x !== h) : [...l, h]) };
}
