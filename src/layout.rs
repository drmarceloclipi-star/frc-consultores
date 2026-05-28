//! Document shell, header, and footer.

use maud::{html, Markup, DOCTYPE};

use crate::i18n::Locale;
use crate::icons;

/// Full HTML document wrapping a body fragment.
pub fn document(locale: Locale, title: &str, description: &str, body: Markup) -> Markup {
    html! {
        (DOCTYPE)
        html lang=(locale.code()) class="h-full antialiased font-sans" {
            head {
                meta charset="utf-8";
                meta name="viewport" content="width=device-width, initial-scale=1";
                title { (title) }
                meta name="description" content=(description);
                link rel="icon" href="/favicon.ico";
                link rel="stylesheet" href="/styles.css";
            }
            body class="min-h-full flex flex-col" {
                (body)
            }
        }
    }
}

fn nav_items(locale: Locale) -> [(&'static str, String); 5] {
    let t = locale.t();
    let l = locale.code();
    [
        (t.header.why_now, format!("/{l}")),
        (t.header.solutions, "#case-studies".to_string()),
        (t.header.academy, format!("/{l}/academy")),
        (t.header.about, format!("/{l}/about")),
        (t.header.blog, format!("/{l}/blog")),
    ]
}

pub fn header(locale: Locale) -> Markup {
    let t = locale.t();
    let l = locale.code();
    let items = nav_items(locale);

    html! {
        header class="sticky top-0 z-50 w-full h-16 bg-white/80 border-b border-gray-200" {
            // Mobile menu toggle state (CSS-only).
            input type="checkbox" id="menu-toggle" class="menu-toggle";
            div class="mx-auto max-w-6xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between" {
                a href=(format!("/{l}")) class="flex items-center flex-shrink-0 mr-auto" {
                    span class="text-lg md:text-xl font-bold text-[#2f4858]" { "TAVON.ai" }
                }

                nav class="hidden md:flex items-center gap-8 lg:gap-8" {
                    @for (label, href) in &items {
                        a href=(href) class="text-base font-medium text-[#2f4858] hover:text-[#c9a961] transition-colors duration-200" {
                            (label)
                        }
                    }
                }

                label for="header-contact-toggle" class="hidden md:inline-block ml-6 lg:ml-8 px-5 py-2.5 bg-[#c9a961] text-[#2f4858] font-semibold text-sm md:text-base rounded-md hover:bg-[#b39550] transition-colors duration-200 cursor-pointer" {
                    (t.header.contact)
                }

                label for="menu-toggle" class="md:hidden ml-auto p-2 text-[#2f4858] hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer" aria-label="Toggle navigation menu" {
                    span class="menu-icon-open" { (icons::menu("w-6 h-6")) }
                    span class="menu-icon-close" { (icons::x("w-6 h-6")) }
                }
            }

            nav class="mobile-menu absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden" {
                div class="flex flex-col py-2" {
                    @for (label, href) in &items {
                        a href=(href) class="px-6 py-3 text-base text-[#2f4858] hover:bg-gray-50 border-b border-gray-100 transition-colors duration-200" {
                            (label)
                        }
                    }
                    label for="header-contact-toggle" class="mx-4 my-3 px-4 py-2.5 bg-[#c9a961] text-[#2f4858] font-semibold text-sm rounded-md hover:bg-[#b39550] transition-colors duration-200 text-center w-auto cursor-pointer" {
                        (t.header.contact)
                    }
                }
            }
        }
    }
}

pub fn footer(locale: Locale) -> Markup {
    let t = locale.t();
    let l = locale.code();
    let en_class = if locale == Locale::En {
        "text-gray-900 font-semibold"
    } else {
        "text-gray-600 hover:text-gray-900"
    };
    let pt_class = if locale == Locale::Pt {
        "text-gray-900 font-semibold"
    } else {
        "text-gray-600 hover:text-gray-900"
    };

    html! {
        footer class="w-full border-t border-gray-200 bg-white" {
            div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" {
                div class="flex items-center justify-between py-6" {
                    div class="flex-shrink-0" {
                        p class="text-sm font-normal text-gray-600" { (t.footer.copyright) }
                    }
                    div class="flex items-center gap-6 md:gap-8 sm:gap-4" {
                        a href=(format!("/{l}/impressum")) class="text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors duration-200" {
                            (t.footer.imprint)
                        }
                        div class="flex items-center gap-3" {
                            (icons::globe("w-4 h-5 flex-shrink-0 text-gray-600"))
                            div class="flex gap-3 text-sm font-normal" {
                                a href="/en" class=(format!("transition-colors duration-200 {en_class}")) { "English" }
                                span class="text-gray-300" { "•" }
                                a href="/pt" class=(format!("transition-colors duration-200 {pt_class}")) { "Português" }
                            }
                        }
                    }
                }
            }
        }
    }
}
