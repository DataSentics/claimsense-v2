# Interaction & data gaps — resolve before implementation

## P0 — calculator on `/business-case/`

The UI is not merely content. Its formula, defaults, step size, package pricing assumption, negative-value behavior, rounding and the helper CTA behavior must be confirmed. The documented candidate formula is in `content/pages/business-case.md`, but it is an inference from public rendered values, not a replacement for the existing implementation.

**Owner required:** Product/commercial owner + developer who can inspect current code.

## P0 — all forms

Public content exposes fields and labels, but not technical contracts. For every form, provide:

- destination (CRM/HubSpot/Salesforce/email/API)
- endpoint / server action / webhook contract
- client and server validation rules
- required vs optional fields
- success/error and duplicate-submission behavior
- consent record, privacy URL and retention policy
- anti-spam approach
- analytics events / UTM capture
- notification recipients and SLA

## P1 — `Book a Demo` and sales CTAs

Confirm whether each CTA:

- scrolls to an on-page form,
- opens a modal,
- routes to a standalone page,
- opens Calendly/another scheduler, or
- creates a prefilled lead.

The current public render does not establish this with enough certainty.

## P1 — demo video

`Watch Demo Video` is visible on Home. Provide asset location/provider, poster image, transcript/captions, autoplay policy and whether it should use modal or inline playback.

## P1 — product and company assets

Supply approved original files for:

- product screenshots and feature imagery
- customer logos (Tuito, Pillow)
- testimonial permission and attribution approval
- Jakub Zanka portrait and LinkedIn target
- ClaimSense and DataSentics logos
- cloud/platform logos if brand usage rules apply

The existing homepage visibly includes an unresolved product-image placeholder; do not carry that into the redesign.

## P1 — public claims to reapprove

Do a content/legal/product review for all external claims, particularly:

- performance and accuracy metrics: `10x`, `90%`, `70%`, `96%`, `24,847`, `100+`, `25+`
- price and package facts: `€3/claim`, `€5/claim`, users, SLAs and delivery time
- client testimonials and company descriptions
- DataSentics/Bull/Eviden relationship statements
- French State / APE statement
- GDPR, DORA and EU AI Act claims
- partner commissions, revenue forecasts, deal sizes, demand and response time

## P2 — content-detail gaps visible on public pages

1. Pricing contains headings for package details but no visible lists in the public text extraction: `Analytical Agent — what's included` and `Full AI-native Platform — what's added`.
2. Use Cases claims 24 cases but many card capability lists appear shortened with ellipses. Extract canonical data from source code before creating rich detailed cards.
3. Footer items Documentation, API Reference, Case Studies and Help Center all route to `/help/`; confirm whether this gate is intentional and future resource routing.
4. Confirm target URLs for `Connect on LinkedIn`, `Email Us Directly`, external DataSentics pages and Privacy Policy.

## P2 — accessibility / UX decisions

- Keyboard and screen-reader behavior for Product dropdown, FAQ accordions, calculators, tables and charts.
- Error summaries and accessible labels for all forms.
- Focus management in potential modal video/form flows.
- Reduced-motion behavior for animated metrics/charts.

## P0 — master-claim and task hierarchy
...
## P1 — Bull endorsement and European data sovereignty
...
The redesign may depict the intended product model, but implementation and public wording
must be based on confirmed semantics.