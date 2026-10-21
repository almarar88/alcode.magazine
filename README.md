# مجلة الكود الرقمية · Alcode Digital Magazine

Arabic-first (RTL) article magazine for Alcode (alcode.ae) — **demo build, noindex**. A separate, standalone site (no connection to any other project).

## Stack
Vite + React 19 + Tailwind v4, Markdown/MDX-style content compiled at build time, static pages per route.

## Content
Articles live in `content/*.md` with frontmatter:

```yaml
---
title: "عنوان المقال"
author: "اسم الكاتب"
category: "التاريخ"          # one of content/categories.json (history, heritage, manuscripts-travelers, poetry, bookstore-news, guide)
date: "2026-10-21"
cover: "photos/mutra-1813.webp"   # path under public/ or a full URL
excerpt: "ملخص قصير"
tags: ["وسم", "دبي"]
sample: false               # true shows the «مقال تجريبي» badge
draft: false                # true = skipped by the build
---
```

Inside the body you can use Markdown plus:
`<callout type="note|tip|warning|danger" title="…">`, `<quote by="…" source="…">`, `<steps title="…">` (numbered list inside; **bold** = current step, *italic* = next) — leave a blank line after the opening tag and before the closing tag — and ```` ```mermaid ```` fences (rendered with Pele).

`npm run build` → `scripts/content.mjs` (validates frontmatter, reading time, related articles, tags, `public/rss.xml`, `public/sitemap.xml`, `robots.txt`) → `vite build` → `scripts/pages.mjs` (one `index.html` per route with title/description/OG/canonical; `404.html`). Set `SITE_ORIGIN=https://your-domain` so RSS/sitemap/OG links are absolute.

## How a new article goes live
1. Open **«اكتب مقالاً»** (`/write/`). Fill in the metadata, write with live preview. Drafts auto-save in your browser (localStorage) only.
2. Click **«تصدير ملف md»** — you get `your-slug.md`.
3. Put the file in `content/` (any image under `public/photos/` or a URL).
4. Commit and push. Your host's build runs `npm ci && npm run build` and publishes `dist/`.

The publisher dashboard (`/dashboard/`) is a **front-end demo**: articles list, local drafts, simple local stats, browser-only media. There is no login and nothing is sent to a server.

## Future: one-click publishing (not set up)
Add a git-based CMS such as **Sveltia CMS** or **Decap CMS**: an `admin/index.html` + `admin/config.yml` describing the `content/` folder collection with the same fields as the frontmatter above, and a GitHub OAuth backend (e.g. a small Cloudflare Worker). Editors then log in at `/admin/` and each "Publish" commits the `.md` to the repo, which triggers the normal build. No login has been configured in this demo.

## Images
Every historical image is downloaded locally to `public/photos/` from Wikimedia Commons with its licence (public domain / CC0 / no known restrictions), source URL, author, date and the source's own caption in `content/photos.json` (written by `scripts/fetch_photos.py`). They are listed on `/credits/`. No AI-generated or invented artwork is used; the only drawn element is a simple eight-point-star UI ornament.

## Vendored components (MIT unless noted) — source copied, restyled via CSS tokens
- **Arc UI** (uiarc.dev) — `src/registry/components/*`: ThemeSwitch, SearchField, TagInput, InViewTitle (word variant, no blur), Button.
- **easyui** (easyui.site) — `src/vendor/easyui/ui`: SpotlightCard, MagneticButton, AnimatedTabs (verbatim @ d5f660f).
- **mdxcn** (mdxcn.dev) — `src/registry/default`: Callout, Steps, Quote (+ graph-frame).
- **gauge-ui** (gauge-ui.dev) — `src/components/gauge`: reading-progress gauge, dashboard goal gauge.
- **audiocn** (audiocn.dev) — `src/components/ui/knob.tsx`: reader font-size knob.
- **Pele** (pele.run) — Mermaid diagrams in articles.
- **Lucide** icons (ISC). Licences in `licenses/`.

## Fonts (self-hosted, SIL OFL) — `public/fonts`
Noto Kufi Arabic (headings), IBM Plex Sans Arabic (body/UI), Aref Ruqaa (display accent), Amiri (quotes).

## Dev / preview
`npm run dev` · `npm run build` · `scripts/preview.sh` (temporary Cloudflare quick-tunnel preview). Verification scripts are in `tools-verify/` (overflow + console, axe contrast, functional, Lighthouse).

## الشعار (Logo)
- Original file: `public/brand/logo-original.png`. Run `python3 scripts/logo.py <png>` (needs potracer) to regenerate everything:
  - the SVG path in `src/app/logoPath.ts`
  - `public/brand/logo-{ink,gold,light}.svg` and `logo-transparent.png`
  - `public/favicon.svg`
- `LogoMark` / `StarOrnament` in `src/app/art.tsx` draw it with `currentColor`. The colour comes from the `--logo` variable (#8a5a14 in light mode, #f3e9d2 in dark mode).
