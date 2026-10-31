import { useEffect, useRef } from 'react';
import { usePath } from './router';
import { Header, Footer } from './chrome';
import { byHandle, collections } from './data';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import BookPage from './pages/Book';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import NotFound from './pages/NotFound';
import Author from './pages/Author';
import { BackToTop } from './extras2';
import { ThemePage, ThemesIndex, themes } from './extras6';
import { About, Contact, Privacy, Terms, Help } from './pages/Static';
const SITE = 'متجر الكود للكتب';
const TITLES: Record<string, string> = { books: 'كل الكتب', author: 'عن المؤلف علي أحمد الكندي المرر', cart: 'سلة التسوق', wishlist: 'قائمة الأمنيات', about: 'عن المتجر', contact: 'تواصل معنا', help: 'الشحن والدفع والأسئلة الشائعة', privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام' };
function route(path: string) {
  const [a, b] = path.split('/');
  switch (a) {
    case '': return <Home />;
    case 'books': return <Catalog />;
    case 'collection': return collections.some(c => c.handle === b) ? <Catalog key={b} collection={b} /> : <NotFound />;
    case 't': return !b ? <ThemesIndex /> : themes.some(t => t.slug === b) ? <ThemePage key={b} slug={b} /> : <NotFound />;
    case 'book': return <BookPage handle={b} />;
    case 'author': return <Author />;
    case 'cart': return <Cart />;
    case 'wishlist': return <Wishlist />;
    case 'about': return <About />;
    case 'contact': return <Contact />;
    case 'help': return <Help />;
    case 'privacy': return <Privacy />;
    case 'terms': return <Terms />;
    default: return <NotFound />;
  }
}
function titleFor(path: string) {
  const [a, b] = path.split('/');
  if (a === 'book') return byHandle(b)?.title; if (a === 't') return b ? themes.find(t => t.slug === b)?.title : 'مجموعات مختارة'; if (a === 'collection') return collections.find(c => c.handle === b)?.title; return TITLES[a];
}
export default function App() {
  const path = usePath(); const first = useRef(true);
  useEffect(() => { if (first.current) { first.current = false; return; }
    const t = setTimeout(() => { const gc = (window as any).goatcounter; if (gc?.count) gc.count({ path: location.pathname + location.search, title: document.title }); }, 300); return () => clearTimeout(t); }, [path]);
  useEffect(() => { const t = titleFor(path); document.title = t ? `${t} — ${SITE}` : `${SITE} · Alcode Books`; }, [path]);
  return <>
    <a href="#main" className="skip">تخطَّ إلى المحتوى</a>
    <Header path={path} />
    <div key={path} className={first.current ? undefined : "page-in"}>{route(path)}</div>
    <Footer />
    <BackToTop />
  </>;
}
