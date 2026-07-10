/* ============================================================================
 * ClaimSense — Industry Use Cases data module
 * Single source of truth for the homepage "Industry Use Cases" section.
 * Content verbatim from industry-use-cases-data.md (6pm revision, 7 records).
 *
 * Render rule:
 *   confidence === "Certain" → render variantB (title + description)
 *                              variantANote is null — render nothing extra
 *   confidence === "Likely"  → render variantA (short titles only)
 *                              render variantANote as a note ABOVE the cards
 *
 * Pharma: intentionally 2 bullets only — this is correct, not a bug.
 * "status" and "confidenceNote" are team metadata — NEVER shown in the UI.
 * ============================================================================ */
window.CLAIMSENSE_INDUSTRY_USE_CASES = [
  {
    "label": "Insurance",
    "status": "Core offering — always first, not a discovery label",
    "confidence": "Certain",
    "confidenceNote": "Core ClaimSense offering, not a market hypothesis.",
    "variantANote": null,
    "variantA": [
      "Claims intake & FNOL processing",
      "Fraud & risk detection",
      "Coverage & liability assessment"
    ],
    "variantB": [
      { "title": "Claims intake & FNOL processing", "description": "ClaimSense structures the First Notice of Loss (FNOL) — the initial report a policyholder submits after an incident — and routes it automatically for fast, accurate processing." },
      { "title": "Fraud & risk detection", "description": "ClaimSense flags anomalies and suspicious patterns before payout." },
      { "title": "Coverage & liability assessment", "description": "ClaimSense cross-checks policy terms against claim details for faster decisions." }
    ]
  },
  {
    "label": "Industrial equipment & machinery service",
    "status": "Active pipeline conversation — TOS Varnsdorf",
    "confidence": "Certain",
    "confidenceNote": "Sourced directly from the TOS Varnsdorf customer journey map.",
    "variantANote": null,
    "variantA": [
      "Unified service request intake",
      "Technician assignment & workload tracking",
      "Recurring fault detection"
    ],
    "variantB": [
      { "title": "Unified service request intake", "description": "ClaimSense captures every request from phone, email, and direct contact into one shared queue, so coverage doesn't depend on a specific technician being available." },
      { "title": "Technician assignment & workload tracking", "description": "ClaimSense logs both billable and informal consultations, so management sees the full workload instead of only what's entered into the ERP." },
      { "title": "Recurring fault detection", "description": "ClaimSense surfaces patterns across service history that today rely entirely on individual technician memory." }
    ]
  },
  {
    "label": "Consumer electronics & appliance warranty",
    "status": "Active pipeline conversation — ETA (Apetronic group)",
    "confidence": "Certain",
    "confidenceNote": "Sourced directly from the ETA customer journey map.",
    "variantANote": null,
    "variantA": [
      "Pre-claim diagnostic deflection",
      "Multi-channel claim intake",
      "Automated customer response"
    ],
    "variantB": [
      { "title": "Pre-claim diagnostic deflection", "description": "ClaimSense guides customers through a diagnostic flow before a claim is filed, so easily-resolved or out-of-warranty cases don't trigger transport and technician costs." },
      { "title": "Multi-channel claim intake", "description": "ClaimSense unifies claims arriving through retail stores, in-home service, and direct service centers into one tracked flow." },
      { "title": "Automated customer response", "description": "ClaimSense replaces manually-written template replies with an AI-driven first response, freeing staff from fully manual email triage." }
    ]
  },
  {
    "label": "Logistics & freight",
    "status": "Early-stage outreach in this sector",
    "confidence": "Certain",
    "confidenceNote": "'Cargo Claims Specialist/Analyst' and 'Freight Claims Specialist' are both active, standardized job titles.",
    "variantANote": null,
    "variantA": [
      "Cargo & freight claim intake",
      "Carrier liability investigation",
      "Damage, loss & delay resolution"
    ],
    "variantB": [
      { "title": "Cargo & freight claim intake", "description": "ClaimSense captures shipment documentation and flags missing evidence automatically." },
      { "title": "Carrier liability investigation", "description": "ClaimSense cross-references bills of lading and carrier terms to determine liability faster." },
      { "title": "Damage, loss & delay resolution", "description": "ClaimSense tracks each claim through investigation to settlement with full audit history." }
    ]
  },
  {
    "label": "Health insurance",
    "status": "No live conversation yet — included on evidence strength",
    "confidence": "Likely",
    "confidenceNote": "No live client conversation has confirmed this terminology yet.",
    "variantANote": "Early-stage exploration — validating these use cases with payer-side teams.",
    "variantA": [
      "Prior authorization adjudication",
      "Claims denial & appeal review",
      "Coverage determination documentation"
    ],
    "variantB": [
      { "title": "Prior authorization adjudication", "description": "ClaimSense reviews authorization requests against plan criteria and flags missing documentation." },
      { "title": "Claims denial & appeal review", "description": "ClaimSense organizes incoming appeals and surfaces the relevant policy and clinical context for reviewers." },
      { "title": "Coverage determination documentation", "description": "ClaimSense generates audit-ready records of each coverage decision automatically." }
    ]
  },
  {
    "label": "Banking & fintech",
    "status": "No live conversation yet — included on lower confidence",
    "confidence": "Likely",
    "confidenceNote": "Recommend validating with a prospect call before treating this label as final.",
    "variantANote": "Early-stage exploration — validating these use cases with banking & fintech teams.",
    "variantA": [
      "Chargeback evidence & response",
      "Customer dispute investigation",
      "Unauthorized transaction claims"
    ],
    "variantB": [
      { "title": "Chargeback evidence & response", "description": "ClaimSense assembles evidence packages and tracks card network deadlines automatically." },
      { "title": "Customer dispute investigation", "description": "ClaimSense organizes transaction data and flags discrepancies for faster resolution." },
      { "title": "Unauthorized transaction claims", "description": "ClaimSense routes fraud-flagged claims to investigation with full documentation trail." }
    ]
  },
  {
    "label": "Pharma",
    "status": "Cautious inclusion — Bayer scenario not yet confirmed",
    "confidence": "Likely",
    "confidenceNote": "Deliberately limited to 2 bullets. Do not add hub services/appeal letter language until Bayer scenario is confirmed.",
    "variantANote": "Scope intentionally limited to product complaint handling, pending confirmation of additional pharma use cases.",
    "variantA": [
      "Product complaint intake & triage",
      "Complaint investigation documentation"
    ],
    "variantB": [
      { "title": "Product complaint intake & triage", "description": "ClaimSense captures and classifies incoming product complaints, flagging cases that require regulatory escalation." },
      { "title": "Complaint investigation documentation", "description": "ClaimSense generates audit-ready investigation records to support compliance review." }
    ]
  }
];
