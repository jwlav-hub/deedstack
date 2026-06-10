# DEEDFLOW — Claude Code Project Instructions

## About DeedFlow

DeedFlow is a homeowner-controlled equity tokenization platform.
Homeowners tokenize their residential real estate equity, retain all tokens
(and their deed), then optionally pledge tokens to earn institutional-grade
fund returns — without debt, without deed transfer, without brokers.

**Three core use cases:**
1. Yield Generation — homeowner pledges tokens to fund; earns ~18–25% APY
2. Reverse Mortgage Replacement — homeowner sells tokens on own schedule
3. P2P Marketplace — low-fee alternative to 5–6% broker commissions

**Company:** Wyoming-incorporated. Regulatory path: Reg D 506(c) at launch.
**Fund:** Institutional-grade capital deployment, verified 5-year track record.
**Stage:** Pre-launch. Building MVP website and platform UI.

---

## Design System v3.0

### Personality
Tech-forward tokenization platform. Wyoming-rooted identity — state-level,
never city-specific. Light, airy, premium. Scales from consumer-facing warmth
(Year 1) to institutional precision (Year 3+). The mountain ridgeline is a
whisper in the background, never the foreground.

---

### Fonts
Import via Google Fonts in global CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@400;500&display=swap');
```

| Role | Font | Weight | Use |
|------|------|--------|-----|
| Display / H1 / H2 | Playfair Display | 700 / 600 | Hero, section headings, serif anchor |
| Body / UI / Labels | DM Sans | 400 / 500 / 300 | All body copy, buttons, navigation |
| Data / Mono / Code | DM Mono | 500 / 400 | ALL numbers, token IDs, data, code blocks, badges |

**Rule:** Serif for narrative. Sans for UI. Mono for every number and data point.

---

### CSS Variables — Paste into global stylesheet

```css
:root {
  /* Surfaces */
  --snow:          #FAFBFC;   /* page background */
  --frost:         #F2F5F7;   /* section bg / stat cards */
  --mist:          #E4E9ED;   /* borders / dividers */
  --cloud:         #CDD4DA;   /* disabled states */
  --white:         #FFFFFF;   /* card surfaces */

  /* Text */
  --obsidian:      #18242F;   /* nav bar bg / display type ONLY */
  --granite:       #2C3A47;   /* headings */
  --stone:         #5A6876;   /* body text */
  --slate:         #8A98A5;   /* captions / metadata */

  /* Pine — Primary action (evergreen) */
  --pine:          #285A44;   /* primary buttons / nav CTA */
  --pine-lt:       #3A7A5C;   /* links / H2 color / hover */
  --pine-pale:     #C4D9CF;   /* borders on tinted backgrounds */
  --pine-ghost:    #ECF4EF;   /* badge / tag backgrounds */

  /* Gold — YIELD & RETURNS ONLY. Never decorative. */
  --gold:          #B08A26;   /* yield figures on white/frost */
  --gold-lt:       #CCA84A;   /* yield accents on light bg */
  --gold-pale:     #EDD9A0;   /* yield card borders */
  --gold-ghost:    #FAF4E4;   /* yield card backgrounds */

  /* Timber — Data, mono type, accents (replaces teal entirely) */
  --timber:        #8B6E52;   /* mono data type / code */
  --timber-lt:     #A8876A;   /* accents / progress bars */
  --timber-pale:   #DFC9B3;   /* data cell borders */
  --timber-ghost:  #F7F0E8;   /* data cell backgrounds */

  /* Spacing */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-6:  24px;
  --space-8:  32px;
  --space-12: 48px;
  --space-20: 80px;

  /* Border Radius */
  --r-xs:   4px;
  --r-sm:   6px;
  --r-md:   10px;
  --r-lg:   14px;
  --r-xl:   20px;
  --r-pill: 999px;

  /* Motion */
  --t-fast:    150ms;
  --t-base:    200ms;
  --t-slow:    300ms;
  --t-reveal:  500ms;
  --ease-out:  cubic-bezier(0.2, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.4, 0, 0.2, 1.3);
}
```

---

### Color Semantics — STRICT

| Color | Meaning | Never use for |
|-------|---------|---------------|
| Pine | Trust, primary action, nav | Data display, yields |
| Gold | Yield figures, APY, returns | Decoration, branding, anything non-financial |
| Timber | Data precision, mono type, code | Actions, links |
| Obsidian | Nav bar background, display type | Content backgrounds |
| Stone | Body text | Headings |

---

### Typography Scale

```css
/* Display */
font-family: 'Playfair Display', serif;
font-size: clamp(2.5rem, 5vw, 3.75rem);
font-weight: 700;
letter-spacing: -0.025em;
line-height: 1.05;
color: var(--obsidian);

/* H1 */
font-family: 'Playfair Display', serif;
font-size: clamp(1.75rem, 3vw, 2.25rem);
font-weight: 600;
letter-spacing: -0.01em;
line-height: 1.2;
color: var(--granite);

/* H2 */
font-family: 'DM Sans', sans-serif;
font-size: clamp(1.1rem, 2vw, 1.375rem);
font-weight: 500;
letter-spacing: 0.01em;
line-height: 1.35;
color: var(--pine);

/* Body */
font-family: 'DM Sans', sans-serif;
font-size: 1rem;
font-weight: 400;
line-height: 1.75;
color: var(--stone);

/* Mono / Data */
font-family: 'DM Mono', monospace;
font-size: 0.875rem;
font-weight: 500;
letter-spacing: 0.04em;
color: var(--timber);

/* Label (uppercase) */
font-family: 'DM Sans', sans-serif;
font-size: 0.7rem;
font-weight: 500;
letter-spacing: 0.13em;
text-transform: uppercase;
color: var(--slate);
```

---

### Mountain Backdrop SVG

Reuse this SVG in hero sections and page headers.
Position absolute, bottom-right, opacity 0.055–0.07.

```html
<svg
  viewBox="0 0 700 120"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMaxYMax meet"
  style="position:absolute; bottom:0; right:0; width:100%; max-width:700px; height:30%; opacity:0.06; pointer-events:none; z-index:0;"
>
  <polyline
    points="0,120 80,70 140,85 220,28 290,58 360,10 430,48 510,22 580,50 650,30 700,55 700,120"
    fill="#2C3A47"
  />
  <polyline points="220,28 238,45 252,32 270,58" fill="none" stroke="#18242F" stroke-width="0.8"/>
  <polyline points="360,10 378,32 395,18 415,48" fill="none" stroke="#18242F" stroke-width="0.8"/>
  <polyline points="510,22 525,38 540,28 560,50" fill="none" stroke="#18242F" stroke-width="0.8"/>
</svg>
```

For obsidian (dark) nav sections, use `fill="#FAFBFC"` at `opacity:0.05`.

---

### Component Patterns

#### Nav Bar
```css
/* Always obsidian background */
background: var(--obsidian);
height: 60px;
padding: 0 2rem;
display: flex; align-items: center; justify-content: space-between;

/* Logo */
font-family: 'Playfair Display', serif;
font-weight: 700; font-size: 1.2rem;
color: var(--white);
/* "Flow" or accent word: color: var(--pine-lt) */

/* Links */
font-family: 'DM Sans', sans-serif;
font-size: 13px; color: var(--slate);
/* Active: color: var(--white); font-weight: 500 */

/* CTA button */
background: var(--pine);
color: var(--white);
border-radius: var(--r-sm);
padding: 8px 18px;
font-size: 13px; font-weight: 500;
```

#### Cards
```css
background: var(--white);
border: 1px solid var(--mist);
border-radius: var(--r-lg);
padding: 1.5rem;
/* Optional accent top border: border-top: 3px solid var(--pine) */
```

#### Primary Button
```css
background: var(--pine);
color: var(--white);
border: none;
border-radius: var(--r-md);
padding: 11px 22px;
font-family: 'DM Sans', sans-serif;
font-size: 14px; font-weight: 500;
transition: background var(--t-base) var(--ease-out);
/* Hover: background: var(--pine-lt) */
```

#### Yield / Gold Button
```css
background: var(--gold-ghost);
color: var(--gold);
border: 1px solid var(--gold-pale);
border-radius: var(--r-md);
padding: 11px 22px;
font-family: 'DM Sans', sans-serif;
font-size: 14px; font-weight: 500;
```

#### Stat Card
```css
background: var(--frost);
border-radius: var(--r-md);
padding: 12px 16px;

/* Value */
font-family: 'Playfair Display', serif;
font-size: 1.5rem; font-weight: 700;
color: var(--granite);
/* Yield value: color: var(--gold) */
/* Positive value: color: var(--pine) */

/* Label */
font-size: 10px; font-weight: 500;
letter-spacing: 0.08em; text-transform: uppercase;
color: var(--slate);
margin-top: 3px;
```

#### Badge / Status Tag
```css
font-family: 'DM Mono', monospace;
font-size: 10px; letter-spacing: 0.06em;
padding: 3px 9px; border-radius: var(--r-xs);
/* Active: bg pine-ghost, border pine-pale, color pine */
/* Yielding: bg gold-ghost, border gold-pale, color gold */
/* Tokenized: bg timber-ghost, border timber-pale, color timber */
/* Pending: bg frost, border mist, color slate */
```

#### Form Input
```css
background: var(--white);
border: 1.5px solid var(--mist);
border-radius: var(--r-md);
padding: 10px 14px;
font-family: 'DM Sans', sans-serif;
font-size: 15px; color: var(--granite);
/* Focus: border-color: var(--pine-pale); outline: none */
```

#### Token Equity Card (main data card)
```css
/* Top accent bar */
border-top: 3px solid;
border-image: linear-gradient(90deg, var(--pine), var(--timber-lt), var(--gold-lt)) 1;

/* Progress bar */
background: var(--mist); height: 4px; border-radius: 2px;
/* Fill: background: linear-gradient(90deg, var(--pine), var(--timber-lt)) */
```

---

### Design Rules — Non-Negotiable

1. **No dark backgrounds on content pages.** `--obsidian` = nav bar only.
2. **Gold = yield only.** Never use gold for decoration, branding, or non-financial UI.
3. **No teal anywhere.** The timber ramp fully replaces teal.
4. **Page backgrounds = `--snow`.** Cards = `--white`. Sections/stats = `--frost`.
5. **Mountain SVG opacity max 7%.** It should be felt, not seen.
6. **No crypto aesthetics.** No glowing nodes, purple gradients, blockchain diagrams, coin icons.
7. **All numbers in DM Mono.** Every financial figure, token count, percentage, date.
8. **No location specificity beyond Wyoming** in copy or imagery. No city names.
9. **Serif for narrative storytelling. Sans for UI. Never swap these roles.**
10. **Generous whitespace.** This is premium — don't crowd it.

---

### Photography & Imagery Direction

- Wyoming mountain landscapes: high-contrast, slightly desaturated, golden hour
- Timber-frame architecture and natural materials
- Real homes (not renders), owner-occupied, lived-in warmth
- Data visualization: dark canvas with pine/timber/gold lines, minimal
- **Never use:** stock handshakes, glowing blockchain graphics, crypto coins,
  purple gradient "tech" backgrounds, generic fintech imagery

---

### Voice & Tone

**Year 1 (consumer):** Warm, direct, Wyoming plainspoken. Principled.
**Year 3+ (institutional):** Precise, performance-driven. Still no jargon.

**Always:**
- "Your yield" before "our platform"
- "Your deed" before "our tokens"
- Lead with homeowner benefit, not technology
- Short sentences. Active voice. No passive constructions.

**Never:**
- "Leverage our innovative blockchain ecosystem"
- "Disrupt traditional real estate paradigms"
- "Web3-native DeFi liquidity rails"
- City-specific references (Wyoming yes, specific towns no)

---

### Site Architecture (MVP)

```
/                   — Hero + 3 use cases + how it works + CTA
/how-it-works       — Step-by-step tokenization explainer
/yield              — Fund strategy, track record, returns
/wyoming            — Regulatory advantage, state context
/about              — Team, mission, anti-corporate stance
/dashboard          — (authenticated) Token portfolio view
/calculator         — Equity yield calculator (interactive)
```

---

### Tech Stack (recommended)

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS with CSS custom properties from this file
- **Fonts:** Google Fonts (Playfair Display + DM Sans + DM Mono)
- **Animations:** Framer Motion for page reveals
- **Charts:** Recharts or D3 for yield/portfolio visualizations
- **Domain:** TBD (deedflow.com taken; checking yielddeed.com, deedflow.co, fracdeed.com)
- **Hosting:** Vercel
- **Auth:** Clerk or Auth.js for dashboard
- **Blockchain:** TBD (ERC-1400 / ERC-3643 security token standard)

---

### Context from Founders

- Wyoming-incorporated; Reg D 506(c) launch targeting accredited investors
- Fund manager has verified 5-year track record, 25%+ annual returns, very low risk
- Platform is explicitly anti-corporate home ownership — the ethical framing matters
- Three use cases: yield generation, reverse mortgage replacement, P2P marketplace
- Regulatory white paper and business architecture white paper exist
- Design must scale from Year 1 consumer warmth to Year 3+ institutional precision
- Do not reference Jackson Hole or any specific Wyoming city in copy
