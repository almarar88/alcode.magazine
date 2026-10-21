import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Bookmark, BookmarkCheck, FlaskConical, Menu, PenLine, Rss, Search, X, LayoutDashboard, Images, Clock, Send, Check } from 'lucide-react';
import { ThemeSwitch, type Theme } from '@/registry/components/theme-switch/theme-switch';
import { Link } from './router';
import { categories } from './data';
import { StarOrnament } from './art';
import { useStored } from './store';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => (document.documentElement.dataset.theme as Theme) || 'light');
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('alcode-theme', theme); } catch {} }, [theme]);
  return [theme, setTheme] as const;
}

export function DemoRibbon() {
  return <div className="relative z-50 bg-[#1d3a4a] text-[#f6efe1] text-[.8rem]">
    <div className="mx-auto flex max-w-[1320px] items-center justify-center gap-2 px-4 py-1.5 text-center">
      <FlaskConical size={14} aria-hidden="true" /> <span><b>نسخة تجريبية</b> — معاينة مؤقتة غير مفهرسة؛ المقالات الحالية نماذج للعرض فقط.</span>
    </div>
  </div>;
}

export function Logo({ small = false }: { small?: boolean }) {
  return <span className="flex items-center gap-3">
    <StarOrnament ring={false} className={`shrink-0 text-[var(--logo)] transition-[width,height] ${small ? 'h-9 w-[42px]' : 'h-12 w-[56px]'}`} />
    <span className="flex flex-col leading-none">
      <span className={`${small ? 'text-lg' : 'text-xl'} font-bold text-[var(--text-primary)]`}>المجلة الرقمية</span>
      <span className="mt-1 text-[.7rem] font-semibold text-[var(--text-muted)]">Alcode Magazine</span>
    </span>
  </span>;
}

const NAV = [{ to: 'gallery/', label: 'مكتبة الصور', icon: Images }, { to: 'timeline/', label: 'الخط الزمني', icon: Clock }, { to: 'saved/', label: 'المحفوظات', icon: Bookmark }, { to: 'dashboard/', label: 'لوحة الناشر', icon: LayoutDashboard }];

export function Header({ path }: { path: string }) {
  const [theme, setTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => { const on = () => setScrolled(scrollY > 12); on(); addEventListener('scroll', on, { passive: true }); return () => removeEventListener('scroll', on); }, []);
  useEffect(() => setOpen(false), [path]);
  const active = (to: string) => path + '/' === to || path.startsWith(to);
  return <header className={`sticky top-0 z-40 border-b transition-[background,border-color,box-shadow] duration-300 ${scrolled ? 'border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_94%,transparent)] shadow-[0_10px_30px_-24px_rgba(0,0,0,.5)] backdrop-blur-md' : 'border-transparent bg-[var(--background)]'}`}>
    <div className="mx-auto flex max-w-[1320px] items-center gap-3 px-4 py-3 sm:px-6">
      <Link to="" aria-label="مجلة الكود الرقمية — الرئيسية" className="shrink-0 rounded-xl"><Logo small={scrolled} /></Link>
      <nav aria-label="الأقسام" className="mx-auto hidden xl:block">
        <ul className="flex items-center gap-1">
          {categories.slice(0, 5).map(c => <li key={c.slug}><Link to={`category/${c.slug}/`} aria-current={active(`category/${c.slug}/`) ? 'page' : undefined} className={`relative rounded-full px-3 py-2 text-[.95rem] font-semibold transition-colors hover:text-[var(--accent)] ${active(`category/${c.slug}/`) ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'}`}>
            {c.name}{active(`category/${c.slug}/`) && <motion.span layoutId="navdot" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-[var(--accent)]" />}
          </Link></li>)}
        </ul>
      </nav>
      <div className="ms-auto flex items-center gap-1.5 xl:ms-0">
        <Link to="search/" aria-label="البحث" className="tool-btn"><Search size={20} /></Link>
        <Link to="saved/" aria-label="المقالات المحفوظة" className="tool-btn hidden sm:inline-grid"><Bookmark size={20} /></Link>
        <ThemeSwitch theme={theme} iconOnly variant="eclipse" label={theme === 'dark' ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن'} onThemeChange={t => setTheme(t)} />
        <Link to="write/" className="ink-btn hidden !py-2 md:inline-flex"><PenLine size={17} aria-hidden="true" /> اكتب مقالاً</Link>
        <button type="button" className="tool-btn xl:hidden" aria-expanded={open} aria-controls="mnav" aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} onClick={() => setOpen(o => !o)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </div>
    <div className="hidden border-t border-[var(--border)] xl:block">
      <ul className="mx-auto flex max-w-[1320px] items-center justify-center gap-6 px-6 py-1.5 text-sm">
        {NAV.map(n => <li key={n.to}><Link to={n.to} className="group inline-flex items-center gap-1.5 py-1 font-medium text-[var(--text-muted)] hover:text-[var(--accent)]"><n.icon size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5" /><span className="ulink">{n.label}</span></Link></li>)}
        <li><Link to={`category/${categories[5].slug}/`} className="py-1 font-medium text-[var(--text-muted)] hover:text-[var(--accent)]"><span className="ulink">{categories[5].name}</span></Link></li>
      </ul>
    </div>
    <AnimatePresence>
      {open && <motion.nav id="mnav" aria-label="القائمة" initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }} animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }} exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }} className="overflow-hidden border-t border-[var(--border)] bg-[var(--background)] xl:hidden">
        <div className="mx-auto grid max-w-[1320px] gap-1 px-4 py-4 sm:grid-cols-2 sm:px-6">
          {categories.map((c, i) => <motion.div key={c.slug} initial={reduce ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .03 }}><Link to={`category/${c.slug}/`} className="flex items-center justify-between rounded-xl px-3 py-3 font-display text-lg font-bold hover:bg-[var(--accent-subtle)]">{c.name}<span aria-hidden="true" className="text-[var(--accent)]">◆</span></Link></motion.div>)}
          {NAV.map(n => <Link key={n.to} to={n.to} className="flex items-center gap-2 rounded-xl px-3 py-3 font-semibold text-[var(--text-secondary)] hover:bg-[var(--accent-subtle)]"><n.icon size={18} aria-hidden="true" />{n.label}</Link>)}
          <Link to="write/" className="ink-btn mt-2 justify-center sm:col-span-2"><PenLine size={17} aria-hidden="true" /> اكتب مقالاً</Link>
        </div>
      </motion.nav>}
    </AnimatePresence>
  </header>;
}

export function SaveButton({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const [saved, setSaved] = useStored<string[]>('alcode-saved', []);
  const on = saved.includes(slug);
  const reduce = useReducedMotion();
  return <button type="button" aria-pressed={on} aria-label={on ? 'إزالة من المحفوظات' : 'حفظ للقراءة لاحقاً'} onClick={e => { e.preventDefault(); e.stopPropagation(); setSaved(s => on ? s.filter(x => x !== slug) : [...s, slug]); }}
    className={compact ? 'tool-btn bg-[var(--card)]/90 shadow-sm' : 'ghost-btn'}>
    <motion.span key={String(on)} initial={reduce ? false : { scale: .5, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 500, damping: 18 }} className="inline-grid">{on ? <BookmarkCheck size={18} className="text-[var(--accent)]" /> : <Bookmark size={18} />}</motion.span>
    {!compact && (on ? 'محفوظ' : 'احفظ')}
  </button>;
}

export function Newsletter() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');
  return <section aria-labelledby="nl" className="relative overflow-hidden rounded-[28px] border border-[var(--border-strong)] bg-[var(--card)] p-6 sm:p-10">
    <div className="pattern pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
    <div className="relative grid items-center gap-6 md:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="kicker">النشرة البريدية <span className="sample-badge ms-2">واجهة تجريبية</span></p>
        <h2 id="nl" className="mt-2 text-2xl sm:text-3xl">رسالة شهرية بأحدث المقالات</h2>
        <p className="mt-2 text-[var(--text-muted)]">هذه واجهة للعرض فقط: لا يُحفظ البريد ولا يُرسل إلى أي جهة.</p>
      </div>
      <form className="flex flex-col gap-2 sm:flex-row" onSubmit={e => { e.preventDefault(); setSent(true); }}>
        <label htmlFor="nl-email" className="sr-only">البريد الإلكتروني</label>
        <input id="nl-email" type="email" required dir="ltr" value={email} onChange={e => { setEmail(e.target.value); setSent(false); }} placeholder="name@example.com" className="field-input flex-1 text-left" />
        <button className="ink-btn justify-center" type="submit">{sent ? <><Check size={17} aria-hidden="true" /> تم (تجريبي)</> : <><Send size={17} aria-hidden="true" /> اشترك</>}</button>
      </form>
      <p aria-live="polite" className="sr-only">{sent ? 'هذه واجهة تجريبية؛ لم يُرسل شيء.' : ''}</p>
    </div>
  </section>;
}

export function Footer() {
  return <footer className="mt-24 bg-[var(--hero-bg)] text-[#efe4cc]">
    <div className="pattern">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div style={{ ['--text-primary' as any]: '#f6efe1', ['--text-muted' as any]: '#d9cbb0', ['--logo' as any]: '#f3e9d2' }}>
          <Logo />
          <p className="mt-4 max-w-sm text-[#d9cbb0]">مجلة رقمية تجريبية لمكتبة الكود للتراث وتاريخ الخليج. المحتوى الحالي نماذج للعرض.</p>
          <a href="https://alcode.ae" className="mt-3 inline-block text-[#e2b866] underline underline-offset-4 hover:text-[#f1d59c]" rel="noopener">alcode.ae</a>
        </div>
        <div><h2 className="text-base text-[#f6efe1]">الأقسام</h2><ul className="mt-3 space-y-1.5">{categories.map(c => <li key={c.slug}><Link to={`category/${c.slug}/`} className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">{c.name}</span></Link></li>)}</ul></div>
        <div><h2 className="text-base text-[#f6efe1]">استكشف</h2><ul className="mt-3 space-y-1.5">{[...NAV, { to: 'search/', label: 'البحث' }, { to: 'write/', label: 'اكتب مقالاً' }].map(n => <li key={n.to}><Link to={n.to} className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">{n.label}</span></Link></li>)}</ul></div>
        <div><h2 className="text-base text-[#f6efe1]">عن الموقع</h2><ul className="mt-3 space-y-1.5">
          <li><Link to="about/" className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">عن المجلة</span></Link></li>
          <li><Link to="credits/" className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">حقوق الصور والمصادر</span></Link></li>
          <li><a href="/rss.xml" className="inline-flex items-center gap-1.5 text-[#d9cbb0] hover:text-[#e2b866]"><Rss size={15} aria-hidden="true" /><span className="ulink">خلاصة RSS</span></a></li>
          <li><a href="/sitemap.xml" className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">خريطة الموقع</span></a></li>
        </ul></div>
      </div>
      <div className="border-t border-white/10"><p className="mx-auto max-w-[1320px] px-4 py-4 text-sm text-[#d9cbb0] sm:px-6">نسخة تجريبية · الصور التاريخية من مصادر بتراخيص مفتوحة (انظر صفحة الحقوق) · لا صور مولّدة أو رسوم مختلقة.</p></div>
    </div>
  </footer>;
}
