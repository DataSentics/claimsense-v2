---
name: bull-brand
description: "Apply Bull company brand guidelines (colors, fonts, logos, tone of voice) when building any visual asset — web pages, HTML presentations, dashboards, landing pages, or any UI. Use this skill whenever the user mentions Bull brand, Bull company, DataSentics brand, or asks to create any visual material that should follow Bull's corporate identity. Also use when the user references brand colors, brand fonts, or brand guidelines in the context of Bull or DataSentics."
---

# Bull Brand Guidelines Skill

You are building a visual asset for **Bull**, a global leader in HPC, AI and quantum computing (founded 1931). **DataSentics** is a subsidiary ("DataSentics, a Bull company"). Both brands share the same visual system.

Tagline: **Master your AI destiny**

## Colors

### Primary Colors (use these most)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Bull Orange** | `#FF5539` | 255, 85, 57 | Core brand color. Innovation, energy, trust. Use for primary CTAs, headings, accents, key highlights |
| **Dream in Blue** | `#002870` | 0, 40, 112 | Balance, depth, tech credibility. Use for dark backgrounds, secondary headings, footer areas |

### Orange Tints (lighter variations for backgrounds, cards, subtle accents)

| Hex | RGB |
|-----|-----|
| `#FF7761` | 255, 119, 97 |
| `#FF9280` | 255, 146, 128 |
| `#FFADA0` | 255, 173, 160 |
| `#FFE4DF` | 255, 228, 223 |

### Blue Tints

| Hex | RGB |
|-----|-----|
| `#7788F9` | 119, 136, 249 |
| `#A4AFFB` | 164, 175, 251 |

### Secondary Colors (for data viz, infographics, charts, accents)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Sunbeam** | `#FFB600` | 255, 182, 0 | Yellow accent — charts, key numbers |
| **Vitality** | `#00B290` | 0, 178, 144 | Green accent — charts, positive indicators |
| **Sovereign** | `#1C38F5` | 28, 56, 245 | Bright blue — charts, blog titles |
| **Infinity** | `#000000` | 0, 0, 0 | Black — text, strong contrast |

### Color Accessibility Rules
- Minimum contrast ratio: **4.5:1** for body text (WCAG standard)
- White text works on: Bull Orange, Dream in Blue, Sovereign, Vitality, Infinity
- Dark text on light tints (#FFE4DF, #FFADA0, #A4AFFB)
- Bull Orange text only on white or very light backgrounds
- When in doubt, test with a contrast checker

### CSS Custom Properties Template

```css
:root {
  /* Primary */
  --bull-orange: #FF5539;
  --dream-in-blue: #002870;

  /* Orange tints */
  --orange-tint-1: #FF7761;
  --orange-tint-2: #FF9280;
  --orange-tint-3: #FFADA0;
  --orange-tint-4: #FFE4DF;

  /* Blue tints */
  --blue-tint-1: #7788F9;
  --blue-tint-2: #A4AFFB;

  /* Secondary */
  --sunbeam: #FFB600;
  --vitality: #00B290;
  --sovereign: #1C38F5;
  --infinity: #000000;

  /* Semantic aliases */
  --color-primary: var(--bull-orange);
  --color-primary-dark: var(--dream-in-blue);
  --color-bg-light: var(--orange-tint-4);
  --color-text: var(--infinity);
  --color-text-on-dark: #FFFFFF;
}
```

## Typography

Bull uses a **dual-typeface system**:

### Tosh A — Display / Headlines
- **Role**: Headlines, titles, hero text, key claims, big brand statements
- **Weights**: Light (300), Medium (500), Black (900)
- **Best for**: Short, impactful text (1-10 words). Not for paragraphs.
- **Character**: Expressive, contemporary, bold personality

### Roboto — Body / UI Text
- **Role**: All body copy, UI text, long-form reading, captions, tables, forms
- **Weights**: Light (300), Regular (400), Medium (500), Bold (700), Black (900) — and many more
- **Character**: Neutral, professional, comfortable reading
- **Available from Google Fonts** — use this for easy loading

### Font Loading

For web assets, load Roboto from Google Fonts and Tosh A from local files:

```html
<!-- Roboto from Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
```

For Tosh A, the font files are in the skill at `assets/fonts/`. Copy the needed .woff2 files into your asset's font directory and declare @font-face:

```css
@font-face {
  font-family: 'Tosh A';
  src: url('./fonts/ToshA-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Tosh A';
  src: url('./fonts/ToshA-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Tosh A';
  src: url('./fonts/ToshA-Black.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
```

### Typography CSS

```css
body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: var(--infinity);
}

h1, h2, h3, .display-text {
  font-family: 'Tosh A', sans-serif;
}

h1 { font-weight: 900; } /* Tosh A Black */
h2 { font-weight: 500; } /* Tosh A Medium */
h3 { font-weight: 300; } /* Tosh A Light */
```

### Fallback
If Tosh A cannot be loaded (e.g. email, constrained environments), use Roboto Bold for headlines. For email specifically, use Verdana or Aptos as body font (not Roboto). Never introduce additional typefaces beyond these.

## Logo

### Logo Assets
Logo files are in the skill at `assets/logos/`. Use SVG for web, PNG for fallback.

| Variant | Path | When to use |
|---------|------|-------------|
| Bull Logo (color) | `assets/logos/Bull/Bull Logo/SVG/BULL_LOGO_COLOR_RGB.svg` | Default on light backgrounds |
| Bull Logo (white) | `assets/logos/Bull/Bull Logo/PNG/BULL_LOGO-WHITE_RGB.png` | On dark or colored backgrounds |
| Bull Logo (black) | `assets/logos/Bull/Bull Logo/SVG/BULL_LOGO_BLACK_RGB.svg` | When color is not available |
| Bull Logo + Baseline | `assets/logos/Bull/Bull Logo BASELINE/` | When tagline is needed |
| Bull Symbol only | `assets/logos/Bull/Bull Symbol/SVG/Bull_symbol_orange.svg` | Social media avatars, favicons, compact spaces |
| DataSentics + Bull | `assets/logos/DataSentics a Bull company/SVG/DataSentics_a_Bull_company_color.svg` | DataSentics-branded materials |
| DataSentics favicon | `assets/logos/DataSentics a Bull company/Favicon/SVG/DS_favicon_color.svg` | DataSentics web favicon |

### Logo Rules (strict)
- **Clear space**: Protective zone around logo = 2x the width/height of the square tile in the monogram. No text, imagery, or graphics may enter this zone.
- **Minimum size**: 15mm print / 43px digital
- **Never**: recolor, distort, stretch, reposition elements, add effects/shadows/outlines, swap colors, apply gradients, flip the tree, use the monogram as an emoji within text
- **Co-branding**: Bull logo always comes first, before partner logo. Use white Bull logo over partner's brand color.

### Tree Monogram Cropping
The tree monogram can be used as a decorative background element:
- Only one specific crop is authorized: **lower-right placement**, all 3 tiles must remain visible
- Opacity may be adjusted for text readability
- Can be placed on white, solid colors, patterns, or photography
- Alignment: either fit to width/height, or centered horizontally
- Position from center toward lower portion of layout

## Brand Patterns

The brand color palette reference is at `assets/patterns/Bull Approved Color Palette 012026.png`. Full-size pattern files are not bundled — use the CSS custom properties above to recreate pattern-style backgrounds.

## Tone of Voice

When writing copy for Bull materials, follow these principles:

- **Humble and purposeful**: Aware of responsibility, strong in convictions yet humble in expression
- **Visionary and collaborative**: Forward-looking, inspiring audiences to build what's possible
- **Empowering through sovereignty**: Encourage control, independence, autonomy. Bull is a catalyst, not a gatekeeper
- **Trustworthy and open**: Grounded in competence and transparency
- **Rooted in heritage**: Proud of European heritage and mission for sustainable global impact

Read `references/tone-of-voice.md` for the full brand story, elevator pitches, and manifesto text.

## Frontend Design Quality

When building web-based assets (HTML pages, dashboards, landing pages), read `references/frontend-design.md` for comprehensive design craft guidance covering layout, spacing, composition, typography systems, color theming, motion, accessibility, and visual verification.

Apply Bull brand tokens (colors, fonts, logos above) as the design system, but follow the frontend-design reference for **how** to use them well — spacing rhythm, visual hierarchy, component composition, and anti-patterns to avoid.

## Quick Start Checklist

When building any Bull-branded asset:

1. Set up CSS custom properties from the color palette above
2. Load Roboto from Google Fonts + Tosh A from local .woff2 files
3. Use Tosh A for headlines (short, impactful), Roboto for body text
4. Primary action elements in Bull Orange (#FF5539)
5. Dark sections / footers in Dream in Blue (#002870)
6. Light backgrounds use #FFE4DF (lightest orange tint) or white
7. Include Bull logo with proper clear space
8. Tree monogram as subtle background element (lower-right, all 3 tiles visible, adjustable opacity)
9. Check color contrast meets WCAG 4.5:1 for body text
10. Use brand patterns as decorative backgrounds where appropriate
