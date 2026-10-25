# Her Motion — Phase 2 Report

## 1. Phase Information
- **Course:** SW302 — User Interface Development
- **Project:** Her Motion — Fitness & Workout Planner
- **Team:** Marwa, Rana, Yasmeen, Roaa
- **Phase:** UI/UX Design & Static Prototype

## 2. Phase Objective
The objective of this phase is to design and validate the user interface and experience, then build a static responsive prototype using HTML5 and locally installed Tailwind CSS. The prototype should communicate the intended desktop and mobile experience without implementing backend behavior or interactive application logic.

## 3. Planned Deliverables
- Wireframes/mockups for at least eight key pages, including desktop and mobile versions.
- Static HTML5 + Tailwind CSS pages.
- Dashboard with visualizations.
- Responsive layouts and accessibility-conscious markup.
- Repository documentation and testing evidence.

## 4. Planned Pages
The repository currently contains these page files:
- `index.html`
- `dashboard.html`
- `exercises.html`
- `exercise-details.html`
- `routine-builder.html`
- `login.html`
- `register.html`
- `profile.html`
- `settings.html`

The team should verify that all pages contain the final UI and that each page has a desktop and mobile layout. The presence of a file alone does not mean the page is complete.

## 5. Technical Setup
The frontend uses locally installed Tailwind CSS rather than the CDN. The Tailwind input file is `src/input.css`, and the generated output file is `src/output.css`. The project includes Tailwind and PostCSS configuration files.

The team should verify the `package.json` scripts and test the CSS build from the `frontend` directory before submission. The generated CSS should be rebuilt whenever relevant HTML classes or the input CSS change.

## 6. Design and Accessibility Approach
The visual direction uses a blush-pink, rose, cream, and soft-gray palette, subject to final comparison with the Figma mockups. The implementation should use semantic HTML, a clear heading hierarchy, associated form labels, appropriate image alt text, visible focus styles, and readable contrast.

## 7. Testing and Validation
The following checks should be performed and recorded:
- Each page opens without missing assets or broken stylesheet links.
- Each page is inspected at desktop and mobile widths.
- No unintended horizontal overflow occurs.
- Navigation links point to the intended local pages.
- Form controls have labels.
- Headings follow a logical hierarchy.
- Informative images have useful alternative text.
- Text and interface colors have sufficient contrast.
- Dashboard charts/visualizations have readable labels and are not dependent on color alone.

## 8. Current Status and Remaining Work
This report is a working document. The project has a repository structure, HTML page files, and a local Tailwind setup. The final implementation and testing status must be updated by the team based on actual results.

Before Phase 2 submission, the team should:
1. Complete each page based on the approved Figma mockups.
2. Verify desktop and mobile versions for all pages.
3. Confirm the dashboard includes the required visualizations.
4. Review accessibility and visual consistency.
5. Complete the testing checklist and record genuine results.
6. Update this report to distinguish completed items from remaining work.

## 9. Conclusion
Her Motion is being prepared as a responsive fitness-planning UI prototype. Phase 2 success depends on the quality and completeness of the mockups, the accuracy of the static implementation, responsive behavior, accessibility, and documented verification. This report should be finalized only after the team has reviewed the completed prototype.
