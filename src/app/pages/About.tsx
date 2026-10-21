import { PageHero } from './Listing';
import { Link } from '../router';
import { photos, asset } from '../data';
export default function About() {
  return <main id="main"><PageHero kicker="عن المجلة" title="مجلة الكود الرقمية" desc="منصة مقالات لمكتبة الكود (alcode.ae) المتخصصة في كتب التراث وتاريخ الخليج." />
    <div className="mx-auto grid max-w-[1000px] gap-8 px-4 pt-10 sm:px-6 md:grid-cols-[1fr_260px]">
      <div className="prose-ar"><p>تنشر المجلة مقالات مستخرجة من كتب الرحّالة والمصادر التاريخية عن الخليج العربي، مع صور من داخل الكتب وذكر المصدر ورقم الصفحة لكل صورة.</p>
        <h2>من يكتب في المجلة؟</h2><p>المجلة تابعة لمكتبة الكود، وتُحرَّر مقالاتها وتُنشر من قِبَل المكتبة. لملاحظة أو تصويب: <Link to="contact/">تواصل معنا</Link>.</p></div>
      {(() => { const p = photos.find(x => x.slug === 'joassamee-dow-1837')!; return <figure className="m-0"><img src={asset(p.thumb)} alt={p.label} className="w-full rounded-xl border border-[var(--border)]" width={p.w} height={p.h} /><figcaption className="mt-2 text-xs text-[var(--text-muted)]">{p.label} — {p.author}، {p.date}. ملكية عامة.</figcaption></figure>; })()}
    </div></main>;
}
