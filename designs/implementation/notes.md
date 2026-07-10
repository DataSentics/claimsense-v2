# ClaimSense Implementation page — design notes

> Route: `/implementation/` — sub-page of Product.
> Status: `content-ready` | `approval_required: timing and delivery commitments`
> Primary conversion: **Book a Consultation**

---

## Visual system

Consistent with the other Product pages: Tosh A + Roboto, Bull Orange `#FF5539` / Dream-in-Blue `#002870`, warm `#FFF7F5` and white sections, dark navy `#0a1b3d` for the Implementation Result. Vitality green `#00B290` for deliverables/outcomes (positive completion signal).

## Layout decisions

**Hero** — H1 "Implementation Project Plan" with the subhead "AI Claims Processing Platform Deployment" as the eyebrow, intro paragraph verbatim, primary CTA "Book a Consultation", plus a 4-step overview stepper (Initial Setup / Shadow Run / Operational Migration / Full Migration) anchoring to each phase.

**Four-phase timeline** — each phase is a card with: a large Tosh A number badge, "Phase N" eyebrow, title, description, the italic context note where present (e.g. "Approximately 80% of claims…"), then a two-column block — **Key Activities** (accent bullets) and **Deliverables** ("Buyer receives:" + green checkmarks) — closed by a coloured **Outcome** strip. Phase 1 uses orange accent, 2–3 navy, 4 green (completion), giving a subtle progression.

**Implementation Result** — dark navy section, "At project completion, you operate:" with the 5 result items as checkmarked rows.

**CTA** — "Ready to Start Your Implementation?" verbatim, single primary CTA "Book a Consultation."

**Product dropdown** — Implementation marked active; links navigate to the real `.dc.html` files. The dropdown is now fully wired across all four Product sub-pages.

## Section order

Hero (+ stepper) → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Implementation Result → CTA → Footer. Content file order preserved exactly; all activity/deliverable/outcome copy verbatim.

---

## NEEDS-APPROVAL items

1. **Timing and delivery commitments** — per page front-matter. Specifically the "Approximately 80% of claims" figure (Phase 3) and any implied phase durations. No phase durations were stated in the source, so none were invented.
2. **Phase deliverable commitments** — presented as buyer-facing promises; confirm these are contractually accurate.

## FUNCTIONAL-SPEC NEEDED items

1. **"Book a Consultation" CTA routing** — scheduler / form / demo area — confirm (same open question as Use Cases).
2. **Header "Book a Demo" vs page "Book a Consultation"** — confirm both CTAs and destinations.
3. **Header secondary nav** (Our Story / Pricing / Business Case) — placeholder `#` until those pages exist.

## Content gaps

- No phase durations/timeline lengths in the source — the timeline is sequence-based, not calendar-based. If durations exist, they can be added to each phase card.
- No imagery specified; phases are typographic cards (no decorative filler).
