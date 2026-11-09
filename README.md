# Appointment Planner

A React app for managing contacts and their appointments, built as the "Appointment Planner" challenge project of the Codecademy Full-Stack Engineer career path.

## About The Project

The app keeps a list of contacts and lets the user schedule appointments, each linked to a contact. It is built around controlled forms, lifting state, and React Router pages.

### Built With

- React 17 with Vite 8
- React Router

## Getting Started

Install the dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm start
```

## License

No license file is present.

## Dependency verification

Use Node.js 26 LTS. The November 9, 2026 refresh replaces Create React App 5 with Vite 8 and Vitest 5, retaining React 17 and Router 5. `npm start` (or `npm run dev`) serves the app at http://localhost:3000; `npm run build` writes production assets to `build/`, and `npm run preview` previews that output locally. The HTML entry is now root-level `index.html`; JSX-bearing modules use `.jsx`.

Both npm and Yarn 1.22.22 lockfiles are maintained. Use either `npm ci` or `yarn install --frozen-lockfile`, then the corresponding test and build commands. The package-manager field records the Yarn version for Yarn users; npm remains supported and separately verified.

The original npm lock was missing a YAML 2 dependency required by its existing graph, so its initial frozen install failed. After a local lock repair without application changes, the original production build and contact/appointment integration test passed. The refreshed standard frozen npm and Yarn installs, builds and integration test all pass on Node 26.13.0. Actual Chromium checks passed for the original build and both refreshed dependency trees: root redirect, adding contacts, duplicate-name recovery, appointment creation, route navigation, deep linking and state reset on reload. The refreshed Vite development server also renders both pages. A small contact-picker change moves the initial selection from an option attribute to the select's default value, preserving behavior and removing a React warning.

At verification time npm audit reported zero findings, down from 26 affected-package findings in the original lockfile. Yarn audit also reported zero. This is a dependency scan, not a full security review. React 17 and Router 5 remain older software, and Vite's modern-browser defaults have not been checked against all browsers previously named by CRA's browserslist settings.

No deployment or hosting setup was performed. A future static host must serve `index.html` for app routes such as `/contacts`. Contacts and appointments remain in-memory and disappear on page reload.
