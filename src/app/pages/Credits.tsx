import { ExternalLink } from 'lucide-react';
import { photos, asset } from '../data';
import { PageHero } from './Listing';
export default function Credits() {
  return <main id="main">
    <PageHero kicker="الشفافية" title="حقوق الصور والمصادر" desc="كل صورة ولوحة وخريطة تاريخية في الموقع منقولة من ويكيميديا كومنز بترخيص يسمح بإعادة الاستخدام. الوصف أدناه منقول حرفياً من صفحة المصدر دون تعديل أو إضافة." />
    <div className="mx-auto max-w-[1100px] px-4 pt-10 sm:px-6">
      <ul className="space-y-4">{photos.map(p => <li key={p.slug} className="grid gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 sm:grid-cols-[140px_1fr]">
        <img src={asset(p.thumb)} alt="" loading="lazy" className="w-full rounded-lg object-cover sm:h-28" width={p.w} height={p.h} />
        <div className="min-w-0 text-sm">
          <p className="font-display text-base font-bold">{p.label}</p>
          <dl className="mt-1 grid gap-x-3 gap-y-0.5 sm:grid-cols-[auto_1fr]">
            <dt className="font-semibold text-[var(--text-muted)]">الملف</dt><dd className="ltr break-words" dir="ltr">{p.title}</dd>
            {p.caption && <><dt className="font-semibold text-[var(--text-muted)]">وصف المصدر</dt><dd className="ltr break-words" dir="ltr">{p.caption}</dd></>}
            {p.author && <><dt className="font-semibold text-[var(--text-muted)]">المؤلف</dt><dd className="ltr" dir="ltr">{p.author}</dd></>}
            {p.date && <><dt className="font-semibold text-[var(--text-muted)]">التاريخ (المصدر)</dt><dd className="ltr" dir="ltr">{p.date}</dd></>}
            <dt className="font-semibold text-[var(--text-muted)]">الترخيص</dt><dd className="ltr" dir="ltr">{p.licenceUrl ? <a href={p.licenceUrl} className="text-[var(--accent)] underline" target="_blank" rel="noopener noreferrer">{p.licence}</a> : p.licence}</dd>
            <dt className="font-semibold text-[var(--text-muted)]">المصدر</dt><dd><a href={p.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 break-all text-[var(--accent)] underline">Wikimedia Commons <ExternalLink size={13} aria-hidden="true" /></a></dd>
          </dl>
        </div>
      </li>)}</ul>
      <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface-raised)] p-6">
        <h2 className="text-xl">الخطوط والمكوّنات والزخارف</h2>
        <ul className="mt-3 list-disc space-y-1 ps-5 text-[var(--text-secondary)]">
          <li>لا يستخدم الموقع صوراً مولّدة أو رسوماً مختلقة. الزخرفة الوحيدة المرسومة نجمة ثمانية بسيطة في الواجهة (عنصر تصميم وليس عملاً فنياً تاريخياً).</li>
          <li>الخطوط (مستضافة محلياً، رخصة SIL OFL): Noto Kufi Arabic، IBM Plex Sans Arabic، Aref Ruqaa، Amiri.</li>
          <li>المكوّنات (رخصة MIT): Arc UI، easyui، mdxcn، gauge-ui، audiocn، Pele، وأيقونات Lucide (ISC).</li>
        </ul>
      </section>
    </div>
  </main>;
}
