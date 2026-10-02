# Daywise Tracker

A personal tracker for bills, groceries, and everyday necessities.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For MySQL and authentication setup, see [docs/DEPLOY.md](./docs/DEPLOY.md).
Copy `.env.example` to `.env.local` and configure the local database and
NextAuth secrets before signing up.

## Checks

```bash
npm run lint
npm run build
```

The dashboard uses the App Router under `src/app`, reusable UI components under
`src/components`, and the initial category data in `src/data/tracker.json`.
