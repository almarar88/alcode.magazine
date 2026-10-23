import { Link } from '../router';
import { SocialLinks } from '../chrome';
import { books, collections, SHOP } from '../data';
import { PageHead } from '../ui';
import { EMAIL } from '../config';
import { Mail, Truck, Wallet, ShieldCheck, StickyNote, ShoppingCart, RotateCcw } from 'lucide-react';
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
export const MailLink = ({ className = '' }: { className?: string }) => <a href={`mailto:${EMAIL}`} dir="ltr" className={`font-semibold text-[var(--accent)] underline underline-offset-4 ${className}`}>{EMAIL}</a>;
export function Contact() {
  return <Wrap t="تواصل معنا" d="للاستفسار عن الكتب أو الطلبات.">
    <section aria-labelledby="mail-h" data-testid="contact-email" className="not-prose rounded-3xl border border-[var(--border-strong)] bg-[var(--card)] p-6">
      <h2 id="mail-h" className="flex items-center gap-2 text-xl text-[var(--text-primary)]"><Mail size={22} aria-hidden="true" className="text-[var(--accent)]" />البريد الإلكتروني</h2>
      <p className="mt-2">راسلنا على <MailLink /> لأي استفسار عن الكتب أو طلبك.</p>
      <a href={`mailto:${EMAIL}`} className="ink-btn mt-4"><Mail size={18} aria-hidden="true" />أرسل رسالة</a>
    </section>
    <p>ويمكنك أيضًا التواصل عبر حساباتنا على إنستغرام وتيك توك.</p>
    <div className="mt-4"><SocialLinks /></div>
    <p className="mt-6">لأسئلة الشحن والدفع راجع <Link to="help/" className="font-semibold text-[var(--accent)] underline underline-offset-4">صفحة الشحن والأسئلة الشائعة</Link>.</p>
  </Wrap>;
}
const FAQ: [any, string, any][] = [
  [Truck, 'كم تكلفة الشحن؟', <>رسوم الشحن ثابتة: <b>25 د.إ. لكل طلب</b> مهما كان عدد الكتب.</>],
  [Wallet, 'هل تُضاف ضريبة على السعر؟', <>لا. لا تُضاف أي ضريبة؛ المبلغ الذي تدفعه هو مجموع أسعار الكتب مضافًا إليه 25 د.إ. للشحن.</>],
  [ShieldCheck, 'كيف يتم الدفع؟', <>عند الضغط على «إتمام الشراء» أو «اشترِ الآن» تنتقل إلى صفحة إتمام الطلب في هذا الموقع لإدخال بيانات التوصيل، ثم تدفع بأمان عبر Ziina بالبطاقة أو Apple Pay أو Google Pay. لا نرى بيانات بطاقتك ولا نحفظها.</>],
  [ShoppingCart, 'هل تبقى سلتي محفوظة إذا أغلقت الصفحة؟', <>نعم. تُحفظ السلة وقائمة الأمنيات في متصفحك على هذا الجهاز، فتجدها كما تركتها عند عودتك.</>],
  [StickyNote, 'هل أستطيع إضافة ملاحظة أو إهداء إلى طلبي؟', <>نعم. في صفحة السلة اكتب ملاحظتك (مثل اسم من تُهدي إليه الكتاب أو عبارة الإهداء)، وتُرسل مع طلبك إلى المتجر.</>],
  [RotateCcw, 'ما شروط البيع والاسترجاع؟', <>تسري شروط الخدمة المنشورة في <A href={`${SHOP}/policies/terms-of-service`}>متجر الكود الرسمي</A>. لأي استفسار عن طلبك راسلنا على <MailLink />.</>],
  [Mail, 'كيف أتواصل معكم؟', <>عبر البريد الإلكتروني <MailLink />، أو عبر حساباتنا على إنستغرام وتيك توك.</>],
];
export function Help() {
  return <Wrap t="الشحن والدفع والأسئلة الشائعة" d="كل ما تحتاج معرفته قبل الطلب.">
    <div data-testid="faq" className="not-prose grid gap-3">{FAQ.map(([I, q, a], k) => <details key={k} className="faq group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4" open={k < 3}>
      <summary className="flex cursor-pointer list-none items-center gap-3 text-lg font-bold text-[var(--text-primary)]"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--accent-subtle)] text-[var(--accent)]"><I size={20} aria-hidden="true" /></span>{q}<span aria-hidden="true" className="faq-chev ms-auto text-[var(--text-muted)]">⌄</span></summary>
      <p className="mt-3 leading-8 text-[var(--text-secondary)]">{a}</p></details>)}</div>
  </Wrap>;
}
export function Privacy() {
  return <Wrap t="سياسة الخصوصية" d={`آخر تحديث: ${UPDATED}`}>
    <h2 className="text-xl text-[var(--text-primary)]">ما يُحفظ في متصفحك</h2>
    <p>يحفظ الموقع في متصفحك فقط (التخزين المحلي) محتوى سلة التسوق وقائمة الأمنيات واختيارك للوضع الفاتح أو الداكن. لا تُرسل هذه البيانات إلى أي خادم، ويمكنك حذفها بمسح بيانات الموقع من المتصفح.</p>
    <h2 className="text-xl text-[var(--text-primary)]">الشراء والدفع</h2>
    <p>عند إتمام الطلب نحفظ بيانات التوصيل التي تُدخلها (الاسم والهاتف والبريد والعنوان والملاحظة) مع الكتب والمبلغ، لنتمكّن من تجهيز طلبك وشحنه والتواصل معك بشأنه فقط. يتم الدفع عبر Ziina، ولا نرى بيانات بطاقتك ولا نحفظها. يستطيع الاطلاع على الطلبات مالك المتجر وحده.</p>
    <h2 className="text-xl text-[var(--text-primary)]">إحصاءات الزيارات</h2>
    <p>نستخدم <A href="https://www.goatcounter.com">GoatCounter</A> لإحصاء الزيارات إحصاءً عامًا دون ملفات تعريف ارتباط ودون تتبّع شخصي.</p>
    <h2 className="text-xl text-[var(--text-primary)]">الاستضافة والخطوط</h2>
    <p>يُستضاف الموقع على GitHub Pages، والخطوط والصور محفوظة على خادم الموقع نفسه.</p>
  </Wrap>;
}
export function Terms() {
  return <Wrap t="شروط الاستخدام" d={`آخر تحديث: ${UPDATED}`}>
    <p>الأسعار المعروضة بالدرهم الإماراتي ومأخوذة من متجر الكود الرسمي. السعر والتوفّر النهائيان هما ما يظهر في صفحة الدفع على alcode.ae، وتسري عليهما شروط ذلك المتجر في البيع والشحن والاسترجاع.</p>
    <p>رسوم الشحن ثابتة: 25 د.إ. لكل طلب مهما كان عدد الكتب، والمبلغ النهائي هو مجموع أسعار الكتب مضافًا إليه رسوم الشحن.</p>
    <p>صور الأغلفة والأوصاف ملك لمؤسسة الكود لنشر الكتب، ولا يجوز إعادة نشرها دون إذن.</p>
  </Wrap>;
}
