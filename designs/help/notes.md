# ClaimSense Help / Resources & Partner Access — design notes

> Route: `/help/` — footer Resources (Help Center / Documentation / API Reference all route here).
> Status: `needs-functional-spec` | `approval_required: partner-access policy, email target and partner-application workflow`
> Primary conversion: **Apply to Partner Program / Book a Demo**

## Layout
- **Hero** — "Partner Resources" eyebrow, "Resources & Partner Access", intro verbatim.
- **Available to Partners** — 4 gated resource cards (Documentation / API Reference / Case Studies → here the page lists Documentation, API Reference, Case Studies, Help Center; built all four), each with "Partner access required" lock badge. Verbatim.
- **Become a Partner** — two-column: benefits list (6 items verbatim) + the partner resource-gate application form (verbatim fields from `forms.md`), submit "Apply to Partner Program". "Already a partner?… reach out to [email protected]" line preserved verbatim.
- **Not Ready to Partner Yet?** — secondary path to Book a Demo (links to homepage demo area).
- Footer Help Center / Documentation / API Reference now route to this page across all pages.

## NEEDS-APPROVAL
1. Partner-access policy — confirm all four resource links intentionally gate here (source `Required` note).
2. Partner-support email — "[email protected]" is a redacted placeholder in the source; confirm the real address.

## FUNCTIONAL-SPEC NEEDED
1. Partner resource-gate form — endpoint/CRM, validation, success/error, consent, anti-spam, analytics. **Open decision (from `forms.md`):** keep distinct from the Partners-page application or route into a shared partner-application form with a hidden source field.
2. Future authentication / access-credential mechanism for gated resources.
3. "Book a Demo" routing.

## Content gaps
- Resource icons are simple glyphs (no custom iconography supplied).
- "[email protected]" carried verbatim as a redacted placeholder — needs the real support address.
