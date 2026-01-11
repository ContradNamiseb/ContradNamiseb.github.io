## 2025-02-23 - Single Page Portfolio Accessibility
**Learning:** Single page portfolios with fixed headers often trap keyboard users in navigation loops, making "Skip to Content" critical yet frequently overlooked.
**Action:** Always check for skip links on "hero" heavy pages with sticky navigation.

## 2025-02-23 - IntersectionObserver Thresholds
**Learning:** Using a single high threshold (e.g., 0.5) for Scroll Spy logic fails for sections taller than the viewport (especially on mobile).
**Action:** Use lower thresholds (0.2-0.3) or `rootMargin` to reliably detect active sections on responsive sites.

## 2025-02-23 - Respecting Reduced Motion
**Learning:** Personal sites often overuse scroll animations and floating elements ("blobs") which can cause vestibular issues. `scroll-behavior: smooth` is particularly jarring if not overridden.
**Action:** Always include a `@media (prefers-reduced-motion: reduce)` block that resets `scroll-behavior` to `auto` and disables infinite animations.
