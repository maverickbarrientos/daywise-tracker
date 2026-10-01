# Copilot instructions

## Project purpose

Daywise Tracker is a personal organizer for tracking bills, groceries to buy, and other necessities. Keep changes focused on these personal tracking needs rather than turning the app into a general-purpose task or finance platform.

## Stack and architecture

- The application uses Next.js.
- Data is stored in JSON files. Preserve the existing JSON data shape and access patterns when working with persisted data; inspect the current implementation before changing either.
- Build the interface from reusable components, using shadcn/ui where appropriate and Tailwind CSS for styling.
- Follow the existing app structure and routing patterns once established; do not assume a particular Next.js router or JSON storage location without checking the code.

## Working with the project owner

- Before generating or changing application code, present a concise plan and state the assumptions that affect behavior or scope. Wait for the owner to confirm alignment before implementing.
- Keep proposed functionality aligned with bills, grocery purchasing, and necessities tracking. Ask before broadening that scope or making choices that change how tracked data is stored or managed.

## Build, test, and lint

- Check `package.json` and the repository's package-manager lockfile for the authoritative scripts and package manager before running commands; script names and the test runner have not been established here.
- When a test runner is present, use its single-test or file-filter option for focused validation as well as the relevant broader check.
- Before opening a pull request, run the build and any existing tests locally and report the results in PR description.