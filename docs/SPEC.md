# Daywise Tracker

Daywise Tracker is a personal organizer for bills, groceries to buy, and other
necessities. Keep the product focused on these needs rather than expanding into
a general-purpose task or finance platform.

## Application

- Use Next.js App Router file-based routing under `src/app`.
- Use reusable UI from `src/components`, shadcn/ui primitives, and Tailwind CSS
  v4.
- The initial tracker category data is `src/data/tracker.json`.

## Authentication

- Use NextAuth.js v4 with the Credentials provider and JWT sessions.
- Store registered users in the local MySQL database. Each user has a unique
  normalized email, a bcrypt-hashed password, and a role.
- Include the user ID and role in the JWT and session.
- Provide `/signup`, `/login`, a logout control, and route protection. Protected
  API handlers must authorize the session themselves and return 401 or 403 as
  appropriate; registration and NextAuth endpoints remain public.
- OAuth providers, email verification, and password reset are out of scope.
