# ClaimSense Architecture page — design notes

> Route: `/architecture/` — sub-page of Product.
> Status: `content-ready` | `approval_required: architecture, cloud, security and compliance claims`
> Primary conversion: **Book a Demo**

---

## Visual system

Consistent with the other pages: Tosh A + Roboto, Bull Orange `#FF5539` / Dream-in-Blue `#002870`, warm `#FFF7F5` and white sections, dark navy `#0a1b3d` for the architecture flow + final CTA. Secondary palette (Sunbeam `#FFB600`, Vitality `#00B290`, blue tints) used for the layered diagram and flow steps.

## Layout decisions

**Architecture flow diagram** — redesigned entirely in Bull style per the rebuild note (legacy layout NOT reproduced). A vertical, top-to-bottom flow on a dark navy canvas: Claims/documents → Business workflow/App (with an embedded master-claim workspace mini-hierarchy: 3 specialist workstreams + master end-to-end task) → AI agent → Core system → secure cloud deployment (Databricks/Azure/GCP/AWS pills) → Resolved claim cases. Each step uses a distinct secondary-palette accent for its icon. All diagram labels retained verbatim from the source. Closing caption clarifies workstreams are examples, not required for every claim (per brief implementation rules).

**Platform Layers** — three cards (Business Workflow / AI Agent / Core System), each with verbatim description + full bullet list, colour-tagged Layer 1/2/3.

**Deploy on Your Infrastructure** — four cloud cards + the European-data-sovereignty statement (verbatim), flagged for legal/security approval.

**Bull trust bar** — full four-column trust bar placed AFTER deployment content and BEFORE the final CTA, exactly per `product-and-brand-brief.md`.

**Final CTA** — "Ready to See It in Action?" verbatim, single primary CTA "Book a Demo."

**Product dropdown** — header now uses the shared Product dropdown (Features → Architecture → Use Cases → Implementation) with Architecture marked active. Links navigate to the real `.dc.html` files.

## Section order

Hero → Architecture flow diagram → Platform Layers → Deploy on Infrastructure (+ sovereignty) → Bull trust bar → CTA → Footer. Content file order preserved.

---

## NEEDS-APPROVAL items

1. **European data sovereignty statement** — source explicitly requires Legal/Security approval before public release. Not presented as a compliance/data-residency guarantee.
2. **Architecture / cloud / security / compliance claims** — per page front-matter `approval_required`.
3. **Bull trust-bar figures** — 5K+ / 28 / 14% — confirm before publish.
4. **Cloud / Databricks vendor names** — confirm logo usage rights before adding vendor logos.

## FUNCTIONAL-SPEC NEEDED items

1. **"Book a Demo" CTA routing** — scroll / modal / scheduler / standalone — confirm.
2. **Implementation sub-page** — dropdown links to `ClaimSense Implementation.dc.html` (not yet built).
3. **Header secondary nav** (Our Story / Pricing / Business Case) — currently placeholder `#`; wire when those pages exist.

## Content gaps

- Cloud provider + Databricks logos not supplied — text cards used.
- The architecture flow diagram is an original Bull-style interpretation of the labelled flow; the legacy diagram image was intentionally not reproduced (per rebuild note).
