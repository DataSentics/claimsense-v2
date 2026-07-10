# Cursor build prompt — per-page template

Use this after placing the folder at `content/claimsense/`.

```text
Implement a Bull-branded redesign of \\\[ROUTE].

Read:
- content/claimsense/content/pages/\\\[PAGE].md
- content/claimsense/content/global/forms.md (when the page contains a form)
- content/claimsense/requirements/interaction-and-data-gaps.md
- content/claimsense/requirements/product-and-brand-brief.md
- design/bull/Bull\\\_design\\\_system.md
- .cursor/rules/bull-brand.mdc
- .cursor/rules/bull-taste-override.mdc

Rules:
1. Preserve all customer-facing content, factual claims, required form fields,
   CTA intent, legal/consent copy and information hierarchy.
2. Do not reuse legacy CSS, layout, font sizes, spacing, breakpoints or component structure.
3. Use Bull design patterns to improve hierarchy, readability and conversion.
4. Do not invent calculator logic, form endpoints, assets, compliance claims,
   package details or link targets marked as unresolved.
5. For every unresolved P0/P1 item, implement an explicit typed interface or TODO
   boundary rather than hard-coding an assumption.
6. Ensure semantic headings, keyboard navigation and mobile behavior.
7.  Where it explicitly conflicts with older page content, the product-and-brand brief takes precedence for product positioning, Bull brand treatment, and page-level visual requirements.
```

