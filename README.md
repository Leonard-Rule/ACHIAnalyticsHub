# ACHI Analyst Reference Hub

Internal reference site for the ACHI analytics team. Covers SAS coding
standards, SQL best practices, claims logic, and project-specific guidance.

## How it works

Content lives in JSON files and `.sas` snippet files in `/content/`.
The site (`/site/`) is a static HTML/JS shell that loads and renders
those files at runtime. **No content is hardcoded in the site files.**

To update a rule: edit the JSON. To add a snippet: add a `.sas` file
and register it in `manifest.json`. The site auto-redeploys on push to `main`.

---

## Repository structure

```
achi-hub/
├── content/
│   ├── sections/           ← Reference content (one JSON per section)
│   │   ├── 01-code-structure.json
│   │   ├── 02-sql-best-practices.json
│   │   └── ...
│   ├── projects/
│   │   └── all-projects.json    ← Project-specific checklists
│   └── snippets/
│       ├── manifest.json        ← Index of all snippets
│       ├── claim-pull-pattern.sas
│       └── ...
├── site/
│   ├── index.html          ← Site shell (no hardcoded content)
│   ├── app.js              ← Rendering engine
│   └── styles.css          ← Your design system goes here
├── admin/
│   ├── index.html          ← Decap CMS editor UI
│   └── config.yml          ← CMS schema definition
├── .github/
│   └── workflows/
│       └── deploy.yml      ← Auto-deploy + JSON validation on push
└── netlify.toml            ← Netlify build/redirect config
```

---

## How to add a new code snippet

1. Create the `.sas` file in `content/snippets/`:
   ```
   content/snippets/my-new-snippet.sas
   ```

2. Add an entry to `content/snippets/manifest.json`:
   ```json
   {
     "id": "my-new-snippet",
     "title": "Human-readable title",
     "file": "my-new-snippet.sas",
     "language": "sas",
     "section_ref": "section-id/subsection-id",
     "status": "active",
     "tags": ["relevant", "tags"]
   }
   ```

3. Reference it in a section JSON using `"snippet_ref": "my-new-snippet"` on any rule.

4. Commit and push — site updates automatically.

---

## How to flag a rule as outdated

### Via the site
Click the flag icon on any rule card. This opens a pre-filled GitHub Issue.

### Via GitHub Issues directly
Open an issue with:
- Title: `Flag: [rule name]`
- Label: `outdated`
- Describe what's wrong and what the correct guidance should be

Sarah reviews flagged issues and updates the JSON accordingly.

---

## How to add a new section

1. Create a new JSON file in `content/sections/`:
   - Follow the numbering pattern: `13-new-section.json`
   - Copy the structure from an existing section file
   - Set a unique `id`, `title`, and `order`

2. Add a corresponding entry in `site/app.js` under the `filenames` array
   in the `loadSections()` function.

3. Commit and push.

---
