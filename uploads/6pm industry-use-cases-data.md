# ClaimSense — Industry Use Cases Data

Tento soubor obsahuje strukturovaná data pro sekci "Industry Use Cases" na homepage ClaimSense, umístěnou pod proof section (kvantifikátory) a nad video placeholder sekcí.

Každý objekt odpovídá přesně tomuto schématu:

```
{
  "label": string,
  "status": string,
  "confidence": "Certain" | "Likely",
  "confidenceNote": string,
  "variantANote": string | null,
  "variantA": [string, string, string],
  "variantB": [{ "title": string, "description": string }, ...]
}
```

Pole `variantA` obsahuje pouze názvy (bez popisu) — používá se u štítků s nižší jistotou.
Pole `variantB` obsahuje název + popisnou větu — používá se u štítků s vysokou jistotou nebo přímým ověřením od klienta.
Pole `variantANote` je nové: jedna krátká, sdílená úvodní věta zobrazená NAD trojicí/dvojicí karet, jen u štítků, kde se vykresluje variantA. Účel: dodat krátký kontext bez toho, aby každá jednotlivá karta měla vlastní popis (to by smazalo rozdíl mezi Certain a Likely štítky). U záznamů s `confidence: "Certain"` je toto pole `null` a nevykresluje se nic.

**Defaultně aktivní štítek při načtení stránky:** `Insurance` (první v pořadí).

**Doporučení, která varianta se má vykreslit:** viz pole `confidence`. `Certain` → vykresli `variantB`. `Likely` → vykresli `variantA`. Toto pravidlo platí pro všech 7 záznamů níže a nemělo by se měnit bez nové evidence.

**Pharma štítek byl přidán s úmyslně opatrným obsahem (Variant A, jen 2 odrážky místo 3).** Bayer scénář (interní Patient Access tým vs. externí hub provider) zůstává neověřený — proto tento štítek neobsahuje Hub Services, appeal letter, ani benefits verification terminologii, která je US-specific a nemusí platit pro evropské prospekty. Obsah je omezen na to, co platí univerzálně (product complaint handling), dokud nebude Bayer scénář potvrzen.

---

```json
[
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
      {
        "title": "Claims intake & FNOL processing",
        "description": "ClaimSense structures the First Notice of Loss (FNOL) — the initial report a policyholder submits after an incident — and routes it automatically for fast, accurate processing."
      },
      {
        "title": "Fraud & risk detection",
        "description": "ClaimSense flags anomalies and suspicious patterns before payout."
      },
      {
        "title": "Coverage & liability assessment",
        "description": "ClaimSense cross-checks policy terms against claim details for faster decisions."
      }
    ]
  },
  {
    "label": "Industrial Equipment & Machinery Service",
    "status": "Active pipeline conversation — TOS Varnsdorf (Czech CNC machine tool manufacturer, ~700–900 service requests/year, B2B service contracts)",
    "confidence": "Certain",
    "confidenceNote": "Sourced directly from the TOS Varnsdorf customer journey map (DataSentics interview transcript). TOS's own language centers on 'service request' and 'service call,' not 'claim' — warranty claim is only one of several intake triggers, not the dominant frame. Source quote: 'Customer contacts company with fault, warranty claim, or service need.'",
    "variantANote": null,
    "variantA": [
      "Unified service request intake",
      "Technician assignment & workload tracking",
      "Recurring fault detection"
    ],
    "variantB": [
      {
        "title": "Unified service request intake",
        "description": "ClaimSense captures every request from phone, email, and direct contact into one shared queue, so coverage doesn't depend on a specific technician being available."
      },
      {
        "title": "Technician assignment & workload tracking",
        "description": "ClaimSense logs both billable and informal consultations, so management sees the full workload instead of only what's entered into the ERP."
      },
      {
        "title": "Recurring fault detection",
        "description": "ClaimSense surfaces patterns across service history that today rely entirely on individual technician memory."
      }
    ]
  },
  {
    "label": "Consumer Electronics & Appliance Warranty",
    "status": "Active pipeline conversation — ETA (Czech/Slovak appliance brand, Apetronic group, 70,000+ repairs/year, multi-channel intake via retail stores, direct service centers, and in-home service)",
    "confidence": "Certain",
    "confidenceNote": "Sourced directly from the ETA customer journey map. ETA's own highest-priority insight, in their words: 'Deflecting unnecessary warranty claims is the highest-ROI opportunity... Even 5–10% deflection = material cost savings.' Source quote on cost: 'Every refused claim still costs us a great deal — transport, technician time, all the work around it.'",
    "variantANote": null,
    "variantA": [
      "Pre-claim diagnostic deflection",
      "Multi-channel claim intake",
      "Automated customer response"
    ],
    "variantB": [
      {
        "title": "Pre-claim diagnostic deflection",
        "description": "ClaimSense guides customers through a diagnostic flow before a claim is filed, so easily-resolved or out-of-warranty cases don't trigger transport and technician costs."
      },
      {
        "title": "Multi-channel claim intake",
        "description": "ClaimSense unifies claims arriving through retail stores, in-home service, and direct service centers into one tracked flow."
      },
      {
        "title": "Automated customer response",
        "description": "ClaimSense replaces manually-written template replies with an AI-driven first response, freeing staff from fully manual email triage."
      }
    ]
  },
  {
    "label": "Logistics & Freight",
    "status": "Early-stage outreach in this sector",
    "confidence": "Certain",
    "confidenceNote": "'Cargo Claims Specialist/Analyst' and 'Freight Claims Specialist' are both active, standardized job titles; terms are used interchangeably depending on region (cargo = international/maritime, freight = US trucking).",
    "variantANote": null,
    "variantA": [
      "Cargo & freight claim intake",
      "Carrier liability investigation",
      "Damage, loss & delay resolution"
    ],
    "variantB": [
      {
        "title": "Cargo & freight claim intake",
        "description": "ClaimSense captures shipment documentation and flags missing evidence automatically."
      },
      {
        "title": "Carrier liability investigation",
        "description": "ClaimSense cross-references bills of lading and carrier terms to determine liability faster."
      },
      {
        "title": "Damage, loss & delay resolution",
        "description": "ClaimSense tracks each claim through investigation to settlement with full audit history."
      }
    ]
  },
  {
    "label": "Health Insurance",
    "status": "No live conversation yet — included on evidence strength",
    "confidence": "Likely",
    "confidenceNote": "'Claims Adjudicator' and 'Prior Authorization Specialist' are standardized payer-side job titles, but no live client conversation has confirmed this terminology yet. Important distinction for future copy: appeal letters are written by providers/patients, not insurers — framing must stay from the insurer's (ClaimSense user's) perspective, not the appellant's. Terminology aligned with the /use-cases/ page 'Health Insurance Claims' card — both pages now use identical phrasing for this use case.",
    "variantANote": "Early-stage exploration — validating these use cases with payer-side teams.",
    "variantA": [
      "Prior authorization adjudication",
      "Claims denial & appeal review",
      "Coverage determination documentation"
    ],
    "variantB": [
      {
        "title": "Prior authorization adjudication",
        "description": "ClaimSense reviews authorization requests against plan criteria and flags missing documentation."
      },
      {
        "title": "Claims denial & appeal review",
        "description": "ClaimSense organizes incoming appeals and surfaces the relevant policy and clinical context for reviewers."
      },
      {
        "title": "Coverage determination documentation",
        "description": "ClaimSense generates audit-ready records of each coverage decision automatically."
      }
    ]
  },
  {
    "label": "Banking & Fintech",
    "status": "No live conversation yet — included on lower confidence",
    "confidence": "Likely",
    "confidenceNote": "'Dispute Analyst' and 'Chargeback Analyst' are confirmed job titles, but 'dispute case' as a single combined term is not how the market actually speaks; 'dispute' and 'chargeback' function as two related but distinct concepts. Recommend validating with a prospect call before treating this label as final. Terminology aligned with the /use-cases/ page 'Banking Card Disputes & Chargebacks' card.",
    "variantANote": "Early-stage exploration — validating these use cases with banking & fintech teams.",
    "variantA": [
      "Chargeback evidence & response",
      "Customer dispute investigation",
      "Unauthorized transaction claims"
    ],
    "variantB": [
      {
        "title": "Chargeback evidence & response",
        "description": "ClaimSense assembles evidence packages and tracks card network deadlines automatically."
      },
      {
        "title": "Customer dispute investigation",
        "description": "ClaimSense organizes transaction data and flags discrepancies for faster resolution."
      },
      {
        "title": "Unauthorized transaction claims",
        "description": "ClaimSense routes fraud-flagged claims to investigation with full documentation trail."
      }
    ]
  },
  {
    "label": "Pharma",
    "status": "Cautious inclusion — Bayer scenario (internal Patient Access team vs. external hub provider) not yet confirmed",
    "confidence": "Likely",
    "confidenceNote": "Deliberately limited to 2 bullets and universal terminology, not the full 3-bullet format used elsewhere. 'Product complaint' is the standardized, globally-applicable term (confirmed via 'Product Complaint Specialist' job postings and GMP/regulatory SOP language) and is NOT US-specific, unlike Patient Access/Hub Services terminology (benefits verification, appeal letters), which research confirmed is structurally an almost exclusively American phenomenon — European markets use centralized national reimbursement systems instead. Do not add benefits verification, appeal letter, or hub services language to this label until the Bayer scenario (does Bayer have an internal Patient Access team, or do they outsource to a hub provider like CareMetx/AssistRx?) is confirmed. Aligned with the /use-cases/ page, which also avoids Patient Access language and uses 'Pharma Cold Chain & Distribution Claims' as a separate, narrower card.",
    "variantANote": "Scope intentionally limited to product complaint handling, pending confirmation of additional pharma use cases.",
    "variantA": [
      "Product complaint intake & triage",
      "Complaint investigation documentation"
    ],
    "variantB": [
      {
        "title": "Product complaint intake & triage",
        "description": "ClaimSense captures and classifies incoming product complaints, flagging cases that require regulatory escalation."
      },
      {
        "title": "Complaint investigation documentation",
        "description": "ClaimSense generates audit-ready investigation records to support compliance review."
      }
    ]
  }
]
```

---

## Render rule summary

| # | Label | Confidence | Render variant |
|---|---|---|---|
| 1 | Insurance | Certain | variantB |
| 2 | Industrial Equipment & Machinery Service | Certain | variantB |
| 3 | Consumer Electronics & Appliance Warranty | Certain | variantB |
| 4 | Logistics & Freight | Certain | variantB |
| 5 | Health Insurance | Likely | variantA |
| 6 | Banking & Fintech | Likely | variantA |
| 7 | Pharma | Likely | variantA |

Pravidlo: `confidence === "Certain"` → render `variantB` (název + popis), `variantANote` je `null`, nevykresluj nic navíc. `confidence === "Likely"` → render `variantA` (jen názvy, bez popisu), PLUS vykresli `variantANote` jako jednu krátkou větu NAD trojicí/dvojicí karet. Karty samotné (název) musí mít STEJNOU velikost a váhu fontu jako u `variantB` karet — žádný rozdíl v typografii mezi variantami, jen v množství textu.

**Výjimka u Pharma:** tento štítek má jen 2 odrážky místo standardních 3, na obou stranách (variantA i variantB) — to je záměr, ne chyba v datech. Pharma zůstává nejméně ověřeným štítkem v sadě (Bayer scénář nepotvrzen) a kratší obsah signalizuje opatrnější rozsah nabídky, dokud nebude potvrzeno víc.
