//! Full page documents (home, about, academy, blog, blog post, impressum, contact).

use maud::{html, Markup};

use crate::i18n::Locale;
use crate::{layout, modals, sections};

fn home_path(locale: Locale) -> String {
    format!("/{}", locale.code())
}

pub fn home(locale: Locale) -> Markup {
    let path = home_path(locale);
    let t = locale.t();
    let title = match locale {
        Locale::En => "TAVON.ai — Put AI Agents to Work",
        Locale::Pt => "TAVON.ai — Coloque Agentes de IA para Trabalhar",
    };
    let body = html! {
        (layout::header(locale))
        div class="flex flex-col min-h-screen" {
            main class="flex-1" {
                (sections::hero(locale))
                (sections::solutions(locale))
                (sections::comparison(locale))
                (sections::features(locale))
                (sections::case_studies(locale))
                (sections::cta(locale))
            }
            (layout::footer(locale))
        }
        (modals::contact_modal(locale, &path))
        (modals::header_contact_modal(locale, &path))
    };
    layout::document(locale, title, t.hero.description, body)
}

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

struct TeamMember {
    id: &'static str,
    name: &'static str,
    role: &'static str,
    description: &'static str,
}

struct AboutContent {
    title_prefix: &'static str,
    title_highlight: &'static str,
    intro: &'static str,
    members: [TeamMember; 3],
    connect: &'static str,
    cta_heading: &'static str,
    cta_text: &'static str,
    cta_button: &'static str,
}

fn about_content(locale: Locale) -> AboutContent {
    match locale {
        Locale::En => AboutContent {
            title_prefix: "The ",
            title_highlight: "Agent Whisperers",
            intro: "AI agents are transforming how businesses work. We've been deep in this space, learning what works and what doesn't. Now we're here to help you navigate this transformation with confidence.",
            members: [
                TeamMember { id: "ml", name: "Matthias Lübken", role: "", description: "With years of experience building and scaling developer tools, Matthias helps teams adopt AI agents effectively. He understands the challenges of implementing new technology in real-world business environments and guides you through the practical steps to success." },
                TeamMember { id: "ip", name: "Ivan Pedrazas", role: "", description: "Ivan combines technical depth with practical business insight. He helps organizations build robust AI agent solutions that actually work in production, and trains teams to maintain and evolve them over time." },
                TeamMember { id: "ag", name: "Dr. Anna Maria Gajda", role: "Advisory", description: "Anna brings deep expertise in transforming complex processes into streamlined workflows. She works closely with teams to identify where AI agents can make the biggest impact and ensures smooth enablement and adoption across organizations." },
            ],
            connect: "Connect on LinkedIn",
            cta_heading: "Let's Talk About Your Challenges",
            cta_text: "Whether you're just starting to explore AI agents or are ready to implement them, we're here to help.",
            cta_button: "Get in Touch",
        },
        Locale::Pt => AboutContent {
            title_prefix: "Os ",
            title_highlight: "Sussurradores de Agentes",
            intro: "Agentes de IA estão transformando como empresas trabalham. Nós estamos profundamente neste espaço, aprendendo o que funciona e o que não. Agora estamos aqui para ajudá-lo a navegar essa transformação com confiança.",
            members: [
                TeamMember { id: "ml", name: "Matthias Lübken", role: "", description: "Com anos de experiência construindo e escalando ferramentas de desenvolvimento, Matthias ajuda equipes a adotar agentes de IA efetivamente. Ele entende os desafios de implementar novas tecnologias em ambientes comerciais reais e o guia através dos passos práticos para o sucesso." },
                TeamMember { id: "ip", name: "Ivan Pedrazas", role: "", description: "Ivan combina profundidade técnica com perspectiva comercial prática. Ele ajuda organizações a construir soluções robustas de agentes de IA que funcionam em produção e treina equipes para mantê-las e evoluí-las ao longo do tempo." },
                TeamMember { id: "ag", name: "Dra. Anna Maria Gajda", role: "Consultoria", description: "Anna traz expertise profunda em transformar processos complexos em fluxos de trabalho simplificados. Ela trabalha perto de equipes para identificar onde agentes de IA podem fazer o maior impacto e garante uma adoção suave e bem-sucedida em toda a organização." },
            ],
            connect: "Conecte no LinkedIn",
            cta_heading: "Vamos Conversar Sobre Seus Desafios",
            cta_text: "Quer você esteja apenas começando a explorar agentes de IA ou pronto para implementá-los, estamos aqui para ajudar.",
            cta_button: "Entre em Contato",
        },
    }
}

pub fn about(locale: Locale) -> Markup {
    let path = format!("/{}/about", locale.code());
    let c = about_content(locale);
    let body = html! {
        (layout::header(locale))
        div class="flex flex-col min-h-screen bg-white" {
            main class="flex-1" {
                section class="w-full bg-white py-20 md:py-32" {
                    div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                        div class="mb-20 flex flex-col items-center text-center" {
                            h1 class="mb-6 text-4xl font-bold text-[#2f4858] md:text-5xl" {
                                (c.title_prefix) span class="text-[#c9a961]" { (c.title_highlight) }
                            }
                            p class="mx-auto max-w-2xl text-base font-normal text-[#6b8393] leading-relaxed md:text-lg" { (c.intro) }
                        }
                        div class="grid grid-cols-1 md:grid-cols-3 gap-8" {
                            @for m in &c.members {
                                div class="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center" {
                                    div class="w-24 h-24 rounded-full bg-gradient-to-br from-[#2f4858] to-[#6b8393] flex items-center justify-center text-white text-3xl font-bold mb-6" {
                                        (m.id.to_uppercase())
                                    }
                                    h3 class="text-xl font-bold text-[#2f4858] mb-2" { (m.name) }
                                    @if !m.role.is_empty() {
                                        p class="text-sm font-semibold text-[#c9a961] mb-4" { (m.role) }
                                    }
                                    p class="text-sm text-[#6b8393] leading-relaxed mb-6 flex-grow" { (m.description) }
                                    a href="#" class="inline-flex items-center gap-2 text-[#c9a961] font-semibold hover:underline" {
                                        span { "🔗" } (c.connect)
                                    }
                                }
                            }
                        }
                    }
                }
                section class="w-full bg-[#3a4d5c] py-20 md:py-32" {
                    div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center" {
                        h2 class="mb-4 text-3xl font-bold text-white md:text-4xl" { (c.cta_heading) }
                        p class="mb-8 text-base text-gray-100" { (c.cta_text) }
                        label for="header-contact-toggle" class="inline-block bg-[#c9a961] text-[#2f4858] px-8 py-3 rounded font-semibold hover:bg-[#b0925a] transition cursor-pointer" {
                            (c.cta_button)
                        }
                    }
                }
            }
        }
        (modals::header_contact_modal(locale, &path))
    };
    let title = format!("{}{} — TAVON.ai", c.title_prefix, c.title_highlight);
    layout::document(locale, &title, c.intro, body)
}

// ---------------------------------------------------------------------------
// Academy
// ---------------------------------------------------------------------------

struct AcademyModule {
    title: &'static str,
    desc: &'static str,
}

struct AcademyCard {
    title: &'static str,
    desc: &'static str,
    bullets: &'static [&'static str],
    sub_heading: &'static str,
    sub_lines: &'static [&'static str],
    button: &'static str,
}

struct AcademyContent {
    title_prefix: &'static str,
    title_highlight: &'static str,
    intro: &'static str,
    free_badge: &'static str,
    webinar_title: &'static str,
    webinar_desc: &'static str,
    learn_heading: &'static str,
    learn_items: &'static [&'static str],
    details_heading: &'static str,
    duration_label: &'static str,
    duration_value: &'static str,
    format_label: &'static str,
    format_value: &'static str,
    hosted_label: &'static str,
    hosted_value: &'static str,
    quote: &'static str,
    dates_heading: &'static str,
    dates_text: &'static str,
    request_info: &'static str,
    workshops_heading: &'static str,
    workshops_intro: &'static str,
    cfe_title: &'static str,
    cfe_desc: &'static str,
    cfe_modules: [AcademyModule; 4],
    format_heading: &'static str,
    format_items: &'static [&'static str],
    details2_heading: &'static str,
    details2_lines: &'static [&'static str],
    cards: [AcademyCard; 3],
    cta_heading: &'static str,
    cta_text: &'static str,
    cta_button: &'static str,
}

fn academy_content(locale: Locale) -> AcademyContent {
    match locale {
        Locale::En => AcademyContent {
            title_prefix: "Tavon ",
            title_highlight: "Academy",
            intro: "Learn to harness the power of AI agents. From free introductory webinars to hands-on workshops, we'll help you and your team master AI agent platforms.",
            free_badge: "FREE",
            webinar_title: "Introducing Claude Cowork: Using Local Agents to Get Work Done",
            webinar_desc: "Agents are everywhere. Everyone's talking about what agents could do. But how do you actually deploy an agent today to get real work done?",
            learn_heading: "What You'll Learn",
            learn_items: &[
                "Why new agent architecture makes these different from chatbots",
                "Real examples of multi-step workflows running autonomously",
                "How to start small, experiment fast, and scale what works",
                "Your first practical steps with Claude Cowork",
            ],
            details_heading: "Details",
            duration_label: "Duration:",
            duration_value: "45 minutes + Q&A",
            format_label: "Format:",
            format_value: "Live online session",
            hosted_label: "Hosted by:",
            hosted_value: "Matthias Lübken",
            quote: "No hype. No theoretical roadmaps. Just what actually works.",
            dates_heading: "Dates",
            dates_text: "We're currently planning the next live sessions. Request more information and we'll let you know as soon as dates are announced.",
            request_info: "Request More Information",
            workshops_heading: "Workshops",
            workshops_intro: "Practical, hands-on workshops designed to help everyone leverage AI agents in their daily work.",
            cfe_title: "Claude for Everyone",
            cfe_desc: "After engineers have used Claude for development, it's time to leverage it for the rest of professional users. A hands-on workshop series that teaches knowledge workers how to use Claude Cowork for daily tasks.",
            cfe_modules: [
                AcademyModule { title: "1. Foundations: From Chat to Cowork", desc: "Set up Claude Cowork, understand the core task loop, and complete your first real task" },
                AcademyModule { title: "3. Documents & Data Analysis", desc: "Produce slide decks, reports, spreadsheets and run analysis at scale using subagents" },
                AcademyModule { title: "2. Coordination & Communication", desc: "Connect email, calendar, and other tools to build coordination workflows" },
                AcademyModule { title: "4. Automation, Workflows & Making It Stick", desc: "Set up scheduled tasks, write multi-step prompts, and plan team rollout" },
            ],
            format_heading: "Format",
            format_items: &[
                "4 Live Online Sessions",
                "1.5 hours each · 18:00 – 19:30 CET",
                "Interactive with Q&A",
            ],
            details2_heading: "Details",
            details2_lines: &[
                "Format: 4 live online sessions · 1.5 hours each",
                "Dates: To be announced",
            ],
            cards: [
                AcademyCard {
                    title: "Online Workshops",
                    desc: "Hands-on training sessions where you'll learn to use AI agent platforms like Claude Cowork, build simple automations, and apply best practices.",
                    bullets: &["✓ Interactive live sessions", "✓ Practice exercises and examples", "✓ Certificate of completion"],
                    sub_heading: "Next Cohort",
                    sub_lines: &["Dates to be announced"],
                    button: "Request More Information",
                },
                AcademyCard {
                    title: "On-Site Workshops",
                    desc: "Immersive in-person training tailored to your needs. We come to a location near you and work with your specific use cases and tools.",
                    bullets: &["✓ Exchange with other peers", "✓ 1 day intensive format"],
                    sub_heading: "Locations",
                    sub_lines: &["Cologne • Berlin • London", "(Dates TBD)"],
                    button: "Request More Information",
                },
                AcademyCard {
                    title: "Custom Training",
                    desc: "Need something specific? We create custom training programs for your organization, covering exactly what your team needs to know.",
                    bullets: &["✓ Fully customized curriculum", "✓ Your schedule and format", "✓ Ongoing support options"],
                    sub_heading: "Perfect For",
                    sub_lines: &["Executive workshops, department-specific training, or enterprise-wide programs"],
                    button: "Contact Us",
                },
            ],
            cta_heading: "Questions About Training?",
            cta_text: "We're happy to discuss which training option is right for your team and organization.",
            cta_button: "Get in Touch",
        },
        Locale::Pt => AcademyContent {
            title_prefix: "Tavon ",
            title_highlight: "Academia",
            intro: "Aprenda a aproveitar o poder dos agentes de IA. De webinars introdutórios gratuitos a workshops práticos, ajudaremos você e sua equipe a dominar plataformas de agentes de IA.",
            free_badge: "GRATUITO",
            webinar_title: "Apresentando Claude Cowork: Usando Agentes Locais para Executar Trabalho",
            webinar_desc: "Agentes estão em todos os lugares. Todos estão falando sobre o que agentes poderiam fazer. Mas como você na verdade implementa um agente hoje para executar trabalho real?",
            learn_heading: "O que Você Aprenderá",
            learn_items: &[
                "Por que nova arquitetura de agentes os torna diferentes de chatbots",
                "Exemplos reais de fluxos de trabalho multi-etapa executados autonomamente",
                "Como começar pequeno, experimentar rápido e escalar o que funciona",
                "Seus primeiros passos práticos com Claude Cowork",
            ],
            details_heading: "Detalhes",
            duration_label: "Duração:",
            duration_value: "45 minutos + Perguntas e Respostas",
            format_label: "Formato:",
            format_value: "Sessão online ao vivo",
            hosted_label: "Hospedado por:",
            hosted_value: "Matthias Lübken",
            quote: "Sem hype. Sem roteiros teóricos. Apenas o que realmente funciona.",
            dates_heading: "Datas",
            dates_text: "Estamos planejando as próximas sessões ao vivo. Solicite mais informações e avisaremos assim que as datas forem anunciadas.",
            request_info: "Solicitar Mais Informações",
            workshops_heading: "Workshops",
            workshops_intro: "Workshops práticos e práticos projetados para ajudar todos a aproveitar agentes de IA no seu trabalho diário.",
            cfe_title: "Claude para Todos",
            cfe_desc: "Depois que engenheiros usam Claude para desenvolvimento, é hora de aproveitá-lo para o resto dos usuários profissionais. Uma série de workshops práticos que ensina aos profissionais do conhecimento como usar Claude Cowork para tarefas diárias.",
            cfe_modules: [
                AcademyModule { title: "1. Fundamentos: De Chat para Cowork", desc: "Configure Claude Cowork, entenda o loop de tarefas principais e complete sua primeira tarefa real" },
                AcademyModule { title: "3. Documentos e Análise de Dados", desc: "Produza apresentações, relatórios, planilhas e execute análises em escala usando subagentes" },
                AcademyModule { title: "2. Coordenação e Comunicação", desc: "Conecte email, calendário e outras ferramentas para construir fluxos de trabalho de coordenação" },
                AcademyModule { title: "4. Automação, Fluxos de Trabalho e Tornando Sustentável", desc: "Configure tarefas agendadas, escreva prompts multi-etapas e planeje implementação em equipe" },
            ],
            format_heading: "Formato",
            format_items: &[
                "4 Sessões Online ao Vivo",
                "1,5 horas cada · 18:00 – 19:30 CET",
                "Interativo com Perguntas e Respostas",
            ],
            details2_heading: "Detalhes",
            details2_lines: &[
                "Formato: 4 sessões online ao vivo · 1,5 horas cada",
                "Datas: A ser anunciado",
            ],
            cards: [
                AcademyCard {
                    title: "Workshops Online",
                    desc: "Sessões de treinamento práticas onde você aprenderá a usar plataformas de agentes de IA como Claude Cowork, construir automações simples e aplicar as melhores práticas.",
                    bullets: &["✓ Sessões ao vivo interativas", "✓ Exercícios práticos e exemplos", "✓ Certificado de conclusão"],
                    sub_heading: "Próxima Turma",
                    sub_lines: &["Datas a ser anunciadas"],
                    button: "Solicitar Mais Informações",
                },
                AcademyCard {
                    title: "Workshops Presenciais",
                    desc: "Treinamento imersivo presencial personalizado para suas necessidades. Vamos até você e trabalhamos com seus casos de uso e ferramentas específicas.",
                    bullets: &["✓ Troque com outros colegas", "✓ Formato intensivo de 1 dia"],
                    sub_heading: "Locais",
                    sub_lines: &["Colônia • Berlim • Londres", "(Datas a definir)"],
                    button: "Solicitar Mais Informações",
                },
                AcademyCard {
                    title: "Treinamento Personalizado",
                    desc: "Precisa de algo específico? Criamos programas de treinamento personalizados para sua organização, cobrindo exatamente o que sua equipe precisa saber.",
                    bullets: &["✓ Currículo totalmente personalizado", "✓ Seu cronograma e formato", "✓ Opções de suporte contínuo"],
                    sub_heading: "Perfeito Para",
                    sub_lines: &["Workshops executivos, treinamento específico de departamento ou programas em toda empresa"],
                    button: "Entre em Contato",
                },
            ],
            cta_heading: "Perguntas Sobre Treinamento?",
            cta_text: "Somos felizes em discutir qual opção de treinamento é melhor para sua equipe e organização.",
            cta_button: "Entre em Contato",
        },
    }
}

pub fn academy(locale: Locale) -> Markup {
    let path = format!("/{}/academy", locale.code());
    let c = academy_content(locale);
    let body = html! {
        (layout::header(locale))
        div class="flex flex-col min-h-screen bg-white" {
            main class="flex-1" {
                section class="w-full bg-white py-20 md:py-32" {
                    div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                        div class="mb-16 flex flex-col items-center text-center" {
                            h1 class="mb-6 text-4xl font-bold text-[#2f4858] md:text-5xl" {
                                (c.title_prefix) span class="text-[#c9a961]" { (c.title_highlight) }
                            }
                            p class="mx-auto max-w-2xl text-base font-normal text-[#6b8393] leading-relaxed md:text-lg" { (c.intro) }
                        }
                    }
                }

                section class="w-full bg-white py-16 md:py-24" {
                    div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                        div class="rounded-lg bg-[#3a4d5c] p-8 md:p-12 text-white" {
                            div class="mb-6" {
                                span class="inline-block bg-[#c9a961] text-[#2f4858] px-3 py-1 rounded-full text-sm font-bold" { (c.free_badge) }
                            }
                            h2 class="mb-4 text-2xl md:text-3xl font-bold" { (c.webinar_title) }
                            p class="mb-8 text-base leading-relaxed opacity-90" { (c.webinar_desc) }
                            div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8" {
                                div {
                                    h3 class="text-lg font-bold mb-4" { (c.learn_heading) }
                                    ul class="space-y-2" {
                                        @for item in c.learn_items {
                                            li class="flex items-start gap-3" {
                                                span class="text-[#c9a961] mt-1" { "•" }
                                                span { (item) }
                                            }
                                        }
                                    }
                                }
                                div {
                                    h3 class="text-lg font-bold mb-4" { (c.details_heading) }
                                    div class="space-y-3" {
                                        div {
                                            p class="text-sm opacity-75" { (c.duration_label) }
                                            p class="font-semibold" { (c.duration_value) }
                                        }
                                        div {
                                            p class="text-sm opacity-75" { (c.format_label) }
                                            p class="font-semibold" { (c.format_value) }
                                        }
                                        div {
                                            p class="text-sm opacity-75" { (c.hosted_label) }
                                            p class="font-semibold" { (c.hosted_value) }
                                        }
                                    }
                                }
                            }
                            p class="mb-8 text-sm italic opacity-75" { (c.quote) }
                            div class="bg-[#2f4858] rounded p-6 mb-8" {
                                h3 class="text-lg font-bold mb-4" { (c.dates_heading) }
                                p class="mb-6 opacity-90" { (c.dates_text) }
                                label for="contact-toggle" class="inline-block border-2 border-[#c9a961] text-[#c9a961] px-6 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-[#2f4858] transition cursor-pointer" {
                                    (c.request_info)
                                }
                            }
                        }
                    }
                }

                section class="w-full bg-white py-16 md:py-24" {
                    div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                        div class="mb-16 text-center" {
                            h2 class="mb-4 text-3xl md:text-4xl font-bold text-[#2f4858]" { (c.workshops_heading) }
                            p class="text-base text-[#6b8393]" { (c.workshops_intro) }
                        }

                        div class="mb-12 border-l-4 border-l-[#c9a961] p-8 bg-white rounded-lg shadow-sm" {
                            h3 class="text-2xl font-bold text-[#2f4858] mb-4" { (c.cfe_title) }
                            p class="text-[#6b8393] mb-8" { (c.cfe_desc) }
                            div class="mb-8" {
                                h4 class="text-lg font-bold text-[#2f4858] mb-4" { (c.learn_heading) }
                                div class="grid grid-cols-1 md:grid-cols-2 gap-6" {
                                    @for m in &c.cfe_modules {
                                        div {
                                            p class="font-bold text-[#c9a961] mb-1" { (m.title) }
                                            p class="text-sm text-[#6b8393]" { (m.desc) }
                                        }
                                    }
                                }
                            }
                            div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" {
                                div {
                                    h4 class="font-bold text-[#2f4858] mb-3" { (c.format_heading) }
                                    ul class="text-sm text-[#6b8393] space-y-1" {
                                        @for f in c.format_items {
                                            li { "• " (f) }
                                        }
                                    }
                                }
                                div {
                                    h4 class="font-bold text-[#2f4858] mb-3" { (c.details2_heading) }
                                    @for line in c.details2_lines {
                                        p class="text-sm text-[#6b8393]" { (line) }
                                    }
                                }
                            }
                            label for="contact-toggle" class="inline-block border-2 border-[#c9a961] text-[#c9a961] px-6 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-white transition cursor-pointer" {
                                (c.request_info)
                            }
                        }

                        div class="grid grid-cols-1 md:grid-cols-3 gap-6" {
                            @for card in &c.cards {
                                div class="border border-gray-200 rounded-lg p-6" {
                                    h3 class="text-xl font-bold text-[#2f4858] mb-4" { (card.title) }
                                    p class="text-sm text-[#6b8393] mb-6" { (card.desc) }
                                    div class="mb-6 space-y-2" {
                                        @for b in card.bullets {
                                            p class="text-sm text-[#6b8393]" { (b) }
                                        }
                                    }
                                    div class="mb-6" {
                                        p class="text-sm font-bold text-[#2f4858] mb-2" { (card.sub_heading) }
                                        @for line in card.sub_lines {
                                            p class="text-sm text-[#6b8393]" { (line) }
                                        }
                                    }
                                    label for="contact-toggle" class="block w-full text-center border-2 border-[#c9a961] text-[#c9a961] px-4 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-white transition cursor-pointer" {
                                        (card.button)
                                    }
                                }
                            }
                        }
                    }
                }

                section class="w-full bg-white py-16 md:py-24" {
                    div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center" {
                        h2 class="mb-4 text-3xl font-bold text-[#2f4858]" { (c.cta_heading) }
                        p class="mb-8 text-base text-[#6b8393]" { (c.cta_text) }
                        label for="contact-toggle" class="inline-block bg-[#c9a961] text-[#2f4858] px-8 py-3 rounded font-semibold hover:bg-[#b0925a] transition cursor-pointer" {
                            (c.cta_button)
                        }
                    }
                }
            }
        }
        (modals::contact_modal(locale, &path))
        (modals::header_contact_modal(locale, &path))
    };
    let title = format!("{}{} — TAVON.ai", c.title_prefix, c.title_highlight);
    layout::document(locale, &title, c.intro, body)
}

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

struct BlogListItem {
    slug: &'static str,
    title: &'static str,
    author: &'static str,
    date: &'static str,
    excerpt: &'static str,
}

fn blog_items(locale: Locale) -> [BlogListItem; 4] {
    match locale {
        Locale::En => [
            BlogListItem { slug: "the-app-store-moment-of-ai", title: "The App-Store Moment of AI", author: "Matthias Lübken", date: "October 6, 2024", excerpt: "Sam Altman revealed OpenAI's AppSDK, allowing developers to embed full-fledged Apps directly into ChatGPT. If you think about the transformation the iPhone App Store brought, combined with ChatGPT's adoption pace, the implications are massive." },
            BlogListItem { slug: "coding-agents-beyond-coding", title: "Deep Technical Understanding: Coding Agents Beyond Coding", author: "Matthias Lübken", date: "November 2024", excerpt: "We understand agent architectures from the coding world. We know how they plan, execute, handle errors, and adapt." },
            BlogListItem { slug: "microsoft-copilot-cowork-coding-agents-enterprise", title: "Microsoft Copilot Cowork: Coding Agents for Enterprise", author: "Ivan Pedrazas", date: "October 2024", excerpt: "Hands-on experience with Claude Cowork and Microsoft Copilot Cowork. We know what they can (and can't) do." },
            BlogListItem { slug: "ai-native-companies-german-tech-firms", title: "AI-Native Companies: Lessons from German Tech Firms", author: "Dr. Anna Maria Gajda", date: "September 2024", excerpt: "The landscape evolves weekly. We help you experiment fast, learn what works, and adapt." },
        ],
        Locale::Pt => [
            BlogListItem { slug: "the-app-store-moment-of-ai", title: "O Momento App Store da IA", author: "Matthias Lübken", date: "6 de outubro de 2024", excerpt: "Sam Altman revelou o AppSDK da OpenAI, permitindo que desenvolvedores embutam Aplicativos completos diretamente no ChatGPT. Se você pensa sobre a transformação que a App Store do iPhone trouxe, combinada com a taxa de adoção do ChatGPT, as implicações são massivas." },
            BlogListItem { slug: "coding-agents-beyond-coding", title: "Compreensão Técnica Profunda: Agentes de Código Além de Código", author: "Matthias Lübken", date: "Novembro de 2024", excerpt: "Entendemos arquiteturas de agentes do mundo da codificação. Sabemos como eles planejam, executam, lidam com erros e se adaptam." },
            BlogListItem { slug: "microsoft-copilot-cowork-coding-agents-enterprise", title: "Microsoft Copilot Cowork: Agentes de Código para Empresa", author: "Ivan Pedrazas", date: "Outubro de 2024", excerpt: "Experiência prática com Claude Cowork e Microsoft Copilot Cowork. Sabemos o que eles podem (e não podem) fazer." },
            BlogListItem { slug: "ai-native-companies-german-tech-firms", title: "Empresas Nativas de IA: Lições de Firmas de Tecnologia Alemã", author: "Dra. Anna Maria Gajda", date: "Setembro de 2024", excerpt: "O cenário evolui semanalmente. Ajudamos você a experimentar rápido, aprender o que funciona e se adaptar." },
        ],
    }
}

pub fn blog(locale: Locale) -> Markup {
    let l = locale.code();
    let path = format!("/{l}/blog");
    let items = blog_items(locale);
    let (subscribe_label, read_more, min_read) = match locale {
        Locale::En => ("Subscribe", "Read more →", "3 min read"),
        Locale::Pt => ("Inscrever-se", "Leia mais →", "3 min de leitura"),
    };
    let body = html! {
        (layout::header(locale))
        div class="flex flex-col min-h-screen" {
            main class="flex-1" {
                section class="w-full bg-white py-20 md:py-32" {
                    div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                        div class="flex items-center justify-between mb-16" {
                            h1 class="text-4xl font-bold text-[#2f4858] md:text-5xl" { "Blog" }
                            label for="subscribe-toggle" class="inline-block px-6 py-2 bg-[#c9a961] text-[#2f4858] font-semibold rounded-lg hover:bg-[#b8985a] transition-colors cursor-pointer" {
                                (subscribe_label)
                            }
                        }
                        div class="grid grid-cols-1 gap-8" {
                            @for post in &items {
                                article class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow" {
                                    div class="w-full h-64 bg-black relative overflow-hidden" {
                                        div class="absolute inset-0 flex items-center justify-center" {
                                            div class="text-center" {
                                                div class="text-white text-4xl font-bold" { "AI Engineer" }
                                            }
                                        }
                                    }
                                    div class="p-8" {
                                        div class="flex items-center gap-4 mb-4 text-sm text-gray-600" {
                                            span { (post.author) }
                                            span { "•" }
                                            span { (post.date) }
                                            span { "•" }
                                            span { (min_read) }
                                        }
                                        h2 class="text-2xl font-bold text-[#2f4858] mb-4" { (post.title) }
                                        p class="text-base text-gray-700 leading-relaxed mb-6" { (post.excerpt) }
                                        a href=(format!("/{l}/blog/{}", post.slug)) class="inline-flex items-center text-[#c9a961] font-semibold hover:underline" {
                                            (read_more)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        (modals::subscribe_modal(locale, &path))
        (modals::header_contact_modal(locale, &path))
    };
    layout::document(locale, "Blog — TAVON.ai", "Insights on AI agents from TAVON.ai", body)
}

struct BlogArticle {
    title: &'static str,
    author: &'static str,
    date: &'static str,
    excerpt: &'static str,
    content: &'static str,
}

fn blog_article(slug: &str) -> Option<BlogArticle> {
    match slug {
        "coding-agents-beyond-coding" => Some(BlogArticle {
            title: "Deep Technical Understanding: Coding Agents Beyond Coding",
            author: "Matthias Lübken",
            date: "November 2024",
            excerpt: "We understand agent architectures from the coding world. We know how they plan, execute, handle errors, and adapt.",
            content: "Coding agents represent a fundamental shift in how we approach software development and business automation. Understanding their architecture is key to implementing them effectively across your organization.",
        }),
        "microsoft-copilot-cowork-coding-agents-enterprise" => Some(BlogArticle {
            title: "Microsoft Copilot Cowork: Coding Agents for Enterprise",
            author: "Ivan Pedrazas",
            date: "October 2024",
            excerpt: "Hands-on experience with Claude Cowork and Microsoft Copilot Cowork. We know what they can (and can't) do.",
            content: "Enterprise adoption of coding agents requires deep platform knowledge. We share insights from real-world implementations of both Claude Cowork and Microsoft Copilot Cowork, helping you choose the right tool for your needs.",
        }),
        "ai-native-companies-german-tech-firms" => Some(BlogArticle {
            title: "AI-Native Companies: Lessons from German Tech Firms",
            author: "Dr. Anna Maria Gajda",
            date: "September 2024",
            excerpt: "The landscape evolves weekly. We help you experiment fast, learn what works, and adapt.",
            content: "German technology companies are leading the charge in building AI-native operations. Learn from their experiences and discover how to transform your organization to leverage AI agents effectively.",
        }),
        "the-app-store-moment-of-ai" => Some(BlogArticle {
            title: "The App-Store Moment of AI",
            author: "Matthias Lübken",
            date: "October 6, 2024",
            excerpt: "Sam Altman revealed OpenAI's AppSDK, allowing developers to embed full-fledged Apps directly into ChatGPT. If you think about the transformation the iPhone App Store brought, combined with ChatGPT's adoption pace, the implications are massive.",
            content: "Sam Altman revealed OpenAI's AppSDK, allowing developers to embed full-fledged Apps directly into ChatGPT. If you think about the transformation the iPhone App Store brought, combined with ChatGPT's adoption pace, the implications are massive. This marks a fundamental shift in how applications will be distributed and accessed in the age of AI.",
        }),
        _ => None,
    }
}

pub fn blog_post(locale: Locale, slug: &str) -> Markup {
    let l = locale.code();
    let path = format!("/{l}/blog/{slug}");
    let (back_label, subscribe_label) = match locale {
        Locale::En => ("← Back to blog", "Subscribe"),
        Locale::Pt => ("← Voltar para o blog", "Inscrever-se"),
    };

    let Some(post) = blog_article(slug) else {
        let (not_found, missing, return_blog) = match locale {
            Locale::En => ("Article not found", "The blog post you're looking for doesn't exist. ", "Return to blog"),
            Locale::Pt => ("Artigo não encontrado", "O artigo que você procura não existe. ", "Voltar para o blog"),
        };
        let body = html! {
            div class="flex flex-col min-h-screen bg-white" {
                main class="flex-1" {
                    section class="w-full bg-white py-20 md:py-32" {
                        div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                            h1 class="text-4xl font-bold text-[#2f4858]" { (not_found) }
                            p class="mt-4 text-[#6b8393]" {
                                (missing)
                                a href=(format!("/{l}/blog")) class="text-[#c9a961] hover:underline" { (return_blog) }
                            }
                        }
                    }
                }
            }
        };
        return layout::document(locale, not_found, "TAVON.ai", body);
    };

    let body = html! {
        div class="flex flex-col min-h-screen bg-white" {
            main class="flex-1" {
                article class="w-full bg-white py-20 md:py-32" {
                    div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" {
                        header class="mb-12" {
                            h1 class="mb-6 text-4xl font-bold text-[#2f4858] md:text-5xl" { (post.title) }
                            div class="flex items-center gap-4 text-[#6b8393]" {
                                span { (post.author) }
                                span { "•" }
                                span { (post.date) }
                            }
                        }
                        div class="prose prose-lg max-w-none" {
                            p class="mb-8 text-lg text-[#6b8393] leading-relaxed" { (post.excerpt) }
                            p class="mb-8 text-base text-[#6b8393] leading-relaxed" { (post.content) }
                            div class="mt-12 border-t border-gray-200 pt-8" {
                                div class="flex items-center justify-between" {
                                    a href=(format!("/{l}/blog")) class="text-[#c9a961] hover:text-[#b39550] transition-colors" { (back_label) }
                                    label for="subscribe-toggle" class="inline-block px-6 py-2 bg-[#c9a961] text-[#2f4858] font-semibold rounded-lg hover:bg-[#b8985a] transition-colors cursor-pointer" {
                                        (subscribe_label)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        (modals::subscribe_modal(locale, &path))
    };
    let title = format!("{} — TAVON.ai", post.title);
    layout::document(locale, &title, post.excerpt, body)
}

// ---------------------------------------------------------------------------
// Impressum
// ---------------------------------------------------------------------------

struct ImpressumContent {
    title: &'static str,
    company_lines: &'static [&'static str],
    privacy_heading: &'static str,
    intro: &'static str,
    sections: &'static [(&'static str, &'static [&'static str])],
    copyright: &'static str,
}

fn impressum_content(locale: Locale) -> ImpressumContent {
    match locale {
        Locale::En => ImpressumContent {
            title: "Imprint / Contact",
            company_lines: &[
                "Matthias Lübken",
                "Softwareentwicklung und IT-Beratung",
                "Nikolausstr. 31, 53129 Bonn",
                "Germany",
                "USt-IdNr: DE460540613",
                "Email: info (at) tavon (dot) ai",
            ],
            privacy_heading: "Privacy Notice",
            intro: "We process personal data in accordance with the EU General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).",
            sections: &[
                ("1. Controller", &["The controller responsible for data processing is the provider named in the imprint above."]),
                ("2. Purpose of data processing", &["If you provide your email address on this website, we will use it solely to contact you or to provide information you requested."]),
                ("3. Legal basis", &["Processing is carried out based on your consent pursuant to Art. 6(1)(a) GDPR."]),
                ("4. Data storage", &["Your email address is stored only as long as necessary for the stated purpose or until you withdraw your consent."]),
                ("5. Data disclosure", &["We do not share your personal data with third parties unless this is required by law or you have explicitly agreed."]),
                ("6. Your rights", &["You have the right to request access to your personal data, rectification, deletion, restriction of processing, data portability, and to withdraw your consent at any time with effect for the future.", "To exercise these rights, please contact the email address shown in the imprint."]),
                ("7. Withdrawal of consent", &["You may withdraw your consent to the processing of your email address at any time. This does not affect the lawfulness of processing carried out before your withdrawal."]),
            ],
            copyright: "© 2026 Tavon. All rights reserved.",
        },
        Locale::Pt => ImpressumContent {
            title: "Aviso Legal / Contato",
            company_lines: &[
                "Matthias Lübken",
                "Desenvolvimento de Software e Consultoria de TI",
                "Nikolausstr. 31, 53129 Bonn",
                "Alemanha",
                "USt-IdNr: DE460540613",
                "Email: info (at) tavon (dot) ai",
            ],
            privacy_heading: "Aviso de Privacidade",
            intro: "Processamos dados pessoais de acordo com o Regulamento Geral de Proteção de Dados da UE (RGPD) e a Lei Federal Alemã de Proteção de Dados (BDSG).",
            sections: &[
                ("1. Controlador", &["O controlador responsável pelo processamento de dados é o fornecedor nomeado no aviso legal acima."]),
                ("2. Propósito do processamento de dados", &["Se você fornecer seu endereço de email neste site, usaremos apenas para contatá-lo ou fornecer informações que você solicitou."]),
                ("3. Base legal", &["O processamento é realizado com base no seu consentimento de acordo com o Art. 6(1)(a) RGPD."]),
                ("4. Armazenamento de dados", &["Seu endereço de email é armazenado apenas pelo tempo necessário para o objetivo declarado ou até que você retire seu consentimento."]),
                ("5. Divulgação de dados", &["Não compartilhamos seus dados pessoais com terceiros a menos que isso seja exigido por lei ou você tenha concordado explicitamente."]),
                ("6. Seus direitos", &["Você tem o direito de solicitar acesso aos seus dados pessoais, retificação, exclusão, restrição do processamento, portabilidade de dados e retirar seu consentimento a qualquer momento com efeito futuro.", "Para exercer esses direitos, entre em contato pelo endereço de email mostrado no aviso legal."]),
                ("7. Retirada de consentimento", &["Você pode retirar seu consentimento para o processamento do seu endereço de email a qualquer momento. Isso não afeta a legalidade do processamento realizado antes de sua retirada."]),
            ],
            copyright: "© 2026 Tavon. Todos os direitos reservados.",
        },
    }
}

pub fn impressum(locale: Locale) -> Markup {
    let path = format!("/{}/impressum", locale.code());
    let c = impressum_content(locale);
    let body = html! {
        (layout::header(locale))
        div class="flex flex-col min-h-screen bg-white" {
            main class="flex-1" {
                section class="w-full bg-white py-20 md:py-32" {
                    div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" {
                        h1 class="mb-8 text-4xl font-bold text-[#2f4858]" { (c.title) }
                        div class="mb-12 space-y-4 text-[#6b8393]" {
                            @for (i, line) in c.company_lines.iter().enumerate() {
                                @if i == 0 {
                                    p class="font-semibold" { (line) }
                                } @else {
                                    p { (line) }
                                }
                            }
                        }
                        div class="mt-16 space-y-6" {
                            h2 class="text-2xl font-bold text-[#2f4858]" { (c.privacy_heading) }
                            p class="text-[#6b8393]" { (c.intro) }
                            div class="space-y-6" {
                                @for (heading, paragraphs) in c.sections {
                                    div {
                                        h3 class="mb-2 font-bold text-[#2f4858]" { (heading) }
                                        @for (i, para) in paragraphs.iter().enumerate() {
                                            @if i == 0 {
                                                p class="text-[#6b8393]" { (para) }
                                            } @else {
                                                p class="mt-2 text-[#6b8393]" { (para) }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        div class="mt-16 border-t border-gray-200 pt-8" {
                            p class="text-sm text-[#6b8393]" { (c.copyright) }
                        }
                    }
                }
            }
        }
        (modals::header_contact_modal(locale, &path))
    };
    let title = format!("{} — TAVON.ai", c.title);
    layout::document(locale, &title, c.intro, body)
}

// ---------------------------------------------------------------------------
// Contact (English-only, matches original /contact route without header)
// ---------------------------------------------------------------------------

pub fn contact() -> Markup {
    let locale = Locale::En;
    let body = html! {
        div class="flex flex-col min-h-screen bg-white" {
            main class="flex-1" {
                section class="w-full bg-white py-20 md:py-32" {
                    div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                        div class="mb-12 flex flex-col items-center text-center" {
                            h1 class="mb-6 text-4xl font-bold text-[#2f4858] md:text-5xl" { "Get in Touch" }
                            p class="mx-auto max-w-2xl text-base font-normal text-[#6b8393] leading-relaxed md:text-lg" {
                                "We'd love to hear from you. Let's discuss how we can help transform your business operations with AI agents."
                            }
                        }
                        div class="mx-auto max-w-2xl" {
                            div class="rounded-lg border border-gray-200 p-8" {
                                p class="text-center text-[#6b8393]" {
                                    "Contact form coming soon. For inquiries, please reach out directly or use the other navigation options to explore our services."
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    layout::document(locale, "Get in Touch — TAVON.ai", "Contact TAVON.ai", body)
}
