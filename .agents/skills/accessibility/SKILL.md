---
name: accessibility
description: WCAG 2.1 AA compliance, focus management, ARIA dialogs, keyboard navigation, and reduced motion.
---

# Accessibility Skill

Use this skill when auditing and implementing accessible components.

## Requirements
- Modals (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`).
- Focus trapping inside open modals (Photo Tour, Lightbox, Reviews modal, Concierge drawer).
- Focus restoration to the triggering element upon closing.
- Keyboard bindings:
  - `Escape`: Close active modal or lightbox.
  - `ArrowLeft` / `ArrowRight`: Navigate through lightbox photos.
  - `Tab` / `Shift+Tab`: Cycle through interactive elements inside modal trap.
- Screen-reader accessible labels on icon-only buttons (`aria-label="Close"`, `aria-label="Previous photo"`).
- Honor `prefers-reduced-motion` media queries in animations.
