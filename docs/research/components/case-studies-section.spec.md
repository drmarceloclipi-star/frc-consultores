# Case Studies Section Specification

## Overview
- **Target file:** `src/components/CaseStudiesSection.tsx`
- **Heading:** "Real Implementations, Measurable Results"
- **Subtitle:** "See how businesses are transforming operations with next-generation AI agents."
- **Interaction model:** Click-driven tab switching
- **Background:** White

## Container
- padding: 80px 0
- background: White
- max-width: 1200px, centered

## Header

### Heading
- Text: "Real Implementations, Measurable Results" (where "Measurable Results" is gold)
- Font size: 36-40px, bold
- Color: Navy (#2f4858) for main, Gold (#c9a961) for "Measurable Results"
- Margin bottom: 16px

### Subtitle
- Text: "See how businesses are transforming operations with next-generation AI agents."
- Font size: 16-18px
- Color: Gray (#6b8393)
- Max width: 600px
- Margin bottom: 40-60px

## Tab Buttons
- Display: flex, gap 16-24px
- Wrap: flex-wrap (mobile)
- Margin bottom: 40-60px
- 4 tabs total:
  1. "CRM Automation"
  2. "Quote Automation"
  3. "Order Processing & Quality Control"
  4. "AI Planning Assistant"

### Tab Button Styling
- Background: Transparent or light
- Color: Navy (#2f4858)
- Font size: 14-16px
- Font weight: 600
- Padding: 10px 16px
- Border: None or 1px transparent
- Border-bottom: 3px solid color (changes on active)
- Active state: Gold border-bottom (#c9a961), gold text
- Hover: Gray or light background
- Cursor: pointer
- Transition: 0.3s ease

## Content Container (Tab Content)

### Layout
- Display: Grid or Flex
- Two columns on desktop (left text, right optional image/icon)
- Responsive to 1 column on mobile

## Case Study: CRM Automation (default/first tab, active)

### Category Badge
- Text: "Sales & Marketing"
- Font size: 12px-14px
- Color: Gold (#c9a961)
- Margin bottom: 16px

### Main Heading
- Text: "CRM Automation"
- Font size: 28-32px, bold
- Color: Navy
- Margin bottom: 24px

### The Challenge
- Sub-heading: "The Challenge"
- Font size: 18-20px, bold
- Color: Navy
- Margin bottom: 12px
- Content: "Sales teams spend hours manually updating CRM records, scheduling follow-ups, and syncing data between email, calendar, and customer management systems."
- Font size: 14-16px
- Color: Gray
- Margin bottom: 24px

### The Solution
- Sub-heading: "The Solution"
- Font size: 18-20px, bold
- Color: Navy
- Margin bottom: 12px
- Content: "An AI agent that monitors email communications, automatically updates CRM records, schedules meetings, and ensures all customer interactions are logged and accessible across your team."
- Font size: 14-16px
- Color: Gray
- Margin bottom: 24px

### Behind the Scenes
- Sub-heading: "🔧 Behind the Scenes"
- Font size: 18-20px, bold
- Color: Navy
- Emoji: 🔧 (wrench)
- Margin bottom: 12px
- Content: "The agent reads email context, extracts relevant customer data, queries your CRM via API, applies business rules for categorization and follow-up timing, and orchestrates updates across multiple systems, all autonomously."
- Font size: 14-16px
- Color: Gray
- Margin bottom: 24px

### Results & Impact
- Sub-heading: "Results & Impact"
- Font size: 18-20px, bold
- Color: Navy
- Margin bottom: 12px
- Results list (4 items):
  - "60% reduction in manual CRM data entry"
  - "90% improvement in data accuracy"
  - "Zero missed follow-ups through intelligent scheduling"
  - "Seamless integration across email, calendar, and CRM"
- Each item: 14-16px, gray, margin-bottom 8px
- May have checkmarks or bullets

### Team Info
- Sub-heading: "Team:"
- Content: "Sales team of 8 people, non-technical users"
- Font size: 14px
- Color: Gray
- Margin bottom: 0

## Tab Content Transitions
- Display/Hide content via CSS (display: none/block) or React conditional rendering
- Fade transition: opacity 0.3s ease (optional)
- Smooth tab switching

## Responsive Behavior

### Desktop (lg)
- 4 tabs visible in row
- Two-column content layout (left: text, right: optional space/image)
- Full spacing and font sizes

### Tablet (md)
- Tabs may wrap to 2 rows
- Single column or two-column content
- Adjusted spacing

### Mobile (sm)
- Tabs wrap vertically, may scroll horizontally
- Single column content
- Heading: 28px
- Padding: 20px sides
- Font sizes reduced

## Implementation
1. Create src/components/CaseStudiesSection.tsx
2. Optional: Create CaseStudy.tsx sub-component for content
3. State management for tab switching (useState)
4. TypeScript strict
5. Tailwind utilities
6. Use 'use client' for interactivity
7. Named export

## Content Notes
- 4 cases total, but only 1 case detail shown above (CRM Automation)
- Other cases follow same structure: Challenge, Solution, Behind the Scenes, Results
- Tab switching is the primary interaction
- All text content must be exact from live site

## Verification
- npx tsc --noEmit
- npm run build