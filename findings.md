# Findings

## Starter app
- Need to inspect the existing App Router files and package scripts before editing.
- User-provided visual direction: editorial/minimal portfolio, off-white/beige light theme, near-black dark theme, black type, circular Paraíba-turmaline photo ring, small contact squares.

## Hosting
- GitHub Pages may deploy at a project subpath. A root-relative `/resume.pdf` is still the correct public asset reference when Next.js is configured with a matching `basePath`; the app should centralize the résumé href so it can be adjusted easily.

## Implementation choices
- `app/page.tsx` is a client component only because the theme switch uses React state and `localStorage`.
- The portrait is intentionally a styled placeholder so an image can be added later without changing the composition.
- Nav items other than Home are text spans, so they are visibly present but not interactive as requested.
- The page now uses a small local design-system layer (`components/ui`) and keeps personal copy in `content/introduction.ts`.
- Dark mode defaults to true black (`#000000`); the light theme remains available through the same token system.
- Light mode uses a warm off-white beige (`#f5f0e6`).
- Theme control uses a local shadcn-style controlled switch primitive with `role="switch"`, `aria-checked`, and `data-state`.
- Introduction copy uses the shared `--font-mono` token.

## Portrait line animation research
- The portrait lives in `components/portfolio/portfolio-page.tsx` as `.portrait-wrap > .portrait-ring > .portrait-photo`; the visible linework is `.portrait-ring`, `.portrait-ring::before`, and `.portrait-ring::after`.
- Current resting values are `.portrait-ring { inset: 0; padding: 15px; transform: rotate(8deg); }`, pseudo-element insets `-10px 18px 18px -10px` and `18px -10px -10px 10px`, plus opacities `0.62` and `0.82`.
- The page already uses a client component, but animation can remain declarative CSS: global CSS is imported by `app/layout.tsx`, and the requested interactions do not require lifecycle code.
- Proposed behavior: one 2.5s entrance run on the portrait line layers; `.portrait-wrap:hover` starts a fresh 2.5s run on pointer entry; each keyframe ends at the current resting geometry so the animation leaves no layout drift.
- Proposed motion: stagger the main ring and pseudo-rings with slightly different translate/rotate/scale arcs, while preserving the main ring's resting `rotate(8deg)` and the photo's resting `rotate(-8deg)`.
- Existing reduced-motion CSS globally collapses transition duration, but keyframes should also be explicitly disabled/paused or set to their resting state so the new movement honors the preference.
- Next.js guidance confirms global CSS is supported through `app/layout.tsx`, and client components are appropriate for interaction/lifecycle logic; no new client boundary is required because the existing portrait is inside `PortfolioPage`.

## Line/photo separation correction
- The photo was moved out of `.portrait-ring` and is now a sibling inside `.portrait-wrap`, with `inset: 15px` preserving the original inner framing.
- The ring layer has `z-index: 1`; the photo remains at `z-index: 0` and receives no animation.
- The three line layers now use cardinal-point translate keyframes that approximate independent circular orbits, returning to zero translation at 100%.
- The photo must not retain the former `rotate(-8deg)` counter-transform because it no longer sits inside the ring; removing it keeps the portrait upright.

## Directional arc update
- Replaced pseudo-element circles with three independent `.portrait-line` elements.
- Each line uses a conic gradient clipped by a radial mask: `252deg` of visible accent and `108deg` transparent gap, producing a 70% circumference arc.
- Rotation directions are intentionally mixed: main arc clockwise (`8deg` → `368deg`), inner arc counterclockwise (`8deg` → `-352deg`), and outer arc clockwise with an extra turn (`8deg` → `728deg`). Each final angle is visually equivalent to the existing `8deg` resting orientation.
