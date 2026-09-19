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

## Phase 6 — Animate portrait linework (complete)
- [complete] Inspect the existing portrait markup, CSS line layers, and Next.js styling/client guidance.
- [complete] Add a 2.5-second CSS keyframe sequence that moves the three line layers and settles at their current resting transforms.
- [complete] Replay the same sequence on each hover entry, with independent timing/offsets so the lines feel layered rather than moving as one block.
- [complete] Preserve the static composition, responsive sizing, theme colors, and reduced-motion behavior.
- [complete] Verify lint, static build, and CSS diff integrity.

## Phase 7 — Isolate photo and orbit linework (complete)
- [complete] Move the portrait photo outside the animated ring container so it remains completely stationary.
- [complete] Replace directional line movement with independent circular/orbital keyframes for the main ring and both accent rings.
- [complete] Preserve the original resting geometry and reduced-motion behavior.
- [complete] Verify lint, static build, and diff integrity.

## Phase 8 — Convert rings to directional arcs (complete)
- [complete] Replace full circles with 70% circumference arcs using masked conic gradients.
- [complete] Split the line layers into independent elements so each can rotate without inheriting another line's motion.
- [complete] Add mixed rotational directions while preserving the original resting orientation.
- [complete] Verify lint, static build, and diff integrity.

## Decisions
- Keep the first version as one focused page with small semantic sections/components.
- Make nav items non-clickable except Home; use the contact tiles as the only outbound links.
- Use a relative `/resume.pdf` asset path so the résumé works on GitHub Pages project deployments.
- Prefer CSS keyframes in `app/globals.css`; the portrait is already rendered by a client component, but the requested behavior does not need React state or effects.
- Treat “rest where they are right now” as a hard requirement: every animation's final keyframe must match the current `transform`, inset, border, and opacity values.
- Use `prefers-reduced-motion: reduce` to disable the movement while keeping the portrait in its resting state.
- Keep `.portrait-photo` as a non-animated sibling of `.portrait-ring`; only the line layer may receive transforms.
- Use distinct orbital paths for the three line layers, with the main ring and pseudo-rings moving independently around their own centers.
- Represent each line as a 252° arc (`70% × 360°`) and use CSS rotation for clear clockwise/counterclockwise movement.

## Errors Encountered
| Error | Attempt | Resolution |
| --- | --- | --- |
| Google font fetch failed during build | 1 | Removed `next/font/google` starter dependency so the static export is self-contained. |
| Turbopack could not bind an internal port | 2 | Verified the same project with Next's webpack builder; static export passed. |
