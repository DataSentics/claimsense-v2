# ClaimSense FAQ page — design notes

> Route: `/faq/` — linked from the footer (Resources) on every page.
> Status: `content-ready` | `approval_required: legal, product, security and delivery claims`
> Primary conversion: **Book a Demo**

---

## Note on question count
The source `content_faq.md` contains **9** questions (numbered 01–09), not 8. All 9 are included verbatim.

## Visual system
Consistent with the rest of the site: Tosh A + Roboto, Bull Orange `#FF5539` / Dream-in-Blue `#002870`, warm `#FFF7F5` hero, dark navy `#0a1b3d` final CTA. Shared header (with Product dropdown) and footer chrome.

## Layout decisions
- **Centered hero** — "FAQ" eyebrow, H1, intro, verbatim.
- **Accordion** — 9 questions as expand/collapse cards, each with its `0N` number in Tosh A, a rotating +, and the answer revealed below. First item open by default. Several answers carry an inline CTA (verbatim) linking to the relevant page (Implementation, Architecture, Features, Pricing; "Learn more about our story" → placeholder until Our Story is built).
- **Final CTA** — "Still have questions?" with Book a Demo + Email Us Directly.
- Footer FAQ links across all pages now point here.

## Section order
Hero → 9-question accordion → "Still have questions?" CTA → Footer. Source order preserved.

---

## NEEDS-APPROVAL items
1. **Legal/product/security/delivery claims** across answers, especially: GDPR / DORA / EU AI Act wording (Q05), "300+ engineers / 500+ delivered AI projects / 15+ years / 5+ years" (Q02), implementation timing "1–2 weeks / 1–2 months" (Q03), prices €3/€5 per claim (Q09), client names Tuito & Pillow (Q02).
2. **"designed to meet GDPR, DORA, and EU AI Act"** (Q05) — must not be presented as a compliance guarantee until legal approves.

## FUNCTIONAL-SPEC NEEDED items
1. **"Email Us Directly"** — confirm destination email address (per source `Required` note).
2. **"Book a Demo" routing** — scroll / modal / scheduler.
3. **Accordion accessibility** — keyboard + screen-reader behavior (`aria-expanded` set; confirm full pattern in build).
4. **Q02 "Learn more about our story" CTA** → `/our-story/` (page not yet built; placeholder link).

## Content gaps
- The source `Required` note asks to confirm the destination email and whether the FAQ is accordion-based — accordion chosen (content remains accessible when expanded); confirm with owner.
