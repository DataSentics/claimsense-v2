---
route: /business-case/
page_purpose: Help buyers quantify ROI and convert them to a consultation or demo.
primary_conversion: Let's Build Your Business Case / Book a Demo
status: needs-functional-spec
approval_required: calculator formula, license assumptions, ranges, defaults, ROI wording and chart behavior
---

# Calculate Your ROI with ClaimSense

**Eyebrow:** Business Case Calculator

See exactly how much your organization can save by automating claim processing. Adjust the parameters below and watch the savings add up.

## Your Parameters

### Cases Processed Per Year
Total number of insurance claims handled annually  
Unit: cases / year  
Visible range: 500–1,000,000

### Cost of Processing 1 Case
FTE costs divided by number of cases (avg. cost per claim)  
Unit: EUR / case  
Visible range: 5–200  
Helper CTA: Not sure? Click here to calculate it

### Expected Time Reduction per Case
How much faster each case is processed with ClaimSense  
Unit: % time saved  
Visible range: 5–90

## Your Savings

Rendered example values:
- Net Annual Savings: €100,000 — After ClaimSense costs
- Return on Investment: +200% — Savings / ClaimSense cost
- Efficiency Gain: €150,000 — 30% productivity boost
- ClaimSense Cost: €50,000 — 10,000 cases × €5

### Detailed Breakdown

Rendered example:

| Line item | Value |
|---|---:|
| Current annual processing cost | €500,000 |
| Productivity gain (30% time reduction) | - €150,000 |
| Reduced annual FTE cost | €350,000 |
| ClaimSense cost (10,000 cases × €5) | + €50,000 |
| Total cost with ClaimSense | €400,000 |
| Net Annual Savings | €100,000 |

### Cost vs. Benefit Analysis

- Annual cost comparison
- Current State: €500,000 — FTE Processing Cost
- With ClaimSense: €400,000 — Reduced FTE Cost
- Net Annual Savings: €100,000
- Chart labels: Current FTE Cost; Reduced FTE Cost; ClaimSense License; Net Savings
- Supporting callout: €100,000 saved

## Estimate assistance

### Struggling to estimate your efficiency gains?

You're not alone. Calculating the right cost per case or predicting the realistic % of time reduction is tricky without benchmarks. Let's meet and help you build a qualified estimate based on what we've seen with similar insurance companies.

- We'll benchmark your numbers against similar-sized insurers
- Get a realistic efficiency % based on your claim types
- Walk away with a board-ready business case in days, not weeks

**CTA:** Let's Build Your Business Case  
**Support detail:** Free Consultation · 30-min call with our team

## Final CTA

### Ready to realize these savings?
Book a demo and let us show you how ClaimSense can transform your claims processing efficiency.

**CTAs:** Book a Demo · View Pricing

## STOP — calculator requirements to confirm before implementation

The public rendered example strongly suggests, but does not prove, this calculation:

```text
current_annual_processing_cost = annual_cases * cost_per_case
productivity_gain = current_annual_processing_cost * time_reduction_percent
reduced_annual_fte_cost = current_annual_processing_cost - productivity_gain
claimsense_cost = annual_cases * 5 EUR
cost_with_claimsense = reduced_annual_fte_cost + claimsense_cost
net_annual_savings = current_annual_processing_cost - cost_with_claimsense
roi_percent = (net_annual_savings / claimsense_cost) * 100
```

The rendered example is mathematically consistent with 10,000 annual cases, €50 processing cost/case, 30% time reduction and a fixed €5/claim license price.

**Do not implement this inferred formula as production truth until it is confirmed from the existing code or approved by the commercial owner.** Resolve all of the following:

1. Is €5/claim always used, or does the calculator select €3 vs €5 based on package/volume?
2. What are the exact default values and slider steps for all three inputs?
3. Is `time reduction` equal to the full reducible FTE cost, or are some costs non-reducible?
4. How are negative savings/negative ROI communicated?
5. How should monetary values, decimals and rounding be formatted?
6. What does `Not sure? Click here to calculate it` open: modal, explanation, external tool or sales contact?
7. Does the chart animate and is it accessible from keyboard/screen reader?
8. Are calculator inputs/outputs tracked as analytics events or submitted with the lead?
