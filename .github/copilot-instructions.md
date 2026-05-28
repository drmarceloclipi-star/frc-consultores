<!-- AUTO-GENERATED from AGENTS.md — do not edit directly.
     Run `bash scripts/sync-agent-rules.sh` to regenerate. -->

# FRC Consultores — Rust rewrite

## What this is

The bilingual (EN/PT) **TAVON.ai** marketing site, server-rendered entirely in
Rust. This was rewritten from an original Next.js/React codebase. There is **no
JavaScript at runtime** — interactivity (mobile menu, modals, case-study tabs) is
pure CSS, and forms post to Rust handlers.

## Tech stack

- **Axum** (Tokio) — async web server and routing
- **Maud** — compile-time HTML templating (components are Rust functions
  returning `Markup`)
- **Tailwind CSS v4** — styling, compiled once into `static/styles.css` and
  embedded into the binary with `include_str!` (no runtime Node dependency)

## Commands

- `cargo run` — start the dev server (http://0.0.0.0:3000, override with `PORT`)
- `cargo build --release` — optimized binary
- `cargo check` / `cargo clippy` — type-check / lint
- `bash scripts/build-css.sh` — regenerate `static/styles.css` (only needed when
  markup or `assets/input.css` changes)

## Project structure

```
src/
  main.rs     # server, routing, handlers, embedded static assets
  i18n.rs     # Locale enum + EN/PT content model (single source of copy)
  layout.rs   # document shell, header, footer
  sections.rs # home-page sections
  modals.rs   # CSS-only modals
  pages.rs    # full page documents per route
  icons.rs    # inline SVG icons (Lucide paths)
assets/input.css   # Tailwind entrypoint + CSS-only interaction rules
static/styles.css  # generated, committed, embedded at compile time
```

## Conventions

- Keep all user-facing copy in `i18n.rs` (or the per-page content structs in
  `pages.rs`); branch on `Locale` rather than duplicating templates where
  practical.
- Preserve the existing Tailwind utility classes in markup — the design is a
  pixel-for-pixel match of the original site. After changing classes, re-run
  `scripts/build-css.sh` so `static/styles.css` stays in sync.
- CSS-only widgets rely on hidden `<input>` toggles + `<label for=...>` triggers
  and sibling selectors defined in `assets/input.css`. Modal toggle/overlay pairs
  must remain adjacent siblings.
- No `unsafe`. Validate only at boundaries (form input, route params).

## Important notes

- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate
  platform-specific instruction files.
