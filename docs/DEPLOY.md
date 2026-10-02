# Authentication and deployment

## Requirements

- Node.js compatible with the version in `package.json`
- A MySQL 8 database accessible to the application

## Configure MySQL

Create the database and users table by running `database/schema.sql` with a
MySQL account that can create databases and tables:

```bash
mysql -u root -p < database/schema.sql
```

Create or choose a restricted MySQL account for the application and grant it
access to the `daywise` database. Set the connection details in `.env.local`
using the names in `.env.example`. The schema creates new accounts with the
`user` role. Assign `admin` only to trusted accounts using a controlled
database operation.

For a local MySQL server, the application account needs only read and insert
access to the user table:

```sql
CREATE USER 'daywise'@'localhost' IDENTIFIED BY 'replace-with-a-local-password';
GRANT SELECT, INSERT ON daywise.users TO 'daywise'@'localhost';
```

## Configure NextAuth

Copy `.env.example` to `.env.local` and set:

- `NEXTAUTH_URL` to the canonical application URL, such as
  `http://localhost:3000` locally or `https://tracker.example.com` in
  production.
- `NEXTAUTH_SECRET` to a unique, randomly generated secret. Generate one with:

  ```bash
  openssl rand -base64 32
  ```

Keep `.env.local` and production secrets out of source control. Configure the
deployment host's environment variables directly. The MySQL host must be
reachable from the deployment environment; `127.0.0.1` is suitable only when
MySQL runs on the same machine as the app.

## Run

```bash
npm ci
npm run dev
```

Before deployment, verify the production build:

```bash
npm run lint
npm run build
```

Sign-up and NextAuth endpoints are public. The Next.js 16 `src/proxy.ts`
redirects unauthenticated page requests to `/login`; API route handlers are
left to return JSON status codes. Protect each non-public API handler with
`requireApiUser()` or `requireApiRole()` from `src/lib/api-auth.ts`.
