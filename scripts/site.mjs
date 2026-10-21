// SITE_ORIGIN is set at build time to the current preview/permanent origin (absolute links for RSS/sitemap/OG).
export const SITE = {
  base: process.env.SITE_BASE || '/',
  origin: (process.env.SITE_ORIGIN || 'http://localhost:4173').replace(/\/$/, ''),
  title: 'مجلة الكود الرقمية',
  titleEn: 'Alcode Digital Magazine',
  description: 'مجلة رقمية من مكتبة الكود للتراث وتاريخ الخليج — نسخة تجريبية.',
};
export const url = (p = '') => SITE.origin + SITE.base + p;
export const tagSlug = (t) => t.trim().replace(/\s+/g, '-');
