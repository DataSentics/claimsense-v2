# ClaimSense Features page — design notes

> Route: `/features/` — sub-page of Product in top nav.
> Status: `content-ready` | `approval_required: deployment, security and product-capability claims`

---

## Visual system

Consistent with the homepage: Tosh A (headlines) + Roboto (body), Bull Orange `#FF5539` / Dream-in-Blue `#002870`, warm `#FFF7F5` alternating sections, dark navy `#0a1b3d` for Feature 04 and the demo conversion. Inline styles, same scroll-reveal pattern.

## Layout decisions

**Hero:** Left-aligned H1 + subhead + primary CTA, with four pill navigation links anchoring to each feature section. Pills give the user an instant map of the page and reduce scroll friction for buyers who want to jump to a specific capability.

**Feature sections alternate L/R on desktop:**
- 01 (text left, screenshot right) — white background
- 02 (screenshot left, text right) — warm `#FFF7F5` background
- 03 (text left, screenshot right) — white background
- 04 (text left, screenshot right) — dark navy `#0a1b3d` (enterprise/security context)

This rhythm creates visual variety without arbitrary decoration.

**Feature 01 accent color:** Bull Orange (AI/automation = energy). Features 02–04 accent: Dream-in-Blue (coordination, intelligence, security = depth/trust). Feature 04 on dark background uses orange checkmarks, per established brand discipline.

**Feature 02 compact hierarchy diagram:** An inline mini dark-card version of the illustrative workflow diagram sits below the bullet list, reinforcing the master-claim concept without requiring a separate full-bleed section. It uses the same `#0a1b3d` base and `A4AFFB` caption as the homepage version, but scaled for the content column.

**Infrastructure section:** Four clean cards (Databricks / Azure / GCP / AWS) with Tosh A names. No logos — none supplied; cloud provider logo usage requires brand approval from each vendor.

**Mini Bull sovereignty note:** Rendered after Feature 04 per `product-and-brand-brief.md` instruction. Compact horizontal strip (Bull white logo + eyebrow + body + CTA link), not the full trust bar. Sovereignty wording does not claim compliance guarantee.

**Demo form:** Reused verbatim from `content/global/forms.md` (Demo request form), per `content_features.md` instruction. Same 6-field form as homepage.

## Section order

Hero → 01 AI Pre-processing → 02 Master Claims → 03 Analytics & Chat → 04 Claim Core System → Infrastructure → Demo conversion → Footer.

Content file order preserved exactly.

---

## NEEDS-APPROVAL items

1. **Feature-01 screenshot** (`feature-01-preprocessing-dashboard.png`) — product screenshot pending client approval for public use.
2. **Feature-02 screenshots** (`feature-03-master-claim.png`, `feature-02-workflow-templates.png`) — same.
3. **Feature-03 screenshot** (`feature-04-analytics-chat.png`) — same.
4. **Feature-04 screenshot** (`feature-05-claim-history-audit-trail.png`) — same.
5. **Security / compliance claims** — "Enterprise-grade security & encryption", "Compliance-ready architecture" — pending legal/security sign-off. Do not describe as GDPR/DORA/EU AI Act compliance until legal approves precise wording.
6. **European data sovereignty wording** — mini-bar copy ("designed for enterprise governance, traceability and AI transparency") — must not be described as a compliance guarantee or data-residency guarantee until legal approves.
7. **"Trusted by 25+ companies"** in demo section — pending content/legal sign-off.
8. **Databricks / cloud provider names** — confirm vendor logo usage rights before adding logos to the infrastructure grid.

## FUNCTIONAL-SPEC NEEDED items

1. **Demo request form** — CRM/endpoint destination, validation, success/error states, consent record, anti-spam, analytics events, notification routing. Verbatim field set from `forms.md`.
2. **"Book a Demo" CTA behavior** — scroll to on-page form (current), modal, or Calendly? Confirm per `interaction-and-data-gaps.md` P1.
3. **Architecture link** — `/architecture/` — confirm route and whether it is live at launch.
4. **Footer resource links** — Documentation / API Reference / Help Center all currently route to `/help/` — confirm this is intentional.
5. **Privacy Policy URL** — confirm DataSentics privacy policy URL for footer and form consent text.

## Content gaps

- Cloud provider logos (Azure, GCP, AWS, Databricks) not supplied — using text-only cards with Tosh A names as placeholder.
- The product UI uses purple/indigo colors (not Bull orange/navy). Screenshots are shown as-is inside browser chrome cards; no recoloring applied to the product UI itself.
- Feature 02 content references "Illustrative workflow" in the Markdown — the mini inline diagram fulfills this requirement. A larger dedicated visual (as shown on the homepage) is not repeated here to avoid page bloat; the master-claim screenshot is the primary visual proof.
