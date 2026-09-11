# Smoke Test Checklist

Use this checklist to verify production readiness before every release or submission.

| # | Test Item | Verification Procedure | Expected Outcome | Status |
|---|---|---|---|---|
| 1 | Application Initialization | Start Vite client dev server (`npm run dev`) | Application starts on port 5173 without syntax or module errors | Pending |
| 2 | Listing Page Load | Navigate to `http://localhost:5173` | Page loads with Header, Title, Hero Collage, Details, Reviews, Location, Sticky Card | Pending |
| 3 | Hero Gallery Hover | Hover over photos in 5-photo hero collage | Subtle brightness change without layout shift | Pending |
| 4 | Photo Tour Open | Click "Show all photos" or any hero photo | Full-screen Photo Tour opens, body scroll locked, categorized photos render | Pending |
| 5 | Photo Tour Close | Click back/close button in Photo Tour header | Modal dismisses, body scroll restored, focus returned to trigger | Pending |
| 6 | Lightbox Launch | Click any photo thumbnail inside Photo Tour | Lightbox opens in single-photo dark viewer | Pending |
| 7 | Lightbox Navigation | Click Prev / Next chevrons or press `ArrowLeft` / `ArrowRight` | Active photo transitions smoothly with updated counter (`X / Y`) | Pending |
| 8 | Lightbox Escape Key | Press `Escape` key while Lightbox is open | Lightbox closes smoothly | Pending |
| 9 | Sticky Subnav Bar | Scroll down past the hero gallery | Subnav header sticks to top with Photos/Amenities/Reviews/Location and Reserve snapshot | Pending |
| 10 | Sticky Subnav Smooth Scroll | Click "Amenities" or "Reviews" in sticky subnav | Viewport smoothly scrolls to targeted section | Pending |
| 11 | Reservation Date Change | Change check-in / checkout dates in reservation card | Total nights and calculated fees dynamically recalculate | Pending |
| 12 | Guest Selector Interaction | Click guest selector, increase adult and child count | Card displays updated guest breakdown | Pending |
| 13 | Amenities Modal | Click "Show all 45 amenities" | Full amenities catalog modal opens with category headings and icons | Pending |
| 14 | Reviews Modal | Click "Show all 19 reviews" | Reviews dialog opens showing full list of reviews | Pending |
| 15 | AI Concierge Open | Click floating AI Concierge trigger | Concierge drawer slides into view smoothly | Pending |
| 16 | AI Concierge Query | Enter sample constraint query e.g. "room in Goa under ₹6,000" | AI extracts parameters and displays ranked cards with match reasons | Pending |
| 17 | Mock Booking Flow | Click "Continue to booking" on recommendation or listing | Booking confirmation summary modal opens | Pending |
| 18 | Production Build | Run `npm run build` in `client/` | Vite creates optimized `dist/` bundle with zero errors | Pending |
