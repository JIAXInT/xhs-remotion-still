---
name: xhs-remotion-skill
description: Generate Xiaohongshu (小红书) static image carousels using Remotion Still. Use when asked to create/convert text into XHS 图文套图/封面/内页 PNG, batch export Remotion stills, or set up a Remotion still workflow/template for XHS content.
---

# XHS Remotion Still

## Overview
Create XHS-style static image sets with Remotion Still (React-based). This skill ships a ready-to-use Remotion template plus a bootstrap script for quick setup and batch PNG export.

## Workflow (recommended)
1. **Bootstrap template**
   ```bash
   python scripts/bootstrap_template.py --dest <project-path>
   ```
2. **Edit content**
   - Update `data/post.js` (theme + slides) in the project.
3. **Install deps**
   ```bash
   npm i
   ```
4. **Preview (optional)**
   ```bash
   npm run start
   ```
5. **Batch export**
   ```bash
   npm run render:all
   ```
   Output goes to `out/slide-*.png`.

## Data schema (data/post.js)
- `theme`: primary/bg/text/accent/dark colors
- `slides[]`: array of slides
  - `type`: `COVER` | `LIST` | `HOOK` | `QUOTE` | `STEPS` | `COMPARE` | `POINTS` | `SIMPLE` | `AUTO`
  - `AUTO` chooses layout based on fields:
    - `metrics + title[]` → COVER
    - `cards` → HOOK
    - `left/right` → COMPARE
    - `steps` → STEPS
    - `quote` → QUOTE
    - `items + summary.highlight/desc` → POINTS
    - `items` → LIST
    - fallback → SIMPLE
  - `tag`, `page`, `title`, `subtitle`, `items`, `summary`, `cards`, `cta`

## Output notes
- Default size: **1080×1440 (3:4)**
- Auto split thresholds (default): items=8, lines=12, body chars=360
- Keep key text away from top/bottom edges (safe area ~120px top, ~180px bottom)

## Resources
- `scripts/bootstrap_template.py` – copy template to a target directory
- `assets/xhs-remotion-template/` – Remotion Still project template
on Still project template
