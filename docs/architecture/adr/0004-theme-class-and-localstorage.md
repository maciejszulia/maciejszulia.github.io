# ADR 0004: Theme by body class, stored in localStorage

## Status

Accepted (commit `bf2659a`; effect rewritten in `2002518`).

## Context

The page offers a light and a dark theme. The reader's choice should survive a reload, and the theme should switch without re-rendering the styles.

## Decision

`src/App.scss` defines the colours as CSS custom properties and redefines them under `body.dark`. `App` keeps `darkMode` in React state, initialised from `localStorage.getItem('theme') === 'dark'`. An effect toggles the `dark` class on `document.body` whenever `darkMode` changes; the theme button writes `'dark'` or `'light'` to `localStorage`.

## Consequences

- Positive: switching the theme changes one class; the CSS variables do the rest.
- Positive: the choice persists across visits in the same browser.
- Negative: the first visit starts light even when the system prefers dark, because `App` reads only `localStorage`.
- Negative: `localStorage` access is not wrapped in `try`/`catch`; a browser that blocks storage throws at start.

## Evidence

- `src/App.tsx`: `useState(() => localStorage.getItem('theme') === 'dark')`, the `useEffect` with `classList.toggle('dark', darkMode)`, `toggleTheme`.
- `src/App.scss`: `body.dark { --bg: ...; }`.
- Commit `2002518`: "Fix the lint error in the theme effect".
