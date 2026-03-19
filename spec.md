# Relocate Xpress

## Current State
New project. No existing application files.

## Requested Changes (Diff)

### Add
- Full landing page for Relocate Xpress relocation company
- Hero section with trust badge, headline, subheadline, gold "Or we pay you" highlight
- Interactive input panel: From/To location fields + Home Size selector (1BHK/2BHK/3BHK), pre-filled with Whitefield → Indiranagar
- Live system output card: Estimated Time, Estimated Cost, Team Assigned, Risk Level — computed reactively from input
- Animated background route/map lines (subtle, minimal)
- Three CTAs: "Lock My Slot Now" (primary/gold glow), "Get Price in 30 Sec" (secondary), "Talk to Expert" (tertiary)
- "Your Move Plan" section: personalized card showing route, price, time, team, guarantee badge
- "Live Operations" section: real-time-style truck status dashboard (Active/In Transit/Completed)
- "How It Works" section: 3 steps with icons, no paragraphs
- "Guarantee" section: bold centered "If anything goes wrong, we don't argue. We pay."
- Motoko backend storing pricing config and serving move estimates

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: Motoko actor with pricing logic per home size, returns estimated cost/time/team for a given home size
2. Frontend: Single-page React app with all sections
3. Design: Dark navy/black bg, gold accents, glassmorphism cards, premium typography
4. Interactivity: Inputs update system output card live; animated SVG background lines
5. Live Operations: Simulated truck statuses cycling with subtle animation
6. All CTAs functional (scroll to form or open modal)
