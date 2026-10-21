import { useState } from 'react';
import { PageHero } from './Listing';
import { FLAGS, INT } from '../integrations';
import { useAuth } from '../auth';
import { Link, navigate } from '../router';

export default function Account() {
  const { ready, user, profile, isPublisher, signIn, signUp, signInGoogle, signOut, updateProfile } = useAuth();
  const [mode, setMode] = useState<'in' | 'up'>('in');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  if (!FLAGS.accounts) return <main id="main"><PageHero kicker="الحساب" title="الحسابات قيد الإعداد" desc="ستُفعَّل قريباً للتعليق وتلقّي إشعارات المقالات الجديدة." /><div className="mx-auto max-w-[640px] px-4 pt-8 sm:px-6"><Link to="" className="ink-btn">العودة إلى الرئيسية</Link></div></main>;
  if (!ready) return <main id="main" className="min-h-[50vh]" aria-busy="true" />;

  if (user && profile) {
    return <main id="main"><PageHero kicker="حسابك" title={profile.display_name} desc={user.email || ''} />
      <div className="mx-auto grid max-w-[640px] gap-6 px-4 pt-8 sm:px-6">
        <form className="grid gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5" onSubmit={async e => { e.preventDefault(); setBusy(true); setMsg((await updateProfile({ display_name: name || profile.display_name, notify_site: (e.currentTarget.elements.namedItem('notify') as HTMLInputElement).checked })) || 'حُفظت التغييرات.'); setBusy(false); }}>
          <div><label htmlFor="dn" className="mb-1 block font-semibold">اسم العرض</label><input id="dn" className="field-input" defaultValue={profile.display_name} onChange={e => setName(e.target.value)} maxLength={60} required /></div>
          <label className="flex items-center gap-2"><input type="checkbox" name="notify" defaultChecked={profile.notify_site} /> إشعارات المقالات الجديدة داخل الموقع</label>
          <button className="ink-btn justify-self-start" disabled={busy}>حفظ</button>
          <p aria-live="polite" className="text-sm">{msg}</p>
        </form>
        {isPublisher && <Link to="studio/" className="store-btn justify-self-start">لوحة الناشر</Link>}
        <button type="button" className="ghost-btn justify-self-start" onClick={async () => { await signOut(); navigate('account/'); }}>تسجيل الخروج</button>
      </div></main>;
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true); setMsg('');
    const err = mode === 'in' ? await signIn(email, pass) : await signUp(email, pass, name || email.split('@')[0]);
    setBusy(false);
    setMsg(err || (mode === 'up' ? 'أرسلنا رسالة تحقق إلى بريدك؛ افتحها ثم سجّل الدخول.' : ''));
  };

  return <main id="main"><PageHero kicker="الحساب" title={mode === 'in' ? 'تسجيل الدخول' : 'إنشاء حساب'} desc="للتعليق على المقالات وتلقّي إشعارات المقالات الجديدة." />
    <div className="mx-auto max-w-[440px] px-4 pt-8 sm:px-6">
      <form onSubmit={submit} className="grid gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
        {mode === 'up' && <div><label htmlFor="n" className="mb-1 block font-semibold">الاسم</label><input id="n" className="field-input" value={name} onChange={e => setName(e.target.value)} maxLength={60} required /></div>}
        <div><label htmlFor="e" className="mb-1 block font-semibold">البريد</label><input id="e" type="email" required dir="ltr" className="field-input text-left" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" /></div>
        <div><label htmlFor="p" className="mb-1 block font-semibold">كلمة المرور</label><input id="p" type="password" required minLength={6} dir="ltr" className="field-input text-left" value={pass} onChange={e => setPass(e.target.value)} autoComplete={mode === 'in' ? 'current-password' : 'new-password'} /></div>
        <button className="ink-btn" disabled={busy}>{busy ? '…' : mode === 'in' ? 'دخول' : 'إنشاء حساب'}</button>
        {INT.accounts.google && <button type="button" className="ghost-btn" onClick={async () => setMsg((await signInGoogle()) || '')}>المتابعة مع Google</button>}
        <p aria-live="polite" className="text-sm text-[var(--text-muted)]">{msg}</p>
      </form>
      <p className="mt-4 text-center text-sm"><button type="button" className="font-bold text-[var(--accent)] underline" onClick={() => { setMode(m => m === 'in' ? 'up' : 'in'); setMsg(''); }}>{mode === 'in' ? 'ليس لديك حساب؟ سجّل الآن' : 'لديك حساب؟ سجّل الدخول'}</button></p>
      <p className="mt-2 text-center text-xs text-[var(--text-muted)]"><Link to="privacy/">الخصوصية</Link></p>
    </div></main>;
}
