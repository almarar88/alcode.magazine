// Loads site.config.json; build-time env vars (GitHub repo Variables in the deploy Action) override it. Public values only.
import fs from 'node:fs'; import path from 'node:path';
const cfg = JSON.parse(fs.readFileSync(path.resolve(import.meta.dirname, '../site.config.json'), 'utf8'));
const e = process.env, pick = (v, d) => (v !== undefined && v !== '' ? v : d);
cfg.accounts.url = pick(e.SUPABASE_URL, cfg.accounts.url).replace(/\/$/, '');
cfg.accounts.anonKey = pick(e.SUPABASE_ANON_KEY, cfg.accounts.anonKey);
cfg.accounts.google = pick(e.SUPABASE_GOOGLE, String(cfg.accounts.google)) === 'true';
cfg.newsletter.username = pick(e.BUTTONDOWN_USERNAME, cfg.newsletter.username);
cfg.contact.accessKey = pick(e.WEB3FORMS_ACCESS_KEY, cfg.contact.accessKey);
cfg.analytics.code = pick(e.GOATCOUNTER_CODE, cfg.analytics.code);
cfg.verification.google = pick(e.GOOGLE_SITE_VERIFICATION, cfg.verification.google);
cfg.verification.bing = pick(e.BING_SITE_VERIFICATION, cfg.verification.bing);
delete cfg._comment;
export const INT = cfg;
export const FLAGS = { accounts: !!(cfg.accounts.url && cfg.accounts.anonKey), newsletter: !!cfg.newsletter.username, contact: !!cfg.contact.accessKey, analytics: !!cfg.analytics.code };
