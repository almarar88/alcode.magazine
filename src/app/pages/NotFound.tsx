import { Link } from '../router';
import { LogoMark } from '../art';
export default function NotFound() {
  return <main id="main" className="mx-auto grid max-w-[720px] place-items-center px-4 py-24 text-center">
    <LogoMark className="h-20 w-24 text-[var(--accent)]" />
    <h1 className="mt-6 text-4xl">الصفحة غير موجودة</h1>
    <p className="mt-3 text-[var(--text-secondary)]">ربما نُقلت الصفحة أو حُذف الكتاب من المتجر.</p>
    <Link to="books/" className="ink-btn mt-6">تصفّح الكتب</Link>
  </main>;
}
