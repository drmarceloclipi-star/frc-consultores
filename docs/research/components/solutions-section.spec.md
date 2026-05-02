# Solutions Section Specification

## Overview
- **Target file:** `src/components/SolutionsSection.tsx`
- **Interaction model:** Static cards with button CTAs
- **Section heading:** "How We Can Help"
- **Intro text:** "Whether you want to build internal capability or partner with us for implementation, we guide you from strategy through implementation."

## Container Styles
- display: grid or flex
- padding: 80px 0 (top/bottom)
- background: White/transparent
- max-width: 1200px (centered)
- gap: 24px or 32px between cards
- Grid: 3 columns on desktop, 1 column on mobile

## Section Header

### Heading "How We Can Help"
- Text: "How We Can Help" (where "Can Help" is gold)
- Font size: 36px-40px
- Font weight: 700
- Color: Navy (#2f4858) for "How We", Gold (#c9a961) for "Can Help"
- Margin bottom: 16px-24px

### Intro Text
- Color: rgb(107, 131, 147) - gray
- Font size: 16px-18px
- Font weight: 400
- Line height: 1.6
- Max width: 600px
- Margin bottom: 40px-60px

## Card Structure (3 Cards: Consulting, Automation, Toolkit)

### Card Container
- background: White
- border: 1px solid light gray (#e5e7eb or similar)
- border-radius: 8px-12px
- padding: 32px-40px
- box-shadow: Subtle, 0 1px 3px rgba(0,0,0,0.1) or similar
- display: flex, flex-direction: column
- height: 100% (equal height cards)

### Card Icon
- Size: 48px-64px circle
- background: Gold (#c9a961)
- Color: White icon inside
- Icon type: Varies per card (briefcase for consulting, gear for automation, toolkit for toolkit)
- Margin bottom: 24px
- Border radius: 50% (circle)

### Card Title
- Text: "Consulting" / "Automation" / "Toolkit"
- Font size: 20px-24px
- Font weight: 700
- Color: Navy (#2f4858)
- Margin bottom: 16px

### Card Subtitle/Description
- Text: One-line gold text describing the service
- Color: Gold (#c9a961)
- Font size: 14px-16px
- Font weight: 600
- Margin bottom: 16px-24px

### Card Body Text
- Text: Longer description paragraph
- Color: Gray (rgb(107, 131, 147))
- Font size: 14px-16px
- Font weight: 400
- Line height: 1.6
- Margin bottom: 24px

### Includes List
- Label: "Includes:"
- Color: Navy (#2f4858)
- Font weight: 600
- Font size: 14px
- Margin bottom: 12px

### List Items
- 4 items per card
- Bullet/checkmark: Gold checkmark icon (✓)
- Text: Each item is 1-2 lines
- Color: Gray (rgb(107, 131, 147))
- Font size: 14px
- Font weight: 400
- Line height: 1.5
- Margin bottom: 8px between items

### Button
- Text: "Discuss Your Needs"
- Style: Button (solid or outline)
- Background: Gold (#c9a961)
- Color: Navy or dark text
- Padding: 12px 24px (approximate)
- Border radius: 6px-8px
- Font size: 14px-16px
- Font weight: 600
- Cursor: pointer
- Hover: Darker gold or opacity change
- Margin top: auto (pushes button to bottom)

## Content per Card

### Consulting Card
- Title: "Consulting"
- Subtitle: "Find the right use cases and build a strategy"
- Description: "Not sure where to start? We help you identify high-impact opportunities, run controlled experiments, and build a roadmap for AI agent adoption."
- Includes:
  1. Discovery workshops
  2. Use case identification
  3. Pilot programs (4-week sprints)
  4. Strategic advisory

### Automation Card
- Title: "Automation"
- Subtitle: "We build, deploy, and optimize agents for you"
- Description: "Need a complete solution? We design, develop, and integrate custom agents tailored to your workflows and systems."
- Includes:
  1. Custom agent development
  2. System integration
  3. Workflow automation
  4. Ongoing optimization

### Toolkit Card
- Title: "Toolkit"
- Subtitle: "Everything you need to build powerful agents"
- Description: "We provide the frameworks, templates, and building blocks to create production-ready AI agents — so your team can move from idea to deployment fast."
- Includes:
  1. Agent development frameworks
  2. Pre-built templates & components
  3. Integration libraries
  4. Best practices & documentation

## Responsive Behavior

### Desktop (1440px)
- 3 columns
- Card width: ~300px each with gaps
- Full justified spacing

### Tablet (768px)
- 1 or 2 columns
- Card width: adjusts to fit

### Mobile (390px)
- 1 column
- Full width with padding on sides
- Card padding: 24px

## Animations/Interactions
- Card hover: Possible subtle shadow increase or scale(1.02)
- Button hover: Color/opacity change
- No other animations observed
