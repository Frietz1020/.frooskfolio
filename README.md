# .frooskfolio

Personal portfolio for Frietz Ranz Bayog, built with Next.js, React, and Tailwind CSS. The site includes selected projects, skills, certificates, a CV viewer, and contact information.

## Run locally

Requirements: Node.js 24 and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server reloads the site when source files change.

## Project commands

```bash
npm run lint       # Check the source with ESLint
npx tsc --noEmit   # Check TypeScript types
npm run build      # Create the static site in out/
```

The production build uses Next.js's Webpack compiler. The project uses static export, so `out/` contains the deployable site after a successful build. Hosting under a repository subpath, including a GitHub Pages project site, requires a matching Next.js `basePath`; deployment is not configured here.

## Content and assets

- Site copy and contact details: `src/content/`
- Portfolio images and document PDFs: `public/assets/portfolio/`
- Skill icons: `public/icons/`
- App and UI code: `src/app/`, `src/components/`, and `src/features/`
- Local fonts and font licenses: `src/app/fonts/`

Update the portfolio data in `src/content/` and keep referenced public asset paths in sync. Replace the canonical site URL in `src/content/site.ts` with the production domain before deployment.

## Continuous integration

GitHub Actions runs lint, TypeScript, and the static production build on pushes and pull requests targeting `main`. It does not deploy the site.
