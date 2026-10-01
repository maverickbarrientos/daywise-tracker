# Copilot instructions

## Project purpose

Daywise Tracker is a personal organizer for bills, groceries to buy, and other necessities. Keep changes focused on those needs rather than turning the app into a general-purpose task or finance platform.

## Stack and architecture

- Use Next.js App Router file-based routing: route pages and layouts live under `src/app`.
- Shared UI belongs under `src/components`; shadcn/ui primitives are in `src/components/ui`, styled with Tailwind CSS v4.
- The initial category data is `src/data/tracker.json`. Inspect and preserve its existing shape before extending data access or persistence.
- Follow the installed Next.js version and current project patterns. The Next.js guidance in `AGENTS.md` requires consulting the relevant documentation under `node_modules/next/dist/docs/` before adding framework code.

## Working with the project owner

- Before generating or changing application code, present a concise plan and state assumptions that affect behavior or scope. Wait for the owner's confirmation before implementing.
- Keep proposed functionality aligned with bills, grocery purchasing, and necessities tracking. Ask before broadening that scope or making choices that change how tracked data is stored or managed.

## Build and lint

- Install dependencies with `npm ci`.
- Run the development server with `npm run dev`.
- Run lint with `npm run lint` and a production build with `npm run build`.
