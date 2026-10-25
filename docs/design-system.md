# Her Motion — Design System

## 1. Purpose
This document records the shared visual rules for the Her Motion Phase 2 prototype. The Figma mockups should remain the primary reference. Confirm and adjust the values below against the final Figma file before treating them as final.

## 2. Visual Direction
Her Motion combines a soft, welcoming fitness aesthetic with a confident and energetic feel. The interface should feel clear and encouraging rather than overly decorative. Strong typography, readable cards, and consistent spacing should support the fitness content.

## 3. Color Palette
The following palette is the current implementation starting point and should be checked against Figma.

| Token | Hex | Intended use |
|---|---|---|
| `blush` | `#F8DDE3` | Soft backgrounds and subtle highlights |
| `rose` | `#D98298` | Primary accent and selected decorative elements |
| `deep-rose` | `#B85C78` | Headings and stronger accents; verify contrast for small text |
| `cream` | `#FFF9F5` | Main page background |
| `soft-gray` | `#F4F1F0` | Secondary surfaces and card backgrounds |

Use neutral text colors with sufficient contrast. Do not use pale pink for small text on a light background without checking contrast. Color should not be the only way to communicate meaning.

## 4. Typography
- Use a clear, readable sans-serif font for the interface unless the Figma design specifies a different typeface.
- Establish a consistent hierarchy for page titles, section headings, card titles, labels, and supporting text.
- Keep body text comfortable to read on mobile.
- Avoid using many font sizes or weights without a clear purpose.

## 5. Spacing and Layout
Use a consistent spacing scale rather than arbitrary values. Tailwind spacing utilities can provide the shared scale.
- Keep consistent horizontal page padding.
- Use predictable gaps between headings, cards, and sections.
- Align cards and form controls to a common grid.
- Use a centered maximum-width content area on larger screens where it matches the mockup.
- Reduce padding and stack columns on mobile as needed.

## 6. Components
The following components should share consistent styling across pages:
- Primary and secondary buttons
- Text links
- Navigation and mobile navigation presentation
- Summary/statistic cards
- Exercise cards
- Form fields, labels, and helper text
- Section headings
- Chart/visualization containers
- Status labels or badges, if used

Define repeated styles consistently rather than creating visually different versions of the same component on every page.

## 7. Responsive Behavior
- Use a mobile-first layout approach.
- Stack desktop columns vertically on narrow screens where needed.
- Keep forms and cards within the viewport.
- Ensure navigation and controls remain readable and usable on touch devices.
- Test at a narrow mobile width and a wider desktop width; record actual viewport sizes in the testing notes.

## 8. Accessibility
- Use semantic HTML and a logical heading structure.
- Include visible keyboard focus styles for focusable elements.
- Associate each form field with a label.
- Use meaningful alt text for informative images.
- Check contrast for text, controls, and chart labels.
- Do not rely on color alone for chart categories or status.

## 9. Tailwind Implementation
Tailwind CSS must be installed locally; do not use the CDN. The current configuration defines these custom color names:
- `bg-blush` / `text-blush`
- `bg-rose` / `text-rose`
- `bg-deep-rose` / `text-deep-rose`
- `bg-cream` / `text-cream`
- `bg-soft-gray` / `text-soft-gray`

The CSS build input is `src/input.css`; the generated stylesheet is `src/output.css`. HTML pages should link to the generated stylesheet using the correct relative path.

## 10. Design Validation
Before implementation is considered complete, compare each page with its Figma mockup, confirm desktop/mobile layouts, and check contrast and consistency. Update this document if the team makes a deliberate design-system change.
