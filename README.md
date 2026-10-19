# Flexi Evidence Studio

A simple curriculum-linked learning evidence capture interface for EREAFSL SA/WA.

## Local development

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
npm run preview
```

## GitHub Pages

Push to the `main` branch, then in the repository open **Settings > Pages** and choose **GitHub Actions** as the source. The included workflow builds and deploys the app.

## Data

Evidence records are currently stored in the browser using `localStorage`. They are not synchronised between devices and should not be treated as an enterprise student-record system.

## Branding

The interface uses the approved EREAFSL colour palette and Roboto. Add the approved EREAFSL logo asset separately before public/official deployment rather than recreating it in code.
