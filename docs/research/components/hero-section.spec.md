# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** Static display with scroll-to anchor links
- **Viewport:** Full width, min-height varies by viewport

## Visual Appearance

### Container Styles
- display: flex (or block)
- padding: Approximately 80px 0 (top/bottom spacing large)
- background: Light off-white (#fafbfc or white with very light gray)
- Background pattern: SVG geometric pattern (diagonal lines/grid visible behind text)
- min-height: Approximately 500-600px on desktop

### Layout Structure
- Hero contains: SVG pattern overlay (positioned absolute or background-image) + content div
- Content div is centered, max-width approximately 1200px
- Likely uses grid or flex for centering

## Text Content

### Subtitle
- Text: "The next generation of AI agents is here."
- Color: rgb(107, 131, 147) - medium gray
- Font size: Approximately 16px / 18px
- Font weight: 400 (regular)
- Line height: 1.5-1.6
- Margin bottom: 16px or 24px

### Main Heading
- Text: "Put AI Agents" + "to Work" (two-part)
- "Put AI Agents": navy color (rgb(47, 72, 88))
- "to Work": GOLD color (#c9a961 or similar warm gold)
- Font size: Very large, approximately 48px (desktop), scales down on mobile
- Font weight: 700 (bold)
- Line height: 1.1-1.2 (tight for headings)
- Text may be split across lines
- Margin bottom: 24px-32px

### Body Text
- Text: "The same technology that transformed software development is now automating business operations. We [...]"
- Color: rgb(107, 131, 147)
- Font size: 16px-18px
- Font weight: 400
- Line height: 1.6-1.7
- Max width: 600px (narrower than container)
- Margin bottom: 32px-40px

## Buttons/Links

### "See What's Different"
- Text: "See What's Different"
- Type: Link/anchor (goes to #comparison)
- Color: GOLD (#c9a961)
- Text decoration: Underline or arrow icon
- Hover: Darker gold or text-decoration-underline
- Font size: 16px
- Font weight: 500-600

### "View Real Examples"
- Text: "View Real Examples"
- Type: Link/anchor (goes to #solutions)
- Color: GOLD
- Similar styling to above
- Positioned next to or below first link

### Button Container
- Display: flex or inline-flex
- Gap: 16px-24px between buttons
- Margin top: 32px

## Responsive Behavior

### Desktop (1440px)
- Heading: 48px-56px
- Subtitle: 16px-18px
- Padding: 120px-160px (top/bottom)
- Content width: 600px-700px max
- Full viewport height: 600px-700px

### Tablet (768px)
- Heading: 36px-40px
- Padding: 80px 0
- Content adjusts for smaller viewport

### Mobile (390px)
- Heading: 28px-32px
- Padding: 60px 20px
- Full width minus horizontal padding
- Text: Single column

## Background Pattern
- SVG geometric pattern (appears to be diagonal lines or wireframe-like grid)
- Color: Very light, almost white (#f5f6f8 or similar)
- Opacity: Very subtle, barely visible
- Covers entire hero background
- May be in a ::before pseudo-element or actual SVG element

## Animations/Interactions
- No hover effects on hero itself
- Links have hover states (color change, underline)
- No scroll animations observed
- Anchor links work (smooth scroll to sections)

## Assets Required
- SVG background pattern (from page source or create similar)
- No images required in hero

## Content Notes
- Subtitle and body text are important messaging - use exact copy from site
- Gold color (#c9a961) is critical accent color throughout
- Navy color (#2f4858) is primary text color
- Very clean, minimal design

## Breakpoints
- Adjust padding at 768px and 390px viewports
- Font sizes scale responsively
- Full responsive layout required
