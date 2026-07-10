# Public sitemap and page intent

| Route | Page | Primary job | Status |
|---|---|---|---|
| `/` | Home | Explain the platform, establish proof and drive a demo request | content-ready |
| `/features/` | Features | Explain platform capabilities and deployment | content-ready + demo form integration needed |
| `/architecture/` | Architecture | Explain deployment and technical layers | content-ready |
| `/use-cases/` | Use Cases | Demonstrate industry breadth; route to consultation | content-ready |
| `/implementation/` | Implementation | Explain deployment plan and de-risk adoption | content-ready |
| `/our-story/` | Our Story | Establish founder/team credibility | content-ready |
| `/pricing/` | Pricing | Compare packages and capture quote demand | needs form integration |
| `/business-case/` | Business Case | Quantify ROI and drive a demo/consultation | needs-functional-spec: calculator |
| `/faq/` | FAQ | Resolve purchase objections and route to demo/email | content-ready |
| `/partners/` | Partners | Recruit partners and capture applications | needs form integration |
| `/careers/` | Careers | Recruit candidates and capture applications | needs form integration |
| `/help/` | Resources & Partner Access | Gate partner resources and route users to partner/demo paths | needs form integration |

## Header information architecture

- Home → `/`
- Product → dropdown/menu containing:
  - Features → `/features/`
  - Architecture → `/architecture/`
  - Use Cases → `/use-cases/`
  - Implementation → `/implementation/`
- Our Story → `/our-story/`
- Pricing → `/pricing/`
- Business Case → `/business-case/`
- Primary CTA: Book a Demo → currently appears to route/scroll to the demo conversion area; exact target behaviour must be confirmed in source code.

## Design freedom

The current navigation hierarchy is a content requirement. The menu interaction pattern, desktop/mobile treatment, order of visual emphasis and placement of CTA can be redesigned in Bull style.
