# ENG 2011: Media Literacy in the Humanities — e-portfolio

A GitHub Pages teaching portfolio and course proposal for **ENG 2011: Media Literacy in
the Humanities**, a proposed introductory undergraduate course.

Built as the final project for ENG 6813, which is why this repository is named
`ENG6813FinalPortfolio-Reflection`. ENG 2011 is the course being proposed.

**Live site:** https://kgsucf.github.io/ENG6813FinalPortfolio-Reflection/
*(available once Pages is enabled — see below)*

## Pages

| File | Section |
|---|---|
| `index.html` | Home / Course Vision |
| `overview.html` | Course Overview |
| `objectives.html` | Learning Objectives |
| `syllabus.html` | Syllabus & Weekly Course Map, plus grading |
| `signature-assignment.html` | Signature Assignment |
| `ai-policy.html` | AI Policy & Access |
| `artifacts.html` | Teaching Artifacts |
| `teaching-statement.html` | Teaching Statement |
| `404.html` | Not-found page |

Plain HTML and CSS. No build step, no framework, no external fonts or CDNs — the site
itself makes no third-party network requests. Edit the HTML directly.

One exception: the embedded `artifacts/ai-policy-cartoon.html` loads the Bungee and
Baloo 2 typefaces from Google Fonts, so the AI Policy page does reach out to
`fonts.googleapis.com`. It degrades to system fonts if that request is blocked. Self-host
the two fonts inside the artifact if you would rather the site call nothing external.

`assets/css/site.css` holds the whole design. The palette lives in the CSS custom
properties at the top of that file; change a value there and it updates everywhere.

## Enabling GitHub Pages

Pick **one** of these. They conflict with each other.

**Option A — the included workflow (default).** Merge to `main`.
`.github/workflows/pages.yml` runs, enables Pages, and publishes. If the enablement step
fails on a permissions error, set *Settings → Pages → Source* to **GitHub Actions** and
re-run the workflow from the Actions tab.

**Option B — deploy from a branch.** Set *Settings → Pages → Source* to **Deploy from a
branch**, `main` / `(root)`, and **delete `.github/workflows/pages.yml`**. Leaving it in
place will produce a failing workflow run on every push. `.nojekyll` is already present,
so the hand-written HTML is served as-is.

## Adding artifact screenshots

Artifact cards look for these files. When one is missing the card renders a styled
placeholder tile instead, so the site always looks finished. Add a file and it appears on
the next push — no code change needed.

| File | Screenshot of |
|---|---|
| `assets/point_taken.png` | https://kgsucf.github.io/PointTaken/ |
| `assets/tax_visualization.png` | https://kgsucf.github.io/ENG6813VisualAnalysis/tax-data-rhetoric.html |
| `assets/lincoln_explorer.png` | https://kgsucf.github.io/ENG6813AIforCodeandDigitalHumanities/ |

Roughly 1200×750 works well. The AI policy explainer needs no screenshot — it renders
live from `artifacts/ai-policy-cartoon.html`.

**Optional:** add `assets/og-image.png` (1200×630) and an
`<meta property="og:image" content="assets/og-image.png">` line to each page's `<head>` so
shared links preview with an image. Without it, previews show title and description only.

## Local preview

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Repository contents

- `artifacts/ai-policy-cartoon.html` — interactive AI policy explainer, embedded on the
  AI Policy page
- `artifacts/Bloom.html` — Bloom's taxonomy mapping of the learning objectives
- Course content in Markdown: `course_overview.md`, `learning_objectives.md`,
  `syllabus_summary.md`, `weekly_schedule.md`, `signature_assignment.md`, `ai_policy.md`,
  `grading_structure.md`, `teaching_statement.md`, `artifact_gallery.md`
- Design and planning notes: `portfolio_brief.md`, `claude_planning_prompt.md`

Note that the Markdown files are the editable record of the course design, but the site
does **not** generate from them. The HTML holds the live copy, so a change to
`course_overview.md` will not appear on the site unless `overview.html` is updated too.
