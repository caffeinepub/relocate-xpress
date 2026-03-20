# MoveX — Premium Brand Upgrade

## Current State
MoveX is a fully built landing page with dark navy/gold theme, hero estimator, live ops, item selector, and guarantee sections. Footer has old services list, old company links, and old email (info@relocatexpress.com). No individual service pages exist. Contact details partially outdated.

## Requested Changes (Diff)

### Add
- React Router for routing (or hash-based navigation) to support service sub-pages
- 4 service detail pages: HomeRelocation, OfficeRelocation, IntercityMoving, VehicleTransportation
  - Each page: minimal layout, title, bullet-list "What you get", closing statement, back-to-home link, WhatsApp CTA
- "Our System" section on the main landing page (between How It Works and Item Selector or standalone)
- Clickable service links in footer/services section for the 4 main services

### Modify
- Footer SERVICES column: update to the 8 new services; make first 4 clickable (route to service pages), last 4 non-clickable
- Footer COMPANY column: replace with About MoveX, Our System, Safety & Guarantee, Careers, Contact
- Footer email: change from info@relocatexpress.com to support@movexindia.com
- Footer address: update to "4th A, 1st Main Rd, Mysore Rd, Metro Layout, Nayandahalli, Bengaluru, Karnataka 560026"
- Footer Google Maps link: update to match new address
- Footer: remove caffeine.ai / caffeine.xyz built-with link at bottom
- Hero / all sections: remove any remaining "Relocate Xpress" references; replace with MoveX
- Brand language: replace "Packers & Movers" with "Relocation System"/"Move Intelligence"/"Logistics Engine" wherever found

### Remove
- All references to "Relocate Xpress"
- Old email ID (info@relocatexpress.com)
- caffeine.xyz / caffeine.ai draft link from footer bottom bar

## Implementation Plan
1. Add react-router-dom (or use HashRouter) to support multi-page routing
2. Create service page components: HomeRelocationPage, OfficeRelocationPage, IntercityMovingPage, VehicleTransportationPage
3. Wrap App in Router, add routes for /, /home-relocation, /office-relocation, /intercity-moving, /vehicle-transportation
4. Add "Our System" section component and insert into main page
5. Update Footer: services list, company list, email, address, remove caffeine link
6. Scan all components for "Relocate Xpress", old email, and brand language violations; fix them
