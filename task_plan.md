# Portfolio Landing Page Plan

## Goal
Build a responsive Next.js portfolio landing page with a warm off-white light theme, black dark theme, Paraíba-turmaline accent, editable text/photo placeholders, social/resumé contact tiles, and a clear structure for learning.

## Phases
- [complete] 1. Inspect the starter app and confirm Next.js conventions.
- [complete] 2. Define the page structure, content placeholders, and GitHub Pages résumé strategy.
- [complete] 3. Implement the landing page and theme switch.
- [complete] 4. Verify the build, accessibility basics, and responsive styling.

## Phase 5 — Codebase consolidation
- [complete] Extract editable introduction content.
- [complete] Add local shadcn-style UI primitive and theme utility.
- [complete] Reset visual tokens around true black and rounded portrait rings.

## Decisions
- Keep the first version as one focused page with small semantic sections/components.
- Make nav items non-clickable except Home; use the contact tiles as the only outbound links.
- Use a relative `/resume.pdf` asset path so the résumé works on GitHub Pages project deployments.

## Errors Encountered
| Error | Attempt | Resolution |
| --- | --- | --- |
| Google font fetch failed during build | 1 | Removed `next/font/google` starter dependency so the static export is self-contained. |
| Turbopack could not bind an internal port | 2 | Verified the same project with Next's webpack builder; static export passed. |
