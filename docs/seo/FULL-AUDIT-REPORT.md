# Auditoria SEO Completa — frcconsultores.web.app

Data: 2026-07-02 · Escopo: 7 URLs (`/`, `/pt`, `/en`, `/pt|en/about`, `/pt|en/impressum`) · Tipo de negócio: empresa de desenvolvimento de software (institucional, bilíngue PT/EN)

## SEO Health Score: 38/100

| Categoria | Peso | Nota | Ponderado |
|---|---|---|---|
| Technical SEO | 22% | 32 | 7,0 |
| Content Quality | 23% | 42 | 9,7 |
| On-Page SEO | 20% | 30 | 6,0 |
| Schema / Structured Data | 10% | 0 | 0,0 |
| Performance (CWV) | 10% | 80 | 8,0 |
| AI Search Readiness | 10% | 34 | 3,4 |
| Images | 5% | 85 | 4,3 |
| **Total** | | | **38** |

Nota: performance é o ponto forte (TTFB ~200 ms, HTML 9,3 KB brotli, zero imagens raster, DOM pequeno). O score baixo vem de infraestrutura de indexação inexistente, não de qualidade da página.

## Top 5 problemas críticos

1. **Raiz `/` retorna 200 com shell vazia** em vez de redirect real para `/pt`. O `redirect()` do App Router não executa no edge do Firebase — crawlers sem JS veem página em branco (`__next_error__`, 7 KB). A URL mais provável de ser citada/compartilhada está invisível.
2. **Title e meta description idênticos nas 6 páginas** (definidos só no `layout.tsx` raiz). Canibalização total de SERP; `/en/*` herda metadados em português.
3. **`robots.txt` e `sitemap.xml` 404** — descoberta de páginas depende só de crawl por links.
4. **Sem `canonical` nem `hreflang`** — PT/EN sem relação declarada; risco de duplicação e idioma errado na SERP. `/en` ainda tem `<html lang="pt-BR">`.
5. **Zero JSON-LD, zero Open Graph/Twitter Card** — sem rich results, sem preview em WhatsApp/redes.

## Top 5 quick wins

1. Redirect 301 `/` → `/pt` no `firebase.json` (`redirects`).
2. `src/app/robots.ts` + `src/app/sitemap.ts` (convenções nativas do App Router, com alternates de idioma).
3. Metadata API por rota: title/description únicos + `alternates.canonical` + `alternates.languages` nas 6 páginas; `lang` correto por locale.
4. JSON-LD `Organization` + `WebSite` no layout (blocos prontos no relatório do agente de schema) — dados reais já existem no Impressum.
5. `public/llms.txt` + cache imutável para `/_next/static/**` no `firebase.json`.

---

## 1. Technical SEO (32/100)

- **Crítico:** `/` serve payload RSC estático com digest `NEXT_REDIRECT;replace;/pt;307` embutido — só redireciona com JS. Corrigir na camada de hosting (301) e invalidar cache CDN.
- **Crítico:** metadados globais únicos; nenhuma rota define `metadata` próprio.
- **Crítico:** robots/sitemap ausentes; hreflang/canonical ausentes.
- **Alto:** headers de segurança — só HSTS presente. Faltam `X-Content-Type-Options`, CSP, `Referrer-Policy`, `Permissions-Policy` (via `firebase.json headers`).
- **Médio:** `Cache-Control: max-age=3600` uniforme; `/_next/static/**` (hasheado) deveria ser `max-age=31536000, immutable`.
- **OK:** viewport correto, HSTS com preload, sem links internos quebrados, sem cadeias de redirect.

## 2. Content Quality / E-E-A-T (42/100)

| Fator | Nota |
|---|---|
| Experience | 25 — sem cases, portfólio, depoimentos ou links para apps publicados |
| Expertise | 45 — sócio técnico nomeado, mas sem credenciais/stack/LinkedIn |
| Authoritativeness | 20 — zero presença externa, sem blog/conteúdo técnico |
| Trustworthiness | 65 — **ponto forte**: CNPJ, NIRE, endereço, sócios, política LGPD |

- `/pt/about` (~300 palavras) e `/en/about` (~270) são thin content — principal ativo E-E-A-T subaproveitado (alvo: 800+).
- Afirmação "apps publicados nas lojas Apple e Google" sem links = alegação não verificável.
- Sem FAQ, sem blog, sem página de serviços indexável (só âncora `#solutions`).
- "Software desde 2026" precisa de contexto para não parecer erro.

## 3. On-Page SEO (30/100)

- Titles/descriptions duplicados (ver Técnico #2).
- H1 presente na home; subpáginas precisam de H1 único e descritivo verificado.
- Headings nominais; nenhum em formato de pergunta (perde correspondência conversacional).
- Comparativo "Prateleira vs. Sob Medida" em divs — converter para HTML semântico (tabela/lista) melhora extração.

## 4. Schema / Structured Data (0/100)

Nada implementado. Recomendado (blocos JSON-LD prontos gerados pelo agente, com dados reais):
- `Organization` (@id global; CNPJ via `identifier` PropertyValue; endereço Recife; contato; founders) + `WebSite` no `layout.tsx`.
- `BreadcrumbList` em about/impressum (PT/EN).
- `WebPage` com `mainEntity` → Organization no impressum.
- **Não** usar LocalBusiness (sem atendimento presencial) nem ProfessionalService; FAQPage só quando existir FAQ.
- Pendência: criar `public/seo/logo.png` (≥112×112) antes de adicionar `logo`.
- Implementação: `src/lib/schema.ts` + `<script type="application/ld+json" dangerouslySetInnerHTML>`.

## 5. Performance (80/100)

- TTFB 186–208 ms, edge cache HIT, HTML 9,3 KB br, JS ~172 KB (10 chunks async), 3 fontes woff2 preloaded, 0 `<img>`, DOM ~476 elementos. Estrutura excelente.
- **Alto:** cache de 1 h em assets imutáveis (fix no `firebase.json`).
- **Alto:** H1 do hero tem `frc-rise-2` (`opacity:0` + delay 0.18 s + 0.7 s) — infla LCP reportado (~880 ms de render delay artificial). Isentar o H1 da animação ou reduzir para ≤50 ms delay / ≤300 ms duração.
- CLS/INP: risco baixo. Sem dados de campo (CrUX sem tráfego ainda).

## 6. AI Search Readiness / GEO (34/100)

- SSR completo nas páginas internas (bom), mas raiz vazia derruba tudo (ver Crítico #1).
- `llms.txt` 404 — conteúdo pronto gerado pelo agente GEO (resumo da empresa, páginas PT/EN, dados CNPJ/CNAEs).
- robots.txt recomendado dá boas-vindas a GPTBot/OAI-SearchBot/ClaudeBot/PerplexityBot; opcionalmente bloqueia CCBot/treinamento.
- Parágrafos de 9–30 palavras — abaixo do ideal de citação (134–167). Adicionar bloco-resposta autocontido sob o H1 de cada página.
- Presença externa: nula (Wikipedia/Reddit/YouTube/LinkedIn) — normal para empresa nova; médio prazo.

## 7. Images (85/100)

- Zero imagens raster; hero e ícones são SVG inline (ótimo para performance).
- Faltam: OG image (compartilhamento), logo para schema, favicon multi-tamanho/manifest.

---

Relatórios completos dos 5 agentes especialistas (técnico, conteúdo, schema, GEO, performance) disponíveis na sessão; artefatos prontos: JSON-LD PT/EN, `robots.txt`, `llms.txt`, snippets de `metadata`/`sitemap.ts`/`firebase.json`.
