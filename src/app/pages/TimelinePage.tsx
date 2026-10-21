import { Timeline } from '../Timeline';
import { PageHero } from './Listing';
export default function TimelinePage() {
  return <main id="main"><PageHero kicker="من مقالات المجلة" title="الخط الزمني" desc="محطات مقالات المجلة مرتبة زمنياً؛ تنقّل بالأسهم أو بالنقر وافتح المقال." />
    <div className="mx-auto max-w-[1100px] px-4 pt-10 sm:px-6"><Timeline /></div></main>;
}
