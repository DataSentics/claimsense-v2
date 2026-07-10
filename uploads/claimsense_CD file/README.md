# ClaimSense — content & IA inventory for Bull redesign

**Source:** publicly rendered pages at `https://claimsense.app/`.
**Prepared:** 22 June 2026.

This package intentionally separates **content fidelity** from the legacy visual implementation:

- Preserve customer-facing copy, factual claims, CTA intent, form fields, package facts and legal copy unless a content change is explicitly approved.
- Do **not** inherit the current layout, typography, spacing, component structure, CSS, breakpoints or visual hierarchy.
- Each page may be reorganized into a stronger Bull-native composition, provided the information, conversion intent and required functionality remain intact.

## Inventory coverage

Included: Home, Features, Architecture, Use Cases, Implementation, Our Story, Pricing, Business Case, FAQ, Partners, Careers and Help.

Not included: source code, analytics, form endpoints, validation logic, assets in original resolution, consent tooling, SEO metadata, redirects and non-public content.

## How to use in Cursor

1. Put this folder under `content/claimsense/` in the redesign repository.
2. Give Cursor the page Markdown file and your Bull rules/design-system documents.
3. Read `requirements/interaction-and-data-gaps.md` before implementing any form, calculator, video or embedded product UI.
4. Treat `content/global/forms.md` as the required form inventory, not as an implementation specification.

## Important status labels

- `content-ready`: public content and IA are sufficiently visible to redesign.
- `needs-functional-spec`: visible UI exists, but logic/integration is not reliably recoverable from a public page.
- `needs-approval`: numerical/market/legal claims, testimonials, client logos or compliance statements should be approved before publishing a redesigned version.
