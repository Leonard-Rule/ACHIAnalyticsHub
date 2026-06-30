# UI Kit — ACHI.net (marketing & research website)

High-fidelity recreation of the public ACHI website (achi.net), built entirely from
ACHI design-system primitives.

## Open
`index.html` — interactive. Click **Publications** in the nav to switch to the
filterable listing; the topic chips filter live. The **Topics** nav item opens a
dropdown. The logo returns Home.

## Screens / sections
- **SiteChrome.jsx** — utility bar (latest update + social), sticky primary nav with
  Topics dropdown + search, and the dark navy footer.
- **HomePage.jsx** — hero (gradient stand-in for ACHI's full-bleed photo), navy stat
  band, featured publication, latest-research 3-up grid, three-pillars, newsletter CTA.
- **PublicationsPage.jsx** — library header, topic filter chips, publication grid, pager.

## Composition
Screens consume DS components: `Button`, `Tag`, `SectionHeading`, `Stat`, `ArticleCard`.
Page-specific layout/CSS lives in `index.html`. The JSX files are **not** compiled into
the bundle — they load as Babel scripts and read primitives from
`window.ACHIDesignSystem_cd4297`.

## Caveats
- Hero / feature imagery uses brand-gradient placeholders. ACHI uses full-bleed
  documentary photography with a teal-blue tint — drop real photos into `.hero` /
  `.feature__media` when available.
- Social icons are text labels here; wire to Lucide or the official icon set (see
  `/assets/README.md`).
