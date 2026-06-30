# ACHI assets

> **Status: placeholders / substitutions.** ACHI's real brand binaries (logo artwork,
> illustrations, documentary photography) could not be fetched into this project
> automatically. This file records where the originals live and what was substituted,
> so a maintainer with access can drop in the real files.

## Logo
ACHI uses an "ACHI" wordmark. This system recreates it as a CSS/text lockup
(see `guidelines/brand-logo.card.html` and `.wmark` in the website kit) with the brand
navy + a teal accent on the final "I".

Official artwork (replace the recreation when available):
- Header logo: `https://achi.net/wp-content/uploads/2018/01/Artboard-1@2x.png`
- Footer / reversed logo: `https://achi.net/wp-content/uploads/2018/01/Artboard-1@2x-1.png`
- Favicon / icon mark: `https://achi.net/wp-content/uploads/2017/05/cropped-ACHI_icon-270x270.jpg`

## Illustration & photography
ACHI's site leans on documentary photography (often tinted teal-blue) and a flat
"priorities" illustration. Originals seen on the site:
- Priorities illustration: `https://achi.net/wp-content/uploads/2024/10/ACHI-Priorities-Illustration-768x768.png`
- Tinted photo example: `https://achi.net/wp-content/uploads/2018/12/ACHI-photo-color-tint-teal-blue-food.png`
- Pillar icons: "choices", "communities", "systems" icon set (Elementor uploads, 2018).

Until real imagery is supplied, components fall back to a **teal→navy gradient**
placeholder (see `ArticleCard`, `.hero`, `.feature__media`).

## Icons
The live site uses Font Awesome (social glyphs) plus a magnifier for search, delivered
through its WordPress/Elementor theme — these binaries were not retrievable.

**Substitution:** use [Lucide](https://lucide.dev) via CDN for UI icons (stroke-based,
2px, round caps/joins) — it matches the clean, thin look of ACHI's interface marks.
The website kit ships an inline Lucide-style `search` glyph as an example.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="search"></i>
<script>lucide.createIcons();</script>
```

Emoji are **not** used in the ACHI brand. Don't introduce them.
