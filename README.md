# Flexi Evidence Studio

A clean React interface for capturing curriculum-linked learning evidence.

## Run locally

```bash
npm ci
npm run dev
```

## Production check

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Upload this project to the repository root and push to `main`.
3. In **Settings > Pages**, select **GitHub Actions** as the source.
4. The included workflow builds and deploys the app.

## Current data model

Records are stored in the browser with `localStorage`. A JSON backup can be exported and imported. Browser storage is suitable for interface testing, not for live storage of identifiable young-person information.

## Important limitations

- No authentication or role-based access.
- No central database or multi-device synchronisation.
- No audit trail, retention controls or managed backup.
- Australian Curriculum achievement-standard statements are not bundled. Staff currently paste the relevant statement.
- The temporary Flexi Evidence mark is not the official EREAFSL logo. Add an approved logo asset before official deployment.
