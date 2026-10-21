import { useState } from 'react';
import { PageHero } from './Listing';
import { Link } from '../router';
import { FLAGS, INT } from '../integrations';
import { SocialLinks, StoreButton } from '../chrome';
const Wrap = ({ k, t, d, children }: any) => <main id="main"><PageHero kicker={k} title={t} desc={d} /><div className="mx-auto max-w-[820px] px-4 pt-10 sm:px-6"><div className="prose-ar">{children}</div></div></main>;
const UPDATED = '21 أكتوبر 2026';

export function Contact() {
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setState('sending');
    const fd = new FormData(e.currentTarget); fd.append('access_key', INT.contact.accessKey); fd.append('subject', 'رسالة من مجلة الكود الرقمية');
    try { const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd }); const j = await r.json(); setState(j.success ? 'ok' : 'err'); if (j.success) (e.target as HTMLFormElement).reset(); } catch { setState('err'); }
  };
  return <Wrap k="مجلة الكود الرقمية" t="تواصل معنا" d="للملاحظات على المقالات أو اقتراح موضوع أو تصويب معلومة.">
    {FLAGS.contact ? <form onSubmit={send} className="not-prose grid gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-7">
      <div><label htmlFor="c-name" className="mb-1 block font-semibold">الاسم</label><input id="c-name" name="name" required className="field-input" autoComplete="name" /></div>
      <div><label htmlFor="c-email" className="mb-1 block font-semibold">البريد الإلكتروني</label><input id="c-email" name="email" type="email" required dir="ltr" className="field-input text-left" autoComplete="email" /></div>
      <div><label htmlFor="c-msg" className="mb-1 block font-semibold">الرسالة</label><textarea id="c-msg" name="message" required rows={6} className="field-input" /></div>
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
      <button type="submit" className="ink-btn justify-self-start" disabled={state === 'sending'}>{state === 'sending' ? 'جارٍ الإرسال…' : 'أرسل'}</button>
      <p aria-live="polite" className="text-sm">{state === 'ok' ? 'وصلت رسالتك، شكراً لك.' : state === 'err' ? 'تعذّر الإرسال؛ حاول مرة أخرى أو راسلنا عبر إنستغرام.' : <>تُرسل الرسالة عبر خدمة Web3Forms. <Link to="privacy/">الخصوصية</Link></>}</p>
    </form> : <p>يسعدنا تواصلك عبر حسابات المجلة:</p>}
    <div className="not-prose mt-6 flex flex-wrap items-center gap-3"><SocialLinks /><StoreButton /></div>
  </Wrap>;
}

export function Privacy() {
  return <Wrap k="مجلة الكود الرقمية" t="سياسة الخصوصية" d={`آخر تحديث: ${UPDATED}`}>
    <p>توضّح هذه الصفحة ما يجري لبياناتك عند تصفّح مجلة الكود الرقمية (blog.alcode.ae).</p>
    <h2>ما يُحفظ في متصفحك</h2>
    <p>تحفظ المجلة في متصفحك فقط (التخزين المحلي) اختيارك للوضع الفاتح أو الداكن، والمقالات التي تحفظها، وحجم الخط. لا تُرسل هذه البيانات إلى أي خادم، ويمكنك حذفها بمسح بيانات الموقع من متصفحك.</p>
    <h2>إحصاءات الزيارات</h2>
    <p>نستخدم <a href="https://www.goatcounter.com" rel="noopener">GoatCounter</a> لإحصاء الزيارات إحصاءً عاماً (الصفحات المزورة، المصدر المحيل، نوع المتصفح والجهاز، الدولة). لا يستخدم ملفات تعريف الارتباط ولا يتتبّعك بين المواقع، ولا يحفظ عنوان IP الكامل. راجع <a href="https://www.goatcounter.com/help/privacy" rel="noopener">سياسة GoatCounter</a>.</p>
    {FLAGS.newsletter && <><h2>النشرة البريدية</h2><p>إذا اشتركت في النشرة يُحفظ بريدك لدى خدمة <a href="https://buttondown.com" rel="noopener">Buttondown</a> لإرسال المقالات الجديدة فقط، ويمكنك إلغاء الاشتراك من رابط في أسفل كل رسالة. راجع <a href="https://buttondown.com/legal/privacy" rel="noopener">سياسة Buttondown</a>.</p></>}
    {FLAGS.accounts && <><h2>الحسابات والتعليقات</h2><p>يمكنك إنشاء حساب ببريد وكلمة مرور (أو Google إن فُعِّل) للتعليق وتلقّي إشعارات المقالات الجديدة. تُدار الحسابات والتعليقات عبر <a href="https://supabase.com" rel="noopener">Supabase</a> وفق <a href="https://supabase.com/privacy" rel="noopener">سياستها</a>. نحتفظ باسم العرض والبريد وكلمة مرور مشفّرة (أو معرّف Google) والتعليقات وتفضيل الإشعارات. يمكنك طلب حذف الحساب عبر <Link to="contact/">التواصل</Link>.</p></>}
    {FLAGS.contact && <><h2>نموذج التواصل</h2><p>يُرسل ما تكتبه في نموذج التواصل (الاسم والبريد والرسالة) عبر خدمة <a href="https://web3forms.com" rel="noopener">Web3Forms</a> إلى بريد المجلة، ويُستخدم للرد عليك فقط.</p></>}
    <h2>الاستضافة والخطوط</h2>
    <p>يُستضاف الموقع على GitHub Pages، وقد يسجّل مزوّد الاستضافة بيانات تقنية عامة عن الطلبات. الخطوط محفوظة على خادم الموقع نفسه.</p>
    <h2>روابط خارجية</h2>
    <p>تحتوي المجلة روابط إلى متجر الكود وحساباتنا على إنستغرام وتيك توك ومواقع أخرى، ولكلٍّ منها سياسة خصوصية خاصة.</p>
    <h2>التواصل</h2><p>لأي سؤال عن هذه السياسة: <Link to="contact/">تواصل معنا</Link>.</p>
  </Wrap>;
}

export function Terms() {
  return <Wrap k="مجلة الكود الرقمية" t="شروط الاستخدام" d={`آخر تحديث: ${UPDATED}`}>
    <p>باستخدامك مجلة الكود الرقمية فإنك توافق على الشروط الآتية.</p>
    <h2>المحتوى</h2>
    <p>المقالات مستخرجة من كتب الرحّالة والمصادر التاريخية مع ذكر الكتاب والصفحة. يُرحَّب بالاقتباس القصير مع ذكر المصدر ورابط المقال. لإعادة النشر الكامل يُرجى <Link to="contact/">التواصل معنا</Link> أولاً.</p>
    <h2>الصور</h2>
    <p>لكل صورة مصدرها وترخيصها المذكور تحتها وفي <Link to="credits/">صفحة الحقوق</Link>، ويخضع استخدامها لذلك الترخيص.</p>
    <h2>الدقة</h2>
    <p>نحرص على نقل النصوص كما وردت في مصادرها. إن وجدت خطأً فنرجو إبلاغنا لتصويبه.</p>
    {FLAGS.accounts && <><h2>التعليقات</h2><p>يتحمّل كاتب التعليق مسؤولية ما يكتبه، ويحقّ لناشر المجلة إخفاء التعليقات المسيئة أو الخارجة عن الموضوع أو حذفها.</p></>}
    <h2>الروابط الخارجية</h2>
    <p>الروابط إلى مواقع أخرى للإفادة، والمجلة غير مسؤولة عن محتواها.</p>
    <h2>التعديل</h2><p>قد تُحدَّث هذه الشروط، ويظهر تاريخ آخر تحديث أعلى الصفحة.</p>
  </Wrap>;
}
