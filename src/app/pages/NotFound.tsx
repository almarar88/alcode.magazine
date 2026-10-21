import { Link } from '../router';
import { StarOrnament } from '../art';
export default function NotFound() {
  return <main id="main" className="mx-auto grid max-w-[720px] place-items-center px-4 py-24 text-center">
    <StarOrnament className="size-24 text-[var(--accent)]" />
    <h1 className="mt-6 text-4xl">الصفحة غير موجودة</h1>
    <p className="mt-3 text-[var(--text-muted)]">ربما نُقلت الصفحة أو لم تُنشر بعد.</p>
    <Link to="" className="ink-btn mt-6">العودة إلى الرئيسية</Link>
  </main>;
}
