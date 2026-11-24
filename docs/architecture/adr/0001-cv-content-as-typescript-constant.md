# ADR 0001: CV content as one TypeScript constant

## Status

Accepted (commit `bf2659a`; content updated in `6300cbf`, `346df24`, `7e72f25`).

## Context

The page shows one CV that changes a few times a year. A CMS, a JSON API or a Markdown pipeline would add a build step or a service for a single author.

## Decision

All CV fields (name, title, contact links, profile text, skills, experiences, education, languages) live in the `cvData` object in `src/App.tsx`. The `App` component maps over its arrays to render each section.

## Consequences

- Positive: a CV change is one edit in one file and one commit; the deploy workflow publishes it.
- Positive: no runtime data fetch; the page renders from the bundle.
- Negative: content and markup share one file, so every content edit touches a component file.
- Negative: `cvData` has no declared type, so a missing field is not caught when `strict` is off.

## Evidence

- `src/App.tsx`: `const cvData = { ... }` and the `.map()` calls in `App`.
- Commits `6300cbf`, `346df24`, `7e72f25` change CV content in `src/App.tsx`.
