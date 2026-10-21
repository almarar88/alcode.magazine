// Loads site.config.json and lets build-time env vars override it (so secrets-free values can live in GitHub repo variables).
import fs from 'node:fs'; import path from 'node:path';
const cfg = JSON.parse(fs.readFileSync(path.resolve(import.meta.dirname, '../site.config.json'), 'utf8'));
const e = process.env, pick = (v, d) => (v !== undefined && v !== '' ? v : d);
cfg.cms.oauthBaseUrl = pick(e.CMS_OAUTH_BASE_URL, cfg.cms.oauthBaseUrl).replace(/\/$/, '');
cfg.newsletter.username = pick(e.BUTTONDOWN_USERNAME, cfg.newsletter.username);
cfg.comments.enabled = pick(e.GISCUS_ENABLED, String(cfg.comments.enabled)) === 'true';
cfg.contact.accessKey = pick(e.WEB3FORMS_ACCESS_KEY, cfg.contact.accessKey);
cfg.analytics.code = pick(e.GOATCOUNTER_CODE, cfg.analytics.code);
cfg.verification.google = pick(e.GOOGLE_SITE_VERIFICATION, cfg.verification.google);
cfg.verification.bing = pick(e.BING_SITE_VERIFICATION, cfg.verification.bing);
delete cfg._comment;
export const INT = cfg;
export const FLAGS = { cms: !!cfg.cms.oauthBaseUrl, newsletter: !!cfg.newsletter.username, comments: cfg.comments.enabled && !!cfg.comments.repoId && !!cfg.comments.categoryId, contact: !!cfg.contact.accessKey, analytics: !!cfg.analytics.code };
