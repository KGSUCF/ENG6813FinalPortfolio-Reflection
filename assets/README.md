# Assets folder

Screenshots for the artifact cards on `artifacts.html`. Filenames must match exactly —
the cards look for these specific paths.

When a file is absent, the card falls back to a styled placeholder tile, so the site is
never broken by a missing screenshot. Add the file and it takes over automatically.

## Needed

| File | Screenshot of |
|---|---|
| `point_taken.png` | https://kgsucf.github.io/PointTaken/ |
| `tax_visualization.png` | https://kgsucf.github.io/ENG6813VisualAnalysis/tax-data-rhetoric.html |
| `lincoln_explorer.png` | https://kgsucf.github.io/ENG6813AIforCodeandDigitalHumanities/ |

Roughly 1200×750 (the cards crop to 16:10, so anything near that ratio works).

The AI policy explainer does **not** need a screenshot — it renders live from
`artifacts/ai-policy-cartoon.html`.

## Optional

`og-image.png` (1200×630) for social link previews. See the main README for the one
`<meta>` line to add alongside it.

The additional-experiments cards on `artifacts.html` are text-only by design and take no
images.

## Also here

- `css/site.css` — the entire site design
- `js/artifact-media.js` — the screenshot placeholder fallback
