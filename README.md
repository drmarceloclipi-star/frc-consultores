# FRC Consultores

Bilingual (English / Portuguese) marketing site for **TAVON.ai**, server-rendered
entirely in **Rust**.

This is a full rewrite of the original Next.js codebase. The application logic,
templating, routing, and form handling are all Rust — there is **no JavaScript at
runtime**. Interactive UI (mobile menu, modals, case-study tabs) is implemented
with pure CSS, and forms post to Rust handlers.

## Tech stack

- **[Axum](https://github.com/tokio-rs/axum)** — async web framework (Tokio runtime)
- **[Maud](https://maud.lambda.xyz/)** — compile-time HTML templating in Rust
- **Tailwind CSS v4** — styling (compiled once into `static/styles.css`, then
  embedded into the binary; no Node dependency at runtime)

## Project structure

```
src/
  main.rs        # server setup, routing, handlers, embedded static assets
  i18n.rs        # Locale enum + full EN/PT translation content
  layout.rs      # HTML document shell, header, footer
  sections.rs    # home-page sections (hero, solutions, comparison, ...)
  modals.rs      # CSS-only contact / subscribe / header-contact modals
  pages.rs       # full page documents (home, about, academy, blog, ...)
  icons.rs       # inline SVG icons (Lucide paths) as Maud markup
assets/
  input.css      # Tailwind entrypoint + CSS-only interaction rules
static/
  styles.css     # generated stylesheet (committed; embedded at compile time)
  favicon.ico
```

## Running

```bash
cargo run                  # serves http://0.0.0.0:3000
PORT=8080 cargo run        # custom port
cargo build --release      # optimized binary at target/release/frc-consultores
```

## Routes

| Path | Description |
| --- | --- |
| `/` | redirects to `/en` |
| `/en`, `/pt` | home page |
| `/{locale}/about` | team / about page |
| `/{locale}/academy` | training & workshops |
| `/{locale}/blog` | blog index |
| `/{locale}/blog/{slug}` | blog post |
| `/{locale}/impressum` | imprint & privacy notice |
| `/contact` | contact page (English) |
| `POST /contact`, `POST /subscribe` | form handlers (log + redirect back) |

`{locale}` is `en` or `pt`.

## Regenerating the stylesheet

`static/styles.css` is a committed build artifact. Regenerate it after changing
markup or `assets/input.css`:

```bash
bash scripts/build-css.sh
```

## Docker

```bash
docker build -t frc-consultores .
docker run -p 3000:3000 frc-consultores
```
