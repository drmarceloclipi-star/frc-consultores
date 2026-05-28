//! Internationalization: locale enum and the full EN/PT content model.

#[derive(Clone, Copy, PartialEq, Eq, Debug)]
pub enum Locale {
    En,
    Pt,
}

impl Locale {
    pub fn code(self) -> &'static str {
        match self {
            Locale::En => "en",
            Locale::Pt => "pt",
        }
    }

    pub fn from_code(code: &str) -> Option<Self> {
        match code {
            "en" => Some(Locale::En),
            "pt" => Some(Locale::Pt),
            _ => None,
        }
    }

    pub fn t(self) -> &'static Translations {
        match self {
            Locale::En => &EN,
            Locale::Pt => &PT,
        }
    }
}

pub struct Translations {
    pub header: Header,
    pub hero: Hero,
    pub solutions: Solutions,
    pub comparison: Comparison,
    pub features: Features,
    pub case_studies: CaseStudies,
    pub cta: Cta,
    pub contact_form: ContactForm,
    pub subscribe_form: SubscribeForm,
    pub header_contact_form: HeaderContactForm,
    pub footer: Footer,
}

pub struct Header {
    pub why_now: &'static str,
    pub solutions: &'static str,
    pub academy: &'static str,
    pub about: &'static str,
    pub blog: &'static str,
    pub contact: &'static str,
}

pub struct Hero {
    pub subtitle: &'static str,
    pub title_part1: &'static str,
    pub title_part2: &'static str,
    pub description: &'static str,
    pub see_difference: &'static str,
    pub view_examples: &'static str,
}

pub struct Solution {
    pub title: &'static str,
    pub subtitle: &'static str,
    pub description: &'static str,
    pub includes: [&'static str; 4],
}

pub struct Solutions {
    pub heading1: &'static str,
    pub heading2: &'static str,
    pub intro: &'static str,
    pub consulting: Solution,
    pub automation: Solution,
    pub toolkit: Solution,
    pub includes_label: &'static str,
    pub discuss_button: &'static str,
}

pub struct Stat {
    pub number: &'static str,
    pub description: &'static str,
    pub citation: &'static str,
}

pub struct Comparison {
    pub heading: &'static str,
    pub intro: &'static str,
    pub old_generation: &'static str,
    pub new_generation: &'static str,
    pub agentic: &'static str,
    pub old_items: [&'static str; 6],
    pub new_items: [&'static str; 6],
    pub breakthrough: &'static str,
    pub breakthrough_text: &'static str,
    pub stats: [Stat; 3],
}

pub struct FeatureCard {
    pub title: &'static str,
    pub description: &'static str,
    pub cta_text: &'static str,
    pub href: &'static str,
}

pub struct Features {
    pub heading1: &'static str,
    pub heading2: &'static str,
    pub subtitle: &'static str,
    pub cards: [FeatureCard; 4],
}

pub struct Case {
    pub tab_label: &'static str,
    pub category: &'static str,
    pub heading: &'static str,
    pub challenge: &'static str,
    pub solution: &'static str,
    pub behind_scenes: &'static str,
    pub results: [&'static str; 4],
    pub team: &'static str,
}

pub struct CaseStudies {
    pub heading1: &'static str,
    pub heading2: &'static str,
    pub intro: &'static str,
    pub the_challenge: &'static str,
    pub the_solution: &'static str,
    pub behind_scenes: &'static str,
    pub results_impact: &'static str,
    pub team: &'static str,
    pub cases: [Case; 4],
}

pub struct Cta {
    pub heading: &'static str,
    pub subheading: &'static str,
    pub description: &'static str,
    pub start_conversation: &'static str,
    pub explore_academy: &'static str,
}

pub struct ContactForm {
    pub heading: &'static str,
    pub description: &'static str,
    pub name_label: &'static str,
    pub name_placeholder: &'static str,
    pub email_label: &'static str,
    pub email_placeholder: &'static str,
    pub company_label: &'static str,
    pub company_placeholder: &'static str,
    pub message_label: &'static str,
    pub message_placeholder: &'static str,
    pub setup_call: &'static str,
    pub request_more_info: &'static str,
    pub training: &'static str,
    pub consulting: &'static str,
    pub implementation: &'static str,
    pub privacy_label: &'static str,
    pub privacy_link: &'static str,
    pub send_message: &'static str,
}

pub struct SubscribeForm {
    pub heading: &'static str,
    pub description: &'static str,
    pub name_label: &'static str,
    pub name_placeholder: &'static str,
    pub email_label: &'static str,
    pub email_placeholder: &'static str,
    pub privacy_label: &'static str,
    pub privacy_link: &'static str,
    pub subscribe: &'static str,
}

pub struct HeaderContactForm {
    pub heading: &'static str,
    pub description: &'static str,
    pub name_label: &'static str,
    pub name_placeholder: &'static str,
    pub email_label: &'static str,
    pub email_placeholder: &'static str,
    pub note_label: &'static str,
    pub note_placeholder: &'static str,
    pub setup_call: &'static str,
    pub request_more_info: &'static str,
    pub training: &'static str,
    pub consulting: &'static str,
    pub implementation: &'static str,
    pub privacy_label: &'static str,
    pub privacy_link: &'static str,
    pub cancel: &'static str,
    pub submit: &'static str,
}

pub struct Footer {
    pub copyright: &'static str,
    pub imprint: &'static str,
    /// Present for parity with the source translations; not currently rendered.
    #[allow(dead_code)]
    pub language: &'static str,
}

pub static EN: Translations = Translations {
    header: Header {
        why_now: "Why Now",
        solutions: "Solutions",
        academy: "Academy",
        about: "About Us",
        blog: "Blog",
        contact: "Contact",
    },
    hero: Hero {
        subtitle: "The next generation of AI agents is here.",
        title_part1: "Put AI Agents",
        title_part2: "to Work",
        description: "The same technology that transformed software development is now automating business operations. We help you build it, optimize it, and deploy it.",
        see_difference: "See What's Different",
        view_examples: "View Real Examples",
    },
    solutions: Solutions {
        heading1: "How We ",
        heading2: "Can Help",
        intro: "Whether you want to build internal capability or partner with us for implementation, we guide you from strategy through implementation.",
        consulting: Solution {
            title: "Consulting",
            subtitle: "Find the right use cases and build a strategy",
            description: "Not sure where to start? We help you identify high-impact opportunities, run controlled experiments, and build a roadmap for AI agent adoption.",
            includes: [
                "Discovery workshops",
                "Use case identification",
                "Pilot programs (4-week sprints)",
                "Strategic advisory",
            ],
        },
        automation: Solution {
            title: "Automation",
            subtitle: "We build, deploy, and optimize agents for you",
            description: "Need a complete solution? We design, develop, and integrate custom agents tailored to your workflows and systems.",
            includes: [
                "Custom agent development",
                "System integration",
                "Workflow automation",
                "Ongoing optimization",
            ],
        },
        toolkit: Solution {
            title: "Toolkit",
            subtitle: "Everything you need to build powerful agents",
            description: "We provide the frameworks, templates, and building blocks to create production-ready AI agents — so your team can move from idea to deployment fast.",
            includes: [
                "Agent development frameworks",
                "Pre-built templates & components",
                "Integration libraries",
                "Best practices & documentation",
            ],
        },
        includes_label: "Includes:",
        discuss_button: "Discuss Your Needs",
    },
    comparison: Comparison {
        heading: "Not Your Average \"AI Assistant\"",
        intro: "Most \"AI agents\" are glorified chatbots. The next generation, based on coding agent breakthroughs, actually gets work done.",
        old_generation: "Old Generation",
        new_generation: "New Generation",
        agentic: "(Agentic AI)",
        old_items: [
            "Answer questions",
            "Need perfect prompts",
            "Work in one tool at a time",
            "Require constant supervision",
            "Guess at context",
            "Break on edge cases",
        ],
        new_items: [
            "Execute multi-step workflows",
            "Figure out what needs doing",
            "Orchestrate across systems",
            "Work autonomously with checkpoints",
            "Understand your full environment",
            "Handle complexity intelligently",
        ],
        breakthrough: "The Breakthrough",
        breakthrough_text: "In 2024, coding agents like Claude Code and Cursor revolutionized software development by learning to navigate complex environments, break down tasks, and execute reliable code. This same breakthrough is now powering the next generation of business agents like Claude & Microsoft Cowork.",
        stats: [
            Stat { number: "80%", description: "on individual coding tasks", citation: "(Anthropic research)" },
            Stat { number: "2.5 hrs", description: "per week on routine work", citation: "(HUB International)" },
            Stat { number: "78%", description: "across all development tasks", citation: "(Stack Overflow Developer Survey)" },
        ],
    },
    features: Features {
        heading1: "We Speak ",
        heading2: "Agentic AI",
        subtitle: "While others are still pitching chatbots, we're implementing the real thing.",
        cards: [
            FeatureCard {
                title: "Deep Technical Understanding",
                description: "We understand agent architectures from the coding world. We know how they plan, execute, handle errors, and adapt. This is core to everything we do.",
                cta_text: "Read more →",
                href: "/blog/coding-agents-beyond-coding",
            },
            FeatureCard {
                title: "Platform Expertise",
                description: "Hands-on experience with Claude Cowork and Microsoft Copilot Cowork. We know what they can (and can't) do. We know how to get the most out of them.",
                cta_text: "Read more →",
                href: "/blog/microsoft-copilot-cowork-coding-agents-enterprise",
            },
            FeatureCard {
                title: "Real Deployments",
                description: "Proven implementations across sales, operations, manufacturing, and supply chain, from WhatsApp integrations to ERP orchestration.",
                cta_text: "See examples →",
                href: "#case-studies",
            },
            FeatureCard {
                title: "Honest Guidance",
                description: "The landscape evolves weekly. We help you experiment fast, learn what works, and adapt. We don't sell you a rigid 6-month roadmap.",
                cta_text: "Read more →",
                href: "/blog/ai-native-companies-german-tech-firms",
            },
        ],
    },
    case_studies: CaseStudies {
        heading1: "Real Implementations, ",
        heading2: "Measurable Results",
        intro: "See how businesses are transforming operations with next-generation AI agents.",
        the_challenge: "The Challenge",
        the_solution: "The Solution",
        behind_scenes: "🔧 Behind the Scenes",
        results_impact: "Results & Impact",
        team: "Team:",
        cases: [
            Case {
                tab_label: "CRM Automation",
                category: "Sales & Marketing",
                heading: "CRM Automation",
                challenge: "Sales teams spend hours manually updating CRM records, scheduling follow-ups, and syncing data between email, calendar, and customer management systems.",
                solution: "An AI agent that monitors email communications, automatically updates CRM records, schedules meetings, and ensures all customer interactions are logged and accessible across your team.",
                behind_scenes: "The agent reads email context, extracts relevant customer data, queries your CRM via API, applies business rules for categorization and follow-up timing, and orchestrates updates across multiple systems, all autonomously.",
                results: [
                    "60% reduction in manual CRM data entry",
                    "90% improvement in data accuracy",
                    "Zero missed follow-ups through intelligent scheduling",
                    "Seamless integration across email, calendar, and CRM",
                ],
                team: "Sales team of 8 people, non-technical users",
            },
            Case {
                tab_label: "Quote Automation",
                category: "Sales Operations",
                heading: "Quote Automation",
                challenge: "Sales engineers manually create quotes by pulling data from multiple systems, calculating discounts, and formatting documents—a process that takes 2-3 hours per quote.",
                solution: "An AI agent that assembles quotes in real-time by accessing product catalogs, pricing engines, customer history, and contract templates, then delivers formatted documents ready for signature.",
                behind_scenes: "The agent accesses product databases, calculates pricing with margin rules, cross-references customer purchase history for upsell opportunities, pulls compliance clauses from templates, and auto-generates PDFs with embedded signature fields.",
                results: [
                    "Quote generation time reduced from 2-3 hours to 10 minutes",
                    "95% accuracy in pricing calculations",
                    "50% increase in quote-to-close conversion",
                    "Real-time quote versioning and audit trails",
                ],
                team: "Sales engineering team of 4 people",
            },
            Case {
                tab_label: "Order Processing & Quality Control",
                category: "Operations & Manufacturing",
                heading: "Order Processing & Quality Control",
                challenge: "Order entry requires manual data validation across email, spreadsheets, and ERP systems. Quality audits happen post-shipment, leaving defects undetected until customer complaints arrive.",
                solution: "An AI agent that validates incoming orders, checks inventory availability, flags quality issues in real-time, coordinates with warehouse systems, and triggers automated corrective actions.",
                behind_scenes: "The agent ingests order data from multiple formats, validates against SKU databases and stock levels, applies quality rules and compliance checks, coordinates with warehouse management systems, and escalates exceptions to human supervisors.",
                results: [
                    "100% order validation before warehouse processing",
                    "40% reduction in order-to-shipment time",
                    "Defect catch rate improved from 30% to 99%",
                    "Zero customer-facing quality surprises",
                ],
                team: "Operations team of 12 people across order entry and QC",
            },
            Case {
                tab_label: "AI Planning Assistant",
                category: "Project & Resource Management",
                heading: "AI Planning Assistant",
                challenge: "Project managers spend days gathering data, consulting calendars, and coordinating across teams to create realistic project plans. Scope changes cascade unmanaged through schedules.",
                solution: "An AI agent that builds project plans by understanding team capacity, dependencies, risks, and historical velocity, then auto-adjusts timelines as scope or constraints change.",
                behind_scenes: "The agent queries team calendars, accesses historical project data and velocity metrics, models task dependencies, identifies critical path items, simulates resource allocation scenarios, and auto-generates Gantt charts with risk assessments.",
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
    cta: Cta {
        heading: "The AI landscape evolves weekly.",
        subheading: "The only way to learn is by doing.",
        description: "Don't wait for the \"perfect\" AI strategy. Start small, experiment with real workflows, and learn what works for your team. The companies moving fastest aren't planning endlessly. They're testing, iterating, and adapting.",
        start_conversation: "Start a Conversation",
        explore_academy: "Explore Academy",
    },
    contact_form: ContactForm {
        heading: "Let's Talk",
        description: "Tell us about your needs and we'll get back to you soon.",
        name_label: "Name",
        name_placeholder: "Your name",
        email_label: "Email",
        email_placeholder: "your@email.com",
        company_label: "Company",
        company_placeholder: "Your company",
        message_label: "Message",
        message_placeholder: "Tell us about your needs...",
        setup_call: "Set up a call",
        request_more_info: "Request more information on:",
        training: "Training",
        consulting: "Consulting",
        implementation: "Implementation",
        privacy_label: "I have read and accept the",
        privacy_link: "Privacy Notice",
        send_message: "Send Message",
    },
    subscribe_form: SubscribeForm {
        heading: "Subscribe to Newsletter",
        description: "Stay up to date with updates, insights, and news from Tavon.",
        name_label: "Name",
        name_placeholder: "Your name",
        email_label: "Email",
        email_placeholder: "your@email.com",
        privacy_label: "I have read and accept the",
        privacy_link: "Privacy Notice",
        subscribe: "Subscribe",
    },
    header_contact_form: HeaderContactForm {
        heading: "Contact",
        description: "Thank you for reaching out! We are looking forward to hearing from you.",
        name_label: "Name",
        name_placeholder: "Your name",
        email_label: "Email",
        email_placeholder: "your.email@example.com",
        note_label: "Note (optional)",
        note_placeholder: "Your message...",
        setup_call: "Set up a call",
        request_more_info: "Request more information on:",
        training: "Training",
        consulting: "Consulting",
        implementation: "Implementation",
        privacy_label: "I have read and accept the",
        privacy_link: "Privacy Notice",
        cancel: "Cancel",
        submit: "Submit",
    },
    footer: Footer {
        copyright: "© 2026 Tavon. All rights reserved.",
        imprint: "Imprint",
        language: "Language",
    },
};

pub static PT: Translations = Translations {
    header: Header {
        why_now: "Por Que Agora",
        solutions: "Soluções",
        academy: "Academia",
        about: "Sobre Nós",
        blog: "Blog",
        contact: "Contato",
    },
    hero: Hero {
        subtitle: "A próxima geração de agentes de IA está aqui.",
        title_part1: "Coloque Agentes",
        title_part2: "de IA para Trabalhar",
        description: "A mesma tecnologia que transformou o desenvolvimento de software agora está automatizando operações comerciais. Nós o ajudamos a construir, otimizar e implantar.",
        see_difference: "Veja o Que Diferencia",
        view_examples: "Ver Exemplos Reais",
    },
    solutions: Solutions {
        heading1: "Como Podemos ",
        heading2: "Ajudar",
        intro: "Quer construir capacidade interna ou fazer parceria conosco para implementação, o guiamos de estratégia até implementação.",
        consulting: Solution {
            title: "Consultoria",
            subtitle: "Encontre os casos de uso corretos e construa uma estratégia",
            description: "Não sabe por onde começar? O ajudamos a identificar oportunidades de alto impacto, executar experimentos controlados e construir um roteiro para adoção de agentes de IA.",
            includes: [
                "Workshops de descoberta",
                "Identificação de casos de uso",
                "Programas piloto (sprints de 4 semanas)",
                "Consultoria estratégica",
            ],
        },
        automation: Solution {
            title: "Automação",
            subtitle: "Construímos, implantamos e otimizamos agentes para você",
            description: "Precisa de uma solução completa? Projetamos, desenvolvemos e integramos agentes personalizados adaptados aos seus workflows e sistemas.",
            includes: [
                "Desenvolvimento de agentes personalizados",
                "Integração de sistemas",
                "Automação de fluxos de trabalho",
                "Otimização contínua",
            ],
        },
        toolkit: Solution {
            title: "Kit de Ferramentas",
            subtitle: "Tudo o que você precisa para construir agentes poderosos",
            description: "Fornecemos estruturas, modelos e blocos de construção para criar agentes de IA prontos para produção — para que sua equipe passe de ideia a implantação rapidamente.",
            includes: [
                "Estruturas de desenvolvimento de agentes",
                "Modelos pré-construídos e componentes",
                "Bibliotecas de integração",
                "Melhores práticas e documentação",
            ],
        },
        includes_label: "Inclui:",
        discuss_button: "Discutir Suas Necessidades",
    },
    comparison: Comparison {
        heading: "Não é seu \"Assistente de IA\" Comum",
        intro: "A maioria dos \"agentes de IA\" são chatbots disfarçados. A próxima geração, baseada em avanços de agentes de código, realmente realiza trabalho.",
        old_generation: "Geração Antiga",
        new_generation: "Nova Geração",
        agentic: "(IA Agêntica)",
        old_items: [
            "Responder perguntas",
            "Precisam de prompts perfeitos",
            "Trabalhar em uma ferramenta por vez",
            "Requerem supervisão constante",
            "Adivinhar contexto",
            "Quebram em casos extremos",
        ],
        new_items: [
            "Executar fluxos de trabalho multi-etapas",
            "Descobrir o que precisa ser feito",
            "Orquestrar entre sistemas",
            "Trabalhar autonomamente com checkpoints",
            "Entender seu ambiente completo",
            "Lidar com complexidade inteligentemente",
        ],
        breakthrough: "O Avanço",
        breakthrough_text: "Em 2024, agentes de código como Claude Code e Cursor revolucionaram o desenvolvimento de software ao aprender a navegar ambientes complexos, dividir tarefas e executar código confiável. Este mesmo avanço agora está alimentando a próxima geração de agentes comerciais como Claude & Microsoft Cowork.",
        stats: [
            Stat { number: "80%", description: "em tarefas individuais de codificação", citation: "(Pesquisa Anthropic)" },
            Stat { number: "2,5 hrs", description: "por semana em trabalho rotineiro", citation: "(HUB International)" },
            Stat { number: "78%", description: "em todas as tarefas de desenvolvimento", citation: "(Pesquisa Stack Overflow Developer Survey)" },
        ],
    },
    features: Features {
        heading1: "Entendemos ",
        heading2: "IA Agêntica",
        subtitle: "Enquanto outros ainda estão divulgando chatbots, estamos implementando o real.",
        cards: [
            FeatureCard {
                title: "Compreensão Técnica Profunda",
                description: "Entendemos arquiteturas de agentes do mundo da codificação. Sabemos como eles planejam, executam, lidam com erros e se adaptam. Isto é central em tudo o que fazemos.",
                cta_text: "Leia mais →",
                href: "/blog/coding-agents-beyond-coding",
            },
            FeatureCard {
                title: "Experiência de Plataforma",
                description: "Experiência prática com Claude Cowork e Microsoft Copilot Cowork. Sabemos o que eles podem (e não podem) fazer. Sabemos como aproveitar ao máximo.",
                cta_text: "Leia mais →",
                href: "/blog/microsoft-copilot-cowork-coding-agents-enterprise",
            },
            FeatureCard {
                title: "Implantações Reais",
                description: "Implementações comprovadas em vendas, operações, manufatura e cadeia de suprimentos, de integrações WhatsApp a orquestração ERP.",
                cta_text: "Ver exemplos →",
                href: "#case-studies",
            },
            FeatureCard {
                title: "Orientação Honesta",
                description: "O cenário evolui semanalmente. O ajudamos a experimentar rápido, aprender o que funciona e adaptar. Não vendemos um roteiro rígido de 6 meses.",
                cta_text: "Leia mais →",
                href: "/blog/ai-native-companies-german-tech-firms",
            },
        ],
    },
    case_studies: CaseStudies {
        heading1: "Implementações Reais, ",
        heading2: "Resultados Mensuráveis",
        intro: "Veja como empresas estão transformando operações com agentes de IA de próxima geração.",
        the_challenge: "O Desafio",
        the_solution: "A Solução",
        behind_scenes: "🔧 Nos Bastidores",
        results_impact: "Resultados e Impacto",
        team: "Equipe:",
        cases: [
            Case {
                tab_label: "Automação de CRM",
                category: "Vendas e Marketing",
                heading: "Automação de CRM",
                challenge: "Equipes de vendas gastam horas atualizando manualmente registros de CRM, agendando acompanhamentos e sincronizando dados entre email, calendário e sistemas de gerenciamento de clientes.",
                solution: "Um agente de IA que monitora comunicações por email, atualiza automaticamente registros de CRM, agenda reuniões e garante que todas as interações com clientes sejam registradas e acessíveis em toda a equipe.",
                behind_scenes: "O agente lê o contexto de email, extrai dados relevantes do cliente, consulta seu CRM via API, aplica regras de negócio para categorização e tempo de acompanhamento, e orquestra atualizações entre múltiplos sistemas, autonomamente.",
                results: [
                    "Redução de 60% em entrada manual de dados de CRM",
                    "Melhoria de 90% na precisão dos dados",
                    "Zero acompanhamentos perdidos através de agendamento inteligente",
                    "Integração perfeita entre email, calendário e CRM",
                ],
                team: "Equipe de vendas de 8 pessoas, usuários não técnicos",
            },
            Case {
                tab_label: "Automação de Orçamentos",
                category: "Operações de Vendas",
                heading: "Automação de Orçamentos",
                challenge: "Engenheiros de vendas criam manualmente orçamentos puxando dados de múltiplos sistemas, calculando descontos e formatando documentos—um processo que leva 2-3 horas por orçamento.",
                solution: "Um agente de IA que monta orçamentos em tempo real acessando catálogos de produtos, mecanismos de preços, histórico de clientes e modelos de contratos, depois entrega documentos formatados prontos para assinatura.",
                behind_scenes: "O agente acessa bancos de dados de produtos, calcula preços com regras de margem, faz referência cruzada do histórico de compras do cliente para oportunidades de venda adicional, extrai cláusulas de conformidade de modelos e gera automaticamente PDFs com campos de assinatura incorporados.",
                results: [
                    "Tempo de geração de orçamento reduzido de 2-3 horas para 10 minutos",
                    "95% de precisão nos cálculos de preços",
                    "Aumento de 50% na conversão de orçamento para fechamento",
                    "Controle de versão de orçamento em tempo real e trilhas de auditoria",
                ],
                team: "Equipe de engenharia de vendas de 4 pessoas",
            },
            Case {
                tab_label: "Processamento de Pedidos e Controle de Qualidade",
                category: "Operações e Manufatura",
                heading: "Processamento de Pedidos e Controle de Qualidade",
                challenge: "A entrada de pedidos requer validação manual de dados em email, planilhas e sistemas ERP. Auditorias de qualidade ocorrem após o envio, deixando defeitos não detectados até que reclamações de clientes cheguem.",
                solution: "Um agente de IA que valida pedidos recebidos, verifica disponibilidade de inventário, sinaliza problemas de qualidade em tempo real, coordena com sistemas de warehouse e aciona ações corretivas automatizadas.",
                behind_scenes: "O agente ingere dados de pedidos de múltiplos formatos, valida contra bancos de dados de SKU e níveis de estoque, aplica regras de qualidade e verificações de conformidade, coordena com sistemas de gerenciamento de warehouse e escalona exceções para supervisores humanos.",
                results: [
                    "100% de validação de pedidos antes do processamento do warehouse",
                    "Redução de 40% no tempo de pedido para envio",
                    "Taxa de detecção de defeitos melhorada de 30% para 99%",
                    "Zero surpresas de qualidade voltadas para o cliente",
                ],
                team: "Equipe de operações de 12 pessoas entre entrada de pedidos e QC",
            },
            Case {
                tab_label: "Assistente de Planejamento de IA",
                category: "Gerenciamento de Projetos e Recursos",
                heading: "Assistente de Planejamento de IA",
                challenge: "Gerentes de projeto gastam dias coletando dados, consultando calendários e coordenando entre equipes para criar planos de projeto realistas. Mudanças de escopo desencadeiam em cascata não gerenciadas através de cronogramas.",
                solution: "Um agente de IA que constrói planos de projeto entendendo capacidade da equipe, dependências, riscos e velocidade histórica, depois ajusta automaticamente cronogramas conforme o escopo ou restrições mudam.",
                behind_scenes: "O agente consulta calendários de equipe, acessa dados de projeto históricos e métricas de velocidade, modela dependências de tarefas, identifica itens do caminho crítico, simula cenários de alocação de recursos e gera automaticamente gráficos de Gantt com avaliações de risco.",
                results: [
                    "Tempo de planejamento reduzido de dias para minutos",
                    "Precisão do cronograma melhorada para 95% dentro de ±5%",
                    "Identificação antecipada de 100% dos riscos do caminho crítico",
                    "Atualizações de cronograma em tempo real conforme as condições mudam",
                ],
                team: "Escritório de gerenciamento de projetos de 6 pessoas, múltiplas equipes",
            },
        ],
    },
    cta: Cta {
        heading: "O cenário de IA evolui a cada semana.",
        subheading: "A única maneira de aprender é fazendo.",
        description: "Não espere pela estratégia de IA \"perfeita\". Comece pequeno, experimente com fluxos de trabalho reais e aprenda o que funciona para sua equipe. As empresas que se movem mais rápido não estão planejando infinitamente. Eles estão testando, iterando e se adaptando.",
        start_conversation: "Inicie uma Conversa",
        explore_academy: "Explore a Academia",
    },
    contact_form: ContactForm {
        heading: "Vamos Conversar",
        description: "Conte-nos sobre suas necessidades e entraremos em contato em breve.",
        name_label: "Nome",
        name_placeholder: "Seu nome",
        email_label: "Email",
        email_placeholder: "seu@email.com",
        company_label: "Empresa",
        company_placeholder: "Sua empresa",
        message_label: "Mensagem",
        message_placeholder: "Conte-nos sobre suas necessidades...",
        setup_call: "Agendar uma chamada",
        request_more_info: "Solicitar mais informações sobre:",
        training: "Treinamento",
        consulting: "Consultoria",
        implementation: "Implementação",
        privacy_label: "Li e aceito a",
        privacy_link: "Política de Privacidade",
        send_message: "Enviar Mensagem",
    },
    subscribe_form: SubscribeForm {
        heading: "Inscrever-se na Newsletter",
        description: "Fique atualizado com atualizações, insights e notícias do Tavon.",
        name_label: "Nome",
        name_placeholder: "Seu nome",
        email_label: "Email",
        email_placeholder: "seu@email.com",
        privacy_label: "Li e aceito a",
        privacy_link: "Política de Privacidade",
        subscribe: "Inscrever-se",
    },
    header_contact_form: HeaderContactForm {
        heading: "Contato",
        description: "Obrigado por entrar em contato! Estamos ansiosos para ouvir você.",
        name_label: "Nome",
        name_placeholder: "Seu nome",
        email_label: "Email",
        email_placeholder: "seu.email@exemplo.com",
        note_label: "Nota (opcional)",
        note_placeholder: "Sua mensagem...",
        setup_call: "Agendar uma chamada",
        request_more_info: "Solicitar mais informações sobre:",
        training: "Treinamento",
        consulting: "Consultoria",
        implementation: "Implementação",
        privacy_label: "Li e aceito a",
        privacy_link: "Política de Privacidade",
        cancel: "Cancelar",
        submit: "Enviar",
    },
    footer: Footer {
        copyright: "© 2026 Tavon. Todos os direitos reservados.",
        imprint: "Aviso Legal",
        language: "Idioma",
    },
};
