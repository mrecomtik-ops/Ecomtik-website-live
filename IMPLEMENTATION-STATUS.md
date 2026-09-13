# Ecomtik implementation status

This file starts here — it did not exist before this pass. For everything built before this (the content registry, dynamic routing, the admin panel/blog CMS at `/admin`), see the commit history; commit messages there are detailed.

## Sept 13 2026 SEO audit pass

Source spec: `Ecomtik-Claude-Complete-Website-SEO-Update.md`, a fresh direct-site audit (17 findings, A01–A17) plus the same 42 content records already in `src/content/records.json` (only one, **B07**, had an actual content change — its CTA link moved from the dead `/services/brand-registry` to `/contact`).

This same spec and fix set was first applied in a sibling repo, `mrecomtik-ops/Ecomtik` (built against a Cloudflare Workers target), before it was discovered that **this** repo (`Ecomtik-website-live`) is the one that actually deploys, via Netlify. The fixes below were reapplied here directly, onto this repo's own already-independently-ported content-registry system (built in a separate earlier session — see commit `7d1ecf5` and later) — not copied wholesale, so the admin panel and blog-store work from that session are untouched.

**Fixed:**
- Removed the last two live dead links to the inactive `/services/amazon-wholesale` and `/services/brand-registry` service pages — they were in the `/services` hub's body copy (`src/content/records.json`, the `services` record), not just the card grid. Also picked up B07's own dead link/CTA fix.
- Added sitewide `og:image` (`hero-amazon-growth.jpg`) and `og:url` (`canonicalOnPublication`) to `buildRecordHead()` in `src/content/head.ts` — covers every registry-driven route in one place.
- Homepage (`src/routes/index.tsx`): added `rel=canonical`, the same `og:image`/`og:url` pair, and retitled to "Amazon Growth Agency & Ecommerce Services | Ecomtik".
- `/services` hub's `FinalCTA` now links to `/pricing` ("See pricing & engagement options") instead of back to itself.
- Contact form's service `<select>` (`src/components/site/Contact.tsx`) now submits the stable content ID (e.g. `S02`) with a concise label instead of the full sentence-style page `h1`. `src/lib/contact-server-fn.ts` resolves the ID back to a readable name (via `getRecordById`) when composing the notification email, so the email stays human-readable. This repo's own nodemailer-based transport (already built by the earlier session) was extended with this resolution step, not replaced.
- Added `BreadcrumbList` JSON-LD to `src/components/site/ArticleTemplate.tsx` (Home → Blog → article). Visible breadcrumbs already existed via `PageHero`.

**Still blocked on business/data input, not faked:**
- Real author/reviewer names and publication dates for the 12 blog articles (needed before `BlogPosting` schema can render — the gate is already correctly in place, waiting on real facts).
- Real reporting samples/case evidence for the account-management, PPC, listing-optimization and UAE/KSA pages.
- `GMAIL_USER` / `GMAIL_APP_PASSWORD` (+ optional `CONTACT_NOTIFY_EMAIL`) as Netlify environment variables, to confirm actual enquiry delivery.
- Search Console / Keyword Planner access, before claiming any search volume, difficulty or ranking baseline.

**Validation:** `npx tsc --noEmit` clean; `npm run build` (full `prebuild` → `generate-sitemap` → `vite build` → Netlify function bundle) succeeds, including the admin/blog-store bundles. Local `vite dev` + `curl`: homepage shows the new canonical/title; `/services` no longer links to the two inactive service paths and now links to `/pricing`; `/services/amazon-wholesale` still correctly 404s; `/admin/login` still loads (200); `/contact`'s service dropdown renders ID-valued, concisely-labeled options.
