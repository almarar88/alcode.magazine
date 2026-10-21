import { Link } from '../router';
import { SocialLinks } from '../chrome';
import { books, collections, SHOP } from '../data';
import { PageHead } from '../ui';
const Wrap = ({ t, d, children }: any) => <main id="main"><PageHead kicker="متجر الكود" title={t} desc={d} /><div className="mx-auto max-w-[820px] px-4 pt-10 sm:px-6"><div className="desc-ar">{children}</div></div></main>;
const UPDATED = '21 أكتوبر 2026';
const A = ({ href, children }: any) => <a href={href} target="_blank" rel="noopener" className="font-semibold text-[var(--accent)] underline underline-offset-4">{children}</a>;
export function About() {
  return <Wrap t="عن المتجر">
    <p>هذا الموقع واجهة لتصفّح إصدارات مؤسسة الكود لنشر الكتب وشرائها. يضمّ {books.length} كتابًا في {collections.length} تصنيفات: {collections.map(c => c.title).join('، ')}.</p>
    <p>بيانات الكتب (العناوين والمؤلفون والأوصاف والأسعار والتوفّر والصور) مأخوذة من متجر الكود الرسمي <A href={SHOP}>alcode.ae</A>. عند إتمام الشراء تنتقل سلتك إلى ذلك المتجر، وفيه يتم الدفع والشحن.</p>
    <div className="mt-6 flex flex-wrap items-center gap-3"><SocialLinks /><Link to="books/" className="ink-btn">تصفّح الكتب</Link></div>
  </Wrap>;
}
export function Contact() {
  return <Wrap t="تواصل معنا" d="للاستفسار عن الكتب أو الطلبات.">
    <p>يسعدنا تواصلك عبر حساباتنا على إنستغرام وتيك توك، أو عبر صفحة التواصل في متجر الكود الرسمي <A href={`${SHOP}/pages/contact`}>alcode.ae</A>.</p>
    <div className="mt-6"><SocialLinks /></div>
  </Wrap>;
}
export function Privacy() {
  return <Wrap t="سياسة الخصوصية" d={`آخر تحديث: ${UPDATED}`}>
    <h2 className="text-xl text-[var(--text-primary)]">ما يُحفظ في متصفحك</h2>
    <p>يحفظ الموقع في متصفحك فقط (التخزين المحلي) محتوى سلة التسوق وقائمة الأمنيات واختيارك للوضع الفاتح أو الداكن. لا تُرسل هذه البيانات إلى أي خادم، ويمكنك حذفها بمسح بيانات الموقع من المتصفح.</p>
    <h2 className="text-xl text-[var(--text-primary)]">الشراء والدفع</h2>
    <p>عند الضغط على «إتمام الشراء» أو «اشترِ الآن» تنتقل إلى متجر الكود الرسمي (alcode.ae، على منصة Shopify) ومعك أرقام الكتب وكمياتها فقط. بيانات الدفع والشحن تُدخل هناك وتخضع لسياسة خصوصية ذلك المتجر.</p>
    <h2 className="text-xl text-[var(--text-primary)]">إحصاءات الزيارات</h2>
    <p>نستخدم <A href="https://www.goatcounter.com">GoatCounter</A> لإحصاء الزيارات إحصاءً عامًا دون ملفات تعريف ارتباط ودون تتبّع شخصي.</p>
    <h2 className="text-xl text-[var(--text-primary)]">الاستضافة والخطوط</h2>
    <p>يُستضاف الموقع على GitHub Pages، والخطوط والصور محفوظة على خادم الموقع نفسه.</p>
  </Wrap>;
}
export function Terms() {
  return <Wrap t="شروط الاستخدام" d={`آخر تحديث: ${UPDATED}`}>
    <p>الأسعار المعروضة بالدرهم الإماراتي ومأخوذة من متجر الكود الرسمي. السعر والتوفّر النهائيان هما ما يظهر في صفحة الدفع على alcode.ae، وتسري عليهما شروط ذلك المتجر في البيع والشحن والاسترجاع.</p>
    <p>صور الأغلفة والأوصاف ملك لمؤسسة الكود لنشر الكتب، ولا يجوز إعادة نشرها دون إذن.</p>
  </Wrap>;
}
