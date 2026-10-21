// SITE_ORIGIN is set at build time to the site origin (absolute links for sitemap/OG).
export const SITE = {
  base: process.env.SITE_BASE || '/',
  origin: (process.env.SITE_ORIGIN || 'http://localhost:4173').replace(/\/$/, ''),
  title: 'متجر الكود للكتب',
  titleEn: 'Alcode Books',
  description: 'متجر كتب مؤسسة الكود لنشر الكتب: إصدارات في تاريخ الخليج العربي والظفرة وأبوظبي وأدب الرحلات والشعر، بالأسعار بالدرهم الإماراتي، والدفع عبر متجر الكود الرسمي.',
};
export const url = (p = '') => SITE.origin + SITE.base + p;
