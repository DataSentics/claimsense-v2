# ClaimSense Use Cases page — design notes

> Route: `/use-cases/` — sub-page of Product.
> Status: `content-ready` | `approval_required: market positioning and individual use-case availability`
> Primary conversion: **Book a Consultation**

---

## Visual system

Consistent with Home/Features: Tosh A + Roboto, Bull Orange `#FF5539` / Dream-in-Blue `#002870`, warm `#FFF7F5` hero, dark navy `#0a1b3d` CTA band. Inline styles, shared scroll-reveal.

## Layout decisions

**Hero** — left-aligned H1 + subhead, primary CTA "Book a Consultation" (the page's conversion goal, distinct from the global "Book a Demo" in header chrome), plus the verbatim inventory label "Showing 24 of 24 use cases" as a pill.

**Featured Use Cases (5)** — rich cards in an auto-fit grid, each with the full 4-capability list, verbatim. Industry shown as a colored tag.

**More Use Cases (19)** — compact cards with the 2 visible capability cues each, verbatim from the source table. Capability cues sit in a divided footer area of each card.

**Industry colour coding** — each industry maps to a Bull-palette tag colour (Insurance→orange, Technology/Public Sector→Dream-in-Blue, Banking→Sovereign blue, Healthcare/Agriculture→Vitality green, Logistics/Energy→amber, Manufacturing→neutral). Purely for scannability, using approved palette values only.

**Industry filter (ENHANCEMENT)** — client-side filter chips above the More grid, with a live "Showing X of 19" counter. The source `Design note` explicitly says a filter is *not* confirmed in the текст render and may be added "only as an enhancement, not as a requirement." Built as progressive enhancement and flagged accordingly. The filter operates on the 19 More cases; the 5 Featured remain editorial highlights above.

**CTA band** — "Don't See Your Use Case?" verbatim, dark navy, single primary CTA "Book a Consultation."

## Section order

Hero → Featured (5) → More (19, filterable) → "Don't See Your Use Case?" CTA → Footer. Content file order preserved exactly (5 featured cases, then the 19-row "More" table, then the closing CTA).

---

## NEEDS-APPROVAL items

1. **Individual use-case availability / market positioning** — per page front-matter `approval_required`. All 24 use cases are presented as available; confirm which are GA vs roadmap.
2. **"Showing 24 of 24 use cases"** inventory claim — confirm the canonical count.
3. **Capability lists for the 19 "More" cases** — source notes these are concise two-capability summaries possibly shortened with ellipses in the public render; `interaction-and-data-gaps.md` P2 says to "Extract canonical data from source code before creating rich detailed cards." Current cards use exactly the two visible cues from the Markdown table — confirm full lists from source before expansion.

## FUNCTIONAL-SPEC NEEDED items

1. **Industry filter** — confirm whether a category filter/search exists in the current product source. Built here as client-side progressive enhancement only; if adopted, define canonical category taxonomy and whether it should also include Featured cases.
2. **"Book a Consultation" CTA routing** — scheduler (Calendly), dedicated form, or scroll to a consultation/demo area? Not established by source (`interaction-and-data-gaps.md` P1).
3. **Header "Book a Demo" vs page "Book a Consultation"** — confirm both CTAs and their distinct destinations.

## Content gaps

- The 19 More cases expose only 2 capability cues each in the Markdown; full capability lists were not in the export. Cards are built with exactly those cues and flagged for source extraction.
- No per-use-case imagery supplied; cards are typographic with colored industry tags (no decorative filler).
- Industry taxonomy is inferred from the source table's "Industry" column (9 distinct industries). Confirm this is the canonical filter taxonomy.
