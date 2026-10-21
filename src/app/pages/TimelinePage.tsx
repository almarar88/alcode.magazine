import { Timeline } from '../Timeline';
import { PageHero } from './Listing';
export default function TimelinePage() {
  return <main id="main"><PageHero kicker="مكوّن تفاعلي" title="الخط الزمني" desc="مكوّن جاهز لعرض الأحداث بالترتيب. جميع المدخلات الحالية تجريبية بلا معلومات تاريخية؛ تنقّل بالأسهم أو بالنقر." />
    <div className="mx-auto max-w-[1100px] px-4 pt-10 sm:px-6"><Timeline /></div></main>;
}
