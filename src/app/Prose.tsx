/* Article renderer: Markdown/MDX-style source → React.
   mdxcn (mdxcn.dev, MIT) Callout / Steps / Quote are mapped from <callout>, <steps>, <quote> tags;
   ```mermaid fences render with Pele (pele.run, MIT). */
import { Children, isValidElement, memo, useEffect, useRef, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Callout } from '@/registry/default/callout/callout';
import { Steps } from '@/registry/default/steps/steps';
import { Quote } from '@/registry/default/quote/quote';
import { asset } from './data';
import { Gloss } from './reader';

export const slugify = (s: string) => s.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s+/g, '-');
const text = (n: ReactNode): string => Children.toArray(n).map(c => typeof c === 'string' || typeof c === 'number' ? String(c) : isValidElement(c) ? text((c.props as { children?: ReactNode }).children) : '').join('');

function Mermaid({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let m: { destroy?: () => void } | undefined, dead = false;
    import('pele/lazy').then(({ mountAsync }) => {
      if (dead || !ref.current) return;
      ref.current.innerHTML = '';
      return mountAsync(ref.current, code, { fontFamily: 'IBM Plex Sans Arabic, sans-serif', fontSize: 15, responsive: true, autoDirection: true, directionBreakpoint: 640, zoom: false }).then((x: { destroy?: () => void }) => { m = x; });
    }).catch(() => { if (ref.current) ref.current.textContent = 'تعذّر رسم المخطط.'; });
    return () => { dead = true; m?.destroy?.(); };
  }, [code]);
  return <figure className="my-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6"><div ref={ref} className="pele-host w-full" role="img" aria-label={`مخطط: ${code.split('\n').slice(1).join(' ').replace(/[\[\]{}()|>-]+/g, ' ').trim()}`} /></figure>;
}

const components: Record<string, any> = {
  callout: ({ type, title, children }: any) => <Callout className="mdx-ar" type={type} title={title}>{children}</Callout>,
  steps: ({ title, children }: any) => <Steps className="mdx-ar" title={title}>{children}</Steps>,
  quote: ({ by, source, children }: any) => <Quote className="mdx-ar" by={by} source={source}>{children}</Quote>,
  gloss: ({ node, children, ...rest }: any) => <Gloss g={rest['data-g']}>{children}</Gloss>,
  h2: ({ children }: any) => <h2 id={slugify(text(children))}>{children}</h2>,
  h3: ({ children }: any) => <h3 id={slugify(text(children))}>{children}</h3>,
  img: ({ src, alt }: any) => <img src={asset(String(src || ''))} alt={alt || ''} loading="lazy" className="rounded-xl" />,
  a: ({ href, children }: any) => <a href={href} target={/^https?:/.test(href) ? '_blank' : undefined} rel="noopener noreferrer">{children}</a>,
  pre: ({ children }: any) => {
    const c = Children.toArray(children)[0] as any;
    if (c?.props?.className?.includes('language-mermaid')) return <Mermaid code={text(c.props.children).trim()} />;
    return <pre>{children}</pre>;
  },
};
export const Prose = memo(function Prose({ source }: { source: string }) {
  return <div className="prose-ar"><ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={components}>{source}</ReactMarkdown></div>;
});
export function headings(md: string) {
  return [...md.replace(/```[\s\S]*?```/g, '').matchAll(/^(##|###)\s+(.+)$/gm)].map(m => ({ level: m[1].length, text: m[2].replace(/[*_`]/g, ''), id: slugify(m[2].replace(/[*_`]/g, '')) }));
}
