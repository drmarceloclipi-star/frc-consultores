# Tavon.ai Page Topology

## Page Sections (Top to Bottom)

### 1. Header (Sticky)
- Position: sticky, height 65px
- Background: transparent white (oklab with 0.8 opacity)
- Border: 1px bottom border (light gray)
- Content: Logo, nav menu (Why Now, Solutions, Academy, About Us, Blog), Contact button (gold), mobile menu toggle
- Interaction: Sticky positioning, nav items are clickable (links or buttons)

### 2. Hero Section
- Background: Light cream/off-white, possibly with SVG pattern overlay
- Content: 
  - Subtitle: "The next generation of AI agents is here."
  - Main heading: "Put AI Agents" (navy) + "to Work" (gold)
  - Body text: "The same technology..."
  - CTAs: "See What's Different" link, "View Real Examples" link
- Styling: Large text, centered or left-aligned, good spacing
- Responsive: Mobile-first layout

### 3. Solutions Section (How We Can Help)
- Background: White/transparent
- Layout: 3 equal columns (desktop), stacked (mobile)
- Cards: Consulting, Automation, Toolkit
  - Each has: icon (gold), title, description, "Includes:" list with checkmarks, "Discuss Your Needs" button
- Interaction Model: Static display, buttons link to contact

### 4. Why Now Section (Not Your Average AI Assistant)
- Background: Light gray (#f8f9fa or similar)
- Layout: Text intro + Comparison table (Old Generation vs New Generation)
- Content: 
  - Heading: "Not Your Average 'AI Assistant'"
  - Comparison showing 6 features per side
  - Central "VS" badge/circle (dark color)
  - Gold left border on "New Generation" side
  - Stats: 80%, 2.5 hrs, 78% in 3 cards

### 5. Features Section (We Speak Agentic AI)
- Background: White
- Layout: 4 card grid (2x2 or 1x4 mobile)
- Cards: Deep Technical Understanding, Platform Expertise, Real Deployments, Honest Guidance
  - Each is a link/button that goes to blog or examples
  - Text content with "Read more →" or "See examples →"

### 6. Case Studies Section (Real Implementations)
- Background: White
- Layout: Tabbed/button interface
  - Buttons: CRM Automation, Quote Automation, Order Processing & Quality Control, AI Planning Assistant
  - Active tab shows: Challenge, Solution, Behind the Scenes, Results & Impact
- Interaction Model: Click-driven tab switching
- Each tab content: Headings, descriptions, results list

### 7. CTA Section (AI landscape evolves weekly)
- Background: Dark navy blue (#2f4858 or similar)
- Text: White heading + Gold heading
- Layout: Centered text + 2 buttons
  - "Start a Conversation" (gold/filled)
  - "Explore Academy" (outline/secondary)
- Interaction: Button clicks navigate

### 8. Footer
- Background: Light gray/white
- Content: Copyright, Imprint link, Language selector (English with globe icon)
- Sticky or fixed position possible

## Z-Index Layers
- Header: sticky, above content
- Overlays/dropdowns: above content
- Default content: standard z-index

## Colors Used
- Primary navy: rgb(47, 72, 88) = #2f4858
- Secondary gray: rgb(107, 131, 147) = #6b8393
- Gold/accent: #c9a961 or similar warm gold
- Background: White/off-white
- Light gray: #f8f9fa or similar

## Fonts
- System fonts (Tailwind default): ui-sans-serif, system-ui, sans-serif
- No Google Fonts detected

## Design System
- Using Tailwind CSS v4 with oklch color space
- CSS variables for color tokens
- Likely uses shadcn/ui components based on codebase

## Responsive Breakpoints
- Mobile: 390px viewport
- Tablet: 768px viewport
- Desktop: 1440px viewport
