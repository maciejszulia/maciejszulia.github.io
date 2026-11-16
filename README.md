# maciejszulia.github.io

My CV page: a single-page React 19 app in TypeScript, built with Vite and published on GitHub Pages at <https://maciejszulia.github.io/>.

## Run locally

Requirements: Node.js 22 (the version the deploy workflow uses) and npm.

```bash
git clone https://github.com/maciejszulia/maciejszulia.github.io.git
cd maciejszulia.github.io
npm install
npm run dev       # development server with hot reload
npm run build     # type check (tsc -b) and production build into dist/
npm run lint      # ESLint, the same check the deploy workflow runs
npm run preview   # serves dist/ locally
```

## Deploy

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every push to `main` and on manual dispatch. It installs the dependencies with `npm install`, runs `npm run lint` and `npm run build` on Node.js 22 and publishes `dist/` to GitHub Pages.

## License and author

Author: Maciej Szulia. The repository has no license file, so no license is granted.
