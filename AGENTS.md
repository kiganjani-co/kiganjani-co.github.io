# kiganjani-co.github.io

Astro 5 static marketing site for Kiganjani Co. (kiganjani-co.tech) — solo digital agency in Dar es Salaam. Astro components + React islands + Tailwind CSS v4. No dev server assumption: start one with `pnpm dev` if you need a preview.

## Commands

- `pnpm dev` — local preview (Astro dev server)
- `pnpm build` — static build to `docs/` (required verification after any change)
- `pnpm format` — format with oxfmt

Package manager is **pnpm**. No test suite; verification is `pnpm build` plus assertions against `docs/` output.

## Project Structure

- `src/pages/` — routes: `index.astro`, `blog.astro`, `privacy.astro`, `terms.astro`, `404.astro` (all render through `src/layouts/Layout.astro`)
- `src/layouts/Layout.astro` — head/meta, OG/Twitter, canonical, JSON-LD schema, GA, dark-mode bootstrap; renders `MobileStickyCTA` + `CookieNotice` in body
- `src/components/*.astro` — static sections (Nav, Hero, Services, Work, Pricing, Contact, Footer, Faq, …)
- `src/components/*.tsx` — React islands: `Process` (`client:visible`), `ContactForm` (`client:visible`, fetch-POSTs to Jotform — no iframe), `CookieNotice` (`client:load`), `DarkModeToggle` (`client:load`)
- `src/content/projects.json` — case-study data for the Work section (anonymized client examples)
- `src/styles/global.css` — Tailwind v4 import, theme tokens (light + `:root.dark` overrides), section/component classes. Static styles live here — do not add `style=` attributes for static values
- `src/assets/images/` — local images and SVG icons (tech icons render monochrome via CSS filter that inverts with the theme)
- `public/` — `robots.txt`, `llms.txt`, `logo.png`, `og-image.png`, favicons (copied to output root on build)

## Conventions & Constraints

- **No commits/pushes** without explicit instruction. Work stays local; `docs/` build output is gitignored (except the tracked `docs/index.html` legacy).
- **Build config:** `astro.config.mjs` sets `site: https://kiganjani-co.tech`, `output: static`, `outDir: ./docs`; `vercel.json` builds with `pnpm build` and serves `docs/`.
- **SEO defaults:** homepage meta description ~140 chars in Layout props; `sameAs` covers Instagram/Facebook/LinkedIn/YouTube; JSON-LD `email` field is intentional (keep it); visible email addresses must stay obfuscated (entity text + runtime-assembled `mailto:`), never plain.
- **Islands:** prefer `client:visible` for below-fold React; `client:load` only for above-fold-critical UI.
- **Styling:** Tailwind utilities in markup; static CSS in `global.css`; scroll/animation-driven values may stay inline (Process island).
- **Contact flows:** Website tier → external payment link (same tab); quote button → external scheduling link (new tab); form → third-party `fetch` endpoint (no iframe); chat links site-wide plus floating mobile button. Do not paste phone numbers, endpoint URLs, or IDs into docs or chat — read them from source when needed.
