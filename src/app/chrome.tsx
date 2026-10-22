import { useEffect, useState } from 'react';
import { Heart, Menu, Search, ShoppingCart, X, ExternalLink } from 'lucide-react';
import { ThemeSwitch, type Theme } from '@/registry/components/theme-switch/theme-switch';
import { Link } from './router';
import { collections, SHOP } from './data';
import { LogoMark } from './art';
import { useCart } from './store';
import { HeaderSearch, MiniCart } from './extras';
import { useSlashSearch } from './extras2';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => { setTheme((document.documentElement.dataset.theme as Theme) || 'light'); }, []);
  const set = (t: Theme) => { document.documentElement.dataset.theme = t; try { localStorage.setItem('alcode-theme', t); } catch {} setTheme(t); };
  return [theme, set] as const;
}
const IG = (p: any) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>;
const TT = (p: any) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="currentColor" aria-hidden="true"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66C7.2 9.2 4.2 11.86 4.2 15.3 4.2 18.65 6.98 21 9.85 21c3.08 0 5.59-2.5 5.59-5.6V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.14-1.48z"/></svg>;
export const SOCIAL = [{ href: 'https://www.instagram.com/alcode.ae', label: 'إنستغرام', Icon: IG }, { href: 'https://www.tiktok.com/@alcode.ae', label: 'تيك توك', Icon: TT }];
export function SocialLinks({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return <ul className={`flex items-center gap-1.5 ${className}`} aria-label="حسابات الكود">{SOCIAL.map(({ href, label, Icon }) => <li key={href}>
    <a href={href} target="_blank" rel="noopener" aria-label={`${label} @alcode.ae`} className={`social-btn ${dark ? 'social-dark' : ''}`}><Icon size={18} /></a></li>)}</ul>;
}
export function Logo() {
  return <span className="flex items-center gap-3">
    <LogoMark className="h-9 w-[42px] shrink-0 text-[var(--logo)] sm:h-11 sm:w-[52px]" />
    <span className="flex flex-col leading-none">
      <span className="text-lg font-bold text-[var(--text-primary)] sm:text-xl">متجر الكود</span>
      <span className="mt-1 text-[.72rem] font-semibold text-[var(--text-muted)]">Alcode Books</span>
    </span>
  </span>;
}
export function CartBadge({ open, toggle }: { open?: boolean; toggle?: () => void }) {
  const { count } = useCart();
  return <Link to="cart/" data-cart-target onClick={e => { if (toggle) { e.preventDefault(); toggle(); } }} aria-expanded={toggle ? open : undefined} aria-controls={toggle ? 'minicart' : undefined} className="tool-btn relative" aria-label={count ? `سلة التسوق، ${count} ${count === 1 ? 'كتاب' : 'كتب'}` : 'سلة التسوق'}>
    <ShoppingCart size={20} />
    {count > 0 && <span aria-hidden="true" className="absolute -top-1 -end-1 grid min-w-5 h-5 place-items-center rounded-full bg-[var(--accent)] px-1 text-[.72rem] font-bold text-[#1b1208]">{count}</span>}
  </Link>;
}
const NAV = [{ to: '', label: 'الرئيسية' }, { to: 'books/', label: 'كل الكتب' }, { to: 'author/', label: 'عن المؤلف' }, ...collections.map(c => ({ to: `collection/${c.handle}/`, label: c.title }))];

export function Header({ path }: { path: string }) {
  const [theme, setTheme] = useTheme();
  const [open, setOpen] = useState(false); const [sOpen, setS] = useState(false); const [cOpen, setC] = useState(false);
  useEffect(() => { setOpen(false); setS(false); setC(false); }, [path]);
  useSlashSearch(() => { setS(true); setC(false); });
  const cur = (to: string) => (to === '' ? path === '' : (path + '/').startsWith(to));
  return <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]">
    <div className="mx-auto flex max-w-[1320px] items-center gap-2 px-3 py-3 sm:gap-3 sm:px-6">
      <Link to="" aria-label="متجر الكود — الرئيسية" className="shrink-0 rounded-xl"><Logo /></Link>
      <div className="ms-auto flex items-center gap-0.5 sm:gap-1.5">
        <Link to="books/" aria-label="ابحث في الكتب (اختصار: /)" aria-keyshortcuts="/" aria-expanded={sOpen} aria-controls="hsearch" onClick={e => { e.preventDefault(); setS(v => !v); setC(false); }} className="tool-btn"><Search size={20} /></Link>
        <Link to="wishlist/" aria-label="قائمة الأمنيات" className="tool-btn"><Heart size={20} /></Link>
        <CartBadge open={cOpen} toggle={() => { setC(v => !v); setS(false); }} />
        <ThemeSwitch theme={theme} iconOnly variant="eclipse" label={theme === 'dark' ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن'} onThemeChange={t => setTheme(t)} />
        <SocialLinks className="hidden lg:flex" />
        <button type="button" className="tool-btn xl:hidden" aria-expanded={open} aria-controls="mnav" aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} onClick={() => setOpen(o => !o)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </div>
    <nav aria-label="الأقسام" className="hidden border-t border-[var(--border)] xl:block">
      <ul className="mx-auto flex max-w-[1320px] items-center justify-center gap-2 px-6 py-1.5">
        {NAV.map(n => <li key={n.to}><Link to={n.to} aria-current={cur(n.to) ? 'page' : undefined} className={`rounded-full px-3 py-2 text-[.95rem] font-semibold hover:text-[var(--accent)] ${cur(n.to) ? 'text-[var(--accent)] underline decoration-2 underline-offset-8' : 'text-[var(--text-secondary)]'}`}>{n.label}</Link></li>)}
      </ul>
    </nav>
    <HeaderSearch open={sOpen} setOpen={setS} />
    <MiniCart open={cOpen} setOpen={setC} />
    {open && <nav id="mnav" aria-label="القائمة" className="border-t border-[var(--border)] bg-[var(--background)] xl:hidden">
      <ul className="mx-auto grid max-w-[1320px] gap-1 px-4 py-4 sm:grid-cols-2 sm:px-6">
        {NAV.map(n => <li key={n.to}><Link to={n.to} aria-current={cur(n.to) ? 'page' : undefined} className="flex items-center justify-between rounded-xl px-3 py-3 text-lg font-bold hover:bg-[var(--accent-subtle)]">{n.label}<span aria-hidden="true" className="text-[var(--accent)]">◆</span></Link></li>)}
        <li className="flex items-center justify-between gap-3 px-3 pt-2 sm:col-span-2"><SocialLinks /></li>
      </ul>
    </nav>}
  </header>;
}

export function Footer() {
  const L = ({ to, children }: any) => <li><Link to={to} className="text-[#e0d4bb] hover:text-[#e2b866]"><span className="ulink">{children}</span></Link></li>;
  return <footer className="mt-24 bg-[var(--hero-bg)] text-[#efe4cc]">
    <div className="pattern">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div style={{ ['--text-primary' as any]: '#f6efe1', ['--text-muted' as any]: '#e0d4bb', ['--logo' as any]: '#f3e9d2' }}>
          <Logo />
          <p className="mt-4 max-w-sm text-[#e0d4bb]">متجر إصدارات مؤسسة الكود لنشر الكتب. الأسعار بالدرهم الإماراتي، ويتم الدفع والشحن عبر متجر الكود الرسمي.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3"><SocialLinks dark /></div>
        </div>
        <div><h2 className="text-base text-[#f6efe1]">التصنيفات</h2><ul className="mt-3 space-y-1.5"><L to="books/">كل الكتب</L>{collections.map(c => <L key={c.handle} to={`collection/${c.handle}/`}>{c.title}</L>)}</ul></div>
        <div><h2 className="text-base text-[#f6efe1]">المتجر</h2><ul className="mt-3 space-y-1.5">
          <L to="cart/">سلة التسوق</L><L to="wishlist/">قائمة الأمنيات</L><L to="author/">عن المؤلف</L><L to="about/">عن المتجر</L><L to="contact/">تواصل معنا</L><L to="privacy/">سياسة الخصوصية</L><L to="terms/">شروط الاستخدام</L>
          <li><a href={SHOP} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-[#e0d4bb] hover:text-[#e2b866]"><span className="ulink">متجر الكود الرسمي</span><ExternalLink size={14} aria-hidden="true" /></a></li>
        </ul></div>
      </div>
      <div className="border-t border-white/10"><p className="mx-auto max-w-[1320px] px-4 py-4 text-sm text-[#e0d4bb] sm:px-6">© مؤسسة الكود لنشر الكتب · بيانات الكتب والأسعار من متجر الكود الرسمي alcode.ae</p></div>
    </div>
  </footer>;
}
