// Site accounts (Supabase Auth). Everything behind FLAGS.accounts: when unset, no widgets render.
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Session, SupabaseClient, User } from '@supabase/supabase-js';
import { FLAGS, INT } from './integrations';

export type Profile = { id: string; display_name: string; role: 'reader' | 'publisher'; notify_site: boolean; last_seen_feed: string };
export type Comment = { id: number; article_slug: string; user_id: string; author_name: string; body: string; status: 'visible' | 'hidden'; created_at: string };
export type FeedItem = { id: number; slug: string; title: string; excerpt: string; published_at: string };

type Ctx = {
  ready: boolean; sb: SupabaseClient | null; session: Session | null; user: User | null; profile: Profile | null;
  isPublisher: boolean; refreshProfile: () => Promise<void>;
  signUp: (email: string, password: string, displayName: string) => Promise<string | null>;
  signIn: (email: string, password: string) => Promise<string | null>;
  signInGoogle: () => Promise<string | null>; signOut: () => Promise<void>;
  updateProfile: (p: Partial<Pick<Profile, 'display_name' | 'notify_site' | 'last_seen_feed'>>) => Promise<string | null>;
  publish: (body: unknown) => Promise<{ ok?: boolean; error?: string; detail?: string; sha?: string }>;
};

const AuthCtx = createContext<Ctx | null>(null);
const errAr: Record<string, string> = {
  'Invalid login credentials': 'البريد أو كلمة المرور غير صحيحة.',
  'Email not confirmed': 'أكّد بريدك أولاً من رسالة التحقق.',
  'User already registered': 'هذا البريد مسجّل مسبقاً؛ جرّب تسجيل الدخول.',
  'Password should be at least 6 characters.': 'كلمة المرور ٦ أحرف على الأقل.',
  'Signup requires a valid password': 'أدخل كلمة مرور صالحة.',
  'Unable to validate email address: invalid format': 'صيغة البريد غير صالحة.',
  rate_limited: 'وصلت إلى حدّ التعليقات؛ حاول بعد قليل.',
};
export const arErr = (e: unknown) => { const m = (e as any)?.message || String(e); return errAr[m] || m; };

export function AuthProvider({ children }: { children: ReactNode }) {
  // Created in the browser only (never during prerender, where it would keep Node alive).
  const [sb, setSb] = useState<SupabaseClient | null>(null);
  useEffect(() => { if (FLAGS.accounts) import('@supabase/supabase-js').then(m => setSb(m.createClient(INT.accounts.url, INT.accounts.anonKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }))); }, []);
  const [ready, setReady] = useState(!FLAGS.accounts);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  const loadProfile = async (uid?: string) => {
    if (!sb || !uid) { setProfile(null); return; }
    const { data } = await sb.from('profiles').select('id,display_name,role,notify_site,last_seen_feed').eq('id', uid).maybeSingle();
    setProfile((data as Profile) || null);
  };

  useEffect(() => {
    if (!sb) return;
    sb.auth.getSession().then(({ data }) => { setSession(data.session); loadProfile(data.session?.user.id).finally(() => setReady(true)); });
    const { data: sub } = sb.auth.onAuthStateChange((_e, s) => { setSession(s); loadProfile(s?.user.id); });
    return () => sub.subscription.unsubscribe();
  }, [sb]);

  const value: Ctx = {
    ready, sb, session, user: session?.user ?? null, profile, isPublisher: profile?.role === 'publisher',
    refreshProfile: () => loadProfile(session?.user.id),
    async signUp(email, password, displayName) {
      if (!sb) return 'accounts_off';
      const { error } = await sb.auth.signUp({ email, password, options: { data: { display_name: displayName }, emailRedirectTo: location.origin + '/account/' } });
      return error ? arErr(error) : null;
    },
    async signIn(email, password) {
      if (!sb) return 'accounts_off';
      const { error } = await sb.auth.signInWithPassword({ email, password });
      return error ? arErr(error) : null;
    },
    async signInGoogle() {
      if (!sb) return 'accounts_off';
      const { error } = await sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + '/account/' } });
      return error ? arErr(error) : null;
    },
    async signOut() { await sb?.auth.signOut(); setProfile(null); },
    async updateProfile(p) {
      if (!sb || !session) return 'unauthorized';
      const { error } = await sb.from('profiles').update(p).eq('id', session.user.id);
      if (!error) await loadProfile(session.user.id);
      return error ? arErr(error) : null;
    },
    async publish(body) {
      if (!sb) return { error: 'accounts_off' };
      const { data, error } = await sb.functions.invoke('publish', { body });
      if (error) return { error: arErr(error), detail: (data as any)?.detail };
      return data as any;
    },
  };
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const c = useContext(AuthCtx);
  if (!c) throw new Error('AuthProvider missing');
  return c;
}
