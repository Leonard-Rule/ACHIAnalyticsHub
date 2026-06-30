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

## Setup (one time)

### 1. Create the GitHub repo

```bash
git init
git remote add origin https://github.com/YOUR_ORG/achi-hub.git
git add .
git commit -m "Initial scaffold"
git push -u origin main
```

### 2. Connect to Netlify

1. Log in to netlify.com → "Add new site" → "Import an existing project"
2. Select your GitHub repo
3. Build settings:
   - Build command: *(leave blank)*
   - Publish directory: `site`
4. Deploy

### 3. Enable Netlify Identity (for CMS auth without requiring GitHub accounts)

In your Netlify site settings:
1. Go to **Identity** → Enable Identity
2. Set Registration to **Invite only**
3. Go to **Identity → Services** → Enable **Git Gateway**
4. In `admin/config.yml`, change:
   ```yaml
   backend:
     name: git-gateway   # instead of github
   ```
5. Invite team members via the Netlify Identity tab

### 4. Configure GitHub Actions deploy secrets

In your GitHub repo → Settings → Secrets → Actions:
- `NETLIFY_AUTH_TOKEN` — from Netlify: User settings → Applications → Personal access tokens
- `NETLIFY_SITE_ID` — from Netlify: Site settings → General → Site ID

---

## How to update content

### Option A — Via the CMS (recommended for non-developers)

Go to `https://your-site.netlify.app/admin`

- Log in with your Netlify Identity account
- Browse sections, edit rule text, change badge types, add notes
- Save creates a draft; Sarah reviews and publishes via the editorial workflow
- Publish triggers an automatic redeploy

### Option B — Direct file edit on GitHub (for developers)

1. Navigate to the file in GitHub (e.g., `content/sections/02-sql-best-practices.json`)
2. Click the pencil icon to edit
3. Make changes and commit
4. If pushing directly to `main`: site redeploys automatically
5. If opening a PR: a preview deploy is created for review

### Option C — Clone, edit locally, push

```bash
git clone https://github.com/YOUR_ORG/achi-hub.git
cd achi-hub
# edit files
git add .
git commit -m "Update: [describe what changed]"
git push
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

## Content schema reference

### Rule types
| type | Visual treatment | When to use |
|------|-----------------|-------------|
| `rule` | Default card | Standard guidelines |
| `danger` | Red left border | Silently breaks things |
| `warning` | Amber left border | Easy to miss / subtle |
| `tip` | Teal left border | Best practices, positive |
| `placeholder` | Dashed border | Content not yet written |

### Snippet status values
| status | Meaning |
|--------|---------|
| `active` | Has a real `.sas` file, renders code |
| `placeholder` | No code yet, shows contribute button |
| `flagged` | Code may be outdated, shows warning |
| `deprecated` | No longer used, hidden from site |

---

## Adding AI features (future)

The content JSON files are already structured as a knowledge base.
When ready to add an AI chat layer:

1. At build time (or on load), concatenate all section JSONs into a
   single `knowledge-base.json` file
2. Pass it as system prompt context to the Anthropic API
3. Add a chat interface component to `site/index.html`
4. The AI answers questions grounded in your team's actual standards

The clean content/presentation separation means the AI layer is additive —
no refactoring required.

---

## Local development

No build step needed. Run a local static server from the `site/` directory:

```bash
# Python (built in)
cd site && python3 -m http.server 8080

# Or use VS Code Live Server extension
# Or use npx serve
npx serve site -l 8080
```

Then open `http://localhost:8080`.

A simple approach for local dev:
```bash
# From repo root
cd site && python3 -m http.server 8080
# Then open http://localhost:8080/site/
```

---

## Team contacts

- Content authority: Sarah (sc) — reviews all rule changes before publish
- Technical owner: Leo — repo admin, deploy config, AI features
- Questions / suggestions: open a GitHub Issue with label `question`
