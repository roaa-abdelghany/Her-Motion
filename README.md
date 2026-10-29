# Her Motion — Fitness \& Workout Planner

## Team

* Marwa Omar Youssef 202401652
* Rana Sherif Mohammed 202401784
* Yasmeen Ayman Ebrahim 202402432
* Roaa Abdelghany Abdo 202400980

## Project Overview

Her Motion is a fitness and workout planning web application concept. It is intended to help users browse exercises, explore exercise instructions, organize workout routines, and review workout activity through a dashboard.

The current deliverable is **Phase 2: UI/UX Design \& Static Prototype** for SW302 — User Interface Development. This phase focuses on UI/UX design and a responsive static prototype built with HTML5 and locally installed Tailwind CSS. Interactive behavior and React components belong to later phases.

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
└── README.md
```

## Prerequisites

* Node.js and npm
* Git (for collaboration)
* A modern browser
* A code editor such as Visual Studio Code

## Mock Data

The `backend/data/` directory contains local JSON files intended to provide sample exercise and routine data for later development phases. During Phase 2, the pages should remain static and should not depend on live API calls.

## Documentation

* [Project Proposal](docs/project-proposal.md)
* [Requirements](docs/requirements.md)
* [Design System](docs/design-system.md)
* [Phase 2 Report](docs/phase-2-report.md)
