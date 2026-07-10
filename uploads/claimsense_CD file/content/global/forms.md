# Form inventory — content captured, implementation still required

## 1. Demo request form

Appears on Home and Features.

Fields:
- Full Name *
- Work Email *
- Company Name *
- Your Role *
  - Claims Manager
  - Operations Director
  - CTO / IT Leader
  - CEO / Founder
  - Other
- Monthly Claims Volume
- Anything else you'd like us to know?

Submit label: `Request Demo`

Consent text: `By submitting this form, you agree to our Privacy Policy. We'll never share your information.`

**Required before rebuild:** endpoint/CRM destination, required-field validation, email validation, success/error state copy, spam prevention, consent/timestamp handling, analytics event, and routing behaviour of all `Book a Demo` CTAs.

## 2. Pricing request form

Appears on Pricing.

Fields:
- Name *
- Email *
- Company *
- Package of interest *
  - Analytical Agent
  - Full AI-native Claim Platform
  - Not sure yet
- Tell us about your needs

Submit label: `Request a Custom Quote`

**Required before rebuild:** same integration and validation decisions as Demo request form.

## 3. Partner application form

Appears on Partners.

Fields:
- First Name *
- Last Name *
- Work Email *
- Company *
- Website
- Partner Type *
  - System Integrator
  - Consulting Firm
  - Technology Partner
  - Reseller
  - Other
- Country *
- Tell us about your business

Submit label: `Submit Partner Application`

## 4. Partner resource-gate application

Appears on Help.

Fields:
- First Name *
- Last Name *
- Work Email *
- Company *
- Partner Type *
  - System Integrator
  - Technology Partner
  - Consulting Partner
  - Reseller
  - Other
- Tell us about your interest

Submit label: `Apply to Partner Program`

**Decision required:** keep this distinct from the Partners form, or route it into a shared partner-application form with a hidden source field.

## 5. Career application form

Appears on Careers.

Fields:
- First Name *
- Last Name *
- Email *
- Phone
- LinkedIn Profile
- Role of Interest *
  - Claims Domain Expert
  - Insurance Consultant
  - Implementation Consultant
  - Other / Open Application
- Years of Experience in Insurance/Claims *
  - 0-2 years
  - 3-5 years
  - 6-10 years
  - 10+ years
- Tell us about yourself *

Submit label: `Submit Application`

Consent text: `By submitting, you agree to our privacy policy and consent to being contacted about opportunities.`

**Required before rebuild:** recruitment data owner, retention policy, privacy notice target, upload/CV policy, notification workflow and success/error states.
