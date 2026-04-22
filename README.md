# rhysora.com

Static marketing site for Rhysora.

## Stack

- [Astro](https://astro.build) — static site generator
- [GitHub Pages](https://pages.github.com) — hosting
- Custom domain: rhysora.com

## Develop

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Deploy

Pushes to `main` auto-deploy via GitHub Actions.

## Structure

- `src/pages/` — page routes
- `src/layouts/Base.astro` — shared layout
- `src/styles/global.css` — design tokens and base styles
- `public/` — static assets (favicon, CNAME, .nojekyll)
