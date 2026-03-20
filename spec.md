# Relocate Xpress — OS Enhancement (Version 4)

## Current State
A dark-mode relocation landing page with gold accents, live system section, animated route, live ops trucks, guarantee section, and a booking modal. Already has animated elements, glassmorphism cards, LIVE badge, and real-time counter.

## Requested Changes (Diff)

### Add
- Pulsing glow keyframe animation on the LIVE badge in Hero system panel and LiveOps section
- Animated SVG line/graph in the system section (Hero right column) — scrolling data line
- Micro text "Updating…" / "Updated X sec ago" — already exists, enhance with "Updating…" phase
- Urgency strip below headline: "Next available slot: Today, 6:30 PM"
- Trust intensifier line under guarantee: "Zero disputes. Zero follow-ups. Instant resolution."
- New keyframe: `live-glow-pulse` for LIVE badge
- New keyframe: `graph-line-scroll` for animated graph in system section

### Modify
- CTA button text: "Secure My Move" → "Lock My Safe Move" (both in Hero and Guarantee)
- System section (Hero right column): increase padding/size by ~15%, add stronger glow border (blue/green), elevated shadow
- Buttons: add stronger shadow + depth on hover (active press effect)
- Cards: slightly elevated with deeper shadow
- Spacing: reduce section/element spacing by ~5–8% throughout
- LIVE badge: add pulsing glow animation
- `updatedText` logic: include "Updating…" phase (show "Updating…" briefly every ~10 seconds)

### Remove
- Nothing removed

## Implementation Plan
1. Add CSS keyframes for `live-glow-pulse` and `graph-scroll` in index.css
2. Enhance btn-gold styles: bigger, stronger glow, press depth active state
3. Enhance glass-card: slightly more elevation shadow
4. Update Hero.tsx:
   - Add urgency strip below headline
   - Change CTA text to "Lock My Safe Move"
   - Enhance LIVE badge with pulsing glow class
   - Add animated graph SVG inside system panel
   - Enhance system section border/glow and padding (scale up ~15%)
   - Update updatedText logic to cycle "Updating…" briefly
5. Update Guarantee.tsx:
   - Change CTA text to "Lock My Safe Move"
   - Add "Zero disputes. Zero follow-ups. Instant resolution." below guarantee headline
6. Reduce py-24 to py-20 in section spacing across components
