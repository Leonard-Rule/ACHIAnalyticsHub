---
name: achi-design
description: Use this skill to generate well-branded interfaces and assets for ACHI (Arkansas Center for Health Improvement), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view. If working on production code, you can
copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — full design guide: company context, content voice, visual foundations,
  iconography, and a file index. **Start here.**
- `styles.css` — single global stylesheet to link; pulls in all tokens + fonts.
- `tokens/` — CSS custom properties (colors, type, spacing, effects) + `@font-face`/imports.
- `guidelines/*.card.html` — foundation specimens (colors, type, spacing, brand).
- `components/` — React primitives (`Button`, `Tag`, `Badge`, `Input`, `Checkbox`,
  `Switch`, `SectionHeading`, `Stat`, `Callout`, `ArticleCard`, `Avatar`). Each has a
  `.prompt.md` with usage.
- `ui_kits/website/` — interactive recreation of achi.net (home + publications).
- `assets/README.md` — official logo/illustration URLs + icon (Lucide) substitution.

## Using the components
Components are bundled to `window.ACHIDesignSystem_cd4297`. In an HTML file: link
`styles.css`, load React + `_ds_bundle.js`, then
`const { Button, Stat } = window.ACHIDesignSystem_cd4297;` inside a Babel script. See any
`components/**/*.card.html` for the exact pattern.

## Brand in one breath
Nonpartisan, evidence-first, hopeful (never alarmist). Navy primary, **teal accent**
(`#16a0b3`), maroon for warmth, mist `#e8f1f2` tints; Montserrat headlines + Source Sans 3
body + IBM Plex Mono figures; photography-led with a teal-blue grade; the teal
eyebrow + accent-rule + title motif; calm fades, no bounce, no emoji.

> Flagged substitutions: primary navy + all fonts are stand-ins; logo & imagery are
> placeholders. Swap in official brand assets when available.
