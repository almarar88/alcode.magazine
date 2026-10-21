// Browser-only persistence (demo). Nothing leaves the device.
import { useEffect, useState } from 'react';
const read = <T,>(k: string, d: T): T => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
const write = (k: string, v: unknown) => { try { localStorage.setItem(k, JSON.stringify(v)); dispatchEvent(new CustomEvent('alcode-store', { detail: k })); } catch {} };
export function useStored<T>(key: string, initial: T) {
  const [v, setV] = useState<T>(() => read(key, initial));
  useEffect(() => { const on = (e: Event) => { if ((e as CustomEvent).detail === key) setV(read(key, initial)); }; addEventListener('alcode-store', on); return () => removeEventListener('alcode-store', on); }, [key]);
  return [v, (n: T | ((o: T) => T)) => { const val = typeof n === 'function' ? (n as (o: T) => T)(read(key, initial)) : n; write(key, val); setV(val); }] as const;
}
export type Draft = { id: string; slug: string; title: string; author: string; category: string; date: string; cover: string; excerpt: string; tags: string[]; body: string; updated: number };
export const newDraft = (): Draft => ({ id: Math.random().toString(36).slice(2, 10), slug: '', title: '', author: '', category: 'التاريخ', date: new Date().toISOString().slice(0, 10), cover: '', excerpt: '', tags: [], body: '## عنوان فرعي\n\nابدأ الكتابة هنا…\n', updated: Date.now() });
export type Media = { id: string; name: string; data: string; size: number; added: number };
export function toMarkdown(d: Draft) {
  const q = (s: string) => JSON.stringify(s ?? '');
  return `---\ntitle: ${q(d.title)}\nauthor: ${q(d.author)}\ncategory: ${q(d.category)}\ndate: ${q(d.date)}\ncover: ${q(d.cover)}\nexcerpt: ${q(d.excerpt)}\ntags: [${d.tags.map(q).join(', ')}]\n---\n\n${d.body.trim()}\n`;
}
