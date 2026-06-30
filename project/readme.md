# ACHI Design System

A brand & UI design system for the **Arkansas Center for Health Improvement (ACHI)** —
a nonpartisan, independent health policy center that, since 1998, has served as a
catalyst for improving the health of all Arkansans through evidence-based research,
public issue advocacy, and collaborative program development.

This system gives design agents the foundations, components, and screen recreations
needed to produce on-brand ACHI interfaces, publications, and assets.

---

## Company context

- **Who:** Arkansas Center for Health Improvement (ACHI), Little Rock, AR. Founded 1998
  (~25+ years). ~21–50 staff. President & CEO: Joseph W. Thompson, MD, MPH.
- **What:** Health policy research center — "we convert data into knowledge and insight
  to inform healthy choices and policies." Nationally recognized; founding member of the
  National Network of Public Health Institutes (NNPHI).
- **Three priorities (pillars):** Healthy Systems · Healthy Communities · Healthy Choices.
- **Surfaces / products:**
  - **achi.net** — marketing & research website (publications, blog, news releases,
    topic hubs, podcasts). *This is the primary product recreated in the UI kit.*
  - **Publications** — infographics, dashboards, reports, fact sheets, briefs.
  - **Podcasts** — *Wonks at Work* and *The Healthy Birthing Journey*.
  - **Arkansas All-Payer Claims Database (APCD)** — separate data product at
    arkansasapcd.net (not recreated; no detail available).

### Sources used
- `https://achi.net/` (home), `https://achi.net/about/` (mission/vision/values, priorities)
- `https://achi.net/our-priorities/healthy-communities/` — **source of confirmed brand
  colors** (teal `#16a0b3`, maroon `#762146`, mist `#e8f1f2`, embedded in page CSS).
- NNPHI member profile, LinkedIn, Facebook (tone & copy examples).
- The reader is **not** assumed to have access; URLs are recorded for retrieval. Real
  brand binaries (logos, illustrations, photos) could not be auto-imported — see
  `assets/README.md`.

---

## Content fundamentals

How ACHI writes. Match this voice in any copy produced for the brand.

- **Voice:** authoritative but accessible; nonpartisan, evidence-first, plain-spoken.
  Hopeful and solutions-oriented, **never** alarmist or sensational — even on grim data.
- **Person:** institutional **"we"** ("we convert data into knowledge…", "our work").
  Addresses the public/decision-makers in the third person; occasional direct "you" in
  consumer-safety tips ("These tips can help you and your family stay safe").
- **Headlines:** declarative, often data-led and specific.
  - *"Report: 44% of Labor and Delivery Units at Rural Arkansas Hospitals at Risk of Closing"*
  - *"Fireworks Injured 13,000 in U.S. in 2025"*
  - *"Status Quo Is Not the Future State of Health"* (manifesto register, used sparingly).
- **Casing:** Title Case for headlines and section labels; sentence case for body. Small
  uppercase **eyebrows/labels** ("PUBLICATIONS", "OUR PRIORITIES") recur above headings.
- **Numbers:** lead with concrete figures and always cite/contextualize
  ("down from 14,700 in 2024, according to the U.S. Consumer Product Safety Commission";
  "About 1 in 3 Arkansans have some kind of Medicaid coverage").
- **Vocabulary:** Arkansans, Arkansas-specific; policy/clinical terms used precisely
  (Medicaid, ARHOME, APCD, maternal & infant health, labor & delivery). Expands acronyms
  on first use.
- **Tone tags:** Nonpartisan · Evidence-first · Plain-spoken · Hopeful, not alarmist.
- **Emoji:** none. Do not use emoji in ACHI copy.
- **Hashtags:** used on social only (#MedicaidAwarenessMonth, #MaternalHealth) — not in
  publications or on-site copy.

---

## Visual foundations

The look: clean, trustworthy, **data-forward** public-health communication. Lots of
white space, a confident geometric headline face, and a cool blue/teal palette warmed by
a single maroon. Calm, never flashy.

### Color
- **Primary — Navy `#00558c`** *(estimated; harmonized to the confirmed palette — replace
  if the brand guide differs).* Used for primary actions, headers, footer, stat figures.
- **Accent — Teal `#16a0b3`** *(confirmed from site CSS).* The brand's signature spark:
  eyebrows, accent rules, links/CTAs, focus rings, selected states.
- **Secondary — Maroon `#762146`** *(confirmed).* Sparingly — newsletter band, a pillar,
  emphasis. Adds warmth and seriousness.
- **Mist `#e8f1f2`** *(confirmed).* Pale blue-gray section tint — the default "quiet"
  background that separates bands without hard lines.
- **Neutrals:** a cool, slightly blue gray ramp (`--achi-gray-*`) → ink `#16222e` for text.
  Never pure black.
- **Status:** green/amber/red/blue, each with a matching pale tint background.
- Full token set in `tokens/colors.css`; semantic aliases (`--brand-primary`,
  `--text-body`, `--surface-tint`, …) are the preferred API.

### Type
- **Display / headings — Montserrat**, 700/800, tight tracking (−0.02em). Confident,
  geometric, slightly condensed feel for big statements.
- **Body / UI — Source Sans 3**, 16px / 1.6. Highly legible at data-dense sizes.
- **Data / mono — IBM Plex Mono**, 600 for headline figures, dates, and tables.
- *Substitution flagged:* exact site fonts weren't retrievable; these are faithful
  Google-Fonts stand-ins. See `tokens/fonts.css`. Scale in `tokens/typography.css`.

### Layout & spacing
- 4px base grid (`--space-*`). Content max-width 1200px; reading width ~760px.
- Generous vertical rhythm — sections breathe (`--space-9`/`--space-10` band padding).
- Alternating white / mist `#e8f1f2` bands give structure without heavy dividers.
- Grid/flex with `gap` everywhere.

### Backgrounds & imagery
- **Photography-led:** documentary photos of Arkansans, clinicians, communities — often
  carrying a subtle **teal-blue tint** (their files are literally named "color-tint-teal-blue").
  Warm subjects, cool grade. No heavy filters or grain.
- **Hero:** full-bleed photo with a dark navy→teal gradient scrim for legible white text.
  (Recreated here as a navy→teal gradient placeholder pending real photos.)
- One flat vector "priorities" illustration exists; the brand is otherwise photo-first.
- **No** purple/blue tech gradients, no emoji cards, no colored-left-border cards.

### Corners, borders, shadows
- **Radii:** modest — 6px controls, 10px cards/inputs, 16px feature media, pill for tags.
- **Borders:** 1px cool-gray hairlines (`--border-subtle/default`). Cards often use a
  4px **top** accent border in a pillar color (top, not left).
- **Shadows:** soft, cool, low-spread, layered (`--shadow-sm/md/lg`). Elevation is gentle;
  cards lift slightly (`translateY(-3px)`) + deepen shadow on hover.

### Motion & states
- **Easing:** standard `cubic-bezier(0.4,0,0.2,1)`; calm fades/slides. **No bounce.**
- **Durations:** 120ms (hover), 200ms (base), 320ms (larger transitions).
- **Hover:** darker fill (primary→navy-800, accent→teal-700), outline buttons gain a
  navy border + faint tint; links go teal→navy + underline; cards lift.
- **Press:** subtle `translateY(1px)` on buttons. No scale-shrink.
- **Focus:** 3px teal ring at 40% (`--focus-ring`) on all interactive elements.
- **Transparency/blur:** minimal — used only in hero scrims. The brand favors solid,
  legible surfaces over glass.

### Eyebrow + rule motif
The recurring brand signature: a small uppercase **teal eyebrow**, a short **teal accent
rule** (56×4px, pill), then the display title. Codified in `.achi-eyebrow` / `.achi-rule`
and the `SectionHeading` component.

---

## Iconography

- **Original:** the WordPress/Elementor site uses **Font Awesome** for social glyphs and a
  simple magnifier for search. Those binaries weren't retrievable.
- **Substitution (flagged):** use **[Lucide](https://lucide.dev)** via CDN — stroke-based,
  2px, round caps/joins — which matches ACHI's thin, clean interface marks. Load:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  <i data-lucide="activity"></i><script>lucide.createIcons();</script>
  ```
- Style rules: line (not filled) icons, 2px stroke, currentColor, sized 16–24px, aligned to
  text. Use icons functionally (search, social, status, nav) — not decoratively.
- **No emoji.** No multicolor or 3D icon styles.
- See `assets/README.md` for the official logo/illustration URLs to swap in.

---

## Index / manifest

**Foundations**
- `styles.css` — global entry point (consumers link this one file; `@import` list only).
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`

**Specimen cards** (Design System tab) — in `guidelines/`
- Colors: primary · accent (teal/maroon) · neutrals & mist · status
- Type: display · body · scale · mono & eyebrow
- Spacing: scale · radii & shadows
- Brand: logo lockup · three pillars · voice

**Components** (`window.ACHIDesignSystem_cd4297`)
- `components/core/` — **Button**, **Tag**, **Badge**, **Input**, **Checkbox** (+radio), **Switch**
- `components/content/` — **SectionHeading**, **Stat**, **Callout**, **ArticleCard**, **Avatar**
- Each has `.jsx` + `.d.ts` + `.prompt.md`; a card per directory shows live states.

**UI kits**
- `ui_kits/website/` — interactive recreation of achi.net (home + publications). See its `README.md`.

**Assets**
- `assets/README.md` — logo/illustration URLs + icon substitution notes.

**Skill**
- `SKILL.md` — Agent-Skills-compatible entry point.

---

*Caveats:* primary navy and all three fonts are flagged substitutions; brand imagery and
the logo are placeholders. Supply the official brand guide, logo files, fonts, and photo
library to make this pixel-exact. Details in each section above and in `assets/README.md`.
