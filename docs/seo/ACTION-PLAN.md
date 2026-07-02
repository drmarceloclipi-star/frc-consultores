# Plano de Ação SEO — frcconsultores.web.app

Priorização: Critical (imediato) → High (1 semana) → Medium (1 mês) → Low (backlog).

## Critical — corrigir imediatamente

| # | Ação | Onde | Esforço |
|---|---|---|---|
| C1 | Redirect 301 real `/` → `/pt` (hoje: 200 com shell vazia) + invalidar cache CDN | `firebase.json` → `"redirects": [{ "source": "/", "destination": "/pt", "type": 301 }]` | 10 min |
| C2 | Title + meta description únicos por página e idioma (remover metadados globais do layout raiz, manter só `metadataBase`/ícones) | `metadata` em `src/app/{pt,en}/layout.tsx` + cada `page.tsx` | 1–2 h |
| C3 | `robots.ts` + `sitemap.ts` nativos do App Router (com alternates de idioma) | `src/app/robots.ts`, `src/app/sitemap.ts` | 30 min |
| C4 | `alternates.canonical` + `alternates.languages` (hreflang pt-BR ↔ en + x-default) nas 6 páginas; `lang="en"` no HTML das rotas `/en/*` | Metadata API + layouts por locale | 1 h |

## High — dentro de 1 semana

| # | Ação | Onde | Esforço |
|---|---|---|---|
| H1 | JSON-LD `Organization` + `WebSite` (blocos prontos no audit) | `src/lib/schema.ts` + `layout.tsx` | 1 h |
| H2 | JSON-LD `BreadcrumbList` (about) + `WebPage`/`mainEntity` (impressum), PT/EN | páginas respectivas | 45 min |
| H3 | Open Graph + Twitter Card (`openGraph`, `twitter` na Metadata API) + criar OG image e `public/seo/logo.png` (≥112×112) | layout + assets | 1–2 h |
| H4 | Cache imutável `/_next/static/**` (`max-age=31536000, immutable`) e HTML `max-age=0, must-revalidate` | `firebase.json` → `headers` | 20 min |
| H5 | Headers de segurança: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, CSP | `firebase.json` → `headers` | 30 min |
| H6 | Isentar H1 do hero da animação `frc-rise` (ou delay ≤50 ms / duração ≤300 ms) — remove ~880 ms de LCP artificial | `globals.css` / `HeroSection.tsx` | 20 min |
| H7 | `public/llms.txt` + `robots.txt` com regras para crawlers de IA (conteúdo pronto no audit) | `public/` | 15 min |

## Medium — dentro de 1 mês

| # | Ação | Esforço |
|---|---|---|
| M1 | Expandir `/about` para 800+ palavras: trajetória dos sócios, metodologia, stack técnico | 3–4 h |
| M2 | Seção "Nossos Apps"/portfólio com nomes e links reais para App Store/Google Play (hoje a alegação é não-verificável) | 2–3 h |
| M3 | FAQ com schema `FAQPage` (perguntas latentes: prateleira vs. sob medida, prazos, suporte) | 2–3 h |
| M4 | Bloco-resposta citável (134–167 palavras) sob o H1 de cada página; alguns H2 em formato de pergunta | 2 h |
| M5 | Comparativo "Prateleira vs. Sob Medida" em HTML semântico (tabela/dl) | 1 h |
| M6 | Contextualizar "empresa desde 2015, software desde 2026" no corpo do texto | 30 min |

## Low — backlog

- Blog/artigos técnicos (autoridade temática; maior lacuna estrutural de longo prazo).
- Página de serviços dedicada e indexável (hoje só âncora `#solutions`).
- Prova social: depoimentos, números, case anonimizado.
- Presença externa: LinkedIn da empresa linkado no site, YouTube, GitHub.
- IndexNow no CI de deploy; submissão HSTS preload; domínio próprio (frcconsultores.com.br) em vez de `.web.app`.
- Rodar Lighthouse/CrUX quando houver tráfego para dados de campo reais.

## Sequência recomendada de execução

1. C1–C4 num único PR ("SEO foundation") — resolve indexação.
2. H1–H7 num segundo PR ("rich results + perf headers").
3. M1–M6 conforme disponibilidade de conteúdo (requer input do negócio).
