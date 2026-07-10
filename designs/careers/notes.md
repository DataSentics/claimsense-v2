# ClaimSense Careers page — design notes

> Route: `/careers/` — linked from the footer (Company).
> Status: `needs-functional-spec` | `approval_required: open roles, employment conditions, recruitment privacy and application workflow`
> Primary conversion: **Submit Application**

---

## Visual system
Consistent with the site: Tosh A + Roboto, Bull Orange `#FF5539` / Dream-in-Blue `#002870`, warm + white sections, dark navy `#0a1b3d` for the application form. Header CTA reads "View Open Roles".

## Layout decisions
- **Hero** — "We're Hiring" eyebrow, H1, both intro paragraphs verbatim, dual CTA.
- **Why Join ClaimSense?** — subhead + 4 reason cards (EU-Wide Growth / Cutting-Edge AI / Real Impact / Career Growth), each with a small brand-palette icon, verbatim.
- **Open Positions** — subhead + 3 role rows (Claims Domain Expert / Insurance Consultant / Implementation Consultant), each with description, Full-time + Remote (EU) tags, and an "Apply Now" button. Verbatim.
- **Apply to Join Us** — Career application form, verbatim fields from `forms.md` (First/Last name, Email, Phone, LinkedIn, Role of Interest, Years of Experience, Tell us about yourself), verbatim consent line, submit "Submit Application".
- Footer "Careers" link wired to this page across all pages; Careers marked active here.

## Enhancement
- **Role pre-fill** — clicking "Apply Now" on a role scrolls to the form and pre-selects that role in the "Role of Interest" dropdown (the source `Required` note asks to "pre-select the application field"). Implemented as a controlled select; flagged as enhancement pending confirmation of the final apply flow (anchor vs detail page vs ATS).

## Section order
Hero → Why Join → Open Positions → Apply → Footer. Content file order preserved.

---

## NEEDS-APPROVAL items
1. **Open roles** — confirm all three listed roles are still open before publish.
2. **Employment conditions** — "Full-time · Remote (EU)" terms for each role.
3. **Recruitment privacy** — privacy notice target for the consent line.

## FUNCTIONAL-SPEC NEEDED items
1. **Career application form** — recruitment data owner, retention policy, privacy notice target, CV/upload policy (no file upload field in the source spec — confirm if needed), notification workflow, success/error states. Fields verbatim from `forms.md`.
2. **Apply flow decision** — source asks whether roles lead to anchors, a pre-selected application field (implemented), a detail page, or an ATS. Confirm the canonical approach.
3. **"View Open Roles" / CTA targets** — currently scroll on-page.

## Content gaps
- No CV/resume upload field specified in `forms.md`; not added. Confirm upload policy.
- No team photos / office imagery supplied; cards are typographic with icons (no filler).
