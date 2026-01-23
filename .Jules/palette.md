## 2025-02-23 - Single Page Portfolio Accessibility
**Learning:** Single page portfolios with fixed headers often trap keyboard users in navigation loops, making "Skip to Content" critical yet frequently overlooked.
**Action:** Always check for skip links on "hero" heavy pages with sticky navigation.

## 2025-02-23 - IntersectionObserver Thresholds
**Learning:** Using a single high threshold (e.g., 0.5) for Scroll Spy logic fails for sections taller than the viewport (especially on mobile).
**Action:** Use lower thresholds (0.2-0.3) or `rootMargin` to reliably detect active sections on responsive sites.

## 2025-02-23 - Respecting Reduced Motion
**Learning:** Personal sites often overuse scroll animations and floating elements ("blobs") which can cause vestibular issues. `scroll-behavior: smooth` is particularly jarring if not overridden.
**Action:** Always include a `@media (prefers-reduced-motion: reduce)` block that resets `scroll-behavior` to `auto` and disables infinite animations.

## 2025-02-23 - Mobile Zoom Accessibility
**Learning:** The `maximum-scale=1.0, user-scalable=no` meta tag completely blocks users with low vision from zooming in, which is a critical WCAG violation.
**Action:** Never restrict viewport scaling. Let users control their own zoom level.

## 2025-02-23 - Programmatic Scroll & Reduced Motion
**Learning:** CSS `scroll-behavior: smooth` is ignored when using `window.scrollTo({ behavior: 'smooth' })` in JS, meaning users with reduced motion preferences are forced into animations.
**Action:** Always check `window.matchMedia('(prefers-reduced-motion: reduce)')` in JS before applying programmatic smooth scrolling.

## 2025-02-23 - Copy Action Feedback
**Learning:** Clipboard operations are invisible. Users need immediate confirmation that the action succeeded, both visually (icon change) and programmatically (aria-label update).
**Action:** Pair `navigator.clipboard.writeText` with a temporary state change (e.g., 'Copy' -> 'Checkmark') and update `aria-label` to "Copied!".

## 2025-02-23 - Accessible Off-Canvas Menus
**Learning:** Off-screen mobile menus hidden only by position (e.g., `right: -100%`) remain in the tab order, causing keyboard users to focus on invisible elements.
**Action:** Use `visibility: hidden` (with a transition delay) or `inert` on the closed container to remove it from the accessibility tree while preserving slide animations.

## 2025-02-23 - Contextual Link Labels
**Learning:** Repetitive link text like "View Demo" or "View Code" creates ambiguity for screen reader users, who often navigate by a list of links.
**Action:** Always append the project or context name to the `aria-label` (e.g., "View Sky-Namibia Demo") to provide unique, descriptive labels for every interactive element.

## 2025-02-24 - False Affordances in Mixed Grids
**Learning:** In grids mixing links and static content (e.g., Skill Cards), applying universal hover effects creates false affordances, frustrating users who expect interactivity.
**Action:** Strictly scope hover animations (transform/lift) to `a.card` or `button.card` selectors, ensuring static `div.card` elements remain visually grounded.
