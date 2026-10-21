import { Link } from '../router';
import { byHandle, type Book } from '../data';
import { useWishlist } from '../store';
import { Grid, PageHead } from '../ui';
export default function Wishlist() {
  const { list } = useWishlist(); const items = list.map(byHandle).filter(Boolean) as Book[];
  return <main id="main"><PageHead kicker="المتجر" title="قائمة الأمنيات" desc="تُحفظ هذه القائمة في متصفحك فقط." />
    <div className="mx-auto max-w-[1320px] px-4 pt-8 sm:px-6">{items.length ? <Grid items={items} /> : <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 text-center"><p className="text-lg">لم تضف كتبًا بعد.</p><Link to="books/" className="ink-btn mt-5">تصفّح الكتب</Link></div>}</div>
  </main>;
}
