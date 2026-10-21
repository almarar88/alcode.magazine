// Public integration values only (site.config.json; env vars override at build).
import fs from 'node:fs'; import path from 'node:path';
const cfg = JSON.parse(fs.readFileSync(path.resolve(import.meta.dirname, '../site.config.json'), 'utf8'));
const e = process.env, pick = (v, d) => (v !== undefined && v !== '' ? v : d);
cfg.analytics.code = pick(e.GOATCOUNTER_CODE, cfg.analytics.code);
cfg.verification.google = pick(e.GOOGLE_SITE_VERIFICATION, cfg.verification.google);
cfg.verification.bing = pick(e.BING_SITE_VERIFICATION, cfg.verification.bing);
export const INT = cfg;
export const FLAGS = { analytics: !!cfg.analytics.code };
