# ClaimSense Pricing page — design notes

> Route: `/pricing/` — top-level nav item.
> Status: `needs-functional-spec` | `approval_required: prices, scope, SLAs, usage limits, customer commitments`
> Primary conversion: **Request a Custom Quote**

---

## Visual system

Consistent with the rest of the site: Tosh A + Roboto, Bull Orange `#FF5539` / Dream-in-Blue `#002870`, warm `#FFF7F5` + white sections, dark navy `#0a1b3d` for the quote form. Pricing link marked active in the header; Product dropdown present but no sub-page active.

## Layout decisions

**Hero** — centered, eyebrow "Transparent Pricing", H1 + all-inclusive intro, verbatim.

**Choose Your Package** — two pricing cards: Analytical Agent (Quick Start, secondary/outline CTA) and AI-native Platform (Full Scale, highlighted with orange border + "Full Scale" ribbon, filled CTA). Each shows price, positioning and the attributes drawn from the comparison matrix. Per-package CTA "Get Started" verbatim.

**Full comparison table** — the complete 8-row attribute matrix (Positioning → Price) rendered as a zebra-striped table below the cards, so quick-scanners use the cards and detail-seekers use the table. All values verbatim.

**"What's included / what's added" placeholders** — rendered as clearly-marked dashed placeholder cards. The source states these headings appear publicly but the detailed item lists are NOT in the text extraction — flagged as content gap, not invented.

**Optional Add-ons** — two cards (Need More Users? / Advanced Implementation) with verbatim copy and CTAs.

**Let's Talk Pricing** — dark navy section with the Pricing request form (verbatim fields from `forms.md`), submit "Request a Custom Quote" (the page's primary conversion).

**Secondary conversion** — two cards: "Read our FAQ" and "Not sure which package…" with Book a Demo · Talk to Sales.

## Section order

Hero → Choose Your Package (cards + table + inclusion placeholders) → Optional Add-ons → Let's Talk Pricing (form) → Secondary conversion → Footer. Content file order preserved.

---

## NEEDS-APPROVAL items

1. **All prices** — €3/claim, €5/claim — plus currency, VAT treatment, validity, intended market/legal language.
2. **Package scope** — setup times (1-2 weeks / Full integration), SLA (Basic / 24/7 guaranteed), user limits (10 / 20), data integration & real-time flags, "Chat with cases" descriptions.
3. **"No hidden fees, no surprise bills" / all-inclusive** claim.
4. **Detailed inclusion lists** — "Analytical Agent — what's included" and "Full AI-native Platform — what's added" — content not available; must be retrieved from source/product owner before publish.
5. **Customer commitments** implied by package attributes.

## FUNCTIONAL-SPEC NEEDED items (page is `needs-functional-spec`)

1. **Pricing request form** — CRM/endpoint, validation, required fields, success/error & duplicate handling, consent + privacy URL, anti-spam, analytics/UTM, notification + SLA. Fields verbatim from `forms.md`.
2. **CTA targets & flows** — define for: Get Started (×2), Contact us for pricing, Talk to our team, Book a Demo, Talk to Sales, Read our FAQ. All currently scroll to the quote form as a safe default.
3. **Package feature matrix** — confirm the canonical matrix before publish.

## Content gaps

- Detailed per-package inclusion lists not in the public extraction (placeholder cards used, flagged).
- No imagery specified; typographic cards + table only.
- "Full AI-native Platform" (inclusion heading) vs "AI-native Platform" (card title) vs "Full AI-native Claim Platform" (form option) — naming inconsistency carried verbatim from source; flag for Product to reconcile.
