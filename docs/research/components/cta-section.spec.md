# CTA Section Specification

## Overview
- **Target file:** `src/components/CTASection.tsx`
- **Interaction model:** Static section with button CTAs
- **Background:** Dark navy blue (dark mode feel)

## Container Styles
- background: Dark navy blue (#2f4858 or rgb(47, 72, 88))
- padding: 80px-120px (top/bottom), 24px (sides)
- display: flex, flex-direction: column, align-items: center, justify-content: center
- min-height: 400px-500px
- text-align: center
- max-width: full width

## Heading Section

### Main Heading
- Text: "The AI landscape evolves weekly."
- Color: White
- Font size: 36px-48px
- Font weight: 700
- Line height: 1.2
- Margin bottom: 8px-16px

### Subheading
- Text: "The only way to learn is by doing."
- Color: Gold (#c9a961)
- Font size: 28px-40px
- Font weight: 700
- Line height: 1.2
- Margin bottom: 24px-32px

## Body Text
- Text: "Don't wait for the \"perfect\" AI strategy. Start small, experiment with real workflows, and learn what works for your team. The companies moving fastest aren't planning endlessly. They're testing, iterating, and adapting."
- Color: White or light gray
- Font size: 16px-18px
- Font weight: 400
- Line height: 1.6
- Max width: 700px
- Margin bottom: 40px-48px
- Opacity: 0.9 or lighter color

## Buttons

### Primary Button: "Start a Conversation"
- Text: "Start a Conversation"
- Background: Gold (#c9a961)
- Color: Dark navy text (for contrast on gold)
- Padding: 14px 32px (approximate)
- Border radius: 6px-8px
- Font size: 16px
- Font weight: 600
- Cursor: pointer
- Hover: Darker gold (#b39550 or similar)
- Box shadow: Subtle shadow
- Margin right: 16px (gap to next button)

### Secondary Button: "Explore Academy"
- Text: "Explore Academy"
- Background: Transparent
- Border: 1px solid white or gold (#c9a961)
- Color: White or gold text
- Padding: 14px 32px
- Border radius: 6px-8px
- Font size: 16px
- Font weight: 600
- Cursor: pointer
- Hover: Background lightens or opacity changes
- Href: Link to /academy or /en/academy

## Button Container
- display: flex
- gap: 16px-24px
- justify-content: center
- align-items: center
- flex-wrap: wrap (for mobile)
- Margin top: 0

## Responsive Behavior

### Desktop (1440px)
- Padding: 120px 24px
- Heading: 48px
- Subheading: 40px
- Body: 18px
- Buttons: Inline flex, horizontal layout
- Min-height: 500px

### Tablet (768px)
- Padding: 80px 24px
- Heading: 40px
- Subheading: 32px
- Body: 16px
- Buttons: May stack or stay inline depending on width

### Mobile (390px)
- Padding: 60px 20px
- Heading: 32px
- Subheading: 24px
- Body: 14px-16px
- Buttons: Stack vertically (flex-direction: column)
- Button width: Full or close to full
- Min-height: auto or less

## Animations/Interactions
- No scroll animations
- Button hover states with color/opacity change
- Smooth transitions on hover (0.2s-0.3s)
- Click navigates to /en/contact or shows contact form

## Layout Notes
- Section should span full viewport width
- Content centered and constrained by max-width
- Dark background makes white text stand out
- Gold accent buttons pop against dark background
- Good contrast for accessibility
