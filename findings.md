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
