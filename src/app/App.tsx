import { lazy, Suspense, useEffect, useRef } from 'react';
import { MotionConfig } from 'motion/react';
import { usePath } from './router';
import { Header, Footer } from './chrome';
import { AuthProvider } from './auth';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
const Article = lazy(() => import('./pages/Article'));
const Listing = lazy(() => import('./pages/Listing'));
const Search = lazy(() => import('./pages/Search'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Credits = lazy(() => import('./pages/Credits'));
const Saved = lazy(() => import('./pages/Saved'));
const TimelinePage = lazy(() => import('./pages/TimelinePage'));
const Traveler = lazy(() => import('./pages/Traveler'));
const TravelersIndex = lazy(() => import('./pages/Traveler').then(m => ({ default: m.TravelersIndex })));
const About = lazy(() => import('./pages/About'));
const Account = lazy(() => import('./pages/Account'));
const Studio = lazy(() => import('./pages/Studio'));
const Contact = lazy(() => import('./pages/Static').then(m => ({ default: m.Contact })));
const Privacy = lazy(() => import('./pages/Static').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Static').then(m => ({ default: m.Terms })));
const TITLES: Record<string, string> = { search: 'البحث', gallery: 'مكتبة الصور', credits: 'حقوق الصور والمصادر', contact: 'تواصل معنا', privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', account: 'الحساب', studio: 'لوحة الناشر', saved: 'المقالات المحفوظة', timeline: 'الخط الزمني', travelers: 'الرحالة والكتب', about: 'عن المجلة' };
function route(path: string) {
  const [a, b] = path.split('/');
  switch (a) {
    case '': return <Home />;
    case 'article': return <Article slug={b} />;
    case 'category': return <Listing kind="category" slug={b} />;
    case 'tag': return <Listing kind="tag" slug={b} />;
    case 'search': return <Search />;
    case 'gallery': return <Gallery />;
    case 'credits': return <Credits />;
    case 'saved': return <Saved />;
    case 'timeline': return <TimelinePage />;
    case 'about': return <About />;
    case 'traveler': return <Traveler slug={b} />;
    case 'travelers': return <TravelersIndex />;
    case 'account': return <Account />;
    case 'studio': return <Studio />;
    case 'contact': return <Contact />;
    case 'privacy': return <Privacy />;
    case 'terms': return <Terms />;
    default: return <NotFound />;
  }
}
export default function App() {
  const path = usePath();
  const first = useRef(true);
  useEffect(() => { if (first.current) { first.current = false; return; } // count.js counts the initial load; count SPA navigations here
    const t = setTimeout(() => { const gc = (window as any).goatcounter; if (gc?.count) gc.count({ path: location.pathname + location.search, title: document.title }); }, 300); return () => clearTimeout(t); }, [path]);
  useEffect(() => { const a = path.split('/')[0]; if (a !== 'article') document.title = TITLES[a] ? `${TITLES[a]} — مجلة الكود الرقمية` : 'مجلة الكود الرقمية · Alcode Digital Magazine'; }, [path]);
  return <AuthProvider><MotionConfig reducedMotion="user">
    <a href="#main" className="skip">تخطَّ إلى المحتوى</a>
    <Header path={path} />
    <Suspense fallback={<div className="min-h-[70vh]" aria-busy="true" />}><div key={path + location.search}>{route(path)}</div></Suspense>
    <Footer />
  </MotionConfig></AuthProvider>;
}
