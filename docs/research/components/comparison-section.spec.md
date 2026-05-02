# Comparison Section (Why Now / Not Your Average AI Assistant) Specification

## Overview
- **Target file:** `src/components/ComparisonSection.tsx`
- **Interaction model:** Static display
- **Background:** Light gray (#f8f9fa or rgb(248, 249, 250))

## Container
- padding: 80px 0 (top/bottom)
- background: Light gray (#f8f9fa)
- text-align: center (for heading)

## Header

### Main Heading
- Text: "Not Your Average \"AI Assistant\""
- Font size: 36px-40px, bold
- Color: Navy (#2f4858)
- Margin bottom: 16px-24px

### Subtext
- Text: "Most \"AI agents\" are glorified chatbots. The next generation, based on coding agent breakthroughs, actually gets work done."
- Font size: 16px-18px, regular
- Color: Gray (#6b8393)
- Max width: 600px
- Margin bottom: 40px-60px
- Margin left/right: auto (centered)

## Comparison Table/Grid

### Layout
- Display: Grid or Flex
- Two columns: "Old Generation" (left) | "New Generation (Agentic AI)" (right)
- Gap: 32px-48px horizontal
- Max width: 1000px
- Margin: 0 auto
- Padding sides: 24px

### Old Generation (Left Column)

#### Column Heading
- Text: "Old Generation"
- Font size: 20px-24px, bold
- Color: Navy (#2f4858)
- Margin bottom: 24px-32px
- Left-align
- No icon/badge

#### Items (6 total, arrow prefix)
- "Answer questions"
- "Need perfect prompts"
- "Work in one tool at a time"
- "Require constant supervision"
- "Guess at context"
- "Break on edge cases"

Each item styling:
- Font size: 16px, regular
- Color: Gray (#6b8393)
- Margin bottom: 12px-16px
- Prefix: Right arrow "→" in gray
- Line height: 1.5

### VS Badge (Center)
- Position: Between two columns (absolute or flex center)
- Display: Circle (48px-64px diameter)
- Background: Dark navy (#2f4858)
- Text: "VS" in GOLD (#c9a961)
- Font size: 24px-28px, bold
- Text-align: center
- Vertical center: Middle of content height

### New Generation (Right Column) - GOLD BORDER LEFT

#### Column Heading
- Text: "New Generation" (normal) + "(Agentic AI)" (gold subscript)
- Font size: 20px-24px, bold
- Color: Navy (#2f4858) for main, Gold (#c9a961) for subtitle
- Margin bottom: 24px-32px
- Left-align
- Gold left border: 4px-6px solid gold (#c9a961) on entire column
- Padding left: 16px-20px (due to border)

#### Items (6 total, checkmark prefix)
- "Execute multi-step workflows"
- "Figure out what needs doing"
- "Orchestrate across systems"
- "Work autonomously with checkpoints"
- "Understand your full environment"
- "Handle complexity intelligently"

Each item styling:
- Font size: 16px, regular
- Color: Gray (#6b8393)
- Margin bottom: 12px-16px
- Prefix: Gold checkmark "✓" (#c9a961)
- Line height: 1.5

## Stats Section Below Comparison

### Heading
- Text: "The Breakthrough"
- Font size: 20px-24px, bold
- Color: Navy
- Margin top: 60px-80px
- Margin bottom: 24px

### Intro Text
- Text: "In 2024, [coding agents] revolutionized software development by learning to navigate complex environments, break down tasks, and execute reliable code. This same breakthrough is now powering the next generation of business agents."
- Font size: 14px-16px
- Color: Gray
- Max width: 700px
- Margin bottom: 40px
- Contains links to "coding agents like Claude Code and Cursor" and "business agents like Claude & Microsoft Cowork"

### Stats Grid (3 columns)

#### Stat 1
- Number: "80%"
- Color: Gold (#c9a961)
- Font size: 32px-40px, bold
- Description: "on individual coding tasks"
- Citation: "(Anthropic research)"
- Description color: Gray
- Font size: 14px

#### Stat 2
- Number: "2.5 hrs"
- Color: Gold
- Font size: 32px-40px, bold
- Description: "per week on routine work"
- Citation: "(HUB International)"
- Description color: Gray
- Font size: 14px

#### Stat 3
- Number: "78%"
- Color: Gold
- Font size: 32px-40px, bold
- Description: "across all development tasks"
- Citation: "(Stack Overflow Developer Survey)"
- Description color: Gray
- Font size: 14px

### Stats Container
- Display: Grid, 3 columns
- Gap: 24px-32px
- Text-align: center
- Padding: 40px-60px 24px
- Background: White or slightly different (maybe subtle background)
- Margin top: 40px

## Responsive Behavior

### Desktop (1440px)
- Comparison: Side by side, 2 columns visible
- Stats: 3 columns visible
- VS badge: Centered between columns
- Full spacing as described

### Tablet (768px)
- Comparison: May stack or adjust spacing
- Stats: 3 columns or 2+1 grid
- VS badge: Repositioned

### Mobile (390px)
- Comparison: Stack vertically, one per column
- Stats: 1 column or 3 rows stacked
- VS badge: Between rows or on top
- Padding: 20px sides
- Heading: 32px
- Items: 14px font

## Implementation
1. Create src/components/ComparisonSection.tsx
2. May create sub-component for stat cards
3. TypeScript strict
4. Tailwind utilities
5. Links use Next.js Link
6. Named export

## Verification
- npx tsc --noEmit (must pass)
- npm run build (must pass)