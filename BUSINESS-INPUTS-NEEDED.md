# Business inputs needed

Everything on this list blocked a specific piece of implementation work. Nothing here was invented or guessed — each item is either genuinely missing, or exists but needs a business-side decision before it can be published. Supplying any one item unblocks exactly the work named under it.

**Updated 17 September 2026** (SEO-audit follow-up pass): items 2, 3 and 4 were re-checked against this pass's task list (Brand Registry, product research, 3PL) — no new business confirmation was supplied during this pass, so the decisions below are unchanged from 14 September. A new item 11 (old-URL case studies) and item 12 (image licensing) were added.

## 1. Legal facts for /privacy and /terms

Both pages currently show a short, honest "not yet published" notice with no policy text (see `src/components/site/LegalPlaceholder.tsx`). The itemized checklist that used to be shown publicly has been removed from the page — it's recorded here instead.

**To publish /privacy**, Ecomtik needs to confirm:
- The real legal entity name, registration and registered address that operates ecomtik.com
- What personal data is collected (enquiry form, analytics, cookies) and why
- Which third parties or processors receive data (e.g. the email/notification provider, analytics)
- Data retention periods and the process for a user to request deletion or correction
- A real contact route for privacy questions (email or postal address)
- Applicable law and any regulator/supervisory authority details

**To publish /terms**, Ecomtik needs to confirm:
- The real legal entity name and jurisdiction the website/service terms are issued under
- Actual service engagement terms: scope, payment, cancellation and liability positions
- Third-party charges and pass-through costs (e.g. formation, advertising spend) and how they're billed
- Intellectual property and ownership terms for delivered creative/brand assets
- Dispute resolution process and governing law
- A real contact route for legal questions

Do not claim legal review or compliance certification once these are published — that requires an actual qualified reviewer, not an editorial pass.

## 2. Publication confirmation for Amazon wholesale and Brand Registry support

`src/content/records.json` already has complete, well-structured pages written for both:
- **S06 — Amazon wholesale** (`/services/amazon-wholesale`)
- **S07 — Amazon Brand Registry assistance** (`/services/brand-registry`)

Both are flagged in their own metadata as `"sourceStatus": "Legacy offer; reconfirm delivery scope"`. They are excluded from the live site via one line in `src/content/registry.ts` (`INACTIVE_IDS`). **No content needs to be written** — this is a business decision, not a content gap:

- Confirm Ecomtik currently delivers wholesale-sourcing support and Brand Registry application assistance at the scope already described in those two records (read them before deciding — they're accurate as drafted, just unconfirmed).
- If confirmed, remove `"S06"` and/or `"S07"` from the `INACTIVE_IDS` set in `registry.ts` and redeploy — that alone brings the pages live, adds them to the sitemap, and makes the header dropdown and `/services` hub list them automatically (both already filter on published status).
- For Brand Registry specifically: any published version must keep saying Ecomtik does not control or guarantee Amazon's enrollment decision — the current draft already does this correctly.

## 3. Product research / product hunting as a standalone service

No content record exists for this at all — not drafted, not gated, genuinely absent. If Ecomtik wants a dedicated `/services/...` page for product research/hunting (distinct from the existing sourcing and private-label pages), supply:
- What the engagement actually includes (market/demand review method, competitor analysis, validation criteria)
- What's excluded (e.g. is this separate from sourcing, or a precursor stage to it?)
- What a client needs to provide to begin
- Pricing/engagement structure, if it differs from the general engagement page

Once supplied, this follows the same content-record pattern as every other service page (see any `S0x` record in `records.json` for the shape).

## 4. UAE / Saudi Arabia 3PL and fulfilment

No content record exists for this at all. If Ecomtik operates or coordinates 3PL/fulfilment services, supply:
- Whether facilities are Ecomtik-operated or coordinated through a third-party partner (the two must be described differently — one is a direct operational claim, the other a coordination service)
- Actual location(s) — city/emirate level is fine, exact warehouse addresses are not required for the page copy
- What's actually handled: receiving, storage, prep/labelling, dispatch, returns processing, inventory visibility — list only what's genuinely offered
- Any real capacity, service-level or turnaround commitments Ecomtik is willing to stand behind publicly (if none, the page will describe the process without inventing numbers)

Until supplied, no 3PL page exists — not even as an unpublished draft, since there are currently zero source facts to draft from.

## 5. About page — team and named credentials

The About page (`/about`) is otherwise complete and accurate; it now includes the confirmed HQ address (Al Kaabi Building, Al Karama, Dubai, UAE) for consistency with the Contact page. It has no named team members, roles or individual credentials, because none were supplied. If Ecomtik wants people named on the site, supply names, roles and a short accurate bio for each; nothing here was fabricated to fill the gap.

## 6. Blog articles — named author, if wanted instead of the editorial-team byline

All 12 articles now show a byline ("Ecomtik Editorial Team") and a publication date (10 September 2026 — the actual, verifiable date this content first went live in production, taken from git history, not invented). This was an explicit decision the user approved during this pass over leaving both blocked. If Ecomtik later wants a named individual author/reviewer instead, supply the name, role and (if relevant) credentials, and update the `author` field per record in `records.json`.

## 7. Case studies, testimonials, client examples

None exist on the site currently (verified — no testimonial/case-study components anywhere in the codebase), so there was nothing fake to remove. If Ecomtik has real client work it has permission to publish, supply the project details, results and explicit publication permission. Any illustrative example that isn't a real case must stay labelled as illustrative, per the standing instruction — this is already how the existing service-page examples are written (e.g. the ACOS math example in the PPC article is explicitly hypothetical).

## 8. Search Console verification / analytics IDs

Not touched this pass, and nothing was invented. GA4 is already configured (`G-C33SDCHS6X`, see `src/routes/__root.tsx`) — that's pre-existing and unchanged. A Search Console verification token was never requested or supplied; if Ecomtik wants Search Console access set up, supply the verification method (HTML file, meta tag or DNS) and the token itself.

## 9. Contact form live delivery

`GMAIL_USER` / `GMAIL_APP_PASSWORD` (+ optionally `CONTACT_NOTIFY_EMAIL`) must be set as Netlify environment variables for the contact form to actually send mail — see `.env.example`. Whether these are currently set in the live Netlify site's environment was not checked in this pass (no Netlify dashboard access) — see `IMPLEMENTATION-STATUS.md`'s deployment section for the exact remaining check.

## 10. Netlify deployment verification

This session has no Netlify CLI/API/dashboard access, so the push to `origin/main` could not be confirmed as actually deployed to ecomtik.com. See `IMPLEMENTATION-STATUS.md` for the exact steps to confirm.

## 11. Old `/case-studies` URL — confirmed no restore, by design

The old `/case-studies` page (last present in the pre-rebuild single-page site, commit history around `932f2b5`) listed four client brands (Aurelia Beauty, Halcyon Home, Kayan Wellness, Verdant Foods) with specific revenue, TACOS and Buy Box figures. None of this could be verified — no client names, permissions or figures exist anywhere else in the repo or in any supplied business fact. Restoring it would mean publishing fabricated case studies, which is explicitly out of scope. `/case-studies` is intentionally left as a genuine 404 (verified: `curl -I https://ecomtik.com/case-studies` → 404, not a soft-404). If Ecomtik has real, permissioned client results, supply brand name (with permission to publish), the actual figures and their source, and a case-studies page can be built the same way the rest of the site's content is — evidence first, copy second.

## 12. Blog and service-page images — licensing confirmation

This pass added an `image`/`imageAlt` field to every blog article's content record and wired it into visible article headers, Open Graph tags and `BlogPosting` JSON-LD. Every image used is one of the 13 pre-existing files already live in `public/images/` (the same set used across the homepage's service teasers) — no new or stock imagery was introduced, and none were AI-generated for this pass. Confirm Ecomtik holds the rights to these 13 files for this reuse (they were already in the repo before this pass, so this is a confirmation request, not a new requirement); if any file's licence doesn't cover this additional use, say which one and it can be swapped or removed from articles specifically.
