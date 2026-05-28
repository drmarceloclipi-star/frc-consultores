//! Home-page sections.

use maud::{html, Markup, PreEscaped};

use crate::i18n::{Locale, Solution};
use crate::icons;

pub fn hero(locale: Locale) -> Markup {
    let t = &locale.t().hero;
    let pattern = r##"<svg class="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice"><defs><pattern id="geometric-pattern" patternUnits="userSpaceOnUse" width="80" height="80"><line x1="0" y1="0" x2="80" y2="80" stroke="#2f4858" stroke-width="1"/><line x1="80" y1="0" x2="0" y2="80" stroke="#2f4858" stroke-width="1"/><rect x="0" y="0" width="80" height="80" fill="none" stroke="#2f4858" stroke-width="1"/></pattern></defs><rect width="1440" height="800" fill="url(#geometric-pattern)"/></svg>"##;
    html! {
        section class="relative w-full min-h-[500px] bg-[#fafbfc] py-20 md:py-20 lg:py-20 overflow-hidden" {
            (PreEscaped(pattern))
            div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                div class="flex flex-col items-center text-center" {
                    p class="mb-6 text-base md:text-lg font-normal text-[#6b8393]" { (t.subtitle) }
                    h1 class="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" {
                        span class="text-[#2f4858]" { (t.title_part1) }
                        " "
                        span class="text-[#c9a961]" { (t.title_part2) }
                    }
                    p class="mb-10 max-w-xl text-base md:text-lg font-normal text-[#6b8393] leading-relaxed" { (t.description) }
                    div class="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center" {
                        a href="#comparison" class="text-[#c9a961] font-medium text-base hover:text-[#b8985a] transition-colors duration-200" { (t.see_difference) }
                        a href="#case-studies" class="text-[#c9a961] font-medium text-base hover:text-[#b8985a] transition-colors duration-200" { (t.view_examples) }
                    }
                }
            }
        }
    }
}

fn solution_card(locale: Locale, sol: &Solution, icon: Markup) -> Markup {
    let t = &locale.t().solutions;
    html! {
        div class="flex flex-col h-full bg-white border border-[#e5e7eb] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-8 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-shadow duration-200" {
            div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c9a961]" {
                (icon)
            }
            h3 class="mb-4 text-2xl font-bold text-[#2f4858]" { (sol.title) }
            p class="mb-6 text-sm font-semibold text-[#c9a961]" { (sol.subtitle) }
            p class="mb-6 text-sm font-normal text-[#6b8393] leading-relaxed" { (sol.description) }
            div class="mb-8" {
                p class="mb-3 text-sm font-semibold text-[#2f4858]" { (t.includes_label) }
                ul class="space-y-2" {
                    @for item in &sol.includes {
                        li class="flex items-start gap-3 text-sm font-normal text-[#6b8393] leading-[1.5]" {
                            span class="mt-0.5 flex-shrink-0 text-[#c9a961]" { "✓" }
                            span { (item) }
                        }
                    }
                }
            }
            label for="contact-toggle" class="mt-auto inline-flex w-full items-center justify-center rounded-lg bg-[#c9a961] px-6 py-3 text-sm font-semibold text-[#2f4858] transition-colors duration-200 hover:bg-[#b8985a] active:bg-[#a88850] cursor-pointer" {
                (t.discuss_button)
            }
        }
    }
}

pub fn solutions(locale: Locale) -> Markup {
    let t = &locale.t().solutions;
    html! {
        section class="relative w-full bg-white py-20 md:py-32 lg:py-32" {
            div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                div class="mb-16 flex flex-col items-start md:mb-20 lg:mb-24" {
                    h2 class="mb-4 text-4xl font-bold leading-tight md:text-5xl" {
                        span class="text-[#2f4858]" { (t.heading1) }
                        span class="text-[#c9a961]" { (t.heading2) }
                    }
                    p class="max-w-3xl text-base font-normal text-[#6b8393] leading-relaxed md:text-lg" { (t.intro) }
                }
                div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" {
                    (solution_card(locale, &t.consulting, icons::briefcase("h-8 w-8 text-white")))
                    (solution_card(locale, &t.automation, icons::cog("h-8 w-8 text-white")))
                    (solution_card(locale, &t.toolkit, icons::wrench("h-8 w-8 text-white")))
                }
            }
        }
    }
}

pub fn comparison(locale: Locale) -> Markup {
    let t = &locale.t().comparison;
    html! {
        section id="comparison" class="relative w-full bg-[#f8f9fa] py-20 md:py-32 lg:py-32" {
            div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                div class="mb-16 flex flex-col items-center text-center md:mb-20 lg:mb-24" {
                    h2 class="mb-6 text-4xl font-bold leading-tight text-[#2f4858] md:text-5xl" { (t.heading) }
                    p class="mx-auto max-w-2xl text-base font-normal text-[#6b8393] leading-relaxed md:text-lg" { (t.intro) }
                }

                div class="relative mb-20 md:mb-24 lg:mb-32" {
                    // Desktop layout
                    div class="hidden md:grid grid-cols-2 gap-12 lg:gap-16" {
                        div class="flex flex-col" {
                            h3 class="mb-8 text-2xl font-bold text-[#2f4858] lg:text-3xl" { (t.old_generation) }
                            div class="space-y-4" {
                                @for item in &t.old_items {
                                    div class="flex items-start gap-3" {
                                        span class="mt-1 flex-shrink-0 text-lg text-[#6b8393]" { "→" }
                                        p class="text-base font-normal text-[#6b8393] leading-relaxed" { (item) }
                                    }
                                }
                            }
                        }
                        div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" {
                            div class="flex h-16 w-16 items-center justify-center rounded-full bg-[#2f4858] lg:h-20 lg:w-20" {
                                span class="text-2xl font-bold text-[#c9a961] lg:text-3xl" { "VS" }
                            }
                        }
                        div class="flex flex-col border-l-4 border-l-[#c9a961] pl-6 lg:pl-8" {
                            div class="mb-8" {
                                h3 class="text-2xl font-bold text-[#2f4858] lg:text-3xl" { (t.new_generation) }
                                p class="text-sm font-normal text-[#c9a961] lg:text-base" { (t.agentic) }
                            }
                            div class="space-y-4" {
                                @for item in &t.new_items {
                                    div class="flex items-start gap-3" {
                                        span class="mt-1 flex-shrink-0 text-lg text-[#c9a961]" { "✓" }
                                        p class="text-base font-normal text-[#6b8393] leading-relaxed" { (item) }
                                    }
                                }
                            }
                        }
                    }

                    // Mobile layout
                    div class="md:hidden" {
                        div class="mb-12 flex flex-col" {
                            h3 class="mb-6 text-2xl font-bold text-[#2f4858]" { (t.old_generation) }
                            div class="space-y-3" {
                                @for item in &t.old_items {
                                    div class="flex items-start gap-3" {
                                        span class="mt-1 flex-shrink-0 text-lg text-[#6b8393]" { "→" }
                                        p class="text-base font-normal text-[#6b8393] leading-relaxed" { (item) }
                                    }
                                }
                            }
                        }
                        div class="mb-12 flex justify-center" {
                            div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#2f4858]" {
                                span class="text-xl font-bold text-[#c9a961]" { "VS" }
                            }
                        }
                        div class="flex flex-col border-l-4 border-l-[#c9a961] pl-4" {
                            div class="mb-6" {
                                h3 class="text-2xl font-bold text-[#2f4858]" { (t.new_generation) }
                                p class="text-sm font-normal text-[#c9a961]" { (t.agentic) }
                            }
                            div class="space-y-3" {
                                @for item in &t.new_items {
                                    div class="flex items-start gap-3" {
                                        span class="mt-1 flex-shrink-0 text-lg text-[#c9a961]" { "✓" }
                                        p class="text-base font-normal text-[#6b8393] leading-relaxed" { (item) }
                                    }
                                }
                            }
                        }
                    }
                }

                div class="relative flex flex-col items-center border-t border-t-gray-200 pt-16 md:pt-20 lg:pt-24" {
                    h3 class="mb-6 text-2xl font-bold text-[#2f4858] md:text-3xl" { (t.breakthrough) }
                    p class="mx-auto mb-12 max-w-2xl text-center text-sm font-normal text-[#6b8393] leading-relaxed md:mb-16 md:text-base" { (t.breakthrough_text) }
                    div class="w-full bg-white" {
                        div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:gap-12 md:px-6 md:py-16 lg:gap-16 lg:px-8" {
                            @for stat in &t.stats {
                                div class="flex flex-col items-center justify-center" {
                                    div class="mb-3 text-4xl font-bold text-[#c9a961] md:text-5xl" { (stat.number) }
                                    p class="mb-2 text-sm font-normal text-[#6b8393] md:text-base" { (stat.description) }
                                    p class="text-xs font-normal text-[#6b8393] md:text-sm" { (stat.citation) }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

pub fn features(locale: Locale) -> Markup {
    let t = &locale.t().features;
    html! {
        section class="w-full bg-white py-20 sm:py-24 lg:py-24" {
            div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                div class="mb-12 sm:mb-16 lg:mb-20" {
                    h2 class="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" {
                        span class="text-[#2f4858]" { (t.heading1) }
                        span class="text-[#c9a961]" { (t.heading2) }
                    }
                    p class="max-w-2xl text-base sm:text-lg font-normal text-[#6b8393] leading-relaxed" { (t.subtitle) }
                }
                div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-8" {
                    @for card in &t.cards {
                        a href=(card.href) {
                            div class="flex flex-col h-full bg-white border border-[#e5e7eb] rounded-lg sm:rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-300 p-8 sm:p-10" {
                                h3 class="mb-4 text-xl sm:text-2xl font-bold text-[#2f4858]" { (card.title) }
                                p class="mb-6 flex-grow text-base sm:text-[15px] text-[#6b8393] leading-[1.6] font-normal" { (card.description) }
                                p class="text-base sm:text-[15px] font-semibold text-[#c9a961] hover:text-[#b8985a] transition-colors duration-200" { (card.cta_text) }
                            }
                        }
                    }
                }
            }
        }
    }
}

pub fn case_studies(locale: Locale) -> Markup {
    let t = &locale.t().case_studies;
    html! {
        section id="case-studies" class="w-full bg-white py-20 sm:py-24 lg:py-32" {
            div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                div class="mb-12 sm:mb-16 lg:mb-20" {
                    h2 class="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" {
                        span class="text-[#2f4858]" { (t.heading1) }
                        span class="text-[#c9a961]" { (t.heading2) }
                    }
                    p class="max-w-2xl text-base sm:text-lg font-normal text-[#6b8393] leading-relaxed" { (t.intro) }
                }

                div class="case-tabs" {
                    @for (i, _) in t.cases.iter().enumerate() {
                        @if i == 0 {
                            input type="radio" name="case-tab" id=(format!("case-{i}")) class="tab-input" checked;
                        } @else {
                            input type="radio" name="case-tab" id=(format!("case-{i}")) class="tab-input";
                        }
                    }

                    div class="tab-labels mb-12 flex flex-wrap gap-4 sm:gap-6 lg:mb-16" {
                        @for (i, c) in t.cases.iter().enumerate() {
                            label for=(format!("case-{i}")) class=(format!("tab-label tab-label-{i} px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold transition-all duration-300 ease-out border-b-4 border-transparent text-[#2f4858] hover:bg-gray-100 cursor-pointer")) {
                                (c.tab_label)
                            }
                        }
                    }

                    div class="tab-content mt-12 sm:mt-16 lg:mt-20" {
                        @for (i, c) in t.cases.iter().enumerate() {
                            div class=(format!("tab-panel tab-panel-{i}")) {
                                div class="mb-6" {
                                    span class="inline-block text-xs sm:text-sm font-semibold text-[#c9a961] uppercase tracking-wide" { (c.category) }
                                }
                                h3 class="mb-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2f4858]" { (c.heading) }
                                div class="space-y-8 sm:space-y-10" {
                                    div {
                                        h4 class="mb-3 text-lg sm:text-xl lg:text-2xl font-bold text-[#2f4858]" { (t.the_challenge) }
                                        p class="text-base sm:text-lg text-[#6b8393] leading-relaxed" { (c.challenge) }
                                    }
                                    div {
                                        h4 class="mb-3 text-lg sm:text-xl lg:text-2xl font-bold text-[#2f4858]" { (t.the_solution) }
                                        p class="text-base sm:text-lg text-[#6b8393] leading-relaxed" { (c.solution) }
                                    }
                                    div {
                                        h4 class="mb-3 text-lg sm:text-xl lg:text-2xl font-bold text-[#2f4858]" { (t.behind_scenes) }
                                        p class="text-base sm:text-lg text-[#6b8393] leading-relaxed" { (c.behind_scenes) }
                                    }
                                    div {
                                        h4 class="mb-4 text-lg sm:text-xl lg:text-2xl font-bold text-[#2f4858]" { (t.results_impact) }
                                        ul class="space-y-2 sm:space-y-3" {
                                            @for r in &c.results {
                                                li class="flex items-start gap-3 text-base sm:text-lg text-[#6b8393] leading-relaxed" {
                                                    span class="mt-1 flex-shrink-0 text-[#c9a961] font-semibold" { "✓" }
                                                    span { (r) }
                                                }
                                            }
                                        }
                                    }
                                    div {
                                        p class="text-base sm:text-lg text-[#6b8393]" {
                                            span class="font-semibold text-[#2f4858]" { (t.team) }
                                            " " (c.team)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

pub fn cta(locale: Locale) -> Markup {
    let t = &locale.t().cta;
    let l = locale.code();
    html! {
        section class="relative w-full min-h-[500px] bg-[#2f4858] flex items-center justify-center px-6 sm:px-6 py-[120px] md:py-[120px] lg:py-[120px] overflow-hidden" {
            div class="relative z-10 flex flex-col items-center text-center max-w-[700px]" {
                h2 class="mb-2 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-white" { (t.heading) }
                h3 class="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-[#c9a961]" { (t.subheading) }
                p class="mb-10 sm:mb-12 text-base md:text-lg font-normal text-white opacity-90 leading-[1.6]" { (t.description) }
                div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto" {
                    label for="contact-toggle" class="inline-block px-8 py-3 sm:py-4 bg-[#c9a961] text-[#2f4858] font-semibold text-base rounded-lg transition-colors duration-200 hover:bg-[#b39550] active:bg-[#a0845a] whitespace-nowrap cursor-pointer" {
                        (t.start_conversation)
                    }
                    a href=(format!("/{l}/academy")) class="inline-block px-8 py-3 sm:py-4 border border-[#c9a961] text-[#c9a961] font-semibold text-base rounded-lg transition-all duration-200 hover:bg-[#c9a961] hover:bg-opacity-10 active:bg-opacity-20 whitespace-nowrap" {
                        (t.explore_academy)
                    }
                }
            }
        }
    }
}
