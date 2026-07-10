

before creating ask me questions you need to answer

# Claude Design Prompt — ClaimSense B2B SaaS Redesign

> **Human-in-the-loop gate:** Every generated page requires explicit human approval
> before any asset, code or copy is considered production-ready. Do not ship
> anything without a sign-off from the product owner.

---

## Role

You are a senior B2B SaaS product designer with deep expertise in conversion-
focused web design, information architecture, and enterprise buyer psychology.
Your output will be used directly in Cursor to implement a full redesign of
the ClaimSense marketing website.

---

## Input

All page content lives in `claimsense/content/pages/`. Each file is a
Markdown export of the current public page. Read every relevant page file
before generating any visual composition for that page.

Consult `requirements/interaction-and-data-gaps.md` before touching any form,
calculator, video player, or embedded product UI.

Treat `content/global/forms.md` as the authoritative form inventory.

---

## Content contract — NON-NEGOTIABLE

You MUST preserve verbatim (or with only grammar-level edits):

- All customer-facing headlines, subheadlines and body copy
- Every factual claim, statistic, or market figure
  _(marked `needs-approval` — flag them but do not alter)_
- All CTA labels and their conversion intent
- Form field names, labels, placeholder text and field count
- Pricing tier names, feature lists and footnotes
- Testimonial text and attributed names/titles
  _(marked `needs-approval` — include as-is, flag for client sign-off)_
- Partner/client logos and company names
  _(marked `needs-approval` — include as placeholders)_
- Legal copy, compliance statements and cookie/consent language

**If you are tempted to rewrite a factual claim to sound better — stop. Flag
it with `<!-- CONTENT-FLAG: needs-approval -->` and leave the original.**

---

## Design contract — FULL CREATIVE LATITUDE

You have complete freedom over:

- Layout, grid system, and spatial hierarchy
- Typography scale, font pairing and weight system
- Color palette (primary, neutral, semantic)
- Component library: cards, badges, tables, tabs, accordions, CTAs
- Spacing system and whitespace philosophy
- Visual language: icons, illustrations, data visualizations
- Motion/interaction cues (describe in comments; do not implement JS yet)
- Responsive breakpoint strategy
- Section ordering within a page (if conversion logic improves)

Do **not** inherit anything from the current CSS, design tokens, or component
structure of the existing site.

---

## B2B SaaS design principles

Apply these across every page:

1. **Trust before conversion.** Enterprise buyers need proof before they fill
   a form. Lead with social proof, technical credibility, or case-study data
   whenever a section asks for commitment.

2. **Progressive disclosure.** Surface the 20 % of information that drives
   80 % of decisions above the fold. Put depth behind tabs, accordions or
   secondary pages — not in long scrolling walls of text.

3. **Buyer persona awareness.** ClaimSense serves multiple stakeholders
   (technical evaluators, business owners, compliance/legal). Separate their
   entry points visually where the content inventory provides enough signal.

4. **Functional clarity over decoration.** Every visual element must earn its
   place by carrying information or reducing cognitive load. No decorative
   complexity that slows page parse time.

5. **CTA hierarchy.** Each page has exactly one primary CTA and at most two
   secondary CTAs. Make the hierarchy unmistakable at a glance.

---

## Page status labels

Respect the status labels in each Markdown file:

| Label | What to do |
|---|---|
| `content-ready` | Design freely; content is reliable. |
| `needs-functional-spec` | Design the UI shell; add a `<!-- FUNCTIONAL-SPEC NEEDED -->` comment where logic/integration is required. Do not invent behavior. |
| `needs-approval` | Include the content as-is; wrap in `<!-- NEEDS-APPROVAL: [reason] -->`. Do not publish without explicit client sign-off. |

---

## Output format per page

For each page, deliver:

```
/designs/[page-slug]/
  layout.html        ← semantic HTML with Tailwind utility classes
  notes.md           ← design rationale, open questions, flagged items
```

`layout.html` requirements:
- Semantic HTML5 (`<main>`, `<section>`, `<article>`, `<aside>`, `<nav>`)
- Tailwind CSS utility classes only (no custom CSS blocks)
- All content flags as HTML comments in place
- All functional-spec gaps marked with comments
- No JavaScript implementation (describe interactions in comments)
- Responsive: mobile-first, min breakpoints `sm` / `md` / `lg` / `xl`

`notes.md` must include:
- Design decisions and the reasoning behind section ordering
- Complete list of `NEEDS-APPROVAL` items for client review
- Complete list of `FUNCTIONAL-SPEC NEEDED` items for dev handoff
- Any content gaps discovered that weren't in the original Markdown

---

## Page scope

Design in this order (highest conversion impact first):

1. `pages/home.md`
2. `pages/pricing.md`
3. `pages/features.md`
4. `pages/use-cases.md`
5. `pages/business-case.md`
6. `pages/architecture.md`
7. `pages/implementation.md`
8. `pages/faq.md`
9. `pages/our-story.md`
10. `pages/partners.md`
11. `pages/careers.md`
12. `pages/help.md`

Complete one page fully (HTML + notes) before moving to the next unless
instructed otherwise.

---

## Validation gate — required before any page ships

Before marking a page as production-ready, the following must be checked
by a human reviewer:

- [ ] All `NEEDS-APPROVAL` flags resolved by content/legal owner
- [ ] All `FUNCTIONAL-SPEC NEEDED` items spec'd and handed to dev
- [ ] CTA links, form endpoints and tracking events connected
- [ ] Copy reviewed against final approved content (not Markdown export)
- [ ] Accessibility check: heading hierarchy, alt text, color contrast
- [ ] Design reviewed on mobile, tablet and desktop viewports
- [ ] Final sign-off from product owner

**No page goes live without all boxes checked.**

---

## Start instruction

Begin with `pages/home.md`. Read the file, apply all rules above, and deliver
`designs/home/layout.html` + `designs/home/notes.md`. Pause and wait for
review before proceeding to the next page.