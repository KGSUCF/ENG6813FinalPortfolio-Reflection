# ENG 2011: Media Literacy in the Humanities — e-portfolio

A GitHub Pages teaching portfolio and course proposal for **ENG 2011: Media Literacy in
the Humanities**, a proposed introductory undergraduate course.

Built as the final project for ENG 6813, which is why this repository is named
`ENG6813FinalPortfolio-Reflection`. ENG 2011 is the course being proposed.

**Live site:** https://kgsucf.github.io/ENG6813FinalPortfolio-Reflection/

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

Plain HTML and CSS. No build step, no framework, no external fonts or CDNs — **the site
makes no third-party network requests at all**. Edit the HTML directly.

The AI policy cartoon uses Bungee and Baloo 2, both served from `assets/fonts/` rather
than Google Fonts, so no visitor IP is sent to a third party and the artwork keeps its
intended look on networks that block Google. Both faces are SIL Open Font License 1.1,
which permits redistributing them in this repository.

`assets/css/site.css` holds the whole design. The palette lives in the CSS custom
properties at the top of that file; change a value there and it updates everywhere.

## Enabling GitHub Pages

Pick **one** of these. They conflict with each other.

**Option A — the included workflow (in use).** *Settings → Pages → Source* is set to
**GitHub Actions**, and `.github/workflows/pages.yml` publishes on every push to `main`.
Nothing else is needed.

The workflow's `enablement: true` is meant to switch Pages on by itself, but the
automatic token is not permitted to create a Pages site that has never existed — it
fails with *"Resource not accessible by integration."* Setting the Source manually once,
as above, is what fixed it. Worth knowing if this is ever set up again from scratch.

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
| `assets/ai_policy_cartoon.png` | the explainer — optional, gallery card only |

Any aspect ratio works. Cards fit the whole image into a 4:3 frame without cropping.

The AI Policy **page** needs no screenshot — it renders the explainer live from
`artifacts/ai-policy-cartoon.html`.

`assets/og-image.png` (1200×630) is the card shown when a link to this site is pasted
into Slack, Teams, LinkedIn, Canvas, or a message. It is a rendered screenshot, not a
photo — the source that produced it is a small HTML page using the site palette, so it can
be regenerated at any size if the title or tagline ever changes.

## Local preview

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Repository contents

- `artifacts/ai-policy-cartoon.html` — interactive AI policy explainer, embedded on the
  AI Policy page
- Course content in Markdown: `course_overview.md`, `learning_objectives.md`,
  `syllabus_summary.md`, `weekly_schedule.md`, `signature_assignment.md`, `ai_policy.md`,
  `grading_structure.md`, `teaching_statement.md`, `artifact_gallery.md`
- Design and planning notes: `portfolio_brief.md`, `claude_planning_prompt.md`

Note that the Markdown files are the editable record of the course design, but the site
does **not** generate from them. The HTML holds the live copy, so a change to
`course_overview.md` will not appear on the site unless `overview.html` is updated too.
