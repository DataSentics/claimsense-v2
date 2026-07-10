# ClaimSense Business Case page — design notes

> Route: `/business-case/` — top-nav "Business Case".
> Status: `needs-functional-spec` (P0 calculator) | `approval_required: calculator formula, license assumptions, ranges, defaults, ROI wording and chart behavior`
> Primary conversion: Let's Build Your Business Case / Book a Demo

---

## ⚠ Calculator logic is a PLACEHOLDER
The page is fully built and interactive, but the ROI math uses the **inferred formula** documented in `content_business-case.md`, NOT confirmed production logic. Everything calculator-related is isolated for a one-line swap:

- **`this._calcConfig`** (in the logic class) — defaults, slider min/max/step for all three inputs, and `licensePerClaim`.
- **`_calculate(inp)`** — the formula (returns raw numbers).
- **`_eur()` / `_int()`** — number formatting (rounding/decimals).

### How to hand me the real logic (any one of these)
1. **Best — paste the calculator function** from the confirmed source chunk (find it via DevTools → Sources → Ctrl+Shift+F for "Efficiency Gain"). I drop it into `_calculate()` and update `_calcConfig`.
2. **Or paste 2–3 input→output examples** from the live tool (e.g. "20,000 cases / €80 / 40% → Net €X, ROI Y%, Efficiency €Z, Cost €W"). I reverse-engineer the exact formula + the €3-vs-€5 rule.
3. **Or a short spec** answering the 8 STOP questions (licence price rule, defaults, steps, non-reducible costs, negative handling, rounding, helper-CTA behavior, analytics).

The current placeholder reproduces the content file's worked example exactly (10,000 × €50 × 30% → €100,000 net, +200% ROI, €150,000 efficiency, €50,000 cost), so it's a faithful stand-in until you confirm.

## Layout
- Hero (verbatim) → two-column calculator: **Your Parameters** (3 range sliders with live value bubbles + range labels; "Not sure?" helper on cost-per-case) | **Your Savings** (4 output cards + Detailed Breakdown table + Cost-vs-Benefit bar chart with the "€… saved" callout) → **Estimate assistance** (dark section, 3 bullets, "Let's Build Your Business Case" + "Free Consultation · 30-min call") → **Final CTA** ("Ready to realize these savings?" Book a Demo · View Pricing) → Footer.
- Live recompute on every slider move; negative net savings/ROI render in red (a provisional treatment — confirm desired behavior, Q4).

## NEEDS-APPROVAL
1. Calculator formula, licence assumption (€5 fixed vs €3/€5), input ranges, defaults, slider steps.
2. ROI wording and all rendered example values.
3. Chart behavior (animation) + accessibility.

## FUNCTIONAL-SPEC NEEDED
1. The 8 STOP items from `content_business-case.md` (licence rule, defaults/steps, reducible-cost basis, negative handling, formatting/rounding, "Not sure?" helper target, chart a11y/animation, analytics capture).
2. CTA routing: "Let's Build Your Business Case" (scheduler/form), Book a Demo.
3. Whether calculator inputs/outputs are tracked or attached to the lead.

## Content gaps
- "Not sure? Click here to calculate it" currently scrolls to the estimate-assistance section as a safe default — confirm intended behavior.
