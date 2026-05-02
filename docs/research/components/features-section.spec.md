# Features Section Specification

## Overview
- **Target file:** `src/components/FeaturesSection.tsx`
- **Heading:** "We Speak Agentic AI"
- **Subtitle:** "While others are still pitching chatbots, we're implementing the real thing."
- **Background:** White
- **Interaction model:** Static cards with links

## Container
- padding: 80px 0
- background: White
- max-width: 1200px, centered

## Header

### Heading
- Text: "We Speak Agentic AI" (where "Agentic AI" is gold)
- Font size: 36-40px, bold
- Color: Navy (#2f4858) for "We Speak", Gold (#c9a961) for "Agentic AI"
- Margin bottom: 16px

### Subtitle
- Text: "While others are still pitching chatbots, we're implementing the real thing."
- Font size: 16-18px
- Color: Gray (#6b8393)
- Max width: 600px
- Margin bottom: 40-60px

## Grid Layout
- Display: Grid, 2x2 on desktop, 1 column on mobile
- Gap: 24-32px
- Responsive: 2 columns (lg), 1 column (sm)

## Card (4 total: Deep Technical Understanding, Platform Expertise, Real Deployments, Honest Guidance)

### Card Container
- background: White
- border: 1px light gray (#e5e7eb)
- border-radius: 8-12px
- padding: 32-40px
- box-shadow: subtle
- display: flex, flex-direction: column
- height: 100% (equal height)
- text-decoration: none (if link)
- Hover: Subtle shadow increase, scale(1.02) or background change
- Transition: 0.3s ease

### Card Content
- Each card is a link/clickable element
- href varies per card (see below)

### Card Title
- Font size: 18-24px, bold
- Color: Navy (#2f4858)
- Margin bottom: 16px

### Card Description
- Font size: 14-16px
- Color: Gray (#6b8393)
- Line height: 1.6
- Margin bottom: 16px
- Flex-grow: 1 (pushes CTA to bottom)

### Card CTA
- Color: Gold (#c9a961)
- Font size: 14-16px
- Font weight: 600
- Text: "Read more →" or "See examples →"
- Hover: Darker gold
- Text-decoration: underline on hover (optional)

## Card Content (4 cards)

### Card 1: Deep Technical Understanding
- Title: "Deep Technical Understanding"
- Description: "We understand agent architectures from the coding world. We know how they plan, execute, handle errors, and adapt. This is core to everything we do."
- CTA: "Read more →"
- Href: "/blog/coding-agents-beyond-coding"

### Card 2: Platform Expertise
- Title: "Platform Expertise"
- Description: "Hands-on experience with Claude Cowork and Microsoft Copilot Cowork. We know what they can (and can't) do. We know how to get the most out of them."
- CTA: "Read more →"
- Href: "/blog/microsoft-copilot-cowork-coding-agents-enterprise"

### Card 3: Real Deployments
- Title: "Real Deployments"
- Description: "Proven implementations across sales, operations, manufacturing, and supply chain, from WhatsApp integrations to ERP orchestration."
- CTA: "See examples →"
- Href: "#solutions" (or /solutions)

### Card 4: Honest Guidance
- Title: "Honest Guidance"
- Description: "The landscape evolves weekly. We help you experiment fast, learn what works, and adapt. We don't sell you a rigid 6-month roadmap."
- CTA: "Read more →"
- Href: "/blog/ai-native-companies-german-tech-firms"

## Responsive Behavior

### Desktop (lg)
- 2x2 grid (2 columns, 2 rows)
- Gap: 32px
- Full card styling
- Heading: 40px

### Tablet (md)
- 2x2 grid may adjust
- Gap: 24px
- Heading: 36px

### Mobile (sm)
- 1 column (4 rows)
- Gap: 16px
- Heading: 32px
- Card padding: 24px
- Font sizes reduced

## Implementation
1. Create src/components/FeaturesSection.tsx
2. Optional sub-component FeatureCard.tsx for individual cards
3. TypeScript strict
4. Tailwind utilities
5. Next.js Link for navigation
6. Named export

## Verification
- npx tsc --noEmit
- npm run build