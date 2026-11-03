# Appointment Planner

A React app for managing contacts and their appointments, built as the "Appointment Planner" challenge project of the Codecademy Full-Stack Engineer career path.

## About The Project

The app keeps a list of contacts and lets the user schedule appointments, each linked to a contact. It is built around controlled forms, lifting state, and React Router pages.

### Built With

- React (Create React App)
- React Router

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

## License

No license file is present.

## Dependency verification

Use Node.js 26 LTS. The November 3, 2026 update moves the old Create React App 4 toolchain to 5.0.1 while retaining React 17 and Router 5. Both npm and Yarn lockfiles were refreshed. The npm overrides and matching Yarn resolutions select patched Underscore and once versions, avoiding new advisory IDs introduced by the toolchain change.

Fresh npm install from the lockfile, production build, and the new contact/appointment integration test pass. The Yarn dependency tree also passes that build and test. Browser checks cover adding a contact, rejecting a duplicate, changing to a different name, and creating an appointment; mobile layout was inspected. The duplicate flag now resets when the name changes, fixing a pre-existing case where entering a duplicate could prevent later valid contacts from being added.

Local npm audit fell from 202 package findings (16 critical, 60 high) to 66 (0 critical, 10 high, 49 moderate, 7 low). Distinct advisory IDs fell from 181 to 22 with no new IDs. Yarn also reports the same 22 distinct advisory IDs, though its path counts differ. The old CRA toolchain still has known security findings and deprecation warnings, so this is a partial update, not a clean audit or a claim of long-term framework support. No deployment was performed. Contacts and appointments remain in-memory and disappear on page reload.
