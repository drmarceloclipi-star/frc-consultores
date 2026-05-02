# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Background:** White or very light gray
- **Border:** Top border light gray
- **Interaction model:** Links and language selector

## Container
- padding: 24px 0 (vertical), 24px (horizontal)
- background: White
- border-top: 1px light gray (#e5e7eb)
- display: flex
- justify-content: space-between
- align-items: center

## Left Section: Copyright

### Copyright Text
- Text: "© 2026 Tavon. All rights reserved."
- Font size: 14px
- Color: Gray (#999999 or #9ca3af)
- Font weight: 400

## Right Section: Links & Language Selector

### Container
- display: flex
- gap: 24px-32px
- align-items: center

### Imprint Link
- Text: "Imprint"
- href: "/en/impressum"
- Color: Gray (#999999)
- Font size: 14px
- Hover: Color changes to navy or gold
- Text-decoration: none (underline on hover optional)

### Language Selector
- Display: flex
- Align items: center
- Gap: 8px
- Button/interactive element

#### Globe Icon
- Lucide React: Globe icon (or similar)
- Size: 16px-20px
- Color: Gray
- Margin right: 4px

#### Language Text
- Text: "English"
- Font size: 14px
- Color: Gray
- Hover: Text changes color

## Responsive Behavior

### Desktop (lg)
- Full layout: copyright | ... | imprint | language
- Flex layout as described
- All items visible

### Tablet (md)
- Same as desktop or single row with wrapping
- Gap adjustment: 16-24px

### Mobile (sm)
- May stack vertically or remain in single row with adjusted spacing
- Padding: 16px
- Font sizes: 12-14px
- Gap reduced: 12-16px

## Styling Notes
- Very light styling, minimal
- Subtle divider/border at top
- Clean, minimal design
- Colors: Gray/light gray for text
- No strong emphasis
- Link hover states should be subtle (color change)

## Implementation
1. Create src/components/Footer.tsx
2. No sub-components needed
3. TypeScript strict
4. Tailwind utilities
5. Next.js Link for navigation
6. Import Globe icon from lucide-react
7. Named export
8. Simple, no state needed

## Content (EXACT)
- Copyright: "© 2026 Tavon. All rights reserved."
- Imprint link: href="/en/impressum"
- Language: "English" with globe icon
- Language button: May have dropdown (if multi-language support), but spec shows static "English"

## Verification
- npx tsc --noEmit
- npm run build