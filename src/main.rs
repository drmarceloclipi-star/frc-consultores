//! FRC Consultores — bilingual marketing site, server-rendered with Axum + Maud.

mod i18n;
mod icons;
mod layout;
mod modals;
mod pages;
mod sections;

use axum::{
    extract::Path,
    http::{header, StatusCode},
    response::{Html, IntoResponse, Redirect, Response},
    routing::{get, post},
    Form, Router,
};
use serde::Deserialize;

use i18n::Locale;

const STYLES: &str = include_str!("../static/styles.css");
const FAVICON: &[u8] = include_bytes!("../static/favicon.ico");

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt()
        .with_env_filter(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "info".into()),
        )
        .init();

    let app = Router::new()
        .route("/", get(|| async { Redirect::permanent("/en") }))
        .route("/styles.css", get(styles))
        .route("/favicon.ico", get(favicon))
        .route("/academy", get(|| async { Redirect::permanent("/en/academy") }))
        .route("/contact", get(contact_page).post(submit_contact))
        .route("/subscribe", post(submit_subscribe))
        .route("/blog/{slug}", get(blog_post_root))
        .route("/{locale}", get(home))
        .route("/{locale}/about", get(about))
        .route("/{locale}/academy", get(academy))
        .route("/{locale}/blog", get(blog))
        .route("/{locale}/blog/{slug}", get(blog_post))
        .route("/{locale}/impressum", get(impressum))
        .fallback(not_found);

    let addr = std::net::SocketAddr::from(([0, 0, 0, 0], port()));
    let listener = tokio::net::TcpListener::bind(addr).await.expect("bind");
    tracing::info!("listening on http://{addr}");
    axum::serve(listener, app)
        .with_graceful_shutdown(shutdown_signal())
        .await
        .expect("server");
}

fn port() -> u16 {
    std::env::var("PORT")
        .ok()
        .and_then(|p| p.parse().ok())
        .unwrap_or(3000)
}

async fn shutdown_signal() {
    let _ = tokio::signal::ctrl_c().await;
}

fn parse_locale(code: &str) -> Result<Locale, Response> {
    Locale::from_code(code).ok_or_else(not_found_sync)
}

// ----- Page handlers --------------------------------------------------------

async fn home(Path(locale): Path<String>) -> Response {
    match parse_locale(&locale) {
        Ok(l) => Html(pages::home(l).into_string()).into_response(),
        Err(r) => r,
    }
}

async fn about(Path(locale): Path<String>) -> Response {
    match parse_locale(&locale) {
        Ok(l) => Html(pages::about(l).into_string()).into_response(),
        Err(r) => r,
    }
}

async fn academy(Path(locale): Path<String>) -> Response {
    match parse_locale(&locale) {
        Ok(l) => Html(pages::academy(l).into_string()).into_response(),
        Err(r) => r,
    }
}

async fn blog(Path(locale): Path<String>) -> Response {
    match parse_locale(&locale) {
        Ok(l) => Html(pages::blog(l).into_string()).into_response(),
        Err(r) => r,
    }
}

async fn blog_post(Path((locale, slug)): Path<(String, String)>) -> Response {
    match parse_locale(&locale) {
        Ok(l) => Html(pages::blog_post(l, &slug).into_string()).into_response(),
        Err(r) => r,
    }
}

async fn blog_post_root(Path(slug): Path<String>) -> Response {
    Html(pages::blog_post(Locale::En, &slug).into_string()).into_response()
}

async fn impressum(Path(locale): Path<String>) -> Response {
    match parse_locale(&locale) {
        Ok(l) => Html(pages::impressum(l).into_string()).into_response(),
        Err(r) => r,
    }
}

async fn contact_page() -> Response {
    Html(pages::contact().into_string()).into_response()
}

// ----- Static assets --------------------------------------------------------

async fn styles() -> impl IntoResponse {
    ([(header::CONTENT_TYPE, "text/css; charset=utf-8")], STYLES)
}

async fn favicon() -> impl IntoResponse {
    ([(header::CONTENT_TYPE, "image/x-icon")], FAVICON)
}

// ----- Form submissions -----------------------------------------------------

#[derive(Debug, Deserialize)]
struct ContactSubmission {
    #[serde(default)]
    next: String,
    #[serde(default)]
    name: String,
    #[serde(default)]
    email: String,
}

#[derive(Debug, Deserialize)]
struct SubscribeSubmission {
    #[serde(default)]
    next: String,
    #[serde(default)]
    name: String,
    #[serde(default)]
    email: String,
}

/// Only allow same-site relative redirects to avoid open-redirect issues.
fn safe_redirect(next: &str) -> String {
    if next.starts_with('/') && !next.starts_with("//") {
        next.to_string()
    } else {
        "/en".to_string()
    }
}

async fn submit_contact(Form(form): Form<ContactSubmission>) -> Redirect {
    tracing::info!(name = %form.name, email = %form.email, "contact form submitted");
    Redirect::to(&safe_redirect(&form.next))
}

async fn submit_subscribe(Form(form): Form<SubscribeSubmission>) -> Redirect {
    tracing::info!(name = %form.name, email = %form.email, "newsletter subscription");
    Redirect::to(&safe_redirect(&form.next))
}

// ----- Fallback -------------------------------------------------------------

fn not_found_sync() -> Response {
    (
        StatusCode::NOT_FOUND,
        Html(pages::blog_post(Locale::En, "__missing__").into_string()),
    )
        .into_response()
}

async fn not_found() -> Response {
    not_found_sync()
}
