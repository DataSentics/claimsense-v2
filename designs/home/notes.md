# ClaimSense Homepage — design notes

> **Deliverable note.** The implementation environment builds a single live, streaming
> Design Component (`ClaimSense Homepage.dc.html`) using **inline styles**, not separate
> Tailwind `layout.html` + static markup. Semantic HTML5 (`<header>`, `<nav>`, `<main>`-level
> sections, `<section>`, `<article>`, `<footer>`, `<form>`, `<label>`) is preserved, and every
> content/functional flag from the brief is present as an in-place HTML comment. When this is
> ported to Cursor/Tailwind, the structure and flags map 1:1.

---

## Visual system

- **Brand:** Bull design system (ClaimSense is the primary brand, Bull the enterprise endorsement).
- **Type:** Tosh A (Black/Medium/Light) for display headlines; Roboto for all body/UI text. Loaded from the copied brand assets + Google Fonts.
- **Color:** Bull Orange `#FF5539` = single primary action color (all primary CTAs, accents). Dream-in-Blue `#002870` / deeper navy `#0a1b3d` for dark "credibility" sections (master claim, outcomes, demo, footer). Warm near-white `#FFF7F5` and white alternate the light sections. Secondary palette (Sunbeam `#FFB600`, Vitality `#00B290`, blue tints) used only for data/semantic cues (After column, outcome stats, diagram legend).
- **Personality:** "Balanced — confident but enterprise-credible" per your answer. Big Tosh A headlines and confident orange, restrained chrome, generous whitespace.
- **Motion (implemented):** (1) brief first-load ClaimSense × Bull intro that fades out and is suppressed on subsequent navigation via `sessionStorage`; (2) scroll-reveal fade/rise on each section, respecting `prefers-reduced-motion`; (3) hover states on every CTA/link; FAQ accordion expand with rotating +.

## Manual Chaos → Efficiency section (revised per client reference)

- **Left-aligned editorial header:** H2 fixed at 42px Tosh A Black, hard-split "From Manual Chaos" / "to AI-Powered Efficiency"; sub-claim 22px Roboto medium `#374151`, hard-split "…ClaimSense makes" / "in your claims operation." Both left-aligned.
- **Asymmetric cards:** 40/60 split — BEFORE = 40% (white, `border-gray-200`, dark ✕), AFTER = 60% (solid `#002870`, white text + white checkmarks). Stacks below 820px.
- **CTA placement:** "See your After state" sits below the comparison, flush to the right edge of the container (= AFTER card's right edge). `rounded-lg`, Bull Orange, `→` chevron.
- **Color discipline (latest direction):** Bull Orange `#FF5539` is used ONLY for the CTA — no orange on icons/backgrounds/text. AFTER-card checkmarks are white.

## Section order

Kept the **content-file order** as you requested:
Header → Hero (+ proof points) → Product/dashboard proof → Master-claim shared-view + illustrative diagram → **Bull trust bar** → Testimonials + credibility metrics → Before/After → Why ClaimSense (Build vs Buy) → Real Outcomes → Pricing teaser → FAQ → Demo conversion (form) → Footer.

- Bull trust bar is placed **after the dashboard proof and before testimonials**, exactly per `product-and-brand-brief.md`. It is a single full-width 4-column horizontal bar (≈40 / 20 / 20 / 20) with warm Bull gradient, navy text, Bull pictograms, and vertical dividers that collapse to stacked rows on mobile.
- The master-claim visual is a **native HTML/CSS "Illustrative workflow" diagram** (not a fake screenshot): branded `#002870` infographic card with a soft-orange-tinted Master Claim box (importance), lightened-navy borders/connectors, blue specialist workstreams, white Tosh A box titles, and a distinct shared-case-file footer note. White legend labels (Master ownership / Specialist responsibility); subtle small-caps `#A4AFFB` caption top-left. No fabricated customer data; statuses are generic.
- Endorsement chrome: compact ClaimSense + "Part of Bull" lockup in the sticky header; full "ClaimSense is built by DataSentics, part of the Bull / Eviden group." line in the footer.

## Tweaks (code-level controls exposed to the editor)

- `showIntro` (boolean) — toggle the first-load brand intro.
- `showTrustBar` (boolean) — show/hide the Bull trust bar.
- `proofVisual` (enum: screenshot | placeholder) — use the real dashboard screenshot or a labelled placeholder for the hero product proof.

---

## NEEDS-APPROVAL items (content / legal / brand sign-off required)

1. **Hero proof points** — Up to 10x faster, Up to 90% automation, 100+ experts.
2. **Product dashboard** — screenshot asset, `client.claimsense.app`, Claims Processed `24,847`, AI Accuracy `96.8%`. (Old `/public/product-screenshot.png` placeholder intentionally **not** carried over.)
3. **Testimonials** — Petr Zepletal (Co-Founder, Tuito) and Marcel Beno (COO, Pillow) quotes, names, titles.
4. **Customer logos** — Tuito and Pillow (shown as labelled placeholders; no approved logo files supplied).
5. **Company descriptions** — Tuito "100+ e-commerce platforms"; Pillow "250,000+ customers".
6. **Credibility metrics** — 100+ users, 15+ years, 8 industries.
7. **French State (APE) backing** statement in the Build-vs-Buy card.
8. **Outcome metrics** — 10x, 70%, 100+, 96%.
9. **Pricing facts** — €3/claim, €5/claim, user counts (10 / 20), SLAs, 1–2 week setup.
10. **"Trusted by 25+ companies"** + DataSentics/Bull/Eviden relationship statement in the demo section.
11. **Bull trust-bar figures** — 5K+ engineers, 28 countries, 14% R&D (from brief; reconfirm before publish).
12. **Sovereignty wording** — not stated as a compliance/data-residency guarantee anywhere (per brief constraint).

## FUNCTIONAL-SPEC NEEDED items (dev handoff)

1. **Demo request form** — CRM/endpoint destination, client+server validation, required-field rules, success/error & duplicate-submission states, consent record + timestamp, anti-spam, analytics/UTM, notification recipients. Current submit only shows a placeholder confirmation.
2. **All "Book a Demo" CTAs** — currently smooth-scroll to the on-page `#demo` form. Confirm intended behavior (scroll / modal / standalone page / Calendly / prefilled lead).
3. **Watch Demo Video** — asset/provider, poster, transcript/captions, autoplay policy, modal vs inline.
4. **Nav routing** — Our Story → `/our-story/`, Business Case → `/business-case/` (interactive ROI calculator), "See Full Pricing & Packages" → `/pricing/`, "View all FAQs" → `/faq/`, footer links. In-page items (Home, Product, Pricing) scroll; cross-page items are placeholder `#`.
5. **Footer resources** — Documentation / API Reference / Case Studies / Help Center all route to `/help/` (behavior preserved per footer rebuild note); confirm future resource routing.
6. **Privacy Policy** — target the DataSentics privacy policy URL.

## Content gaps noted (not in the home Markdown)

- No approved customer logo files (Tuito/Pillow) → labelled placeholders used.
- The dashboard screenshot in the asset folder shows the **current product's purple/violet branding**, which differs from the Bull orange/navy redesign. Flagged for an updated, on-brand product screenshot — `proofVisual: placeholder` is available as a fallback.
- "Full Operational Platform" (FAQ copy) vs "AI-native Platform" / "Full AI-native Claim Platform" (pricing/forms) — naming should be reconciled by Product.
- Public terminology: brief says use "Master claim" + "specialist workstream" until Product confirms whether "sub-claim" is the formal object. Diagram uses "workstream" only.
