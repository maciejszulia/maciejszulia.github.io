# ADR 0003: GitHub Pages deploy with a lint gate

## Status

Accepted (workflow added in `f18b48a`; lint step added in `2002518`).

## Context

The page must go live after every change without manual uploads, and a broken build must not replace the live page.

## Decision

`.github/workflows/deploy.yml` runs on every push to `main` and on `workflow_dispatch`. On Node.js 22 it runs `npm install`, `npm run lint` and `npm run build`, then publishes `./dist` with `actions/upload-pages-artifact@v3` and `actions/deploy-pages@v4`. The job has `pages: write` and `id-token: write` permissions and runs in the `github-pages` environment.

## Consequences

- Positive: a push to `main` is the whole release process.
- Positive: a lint or type error stops the job before deploy, so the previous version stays live.
- Negative: `npm install` instead of `npm ci` can resolve versions that differ from `package-lock.json`.
- Negative: there is no preview deploy for branches.

## Evidence

- `.github/workflows/deploy.yml`.
- Commit `2002518`: "lint before the Pages build".
- README, "Deploy".
