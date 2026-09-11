---
name: visual-fidelity
description: Inspect and verify pixel-conscious fidelity against the reference Airbnb listing screenshots.
---

# Visual Fidelity Skill

Use this skill when auditing and refining visual components to ensure exact parity with the reference implementation.

## Checklist
- **Hero Gallery**: 5-image collage (1 large 2-row on the left, 4 smaller in a 2x2 grid on right). Rounded outer corners (`rounded-xl` or `rounded-2xl`), subtle dark overlay on hover, "Show all photos" button with grid icon in bottom right.
- **Sticky Subnav**: Displays when scrolled past hero image. Contains tabs (`Photos`, `Amenities`, `Reviews`, `Location`) on the left, and sticky price snapshot + pink `Reserve` button on the right.
- **Sticky Booking Card**: Floating card with border, shadow (`shadow-xl`), check-in/out button grid, guest dropdown, and computed itemized totals.
- **Typography**: Clean sans-serif hierarchy (Inter / system fonts), medium/semibold headings, soft charcoal body copy.
- **Micro-interactions**: Scale transforms on cards, smooth transitions on button hovers, animated modal entrances.
