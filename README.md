# Her Motion — Fitness \& Workout Planner

## Team

* Marwa Omar Youssef 202401652
* Rana Sherif Mohammed 202401784
* Yasmeen Ayman Ebrahim 202402432
* Roaa Abdelghany Abdo 202400980

## Project Overview

Her Motion is a fitness and workout planning web application concept. It is intended to help users browse exercises, explore exercise instructions, organize workout routines, and review workout activity through a dashboard.

## Phase 2 Scope

The prototype is planned to include these pages:

1. `index.html` — Landing / Home
2. `dashboard.html` — Workout dashboard with chart/visualization placeholders or static visualizations
3. `exercises.html` — Exercise library / overview
4. `exercise-details.html` — Details for one exercise
5. `routine-builder.html` — Static routine-building form/layout
6. `login.html` — Login
7. `register.html` — Registration
8. `profile.html` — Profile
9. `settings.html` — Settings

Every page should support desktop and mobile layouts. The phase 2 prototype is static: forms, filters, navigation controls, and buttons are visual elements and are not expected to perform application actions yet.

## Repository Structure

```text
Her-Motion/
├── backend/
│   ├── data/
│   │   ├── exercises.json
│   │   └── routines.json
│   └── README.md
├── docs/
│   ├── design-system.md
│   ├── phase-2-report.md
│   ├── project-proposal.md
│   └── requirements.md
├── frontend/
│   ├── src/
│   │   ├── input.css
│   │   ├── output.css
│   │   ├── main.js
│   │   └── style.css
│   ├── index.html
│   ├── dashboard.html
│   ├── exercises.html
│   ├── exercise-details.html
│   ├── routine-builder.html
│   ├── login.html
│   ├── register.html
│   ├── profile.html
│   ├── settings.html
│   ├── package.json
│   ├── package-lock.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
├── tests/
│   ├── phase-2-checklist.md
│   └── responsive-testing.md
└── README.md
```

## Prerequisites

* Node.js and npm
* Git (for collaboration)
* A modern browser
* A code editor such as Visual Studio Code

## Set Up and Run the Static Frontend

1. Clone the repository and open a terminal in the repository folder.
2. Move into the frontend directory:

```bash
   cd frontend
   ```

3. Install the project dependencies:

```bash
   npm install
   ```

4. Generate the Tailwind CSS output:

```bash
   npm run build:css
   ```

5. Open `index.html` in a browser to inspect the static prototype.

To rebuild the CSS automatically while editing, run:

```bash
npm run watch:css
```

> Note: These commands assume `frontend/package.json` contains the `build:css` and `watch:css` scripts and that `src/input.css` and `tailwind.config.js` are configured. Confirm the scripts in the actual repository before relying on these instructions. No Tailwind CDN should be used.

## Mock Data

The `backend/data/` directory contains local JSON files intended to provide sample exercise and routine data for later development phases. During Phase 2, the pages should remain static and should not depend on live API calls.

## Documentation

* [Project Proposal](docs/project-proposal.md)
* [Requirements](docs/requirements.md)
* [Design System](docs/design-system.md)
* [Phase 2 Report](docs/phase-2-report.md)
* [Phase 2 Checklist](tests/phase-2-checklist.md)
* [Responsive Testing](tests/responsive-testing.md)

## Current Status

This repository is being prepared for Phase 2. The documentation describes the intended scope and acceptance criteria. Update the Phase 2 report and checklist as pages are implemented and tested; do not mark a page or test as complete until it has been verified.

## Collaboration

Use clear, focused commits that describe the actual change, for example:

* `docs: add phase 2 requirements`
* `feat: build responsive landing page`
* `style: refine mobile exercise cards`

All team members should contribute and be able to explain the submitted work.

