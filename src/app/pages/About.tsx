import { PageHero } from './Listing';
import { Link } from '../router';
import { photos, asset } from '../data';
export default function About() {
  return <main id="main"><PageHero kicker="عن المجلة" title="مجلة الكود الرقمية" desc="منصة مقالات تجريبية لمكتبة الكود (alcode.ae) المتخصصة في كتب التراث وتاريخ الخليج." />
    <div className="mx-auto grid max-w-[1000px] gap-8 px-4 pt-10 sm:px-6 md:grid-cols-[1fr_260px]">
      <div className="prose-ar"><p>هذه نسخة تجريبية من المجلة. المقالات الثلاثة الحالية <strong>نماذج تجريبية</strong> لعرض التصميم وطريقة النشر، ولا تتضمن معلومات تاريخية.</p>
        <h2>كيف تُنشر المقالات؟</h2><p>كل مقال ملف ماركداون في مجلد <code>content</code>. يكتب المحرر مقاله في صفحة <Link to="write/">اكتب مقالاً</Link>، ثم يصدّر الملف ويضيفه إلى المجلد ويرفع التعديل، فيُبنى الموقع تلقائياً.</p></div>
      {(() => { const p = photos.find(x => x.slug === 'joassamee-dow-1837')!; return <figure className="m-0"><img src={asset(p.thumb)} alt={p.label} className="w-full rounded-xl border border-[var(--border)]" width={p.w} height={p.h} /><figcaption className="mt-2 text-xs text-[var(--text-muted)]">{p.label} — {p.author}، {p.date}. ملكية عامة.</figcaption></figure>; })()}
    </div></main>;
}
