
`md
# Product model and brand brief — mandatory for all ClaimSense routes

## Priority

This brief supersedes older page wording where it explicitly changes product positioning,
brand treatment or page-level visual requirements. Preserve all other approved factual
claims, legal copy and CTA intent.

## A. Complex-claim coordination

ClaimSense must be presented as one shared workspace for complex claims that involve
multiple specialists.

### Customer-facing value proposition

**One master claim. One complete view. Multiple specialist workstreams.**

A claim owner keeps accountability for the end-to-end customer outcome. Legal, finance,
assessment and other specialist teams can work in their own linked workstreams while
sharing the same case context, documents and facts.

### Product model to communicate

- **Master claim:** the customer-centric parent record and shared source of truth.
- **Specialist workstream / sub-claim:** a linked stream of work owned by the relevant
  team or role, for example Legal, Finance or On-site Assessment.
- **Shared context:** common documents, extracted facts, correspondence, case timeline
  and decision history are available across the master claim and its linked workstreams,
  subject to access permissions.
- **Master end-to-end task:** one client-centric task with a clear accountable owner.
- **Process subtask:** a specialist action that supplies a missing input or completion
  signal to the master-task owner; it must not fragment ownership of the customer outcome.

### Terminology decision required

Use `Master claim` in public copy. Use `specialist workstream` as the default public
term until Product confirms whether `sub-claim` is the formal product object and legally
appropriate customer-facing terminology. Do not alternate freely between `claim`, `case`,
`sub-case` and `sub-claim`.

### Visual requirement

At least one product visual on Home and Features must show the hierarchy, not a flat task
list:

Master claim
├─ Legal workstream — owner / status
├─ Finance workstream — owner / status
├─ On-site assessment — owner / status
└─ Master end-to-end task
   ├─ Request legal review
   └─ Confirm reserve

The visual must clearly distinguish:
- one customer-level owner and outcome;
- workstream-specific responsibility;
- shared case file / shared documents;
- a master task with linked process subtasks.

Use a native, accessible HTML/CSS illustrative diagram if no approved product screenshot
exists. Label it `Illustrative workflow`; do not present it as a live customer screen and
do not fabricate customer names, claim values, AI accuracy or operational metrics.

## B. Bull endorsement and European data sovereignty

### Site-wide requirement

Use the official Bull brand assets, lockup and design rules from the supplied Bull design
system. Do not recreate, recolour or approximate the Bull mark.

Render a persistent but restrained product endorsement in the global chrome:

- Header, compact: approved ClaimSense + Bull endorsement/lockup.
- Footer, full: `ClaimSense is built by DataSentics, part of the Bull / Eviden group.`

Use the full Bull trust bar only where it provides material credibility value:

- Home: after the product/dashboard proof and before customer testimonials.
- Architecture: after deployment/infrastructure content and before the final CTA.

On Features, use a smaller derivative after `Full Claim Core System` only if it does not
create repetition. Do not place the full trust bar on every route.

Use a lightweight sovereignty reference elsewhere only where contextually relevant,
such as Architecture, Features, FAQ or Pricing. It may link to `/architecture/`, but it
must not become a mandatory full-width component on every public page.

### Desktop trust-bar layout

On desktop, render the Bull endorsement as a single full-width horizontal trust bar,
not as vertically stacked content cards.

Use four horizontal columns:

1. **Brand / endorsement column** — approximately 40% width
   - Eyebrow: `Built by DataSentics, part of Bull`
   - Official Bull logo
   - Supporting copy: `Leading European technology group focused on sovereign AI and data.`

2. **Scale metric** — approximately 20% width
   - Approved Bull pictogram
   - `5K+`
   - `engineers and experts`

3. **Geographic presence** — approximately 20% width
   - Approved Bull pictogram
   - `28`
   - `countries served`

4. **R&D commitment** — approximately 20% width
   - Approved Bull pictogram
   - `14%`
   - `of revenue invested in R&D`

Use a warm Bull gradient background, Bull navy text and iconography, and subtle vertical
dividers between columns. Use official Bull colours, logo assets and pictograms only.

The trust bar must remain visually compact and scannable. It is an endorsement and
credibility component, not a standalone corporate-content section.

On mobile, stack the brand block first and show the three metrics as clear accessible rows.
Do not compress four desktop columns into unreadable narrow cards.

Place the full trust bar:
- Home: after the product/dashboard proof and before customer testimonials.
- Architecture: after deployment/infrastructure content and before the final CTA.

On Features, use either a smaller derivative after `Full Claim Core System`, or omit it if
the page becomes repetitive. Do not place the full trust bar on every route.

### Draft component copy — requires legal/brand approval

**Eyebrow:** European data sovereignty  
**Heading:** Keep control of your data and deployment.  
**Body:** ClaimSense is deployed into your selected cloud or on-prem environment and designed for
enterprise governance, traceability and AI transparency. Built by DataSentics, part of
the Bull group.  
**CTA:** Explore the architecture

Do not describe sovereignty as a compliance guarantee, data-residency guarantee or
certification until Legal/Security approves the precise wording.

## C. Implementation rules

- Do not make the master-claim visual an invented product screenshot.
- Do not imply that every workflow or every customer already has Legal, Finance and
  On-site Assessment workstreams; present them as examples.
- Do not claim automatic sharing across roles without access-control qualification.
- Do not turn master/sub-claim hierarchy into a new public navigation item. It is a
  product capability, surfaced in the relevant product sections.
- Preserve the existing page conversion intent.

## 5. Acceptance criteria for the redesigned website - A buyer can understand in under one screen that a complex claim remains one connected customer case even when several specialists are involved. - The website distinguishes master ownership from specialist responsibility. - The Home product visual and Features visual demonstrate hierarchy, shared context and task dependency rather than a flat generic dashboard. - Bull endorsement is present in site-wide chrome using approved brand assets. - The sovereignty message is reusable across public pages and contains no unapproved legal guarantee. - No new navigation item is introduced solely for master claims; Product remains the correct navigation category. - The FAQ gives a direct answer to the multi-team complex-claim question. "

### Optional first-load brand intro


On the initial website load only, the site may show a short ClaimSense × Bull brand intro
on a near-black background.

Use a vertically centered composition:
- Eyebrow: `Built by DataSentics, part of Bull`
- ClaimSense logo: `assets/logos/ClaimSense_logo_white.svg`
- Bull logo: use the approved white Bull logo from the Bull design-system assets.

ClaimSense remains the primary brand. Bull acts as the enterprise endorsement.

The intro must be brief, accessible and non-blocking. Do not show it again during normal
internal page navigation, and do not delay meaningful content for decorative animation.

ClaimSense remains the primary brand. Bull acts as the enterprise endorsement.

```

### ClaimSense logos use 

**ClaimSense logo — light background:** `assets/logos/ClaimSense_logo_black.svg`
**ClaimSense logo — dark background / intro screen:** `assets/logos/ClaimSense_logo_white.svg`
**ClaimSense logo — Bull warm-gradient background:** `assets/logos/ClaimSense_logo_black.svg`