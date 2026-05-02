export const enTranslations = {
  // Header
  header: {
    whyNow: "Why Now",
    solutions: "Solutions",
    academy: "Academy",
    about: "About Us",
    blog: "Blog",
    contact: "Contact",
  },
  // Hero Section
  hero: {
    subtitle: "The next generation of AI agents is here.",
    titlePart1: "Put AI Agents",
    titlePart2: "to Work",
    description:
      "The same technology that transformed software development is now automating business operations. We help you build it, optimize it, and deploy it.",
    seeDifference: "See What's Different",
    viewExamples: "View Real Examples",
  },
  // Solutions Section
  solutions: {
    heading1: "How We ",
    heading2: "Can Help",
    intro:
      "Whether you want to build internal capability or partner with us for implementation, we guide you from strategy through implementation.",
    consulting: {
      title: "Consulting",
      subtitle: "Find the right use cases and build a strategy",
      description:
        "Not sure where to start? We help you identify high-impact opportunities, run controlled experiments, and build a roadmap for AI agent adoption.",
      includes: [
        "Discovery workshops",
        "Use case identification",
        "Pilot programs (4-week sprints)",
        "Strategic advisory",
      ],
    },
    automation: {
      title: "Automation",
      subtitle: "We build, deploy, and optimize agents for you",
      description:
        "Need a complete solution? We design, develop, and integrate custom agents tailored to your workflows and systems.",
      includes: [
        "Custom agent development",
        "System integration",
        "Workflow automation",
        "Ongoing optimization",
      ],
    },
    toolkit: {
      title: "Toolkit",
      subtitle: "Everything you need to build powerful agents",
      description:
        "We provide the frameworks, templates, and building blocks to create production-ready AI agents — so your team can move from idea to deployment fast.",
      includes: [
        "Agent development frameworks",
        "Pre-built templates & components",
        "Integration libraries",
        "Best practices & documentation",
      ],
    },
    discuss: "Discuss",
  },
  // Comparison Section
  comparison: {
    heading: "Not Your Average \"AI Assistant\"",
    intro:
      "Most \"AI agents\" are glorified chatbots. The next generation, based on coding agent breakthroughs, actually gets work done.",
    oldGeneration: "Old Generation",
    newGeneration: "New Generation",
    agentic: "(Agentic AI)",
    oldItems: [
      "Answer questions",
      "Need perfect prompts",
      "Work in one tool at a time",
      "Require constant supervision",
      "Guess at context",
      "Break on edge cases",
    ],
    newItems: [
      "Execute multi-step workflows",
      "Figure out what needs doing",
      "Orchestrate across systems",
      "Work autonomously with checkpoints",
      "Understand your full environment",
      "Handle complexity intelligently",
    ],
    breakthrough: "The Breakthrough",
    breakthroughText:
      "In 2024, coding agents like Claude Code and Cursor revolutionized software development by learning to navigate complex environments, break down tasks, and execute reliable code. This same breakthrough is now powering the next generation of business agents like Claude & Microsoft Cowork.",
    stats: [
      {
        number: "80%",
        description: "on individual coding tasks",
        citation: "(Anthropic research)",
      },
      {
        number: "2.5 hrs",
        description: "per week on routine work",
        citation: "(HUB International)",
      },
      {
        number: "78%",
        description: "across all development tasks",
        citation: "(Stack Overflow Developer Survey)",
      },
    ],
  },
  // Features Section
  features: {
    heading1: "We Speak ",
    heading2: "Agentic AI",
    subtitle: "While others are still pitching chatbots, we're implementing the real thing.",
    cards: [
      {
        title: "Deep Technical Understanding",
        description:
          "We understand agent architectures from the coding world. We know how they plan, execute, handle errors, and adapt. This is core to everything we do.",
        ctaText: "Read more →",
        href: "/blog/coding-agents-beyond-coding",
      },
      {
        title: "Platform Expertise",
        description:
          "Hands-on experience with Claude Cowork and Microsoft Copilot Cowork. We know what they can (and can't) do. We know how to get the most out of them.",
        ctaText: "Read more →",
        href: "/blog/microsoft-copilot-cowork-coding-agents-enterprise",
      },
      {
        title: "Real Deployments",
        description:
          "Proven implementations across sales, operations, manufacturing, and supply chain, from WhatsApp integrations to ERP orchestration.",
        ctaText: "See examples →",
        href: "#case-studies",
      },
      {
        title: "Honest Guidance",
        description:
          "The landscape evolves weekly. We help you experiment fast, learn what works, and adapt. We don't sell you a rigid 6-month roadmap.",
        ctaText: "Read more →",
        href: "/blog/ai-native-companies-german-tech-firms",
      },
    ],
  },
  // Case Studies Section
  caseStudies: {
    heading1: "Real Implementations, ",
    heading2: "Measurable Results",
    intro: "See how businesses are transforming operations with next-generation AI agents.",
    theChallenge: "The Challenge",
    theSolution: "The Solution",
    behindScenes: "🔧 Behind the Scenes",
    resultsImpact: "Results & Impact",
    team: "Team:",
    cases: [
      {
        tabLabel: "CRM Automation",
        category: "Sales & Marketing",
        heading: "CRM Automation",
        challenge:
          "Sales teams spend hours manually updating CRM records, scheduling follow-ups, and syncing data between email, calendar, and customer management systems.",
        solution:
          "An AI agent that monitors email communications, automatically updates CRM records, schedules meetings, and ensures all customer interactions are logged and accessible across your team.",
        behindScenes:
          "The agent reads email context, extracts relevant customer data, queries your CRM via API, applies business rules for categorization and follow-up timing, and orchestrates updates across multiple systems, all autonomously.",
        results: [
          "60% reduction in manual CRM data entry",
          "90% improvement in data accuracy",
          "Zero missed follow-ups through intelligent scheduling",
          "Seamless integration across email, calendar, and CRM",
        ],
        team: "Sales team of 8 people, non-technical users",
      },
      {
        tabLabel: "Quote Automation",
        category: "Sales Operations",
        heading: "Quote Automation",
        challenge:
          "Sales engineers manually create quotes by pulling data from multiple systems, calculating discounts, and formatting documents—a process that takes 2-3 hours per quote.",
        solution:
          "An AI agent that assembles quotes in real-time by accessing product catalogs, pricing engines, customer history, and contract templates, then delivers formatted documents ready for signature.",
        behindScenes:
          "The agent accesses product databases, calculates pricing with margin rules, cross-references customer purchase history for upsell opportunities, pulls compliance clauses from templates, and auto-generates PDFs with embedded signature fields.",
        results: [
          "Quote generation time reduced from 2-3 hours to 10 minutes",
          "95% accuracy in pricing calculations",
          "50% increase in quote-to-close conversion",
          "Real-time quote versioning and audit trails",
        ],
        team: "Sales engineering team of 4 people",
      },
      {
        tabLabel: "Order Processing & Quality Control",
        category: "Operations & Manufacturing",
        heading: "Order Processing & Quality Control",
        challenge:
          "Order entry requires manual data validation across email, spreadsheets, and ERP systems. Quality audits happen post-shipment, leaving defects undetected until customer complaints arrive.",
        solution:
          "An AI agent that validates incoming orders, checks inventory availability, flags quality issues in real-time, coordinates with warehouse systems, and triggers automated corrective actions.",
        behindScenes:
          "The agent ingests order data from multiple formats, validates against SKU databases and stock levels, applies quality rules and compliance checks, coordinates with warehouse management systems, and escalates exceptions to human supervisors.",
        results: [
          "100% order validation before warehouse processing",
          "40% reduction in order-to-shipment time",
          "Defect catch rate improved from 30% to 99%",
          "Zero customer-facing quality surprises",
        ],
        team: "Operations team of 12 people across order entry and QC",
      },
      {
        tabLabel: "AI Planning Assistant",
        category: "Project & Resource Management",
        heading: "AI Planning Assistant",
        challenge:
          "Project managers spend days gathering data, consulting calendars, and coordinating across teams to create realistic project plans. Scope changes cascade unmanaged through schedules.",
        solution:
          "An AI agent that builds project plans by understanding team capacity, dependencies, risks, and historical velocity, then auto-adjusts timelines as scope or constraints change.",
        behindScenes:
          "The agent queries team calendars, accesses historical project data and velocity metrics, models task dependencies, identifies critical path items, simulates resource allocation scenarios, and auto-generates Gantt charts with risk assessments.",
        results: [
          "Planning time reduced from days to minutes",
          "Schedule accuracy improved to 95% within ±5%",
          "Early identification of 100% of critical path risks",
          "Real-time schedule updates as conditions change",
        ],
        team: "Project management office of 6 people, multiple teams",
      },
    ],
  },
  // CTA Section
  cta: {
    heading: "The AI landscape evolves weekly.",
    subheading: "The only way to learn is by doing.",
    description:
      "Don't wait for the \"perfect\" AI strategy. Start small, experiment with real workflows, and learn what works for your team. The companies moving fastest aren't planning endlessly. They're testing, iterating, and adapting.",
    startConversation: "Start a Conversation",
    exploreAcademy: "Explore Academy",
  },
  // Contact Form Modal
  contactForm: {
    heading: "Let's Talk",
    description: "Tell us about your needs and we'll get back to you soon.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    companyLabel: "Company",
    companyPlaceholder: "Your company",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your needs...",
    setupCall: "Set up a call",
    requestMoreInfo: "Request more information on:",
    training: "Training",
    consulting: "Consulting",
    implementation: "Implementation",
    privacyLabel: "I have read and accept the",
    privacyLink: "Privacy Notice",
    sendMessage: "Send Message",
  },
  // Subscribe Modal
  subscribeForm: {
    heading: "Subscribe to Newsletter",
    description: "Stay up to date with updates, insights, and news from Tavon.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    privacyLabel: "I have read and accept the",
    privacyLink: "Privacy Notice",
    subscribe: "Subscribe",
  },
  // Header Contact Modal
  headerContactForm: {
    heading: "Contact",
    description: "Thank you for reaching out! We are looking forward to hearing from you.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your.email@example.com",
    noteLabel: "Note (optional)",
    notePlaceholder: "Your message...",
    setupCall: "Set up a call",
    requestMoreInfo: "Request more information on:",
    training: "Training",
    consulting: "Consulting",
    implementation: "Implementation",
    privacyLabel: "I have read and accept the",
    privacyLink: "Privacy Notice",
    cancel: "Cancel",
    submit: "Submit",
  },
  // Footer
  footer: {
    copyright: "© 2026 Tavon. All rights reserved.",
    imprint: "Imprint",
    language: "Language",
  },
} as const
