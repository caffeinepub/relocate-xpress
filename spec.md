# Relocate Xpress — Real-Time Intelligence Upgrade

## Current State
- Hero has static text fields for From/To cities (free text inputs)
- Price is hardcoded as "Starting from ₹9,500" — not dynamic
- Time estimate is based only on home size (not distance)
- Team size based only on home size
- Hero has text clutter (urgency strip, "This move is protected", "Serving 500+ cities" line)
- CTA button has no glow-pulse animation
- MovePlan component also shows static pricing from backend hook

## Requested Changes (Diff)

### Add
- City distance lookup table (~20 major Indian cities, approximate km between pairs)
- Dynamic pricing formula: Base ₹3000 + (distance × ₹12) + home size addon (0/2000/4000)
- Dynamic time estimation: 0-50km→4-6h, 50-300→6-12h, 300-800→12-24h, 800+→1-3 days
- Animated count-up effect when price changes
- "Based on 2,347 similar moves" below price
- "Optimizing route, team & logistics in real-time..." micro text
- Glow-pulse CSS animation on CTA button
- City dropdown selectors (replacing free text inputs) with major Indian cities list

### Modify
- Hero: Replace free-text city inputs with dropdown selects
- Hero: Remove text clutter — keep only: headline, "Across India — Door to Door", "Real-time pricing. Real-time tracking.", "Or we pay you."
- Hero: Remove "Serving 500+ cities", urgency strip, "This move is protected.", "Zero damage. Zero hidden charges."
- Hero: Price row in system panel becomes dynamic with count-up animation
- Hero: Time row becomes distance-based
- Hero: CTA button gets CSS glow-pulse animation
- MovePlan: Show same dynamic price (pass computed price down from App state)

### Remove
- "Serving 500+ cities across India" line in hero
- "Next available slot: Today, 6:30 PM" urgency strip
- "This move is protected." line above CTA
- "Zero damage. No hidden charges. No risk." below CTA (keep minimal)
- Static ₹9,500 price

## Implementation Plan
1. Create `src/frontend/src/lib/relocateEngine.ts` — city distance matrix, pricing formula, time estimation
2. Update `App.tsx` to compute dynamic price/time and pass as props
3. Update `Hero.tsx` — dropdown cities, dynamic price with count-up, cleaned hero text, CTA glow
4. Update `MovePlan.tsx` — accept and display dynamic price/time props
5. Add CSS for glow-pulse CTA button animation and count-up in index.css
