// Giscus (GitHub Discussions). Rendered only when the comments flag is on.
import { useEffect, useRef } from 'react';
import { FLAGS, INT } from './integrations';
export function Comments({ slug }: { slug: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!FLAGS.comments || !ref.current) return;
    const el = ref.current; el.innerHTML = '';
    const s = document.createElement('script'); const c = INT.comments;
    const theme = document.documentElement.dataset.theme === 'dark' ? 'dark_dimmed' : 'light';
    Object.entries({ src: 'https://giscus.app/client.js', 'data-repo': c.repo, 'data-repo-id': c.repoId, 'data-category': c.category, 'data-category-id': c.categoryId,
      'data-mapping': 'specific', 'data-term': `article/${slug}`, 'data-strict': '1', 'data-reactions-enabled': '1', 'data-emit-metadata': '0', 'data-input-position': 'top',
      'data-theme': theme, 'data-lang': 'ar', 'data-loading': 'lazy', crossorigin: 'anonymous' }).forEach(([k, v]) => s.setAttribute(k, v));
    s.async = true; el.appendChild(s);
  }, [slug]);
  if (!FLAGS.comments) return null;
  return <section aria-labelledby="cm" className="mx-auto mb-14 max-w-[900px] px-4 sm:px-6">
    <div className="rule-orn mb-6"><h2 id="cm" className="text-2xl">التعليقات</h2></div>
    <p className="mb-4 text-sm text-[var(--text-muted)]">التعليق يتطلّب حساب GitHub ويُحفظ في نقاشات المستودع العامة.</p>
    <div ref={ref} />
  </section>;
}
