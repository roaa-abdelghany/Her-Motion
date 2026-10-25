# Her Motion — Phase 2 Requirements

## 1. Purpose
This document defines the scope and acceptance criteria for the SW302 Phase 2 UI/UX Design & Static Prototype. It describes the screens and quality requirements for the HTML5 + locally installed Tailwind CSS prototype.

## 2. Phase 2 Constraints
- Use HTML5 and Tailwind CSS installed in the project; do not use the Tailwind CDN.
- Keep the prototype static. Controls may be shown visually but must not imply that real application actions are already implemented.
- Provide a desktop and mobile layout for every page.
- Use semantic HTML, accessible labels, appropriate contrast, and consistent spacing.
- Include at least eight key pages.
- Include a dashboard with at least one chart or visualization. The project brief for Fitness & Workout Planner describes both a bar chart and a pie/doughnut chart as dashboard requirements, so the design should plan for both.

## 3. Page Requirements

### 3.1 Landing / Home — `index.html`
- Clearly identify Her Motion and explain the application's purpose.
- Provide a clear visual entry point to the main experience.
- Include a prominent call-to-action represented as a static link or button.
- Use a layout that adapts to desktop and mobile screens.

### 3.2 Dashboard — `dashboard.html`
- Show summary cards for total workouts, active streak, and estimated calories burned.
- Include a weekly bar chart for workout duration or calories burned per day.
- Include a pie/doughnut visualization for exercise distribution by muscle group (Chest, Back, Legs, Cardio are example categories from the brief).
- Provide headings and labels so the charts are understandable; do not rely on color alone to communicate information.
- Keep cards and visualizations readable on narrow screens.

### 3.3 Exercise Library — `exercises.html`
- Present a browsable grid/list of exercise cards.
- Show exercise names and useful summary information.
- Visually represent search and filters for muscle group, equipment, and difficulty.
- Include exercise image or media placeholders where appropriate.
- Search, filters, pagination, and quick-add controls are static in Phase 2.

### 3.4 Exercise Details — `exercise-details.html`
- Display one example exercise with a clear title.
- Include instructions, target muscles, and safety tips.
- Include an instructional media/video placeholder if it is part of the design.
- Show a static “Add to Custom Routine” control as a visual element only.

### 3.5 Routine Builder / Form — `routine-builder.html`
- Show the planned structure for a custom workout routine.
- Include example fields for routine name, exercise selection, sets, repetitions, and order where appropriate.
- Use visible labels and suitable input types.
- Submission and ordering are not functional during Phase 2.

### 3.6 Login — `login.html`
- Include labeled email and password fields.
- Include a clear submit control and a link to registration.
- Authentication is not functional during Phase 2.

### 3.7 Register — `register.html`
- Include labeled fields required by the visual design, such as name, email, and password.
- Include a clear submit control and a link to login.
- Account creation is not functional during Phase 2.

### 3.8 Profile — `profile.html`
- Show a profile summary and example fitness preferences or activity information.
- Use a responsive layout and clear information hierarchy.

### 3.9 Settings — `settings.html`
- Show settings groups appropriate to the concept, such as profile preferences, appearance, or notifications.
- Any switches and save controls are visual only during Phase 2.

## 4. Shared Layout Requirements
- Keep navigation, page headers, buttons, cards, and form styles consistent.
- Use the agreed Her Motion design system and Figma mockups as the source of visual decisions.
- Ensure spacing and alignment remain consistent across pages.
- Provide visible focus styles for focusable elements.
- Use responsive navigation/layout patterns suitable for mobile screens.
- Avoid horizontal overflow at narrow widths.

## 5. Accessibility Requirements
- Use semantic landmarks such as `header`, `nav`, `main`, and `footer` where appropriate.
- Maintain a logical heading hierarchy.
- Give form controls associated labels; do not rely on placeholder text as the only label.
- Provide meaningful alternative text for informative images; use empty alt text for purely decorative images.
- Ensure interactive-looking elements have clear names and visible focus indicators.
- Use ARIA only where needed to add meaning that native HTML does not already provide.
- Check text and UI contrast; do not use color as the only means of communicating status or chart categories.
- Ensure content can be read and used at mobile sizes.

## 6. Responsive Requirements
Every page must be checked at both desktop and mobile widths. Layouts should adapt, not merely shrink:
- Multi-column layouts may stack on mobile.
- Cards and forms should fit the viewport.
- Navigation should remain understandable and accessible.
- Charts and visualizations should remain legible.
- Controls should have comfortable touch targets.

## 7. Out of Scope for Phase 2
- Real login or registration.
- Active search, filtering, pagination, or quick-add actions.
- Workout timer or set-completion logic.
- Persistent user data or localStorage behavior.
- Live API integration.
- React components and React Router.

These features are reserved for later phases where required by the course.

## 8. Acceptance Checklist
A page is ready only after the team has:
- Implemented the agreed mockup in HTML5 and Tailwind CSS.
- Checked desktop and mobile layouts.
- Checked the page for horizontal overflow and broken links.
- Reviewed headings, labels, alt text, focus indicators, and contrast.
- Confirmed that static controls do not falsely claim to be functional.
- Recorded the result in the Phase 2 testing checklist.
