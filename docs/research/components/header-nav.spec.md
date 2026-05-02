# Header/Navigation Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Position:** Sticky (sticky top of page)
- **Interaction model:** Click-based navigation

## Container Styles
- position: sticky
- top: 0
- height: 65px
- background: oklab(0.999994 0.0000455677 0.0000200868 / 0.8) - essentially white with 0.8 opacity (translucent)
- border-bottom: 1px solid light gray (#e5e7eb or lab(91.6229 -0.159115 -2.26791))
- z-index: Ensure above content
- display: flex, align-items: center, justify-content: space-between
- padding: 0 24px (horizontal padding)
- width: 100%

## Logo
- Text/Image: "Tavon Logo" (SVG or text)
- Size: Fits within 65px height
- Margin right: auto (pushes nav to center-right)
- Link: href="/en"
- No text color change needed - likely dark navy

## Navigation Menu
- Display: flex (hidden on mobile, shown on desktop)
- Gap: 24px-32px between items
- Align items: center

### Nav Items (desktop visible)
1. "Why Now" - Button or link
2. "Solutions" - Button or link
3. "Academy" - Link, href="/en/academy"
4. "About Us" - Link, href="/en/about"
5. "Blog" - Link, href="/en/blog"

### Nav Item Styling
- Color: Navy (#2f4858) or similar
- Font size: 16px
- Font weight: 400-500
- Hover: Color change to gold (#c9a961) or text-decoration-underline
- Cursor: pointer
- No background, text links

## Contact Button
- Text: "Contact"
- Background: Gold (#c9a961)
- Color: Dark text (navy or dark gray)
- Padding: 10px 20px (approximate)
- Border radius: 4px-6px
- Font size: 14px-16px
- Font weight: 600
- Margin left: 16px-24px
- Hover: Darker gold
- Click: href="/contact" or opens contact form

## Mobile Menu Toggle
- Display: Hidden on desktop (md and up), shown on mobile (sm and below)
- Type: Button (hamburger icon)
- Icon: Three horizontal lines (hamburger)
- Size: 24px square
- Color: Navy (#2f4858)
- Margin left: auto
- Functionality: Opens/closes mobile menu (state management)

## Mobile Menu
- Display: None by default, visible when toggle is active
- Position: Absolute or fixed, below header
- Background: White
- Width: Full viewport width
- Z-index: Above content but below modals
- Items: Vertical stack of nav items + contact button

### Mobile Menu Items
- Each item takes full width
- Padding: 12px 24px
- Border bottom: 1px light divider
- Font size: 16px
- Color: Navy
- Hover: Light background

## Responsive Behavior

### Desktop (1440px / md and up)
- Full nav visible: Logo | Nav items centered | Contact button
- Height: 65px
- Flex layout: Justify-space-between
- No hamburger menu

### Tablet (768px)
- Same as desktop, nav may wrap slightly

### Mobile (390px / sm and below)
- Logo (left) | Hamburger menu (right)
- Nav hidden
- Contact button hidden
- Hamburger triggers mobile menu dropdown
- Menu items stack vertically
- Contact button at bottom of mobile menu

## Sticky Behavior
- Stays at top on scroll
- Slight transparency/backdrop-filter may be applied (oklab color suggests this)
- No shadow change on scroll observed
- Border visible at all times

## Accessibility
- Nav items should be semantic <a> tags or <button> with proper roles
- Mobile menu toggle should have aria-label
- Focus states on all interactive elements

## Content Notes
- Logo might be text "TAVON.ai" with icon
- Nav items are important for page navigation
- Contact button is clear CTA
