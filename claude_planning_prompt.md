# Claude Code Planning Mode Prompt

I have a GitHub repository for my final course e-portfolio. I want you to help me build a GitHub Pages site for a proposed undergraduate course:

**ENG 2011: Media Literacy in the Humanities**

Please work in planning mode first. Do not edit files until you have proposed a clear plan and I approve it.

## Source of truth

Use the following files as the current source of truth:

- `portfolio_brief.md`
- `course_overview.md`
- `learning_objectives.md`
- `syllabus_summary.md`
- `weekly_schedule.md`
- `signature_assignment.md`
- `ai_policy.md`
- `grading_structure.md`
- `artifact_gallery.md`
- `teaching_statement.md`
- `final_reflection_notes.md`

Older weekly submissions may be present later, but they are background only. Do not turn every weekly submission into a separate page unless I specifically ask. This portfolio should present the current course design, not a chronological archive.

## Goal

Build a polished, accessible GitHub Pages e-portfolio that presents this course as a coherent teaching portfolio and course proposal. It should be useful to a hiring committee, a faculty reviewer, or prospective students.

## Required sections

Create a site with these sections or pages:

1. Home / Course Vision
2. Course Overview
3. Learning Objectives
4. Syllabus & Weekly Course Map
5. Signature Assignment
6. AI Policy & Access
7. Teaching Artifacts
8. Teaching Statement
9. Final Reflection placeholder

## Design style

Use a warm academic, accessible, lightly playful style. Please use:
- warm ivory or soft paper background
- deep plum, purple, or indigo accents
- muted gold or warm highlight color
- readable typography with strong contrast
- clean navigation
- card-based artifact sections
- callout boxes for teaching principles
- responsive design for desktop and mobile

Avoid:
- dense walls of text
- generic corporate templates
- visual clutter
- excessive animation
- making every artifact equally prominent

## Artifact guidance

Feature these teaching artifacts:

1. **Point Taken**
   - Instructor-created fallacy game for Week 4.
   - Students play it, but they are not expected to build anything similar.

2. **1% Tax Visualization**
   - Use as the main data-rhetoric / same-data-different-framing example.
   - Prefer this over the Vietnam visualization.

3. **Lincoln Speeches Explorer**
   - Use as a digital humanities / public-domain corpus / Claude Code example.

4. **AI Policy Cartoon**
   - Must be included prominently in the AI Policy & Access section.

Optional smaller/additional artifacts:
- Pulitzer photo visual analysis
- fairy-tale Voyant analysis
- guitar persuasion Artifact
- Friends persuasion Artifact
- Vietnam visualization
- Bloom Taxonomy visualization: optional local artifact at `artifacts/bloom.html`; do not feature on the main page unless it fits naturally in the Learning Objectives section.

For missing artifact links or screenshots, create clear placeholders and tell me what I need to add.

## Artifact links and screenshots

Use these links when creating the Teaching Artifacts section. If a screenshot is also available in the `assets/` folder, use the screenshot as the card image and the link as the button.

### Point Taken
Link: https://kgsucf.github.io/PointTaken/
Screenshot filename, if available: `assets/point_taken.png`

### 1% Tax Visualization
Link: https://kgsucf.github.io/ENG6813VisualAnalysis/tax-data-rhetoric.html
Screenshot filename, if available: `assets/tax_visualization.png`

### Lincoln Speeches Explorer
Link: https://kgsucf.github.io/ENG6813AIforCodeandDigitalHumanities/
Screenshot filename, if available: `assets/lincoln_explorer.png`

### AI Policy Cartoon
Link: https://claude.ai/public/artifacts/d1bc1f84-4806-4940-a5e2-b578754683ed
Screenshot filename, if available: `assets/ai_policy_cartoon.png`
Note: This is a Claude public artifact link. If embedding does not work, link to it as an external artifact and use a screenshot from `assets/ai_policy_cartoon.png`.

### Optional artifacts
Pulitzer photo analysis: https://kgsucf.github.io/ENG6813VisualAnalysis/pulitzer_photo_analysis.html

Fairy-tale Voyant/Text Analysis: https://kgsucf.github.io/ENG6813TextAnalysisFairyTales/

Guitar Artifact: https://kgsucf.github.io/ENG6813ActiveLearning/rhetoric_game_v2.html

Friends Artifact: https://kgsucf.github.io/ENG6813ActiveLearning/friends_persuasion_activity.html

Vietnam Visualization: https://kgsucf.github.io/ENG6813VisualAnalysis/vietnam_bias_demo.html

Bloom Taxonomy visualization: optional local artifact at `artifacts/bloom.html`; include only if it fits naturally in the Learning Objectives section or an optional/additional artifacts section.

## Important current decisions

- The course overview in `course_overview.md` is the latest version.
- The Week 13 and Week 14 schedule in `weekly_schedule.md` is the latest version and includes more peer feedback than the older version.
- The current AI policy is the course-wide policy in `ai_policy.md`.
- The old Week 8 signature-assignment portfolio should not be featured as a separate major artifact. This final e-portfolio replaces it.
- The site should emphasize that the course is scaffolded: close reading first, tools later, AI as a checked assistant, public-facing communication at the end.

## First task

Before editing, please inspect the repository and propose:
1. The site architecture you recommend
2. The files you will create or modify
3. The visual design approach
4. How you will handle missing artifact links/screenshots
5. Any questions you need answered before implementation
