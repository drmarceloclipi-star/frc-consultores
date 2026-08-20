import type { Locale } from "@/lib/translations"

export interface AppProduct {
  id: string
  name: string
  summary: string
  startingPrice: string
  priceValue: number
  priceSuffix?: string
  timeline: string
  bestFor: string
  includes: readonly string[]
  exclusions?: readonly string[]
  recurring?: boolean
  featured?: boolean
}

interface CaseStudyPreview {
  name: string
  category: string
  summary: string
  url: string
  domain: string
}

interface AppProductsContent {
  eyebrow: string
  title: string
  intro: string
  startingAt: string
  heroPrice: string
  heroPriceContext: string
  heroCta: string
  catalogEyebrow: string
  catalogTitle: string
  timelineLabel: string
  bestForLabel: string
  includesLabel: string
  requestLabel: string
  featuredLabel: string
  products: readonly AppProduct[]
  caseStudiesEyebrow: string
  caseStudiesTitle: string
  caseStudiesIntro: string
  caseStudies: readonly CaseStudyPreview[]
  useCasesEyebrow: string
  useCasesTitle: string
  useCasesIntro: string
  useCases: readonly string[]
  comparisonEyebrow: string
  comparisonTitle: string
  comparisonIntro: string
  comparisonHeaders: readonly [string, string, string]
  comparisonRows: readonly {
    label: string
    diy: string
    managed: string
    frc: string
  }[]
  costEyebrow: string
  costTitle: string
  costIntro: string
  includedCosts: readonly string[]
  externalCostsTitle: string
  externalCosts: readonly string[]
  ownershipTitle: string
  ownershipText: string
  faqEyebrow: string
  faqTitle: string
  faqs: readonly { question: string; answer: string }[]
  ctaTitle: string
  ctaDescription: string
  ctaLabel: string
}

const ptContent: AppProductsContent = {
  eyebrow: "Produtos para aplicativos",
  title: "Um caminho claro para colocar seu app nas lojas.",
  intro:
    "Pacotes para validar, construir, publicar e evoluir aplicativos iOS e Android. Você começa pelo tamanho certo e recebe uma proposta fechada depois do diagnóstico.",
  startingAt: "A partir de",
  heroPrice: "R$ 4.900",
  heroPriceContext: "para diagnóstico, protótipo e plano de construção",
  heroCta: "Solicitar diagnóstico",
  catalogEyebrow: "Catálogo",
  catalogTitle: "Escolha a etapa em que seu aplicativo está.",
  timelineLabel: "Prazo-base",
  bestForLabel: "Indicado para",
  includesLabel: "Inclui",
  requestLabel: "Solicitar diagnóstico",
  featuredLabel: "Mais procurado",
  products: [
    {
      id: "diagnostico-prototipo",
      name: "Diagnóstico e Protótipo",
      summary:
        "Transforma uma ideia ou necessidade operacional em um escopo que pode ser estimado e construído.",
      startingPrice: "R$ 4.900",
      priceValue: 4900,
      timeline: "1–2 semanas",
      bestFor: "Quem precisa reduzir incerteza antes de contratar o desenvolvimento.",
      includes: [
        "Entendimento do problema e dos usuários",
        "Fluxo principal e escopo priorizado",
        "Protótipo navegável da jornada central",
        "Arquitetura, riscos, prazo e estimativa",
      ],
    },
    {
      id: "mvp-ios-android",
      name: "MVP iOS + Android",
      summary:
        "Primeira versão utilizável para validar uma jornada central com usuários reais nas duas plataformas.",
      startingPrice: "R$ 24.900",
      priceValue: 24900,
      timeline: "6–10 semanas",
      bestFor: "PMEs e novos produtos que precisam lançar o essencial com responsabilidade.",
      includes: [
        "Aplicativo multiplataforma iOS e Android",
        "Autenticação, dados e jornada principal",
        "Painel administrativo básico",
        "Preparação e submissão às duas lojas",
      ],
      exclusions: ["Integrações ou regras complexas recebem estimativa própria."],
      featured: true,
    },
    {
      id: "app-negocios",
      name: "App para Negócios",
      summary:
        "Produto digital completo para atender clientes, equipes ou parceiros com processos integrados.",
      startingPrice: "R$ 49.900",
      priceValue: 49900,
      timeline: "10–16 semanas",
      bestFor: "Empresas com múltiplos fluxos, perfis de acesso e integrações.",
      includes: [
        "Experiência iOS e Android",
        "Backend e painel administrativo",
        "Notificações, analytics e observabilidade",
        "Integrações e lançamento em produção",
      ],
      exclusions: ["Escopo final depende de regras, integrações e volume operacional."],
    },
    {
      id: "publicacao-lojas",
      name: "Publicação nas Lojas",
      summary:
        "Leva um aplicativo existente até App Store e Google Play com contas pertencentes à sua empresa.",
      startingPrice: "R$ 3.900",
      priceValue: 3900,
      timeline: "2–4 semanas",
      bestFor: "Quem já possui um app tecnicamente pronto, mas precisa organizar a distribuição.",
      includes: [
        "Revisão de prontidão e permissões",
        "TestFlight e faixas de teste do Google Play",
        "Orientação para textos e ativos obrigatórios",
        "Submissão inicial às duas lojas",
      ],
      exclusions: ["Correções de produto e exigências extraordinárias são orçadas à parte."],
    },
    {
      id: "resgate-modernizacao",
      name: "Resgate e Modernização",
      summary:
        "Recupera um app parado, instável ou desatualizado e define uma evolução segura.",
      startingPrice: "R$ 14.900",
      priceValue: 14900,
      timeline: "3–6 semanas",
      bestFor: "Empresas com código existente, rejeições de loja ou manutenção interrompida.",
      includes: [
        "Auditoria técnica do código e dependências",
        "Correções prioritárias de estabilidade",
        "Atualização do caminho de build e publicação",
        "Plano incremental de modernização",
      ],
      exclusions: ["Reescrita integral não faz parte do pacote inicial."],
    },
    {
      id: "evolucao-continua",
      name: "Evolução Contínua",
      summary:
        "Capacidade técnica recorrente para manter o aplicativo saudável e entregar melhorias pequenas.",
      startingPrice: "R$ 2.490",
      priceValue: 2490,
      priceSuffix: "/mês",
      timeline: "Ciclo mensal",
      bestFor: "Aplicativos em produção que precisam de acompanhamento responsável.",
      includes: [
        "Até 12 horas técnicas não cumulativas",
        "Monitoramento e manutenção preventiva",
        "Priorização mensal do backlog",
        "Uma entrega planejada por ciclo",
      ],
      exclusions: ["Hospedagem, APIs e serviços de terceiros são cobrados separadamente."],
      recurring: true,
    },
  ],
  caseStudiesEyebrow: "Cases",
  caseStudiesTitle: "Produtos em operação, disponíveis para conhecer.",
  caseStudiesIntro:
    "Três exemplos públicos de produtos desenvolvidos pela FRC em contextos de saúde e operação institucional.",
  caseStudies: [
    {
      name: "Triagemia",
      category: "Triagem psiquiátrica",
      summary:
        "Coleta estruturada e síntese clínica assistida por IA para profissionais de saúde mental, sem constituir diagnóstico.",
      url: "https://triagemia.com.br/",
      domain: "triagemia.com.br",
    },
    {
      name: "BedSight Flow",
      category: "Fluxo hospitalar",
      summary:
        "Gestão operacional de leitos baseada em Lean Healthcare, com gestão à vista para a rotina hospitalar.",
      url: "https://lean-841e5.web.app/",
      domain: "lean-841e5.web.app",
    },
    {
      name: "Precepte",
      category: "Residência médica",
      summary:
        "Plataforma para gestão de presença, avaliações, escalas e acompanhamento de programas de residência médica.",
      url: "https://precepta-72265.web.app/",
      domain: "precepta-72265.web.app",
    },
  ],
  useCasesEyebrow: "Aplicações",
  useCasesTitle: "Produto sob medida para operações reais.",
  useCasesIntro:
    "O pacote define a forma de começar. A solução continua adaptada ao processo, à marca e aos usuários da sua empresa.",
  useCases: [
    "Agendamento e atendimento",
    "Comércio e pedidos",
    "Área de membros e conteúdo",
    "Equipes e operação de campo",
    "Eventos e comunidades",
    "Serviços com assinatura",
  ],
  comparisonEyebrow: "Comparativo",
  comparisonTitle: "Mensalidade de ferramenta não é custo de aplicativo pronto.",
  comparisonIntro:
    "Builders resolvem bem casos padronizados. Desenvolvimento sob medida faz sentido quando processo, integração, propriedade e evolução importam.",
  comparisonHeaders: ["Builder DIY", "Plataforma gerenciada", "FRC sob medida"],
  comparisonRows: [
    {
      label: "Trabalho de configuração",
      diy: "Feito pelo cliente",
      managed: "Parcialmente assistido",
      frc: "Conduzido pela equipe",
    },
    {
      label: "Personalização",
      diy: "Limitada ao catálogo",
      managed: "Baseada em plataforma",
      frc: "Ligada ao processo real",
    },
    {
      label: "Código e contas",
      diy: "Variam por plano",
      managed: "Dependência recorrente",
      frc: "Pertencem ao cliente",
    },
    {
      label: "Modelo de custo",
      diy: "Assinatura por app",
      managed: "Assinatura mais serviço",
      frc: "Projeto + operação opcional",
    },
  ],
  costEyebrow: "Investimento",
  costTitle: "O que entra no preço — e o que fica fora.",
  costIntro:
    "O valor publicado representa o menor escopo viável de cada pacote. O diagnóstico confirma requisitos e transforma a faixa inicial em proposta.",
  includedCosts: [
    "Planejamento e decisões técnicas",
    "Design da experiência contratada",
    "Desenvolvimento e testes do escopo",
    "Preparação de produção e transferência",
  ],
  externalCostsTitle: "Custos externos",
  externalCosts: [
    "Apple Developer: US$ 99 por ano",
    "Google Play Console: US$ 25, pagamento único",
    "Hospedagem, domínio e APIs conforme consumo",
    "Mídia, conteúdo, hardware e serviços não descritos",
  ],
  ownershipTitle: "Sua empresa mantém o controle",
  ownershipText:
    "Código contratado, contas das lojas, domínio e ambientes ficam em nome do cliente. Não é necessário manter assinatura com a FRC para continuar operando o produto entregue.",
  faqEyebrow: "Perguntas",
  faqTitle: "Antes de iniciar.",
  faqs: [
    {
      question: "O preço mostrado é fechado?",
      answer:
        "É o valor inicial para o escopo mínimo descrito. Depois do diagnóstico, a FRC apresenta escopo, prazo e preço fechados para a etapa contratada.",
    },
    {
      question: "O aplicativo será nativo?",
      answer:
        "Usamos uma base multiplataforma quando ela atende desempenho, experiência e integrações necessárias. Recursos que exigem implementação nativa específica são avaliados no diagnóstico.",
    },
    {
      question: "A aprovação nas lojas é garantida?",
      answer:
        "A FRC prepara e acompanha a submissão, mas Apple e Google decidem a aprovação. Ajustes dentro do escopo são tratados durante o processo.",
    },
    {
      question: "Posso começar somente pelo diagnóstico?",
      answer:
        "Sim. Os artefatos contratados são entregues ao cliente e podem orientar uma decisão interna ou uma etapa futura de desenvolvimento.",
    },
  ],
  ctaTitle: "Comece pela menor decisão que reduz o risco.",
  ctaDescription:
    "Conte o objetivo do aplicativo. A FRC confirma se um pacote atende ou se o projeto exige outra composição.",
  ctaLabel: "Solicitar diagnóstico",
}

const enContent: AppProductsContent = {
  eyebrow: "App products",
  title: "A clear path to getting your app into the stores.",
  intro:
    "Packages to validate, build, publish and evolve iOS and Android applications. Start at the right size and receive a fixed proposal after diagnosis.",
  startingAt: "Starting at",
  heroPrice: "BRL 4,900",
  heroPriceContext: "for diagnosis, prototype and build plan",
  heroCta: "Request a diagnosis",
  catalogEyebrow: "Catalog",
  catalogTitle: "Choose the stage your application is in.",
  timelineLabel: "Baseline timeline",
  bestForLabel: "Best for",
  includesLabel: "Includes",
  requestLabel: "Request a diagnosis",
  featuredLabel: "Most requested",
  products: [
    {
      id: "diagnosis-prototype",
      name: "Diagnosis and Prototype",
      summary:
        "Turns an idea or operating need into a scope that can be estimated and built.",
      startingPrice: "BRL 4,900",
      priceValue: 4900,
      timeline: "1–2 weeks",
      bestFor: "Teams that need to reduce uncertainty before hiring development.",
      includes: [
        "Problem and user understanding",
        "Core flow and prioritized scope",
        "Clickable prototype of the main journey",
        "Architecture, risks, timeline and estimate",
      ],
    },
    {
      id: "mvp-ios-android",
      name: "iOS + Android MVP",
      summary:
        "A usable first release that validates one core journey with real users on both platforms.",
      startingPrice: "BRL 24,900",
      priceValue: 24900,
      timeline: "6–10 weeks",
      bestFor: "Small businesses and new products that need a responsible first launch.",
      includes: [
        "Cross-platform iOS and Android app",
        "Authentication, data and core journey",
        "Basic administration panel",
        "Preparation and submission to both stores",
      ],
      exclusions: ["Complex rules or integrations receive a separate estimate."],
      featured: true,
    },
    {
      id: "business-app",
      name: "Business App",
      summary:
        "A complete digital product for serving customers, teams or partners through integrated processes.",
      startingPrice: "BRL 49,900",
      priceValue: 49900,
      timeline: "10–16 weeks",
      bestFor: "Companies with multiple flows, access roles and integrations.",
      includes: [
        "iOS and Android experience",
        "Backend and administration panel",
        "Notifications, analytics and observability",
        "Integrations and production launch",
      ],
      exclusions: ["Final scope depends on business rules, integrations and operating volume."],
    },
    {
      id: "store-publishing",
      name: "App Store Publishing",
      summary:
        "Takes an existing app to the App Store and Google Play using accounts owned by your company.",
      startingPrice: "BRL 3,900",
      priceValue: 3900,
      timeline: "2–4 weeks",
      bestFor: "Teams with a technically ready app that need to organize distribution.",
      includes: [
        "Readiness and permissions review",
        "TestFlight and Google Play testing tracks",
        "Guidance for required copy and assets",
        "Initial submission to both stores",
      ],
      exclusions: ["Product fixes and exceptional store requirements are quoted separately."],
    },
    {
      id: "rescue-modernization",
      name: "Rescue and Modernization",
      summary:
        "Recovers a stalled, unstable or outdated app and defines a safe evolution path.",
      startingPrice: "BRL 14,900",
      priceValue: 14900,
      timeline: "3–6 weeks",
      bestFor: "Companies with existing code, store rejections or interrupted maintenance.",
      includes: [
        "Technical audit of code and dependencies",
        "Priority stability fixes",
        "Build and publishing path update",
        "Incremental modernization plan",
      ],
      exclusions: ["A full rewrite is not part of the initial package."],
    },
    {
      id: "continuous-evolution",
      name: "Continuous Evolution",
      summary:
        "Recurring technical capacity to keep the application healthy and deliver small improvements.",
      startingPrice: "BRL 2,490",
      priceValue: 2490,
      priceSuffix: "/month",
      timeline: "Monthly cycle",
      bestFor: "Production apps that need responsible ongoing care.",
      includes: [
        "Up to 12 non-cumulative technical hours",
        "Monitoring and preventive maintenance",
        "Monthly backlog prioritization",
        "One planned delivery per cycle",
      ],
      exclusions: ["Hosting, APIs and third-party services are billed separately."],
      recurring: true,
    },
  ],
  caseStudiesEyebrow: "Case studies",
  caseStudiesTitle: "Live products, available to explore.",
  caseStudiesIntro:
    "Three public examples of products built by FRC for healthcare and institutional operations.",
  caseStudies: [
    {
      name: "Triagemia",
      category: "Psychiatric triage",
      summary:
        "Structured collection and AI-assisted clinical summaries for mental health professionals, without providing a diagnosis.",
      url: "https://triagemia.com.br/en/",
      domain: "triagemia.com.br",
    },
    {
      name: "BedSight Flow",
      category: "Hospital flow",
      summary:
        "Lean Healthcare-based operational bed management with visual management for hospital routines.",
      url: "https://lean-841e5.web.app/",
      domain: "lean-841e5.web.app",
    },
    {
      name: "Precepte",
      category: "Medical residency",
      summary:
        "A platform for attendance, assessments, schedules and program oversight in medical residency operations.",
      url: "https://precepta-72265.web.app/",
      domain: "precepta-72265.web.app",
    },
  ],
  useCasesEyebrow: "Applications",
  useCasesTitle: "Custom products for real operations.",
  useCasesIntro:
    "The package defines how the work starts. The solution remains tailored to your company’s process, brand and users.",
  useCases: [
    "Scheduling and customer service",
    "Commerce and ordering",
    "Membership and content",
    "Field teams and operations",
    "Events and communities",
    "Subscription services",
  ],
  comparisonEyebrow: "Comparison",
  comparisonTitle: "A tool subscription is not the cost of a finished app.",
  comparisonIntro:
    "Builders work well for standardized use cases. Custom development makes sense when process, integration, ownership and evolution matter.",
  comparisonHeaders: ["DIY builder", "Managed platform", "Custom FRC"],
  comparisonRows: [
    {
      label: "Configuration work",
      diy: "Handled by the customer",
      managed: "Partially assisted",
      frc: "Led by the team",
    },
    {
      label: "Customization",
      diy: "Limited to the catalog",
      managed: "Platform-based",
      frc: "Tied to the real process",
    },
    {
      label: "Code and accounts",
      diy: "Depends on the plan",
      managed: "Recurring dependency",
      frc: "Owned by the customer",
    },
    {
      label: "Cost model",
      diy: "Subscription per app",
      managed: "Subscription plus service",
      frc: "Project + optional operations",
    },
  ],
  costEyebrow: "Investment",
  costTitle: "What is included — and what remains external.",
  costIntro:
    "The published value represents the smallest viable scope for each package. Diagnosis confirms requirements and turns the starting range into a proposal.",
  includedCosts: [
    "Planning and technical decisions",
    "Contracted experience design",
    "Development and scope testing",
    "Production preparation and transfer",
  ],
  externalCostsTitle: "External costs",
  externalCosts: [
    "Apple Developer: USD 99 per year",
    "Google Play Console: USD 25 one-time fee",
    "Hosting, domain and APIs based on usage",
    "Media, content, hardware and unlisted services",
  ],
  ownershipTitle: "Your company stays in control",
  ownershipText:
    "Contracted code, store accounts, domain and environments remain under the customer’s ownership. An ongoing FRC subscription is not required to operate the delivered product.",
  faqEyebrow: "Questions",
  faqTitle: "Before you start.",
  faqs: [
    {
      question: "Is the displayed price fixed?",
      answer:
        "It is the starting value for the minimum described scope. After diagnosis, FRC presents a fixed scope, timeline and price for the contracted stage.",
    },
    {
      question: "Will the application be native?",
      answer:
        "We use a cross-platform foundation when it satisfies the required performance, experience and integrations. Features that need platform-specific native work are assessed during diagnosis.",
    },
    {
      question: "Is store approval guaranteed?",
      answer:
        "FRC prepares and follows the submission, but Apple and Google decide approval. Adjustments within the contracted scope are handled during the process.",
    },
    {
      question: "Can I purchase only the diagnosis?",
      answer:
        "Yes. Contracted artifacts are delivered to the customer and can support an internal decision or a future development stage.",
    },
  ],
  ctaTitle: "Start with the smallest decision that reduces risk.",
  ctaDescription:
    "Describe the application goal. FRC confirms whether a package fits or the project needs another composition.",
  ctaLabel: "Request a diagnosis",
}

export function getAppProductsContent(locale: Locale): AppProductsContent {
  return locale === "pt" ? ptContent : enContent
}
