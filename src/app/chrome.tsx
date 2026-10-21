import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Bookmark, BookmarkCheck, Menu, Rss, Search, X, Images, Clock, ShoppingBag } from 'lucide-react';
import { ThemeSwitch, type Theme } from '@/registry/components/theme-switch/theme-switch';
import { Link } from './router';
import { categories, asset } from './data';
import { FLAGS, INT } from './integrations';
import { useAuth } from './auth';
import { NotifyBell } from './NotifyBell';
import { UserRound } from 'lucide-react';
import { StarOrnament } from './art';
import { useStored } from './store';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => (document.documentElement.dataset.theme as Theme) || 'light');
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('alcode-theme', theme); } catch {} }, [theme]);
  return [theme, setTheme] as const;
}

const IG = (p: any) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>;
const TT = (p: any) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="currentColor" aria-hidden="true"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66C7.2 9.2 4.2 11.86 4.2 15.3 4.2 18.65 6.98 21 9.85 21c3.08 0 5.59-2.5 5.59-5.6V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.14-1.48z"/></svg>;
export const SOCIAL = [{ href: 'https://www.instagram.com/alcode.ae', label: 'إنستغرام', Icon: IG }, { href: 'https://www.tiktok.com/@alcode.ae', label: 'تيك توك', Icon: TT }];
export const STORE_URL = 'https://alcode.ae';
export function SocialLinks({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return <ul className={`flex items-center gap-1.5 ${className}`} aria-label="حسابات المجلة">{SOCIAL.map(({ href, label, Icon }) => <li key={href}>
    <a href={href} target="_blank" rel="noopener" aria-label={`${label} @alcode.ae`} className={`social-btn ${dark ? 'social-dark' : ''}`}><Icon size={18} /></a></li>)}</ul>;
}
export function StoreButton({ className = '' }: { className?: string }) {
  return <a href={STORE_URL} target="_blank" rel="noopener" className={`store-btn ${className}`}><ShoppingBag size={17} aria-hidden="true" /> متجر الكود</a>;
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

const NAV = [{ to: 'gallery/', label: 'مكتبة الصور', icon: Images }, { to: 'timeline/', label: 'الخط الزمني', icon: Clock }, { to: 'saved/', label: 'المحفوظات', icon: Bookmark }];

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
      <div className="ms-auto flex items-center gap-1 sm:gap-1.5 xl:ms-0">
        <Link to="search/" aria-label="البحث" className="tool-btn"><Search size={20} /></Link>
        <Link to="saved/" aria-label="المقالات المحفوظة" className="tool-btn hidden sm:inline-grid"><Bookmark size={20} /></Link>
        <ThemeSwitch theme={theme} iconOnly variant="eclipse" label={theme === 'dark' ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن'} onThemeChange={t => setTheme(t)} />
        <SocialLinks className="hidden lg:flex" />
        {FLAGS.accounts && <><NotifyBell /><Link to="account/" className="tool-btn hidden sm:inline-grid" aria-label="الحساب"><UserRound size={18} /></Link></>}
        <StoreButton className="hidden sm:inline-flex" />
        <button type="button" className="tool-btn xl:hidden" aria-expanded={open} aria-controls="mnav" aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} onClick={() => setOpen(o => !o)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </div>
    <div className="hidden border-t border-[var(--border)] xl:block">
      <ul className="mx-auto flex max-w-[1320px] items-center justify-center gap-6 px-6 py-1.5 text-sm">
        {NAV.map(n => <li key={n.to}><Link to={n.to} className="group inline-flex items-center gap-1.5 py-1 font-medium text-[var(--text-muted)] hover:text-[var(--accent)]"><n.icon size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5" /><span className="ulink">{n.label}</span></Link></li>)}
      </ul>
    </div>
    <AnimatePresence>
      {open && <motion.nav id="mnav" aria-label="القائمة" initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }} animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }} exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }} className="overflow-hidden border-t border-[var(--border)] bg-[var(--background)] xl:hidden">
        <div className="mx-auto grid max-w-[1320px] gap-1 px-4 py-4 sm:grid-cols-2 sm:px-6">
          {categories.map((c, i) => <motion.div key={c.slug} initial={reduce ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .03 }}><Link to={`category/${c.slug}/`} className="flex items-center justify-between rounded-xl px-3 py-3 font-display text-lg font-bold hover:bg-[var(--accent-subtle)]">{c.name}<span aria-hidden="true" className="text-[var(--accent)]">◆</span></Link></motion.div>)}
          {NAV.map(n => <Link key={n.to} to={n.to} className="flex items-center gap-2 rounded-xl px-3 py-3 font-semibold text-[var(--text-secondary)] hover:bg-[var(--accent-subtle)]"><n.icon size={18} aria-hidden="true" />{n.label}</Link>)}
          <div className="flex items-center justify-between gap-3 sm:col-span-2"><StoreButton /><SocialLinks /></div>
          {FLAGS.accounts && <Link to="account/" className="ghost-btn justify-center sm:col-span-2">الحساب</Link>}
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
  return <section aria-labelledby="nl" className="relative overflow-hidden rounded-[28px] border border-[var(--border-strong)] bg-[var(--card)] p-6 sm:p-10">
    <div className="pattern pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
    <div className="relative grid items-center gap-6 md:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="kicker">{FLAGS.newsletter ? 'النشرة البريدية' : 'تابع المجلة'}</p>
        <h2 id="nl" className="mt-2 text-2xl sm:text-3xl">{FLAGS.newsletter ? 'تصلك المقالات الجديدة على بريدك' : 'أحدث المقالات في قارئ الخلاصات'}</h2>
        <p className="mt-2 text-[var(--text-muted)]">{FLAGS.newsletter ? 'رسالة عند نشر مقالات جديدة، ويمكنك إلغاء الاشتراك في أي وقت.' : 'اشترك في خلاصة RSS لتصلك المقالات الجديدة فور نشرها، أو تابعنا على إنستغرام وتيك توك.'}</p>
      </div>
      {FLAGS.newsletter ? <div>
        <form action={`https://buttondown.com/api/emails/embed-subscribe/${INT.newsletter.username}`} method="post" target="bd-popup" onSubmit={() => { window.open('', 'bd-popup', 'width=520,height=640'); setSent(true); }} className="flex flex-col gap-2 sm:flex-row">
          <label htmlFor="nl-email" className="sr-only">البريد الإلكتروني</label>
          <input id="nl-email" name="email" type="email" required dir="ltr" placeholder="name@example.com" className="field-input flex-1 text-left" />
          <input type="hidden" name="embed" value="1" />
          <button className="ink-btn justify-center" type="submit">اشترك</button>
        </form>
        <p aria-live="polite" className="mt-2 text-sm text-[var(--text-muted)]">{sent ? 'أرسلنا رسالة تأكيد إلى بريدك؛ افتحها لإتمام الاشتراك.' : <>الاشتراك عبر Buttondown · <Link to="privacy/" className="underline">الخصوصية</Link></>}</p>
      </div> : <div className="flex flex-col gap-2 sm:flex-row">
        <a className="ink-btn justify-center" href={asset('rss.xml')}><Rss size={17} aria-hidden="true" /> خلاصة RSS</a>
        <StoreButton className="justify-center" />
      </div>}
    </div>
  </section>;
}

export function Footer() {
  return <footer className="mt-24 bg-[var(--hero-bg)] text-[#efe4cc]">
    <div className="pattern">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div style={{ ['--text-primary' as any]: '#f6efe1', ['--text-muted' as any]: '#d9cbb0', ['--logo' as any]: '#f3e9d2' }}>
          <Logo />
          <p className="mt-4 max-w-sm text-[#d9cbb0]">مجلة رقمية لمكتبة الكود للتراث وتاريخ الخليج، تنشر مقالات من كتب الرحّالة والمصادر التاريخية.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3"><StoreButton /><SocialLinks dark /></div>
        </div>
        <div><h2 className="text-base text-[#f6efe1]">الأقسام</h2><ul className="mt-3 space-y-1.5">{categories.map(c => <li key={c.slug}><Link to={`category/${c.slug}/`} className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">{c.name}</span></Link></li>)}</ul></div>
        <div><h2 className="text-base text-[#f6efe1]">استكشف</h2><ul className="mt-3 space-y-1.5">{[...NAV, { to: 'search/', label: 'البحث' }].map(n => <li key={n.to}><Link to={n.to} className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">{n.label}</span></Link></li>)}</ul></div>
        <div><h2 className="text-base text-[#f6efe1]">عن الموقع</h2><ul className="mt-3 space-y-1.5">
          <li><Link to="about/" className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">عن المجلة</span></Link></li>
          <li><Link to="credits/" className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">حقوق الصور والمصادر</span></Link></li>
          <li><Link to="contact/" className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">تواصل معنا</span></Link></li>
          <li><Link to="privacy/" className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">سياسة الخصوصية</span></Link></li>
          <li><Link to="terms/" className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">شروط الاستخدام</span></Link></li>
          <li><a href="/rss.xml" className="inline-flex items-center gap-1.5 text-[#d9cbb0] hover:text-[#e2b866]"><Rss size={15} aria-hidden="true" /><span className="ulink">خلاصة RSS</span></a></li>
          <li><a href="/sitemap.xml" className="text-[#d9cbb0] hover:text-[#e2b866]"><span className="ulink">خريطة الموقع</span></a></li>
        </ul></div>
      </div>
      <div className="border-t border-white/10"><p className="mx-auto max-w-[1320px] px-4 py-4 text-sm text-[#d9cbb0] sm:px-6">© مكتبة الكود · الصور التاريخية من مصادر بتراخيص مفتوحة (انظر صفحة الحقوق) · لا صور مولّدة أو رسوم مختلقة.{FLAGS.accounts && <> · <Link to="account/" className="text-[#d9cbb0] underline-offset-4 hover:underline">الحساب</Link></>}</p></div>
    </div>
  </footer>;
}
