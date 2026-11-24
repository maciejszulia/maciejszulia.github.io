# ADR 0002: Vite, React and TypeScript single-page app

## Status

Accepted (commit `bf2659a`).

## Context

GitHub Pages serves static files only. The page needs a theme switch and a print button, and the author works in TypeScript and React.

## Decision

The page is a React 19 single-page app written in TypeScript and built by Vite with `@vitejs/plugin-react`. `npm run build` runs `tsc -b && vite build` and writes static files to `dist/`. Styles are written in SCSS (`sass` dev dependency).

## Consequences

- Positive: `dist/` is plain static files that GitHub Pages can serve.
- Positive: hot reload during development (`npm run dev`).
- Negative: the CV text appears only after JavaScript runs; `index.html` alone contains only metadata and the JSON-LD block.
- Negative: the template files from the Vite starter (`src/assets/*`, `src/App.css`) stayed in the repository unused.

## Evidence

- `package.json`: `react`, `react-dom` ^19.2.5; `vite` ^8.0.10; `typescript` ~6.0.2; `sass` ^1.99.0; script `build`.
- `vite.config.ts`: `plugins: [react()]`.
- `src/main.tsx`: `createRoot(...).render(<StrictMode><App /></StrictMode>)`.
