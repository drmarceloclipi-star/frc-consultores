//! CSS-only modals (contact form, header contact, newsletter subscribe).
//!
//! Each modal is toggled by a hidden checkbox; trigger buttons are `<label>`s
//! pointing at the checkbox id. Forms post to server handlers and redirect back.

use maud::{html, Markup};

use crate::i18n::Locale;
use crate::icons;

const INPUT_CLASS: &str = "w-full rounded border border-[#e5e7eb] px-3 py-2 text-sm text-[#2f4858] focus:border-[#c9a961] focus:outline-none focus:ring-1 focus:ring-[#c9a961]";
const CHECKBOX_CLASS: &str = "h-4 w-4 rounded border border-[#e5e7eb] cursor-pointer";
const LABEL_CLASS: &str = "block text-sm font-medium text-[#2f4858] mb-1";

fn close_button(toggle_id: &str) -> Markup {
    html! {
        label for=(toggle_id) class="absolute right-4 top-4 text-[#6b8393] hover:text-[#2f4858] cursor-pointer" aria-label="Close modal" {
            (icons::x("h-6 w-6"))
        }
    }
}

fn privacy_row(locale: Locale, label: &str, link: &str) -> Markup {
    let l = locale.code();
    html! {
        div class="flex items-start pt-4 border-t border-[#e5e7eb]" {
            input type="checkbox" name="privacy" required class=(format!("{CHECKBOX_CLASS} mt-1"));
            label class="ml-2 text-sm text-[#6b8393] cursor-pointer" {
                (label) " "
                a href=(format!("/{l}/impressum")) target="_blank" rel="noopener noreferrer" class="text-[#c9a961] hover:underline" { (link) }
            }
        }
    }
}

fn interest_checkboxes(setup_call: &str, more_info: &str, training: &str, consulting: &str, implementation: &str) -> Markup {
    html! {
        div class="space-y-3 pt-4 border-t border-[#e5e7eb]" {
            div class="flex items-center" {
                input type="checkbox" name="setupCall" class=(CHECKBOX_CLASS);
                label class="ml-2 text-sm text-[#2f4858] cursor-pointer" { (setup_call) }
            }
            div class="space-y-2" {
                p class="text-sm font-medium text-[#2f4858]" { (more_info) }
                div class="ml-4 space-y-2" {
                    div class="flex items-center" {
                        input type="checkbox" name="training" class=(CHECKBOX_CLASS);
                        label class="ml-2 text-sm text-[#2f4858] cursor-pointer" { (training) }
                    }
                    div class="flex items-center" {
                        input type="checkbox" name="consulting" class=(CHECKBOX_CLASS);
                        label class="ml-2 text-sm text-[#2f4858] cursor-pointer" { (consulting) }
                    }
                    div class="flex items-center" {
                        input type="checkbox" name="implementation" class=(CHECKBOX_CLASS);
                        label class="ml-2 text-sm text-[#2f4858] cursor-pointer" { (implementation) }
                    }
                }
            }
        }
    }
}

fn modal_shell(toggle_id: &str, modal_id: &str, panel: Markup) -> Markup {
    html! {
        input type="checkbox" id=(toggle_id) class="modal-toggle";
        div id=(modal_id) class="modal fixed inset-0 z-50 items-center justify-center bg-black/50" {
            label for=(toggle_id) class="modal-backdrop absolute inset-0";
            div class="relative w-full max-w-md rounded-lg bg-white p-8 shadow-lg max-h-[90vh] overflow-y-auto" {
                (close_button(toggle_id))
                (panel)
            }
        }
    }
}

pub fn contact_modal(locale: Locale, current_path: &str) -> Markup {
    let t = &locale.t().contact_form;
    let panel = html! {
        h2 class="mb-2 text-2xl font-bold text-[#2f4858]" { (t.heading) }
        p class="mb-6 text-sm text-[#6b8393]" { (t.description) }
        form method="post" action="/contact" class="space-y-4" {
            input type="hidden" name="next" value=(current_path);
            input type="hidden" name="locale" value=(locale.code());
            div {
                label class=(LABEL_CLASS) { (t.name_label) }
                input type="text" name="name" required class=(INPUT_CLASS) placeholder=(t.name_placeholder);
            }
            div {
                label class=(LABEL_CLASS) { (t.email_label) }
                input type="email" name="email" required class=(INPUT_CLASS) placeholder=(t.email_placeholder);
            }
            div {
                label class=(LABEL_CLASS) { (t.company_label) }
                input type="text" name="company" class=(INPUT_CLASS) placeholder=(t.company_placeholder);
            }
            div {
                label class=(LABEL_CLASS) { (t.message_label) }
                textarea name="message" required rows="4" class=(INPUT_CLASS) placeholder=(t.message_placeholder) {}
            }
            (interest_checkboxes(t.setup_call, t.request_more_info, t.training, t.consulting, t.implementation))
            (privacy_row(locale, t.privacy_label, t.privacy_link))
            button type="submit" class="w-full rounded-lg bg-[#c9a961] px-6 py-3 text-sm font-semibold text-[#2f4858] transition-colors duration-200 hover:bg-[#b8985a]" {
                (t.send_message)
            }
        }
    };
    modal_shell("contact-toggle", "contact-modal", panel)
}

pub fn header_contact_modal(locale: Locale, current_path: &str) -> Markup {
    let t = &locale.t().header_contact_form;
    let panel = html! {
        h2 class="mb-2 text-2xl font-bold text-[#2f4858]" { (t.heading) }
        p class="mb-6 text-sm text-[#6b8393]" { (t.description) }
        form method="post" action="/contact" class="space-y-4" {
            input type="hidden" name="next" value=(current_path);
            input type="hidden" name="locale" value=(locale.code());
            input type="hidden" name="source" value="header";
            div {
                label class=(LABEL_CLASS) { (t.name_label) " " span class="text-red-500" { "*" } }
                input type="text" name="name" required class=(INPUT_CLASS) placeholder=(t.name_placeholder);
            }
            div {
                label class=(LABEL_CLASS) { (t.email_label) " " span class="text-red-500" { "*" } }
                input type="email" name="email" required class=(INPUT_CLASS) placeholder=(t.email_placeholder);
            }
            div {
                label class=(LABEL_CLASS) { (t.note_label) }
                textarea name="message" rows="3" class=(INPUT_CLASS) placeholder=(t.note_placeholder) {}
            }
            (interest_checkboxes(t.setup_call, t.request_more_info, t.training, t.consulting, t.implementation))
            (privacy_row(locale, t.privacy_label, t.privacy_link))
            div class="flex gap-3 pt-4" {
                label for="header-contact-toggle" class="flex-1 rounded-lg border-2 border-[#c9a961] px-6 py-3 text-sm font-semibold text-[#c9a961] transition-colors duration-200 hover:bg-[#c9a961] hover:text-white text-center cursor-pointer" {
                    (t.cancel)
                }
                button type="submit" class="flex-1 rounded-lg bg-[#c9a961] px-6 py-3 text-sm font-semibold text-[#2f4858] transition-colors duration-200 hover:bg-[#b8985a]" {
                    (t.submit)
                }
            }
        }
    };
    modal_shell("header-contact-toggle", "header-contact-modal", panel)
}

pub fn subscribe_modal(locale: Locale, current_path: &str) -> Markup {
    let t = &locale.t().subscribe_form;
    let panel = html! {
        h2 class="mb-2 text-2xl font-bold text-[#2f4858]" { (t.heading) }
        p class="mb-6 text-sm text-[#6b8393]" { (t.description) }
        form method="post" action="/subscribe" class="space-y-4" {
            input type="hidden" name="next" value=(current_path);
            input type="hidden" name="locale" value=(locale.code());
            div {
                label class=(LABEL_CLASS) { (t.name_label) }
                input type="text" name="name" required class=(INPUT_CLASS) placeholder=(t.name_placeholder);
            }
            div {
                label class=(LABEL_CLASS) { (t.email_label) }
                input type="email" name="email" required class=(INPUT_CLASS) placeholder=(t.email_placeholder);
            }
            (privacy_row(locale, t.privacy_label, t.privacy_link))
            button type="submit" class="w-full rounded-lg bg-[#c9a961] px-6 py-3 text-sm font-semibold text-[#2f4858] transition-colors duration-200 hover:bg-[#b8985a]" {
                (t.subscribe)
            }
        }
    };
    modal_shell("subscribe-toggle", "subscribe-modal", panel)
}
