import { expect, test } from "@playwright/test"

const localizedRoutes = [
  { locale: "pt", path: "/pt", heading: "Software Sob Medida para o Seu Negócio" },
  { locale: "en", path: "/en", heading: "Custom Software for Your Business" },
  { locale: "pt", path: "/pt/about", heading: "Sobre a FRC" },
  { locale: "en", path: "/en/about", heading: "About FRC" },
  { locale: "pt", path: "/pt/services", heading: "Do problema ao software em produção." },
  { locale: "en", path: "/en/services", heading: "From the problem to production software." },
  { locale: "pt", path: "/pt/apps", heading: "Um caminho claro para colocar seu app nas lojas." },
  { locale: "en", path: "/en/apps", heading: "A clear path to getting your app into the stores." },
  { locale: "pt", path: "/pt/cases", heading: "Software real, disponível para conhecer." },
  { locale: "en", path: "/en/cases", heading: "Real software, available to explore." },
  { locale: "pt", path: "/pt/impressum", heading: "Dados Legais" },
  { locale: "en", path: "/en/impressum", heading: "Legal Notice" },
  { locale: "pt", path: "/pt/privacy", heading: "Política de Privacidade" },
  { locale: "en", path: "/en/privacy", heading: "Privacy Policy" },
] as const

test("root redirects permanently to the Portuguese homepage", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveURL(/\/pt$/)
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Software Sob Medida para o Seu Negócio",
    })
  ).toBeVisible()
})

for (const route of localizedRoutes) {
  test(`${route.path} renders localized semantic content`, async ({ page }) => {
    await page.goto(route.path)

    await expect(page.locator("html")).toHaveAttribute(
      "lang",
      route.locale === "pt" ? "pt-BR" : "en"
    )
    await expect(
      page.getByRole("heading", { level: 1, name: route.heading })
    ).toBeVisible()
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      new RegExp(`/${route.locale}/opengraph-image$`)
    )
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`/${route.locale}(?:/[^"]*)?$`)
    )
  })
}

test("subpage navigation reaches the services page", async ({ page }) => {
  await page.goto("/pt/about")
  await page
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Serviços" })
    .click()

  await expect(page).toHaveURL(/\/pt\/services$/)
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Do problema ao software em produção.",
    })
  ).toBeVisible()
})

test("apps navigation reaches the localized product catalog", async ({ page }) => {
  await page.goto("/pt/services")
  await page
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Apps" })
    .click()

  await expect(page).toHaveURL(/\/pt\/apps$/)
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Um caminho claro para colocar seu app nas lojas.",
    })
  ).toBeVisible()
})

test("app catalog exposes prices, external costs and structured offers", async ({
  page,
}) => {
  await page.goto("/pt/apps")

  for (const product of [
    ["Diagnóstico e Protótipo", "R$ 4.900"],
    ["MVP iOS + Android", "R$ 24.900"],
    ["App para Negócios", "R$ 49.900"],
    ["Publicação nas Lojas", "R$ 3.900"],
    ["Resgate e Modernização", "R$ 14.900"],
    ["Evolução Contínua", "R$ 2.490"],
  ]) {
    const card = page.getByRole("article").filter({ hasText: product[0] })
    await expect(card).toContainText(product[1])
  }

  await expect(page.getByText("Apple Developer: US$ 99 por ano")).toBeVisible()
  await expect(
    page.getByText("Google Play Console: US$ 25, pagamento único")
  ).toBeVisible()

  const schemas = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents()
  const catalog = schemas
    .map((schema) => JSON.parse(schema) as { "@type"?: string; itemListElement?: unknown[] })
    .find((schema) => schema["@type"] === "OfferCatalog")

  expect(catalog?.itemListElement).toHaveLength(6)
})

test("Entrela case links the FRC entity, product and localized legal documents", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 700 })

  const locales = [
    {
      path: "/pt/cases",
      ownership:
        "O Entrela é um produto digital desenvolvido e operado pela FRC Consultores Associados LTDA.",
      visitLabel: "Visitar projeto",
      privacyLabel: "Privacidade do Entrela",
      privacyUrl: "https://ladoalado.app/privacidade",
      termsLabel: "Termos de uso do Entrela",
      termsUrl: "https://ladoalado.app/termos",
    },
    {
      path: "/en/cases",
      ownership:
        "Entrela is a digital product developed and operated by FRC Consultores Associados LTDA.",
      visitLabel: "Visit project",
      privacyLabel: "Entrela Privacy Policy",
      privacyUrl: "https://ladoalado.app/en/privacy",
      termsLabel: "Entrela Terms of Use",
      termsUrl: "https://ladoalado.app/en/terms",
    },
  ] as const

  for (const locale of locales) {
    await page.goto(locale.path)

    const entrela = page.getByRole("article").filter({ hasText: "Entrela" })
    await expect(entrela).toContainText(locale.ownership)
    await expect(
      entrela.getByRole("link", { name: new RegExp(locale.visitLabel) })
    ).toHaveAttribute("href", "https://ladoalado.app/")
    await expect(
      entrela.getByRole("link", { name: locale.privacyLabel })
    ).toHaveAttribute("href", locale.privacyUrl)
    await expect(
      entrela.getByRole("link", { name: locale.termsLabel })
    ).toHaveAttribute("href", locale.termsUrl)

    const schemas = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents()
    const nodes = schemas.flatMap((schema) => {
      const document = JSON.parse(schema) as {
        "@graph"?: Record<string, unknown>[]
      }
      return document["@graph"] ?? []
    })
    const organization = nodes.find((node) => node["@type"] === "Organization")
    const brand = nodes.find((node) => node["@type"] === "Brand")
    const application = nodes.find(
      (node) => node["@type"] === "SoftwareApplication"
    )

    expect(organization).toMatchObject({
      "@id": "https://frcconsultores.com.br/#organization",
      legalName: "FRC Consultores Associados LTDA",
      brand: { "@id": "https://ladoalado.app/#brand" },
    })
    expect(brand).toMatchObject({
      "@id": "https://ladoalado.app/#brand",
      name: "Entrela",
    })
    expect(application).toMatchObject({
      "@id": "https://ladoalado.app/#softwareapplication",
      url: "https://ladoalado.app/",
      operatingSystem: ["Web", "iOS", "Android"],
      creator: { "@id": "https://frcconsultores.com.br/#organization" },
      publisher: { "@id": "https://frcconsultores.com.br/#organization" },
    })

    const width = await page.evaluate(() => ({
      document: document.documentElement.scrollWidth,
      viewport: document.documentElement.clientWidth,
    }))
    expect(width.document).toBe(width.viewport)
  }
})

test("FRC privacy policy separates local apps from Entrela backend processing", async ({
  page,
}) => {
  const locales = [
    {
      path: "/pt/privacy",
      heading: "4. Entrela — política própria",
      scope: "O Entrela possui escopo e política próprios",
      controllerScope:
        "Para os tratamentos realizados no site frcconsultores.com.br e nos aplicativos móveis locais da marca FRC Software",
      disclosureScope:
        "Os compartilhamentos do Entrela estão descritos em sua política própria.",
      privacyLabel: "Política de Privacidade do Entrela",
      privacyUrl: "https://ladoalado.app/privacidade",
      termsLabel: "Termos de Uso do Entrela",
      termsUrl: "https://ladoalado.app/termos",
    },
    {
      path: "/en/privacy",
      heading: "4. Entrela — separate policy",
      scope: "Entrela has a distinct scope and its own policy",
      controllerScope:
        "For processing carried out on frcconsultores.com.br and in the local mobile apps under the FRC Software brand",
      disclosureScope:
        "Entrela disclosures are described in its own policy.",
      privacyLabel: "Entrela Privacy Policy",
      privacyUrl: "https://ladoalado.app/en/privacy",
      termsLabel: "Entrela Terms of Use",
      termsUrl: "https://ladoalado.app/en/terms",
    },
  ] as const

  for (const locale of locales) {
    await page.goto(locale.path)

    const main = page.getByRole("main")
    await expect(main.getByRole("heading", { name: locale.heading })).toBeVisible()
    await expect(main).toContainText(locale.scope)
    await expect(main).toContainText(locale.controllerScope)
    await expect(main).toContainText(locale.disclosureScope)
    await expect(main.getByRole("link", { name: locale.privacyLabel })).toHaveAttribute(
      "href",
      locale.privacyUrl
    )
    await expect(main.getByRole("link", { name: locale.termsLabel })).toHaveAttribute(
      "href",
      locale.termsUrl
    )
  }
})

test("product CTA preselects the requested package", async ({ page }) => {
  await page.goto("/pt/apps")
  const card = page
    .getByRole("article")
    .filter({ hasText: "MVP iOS + Android" })

  await card.getByRole("button", { name: "Solicitar diagnóstico" }).click()

  const dialog = page.getByRole("dialog")
  await expect(dialog).toBeVisible()
  await expect(dialog.getByLabel("Mensagem")).toHaveValue(
    "Tenho interesse no pacote MVP iOS + Android, a partir de R$ 24.900."
  )
  await page.keyboard.press("Escape")
  await expect(dialog).toBeHidden()
  await expect(
    card.getByRole("button", { name: "Solicitar diagnóstico" })
  ).toBeFocused()
})

test("apps page fits a narrow mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 })
  await page.goto("/pt/apps")

  const width = await page.evaluate(() => ({
    document: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }))
  expect(width.document).toBe(width.viewport)
  await expect(page.getByRole("heading", { name: "Diagnóstico e Protótipo" })).toBeVisible()
})

test("contact modal opens, traps intent, and restores focus", async ({ page }) => {
  await page.goto("/en")
  const trigger = page.getByRole("button", { name: "Contact" }).first()

  await trigger.focus()
  await trigger.click()
  await expect(page.getByRole("dialog")).toBeVisible()
  await expect(
    page.getByRole("heading", { name: "Let's Talk" })
  ).toBeVisible()

  await page.keyboard.press("Escape")
  await expect(page.getByRole("dialog")).toBeHidden()
  await expect(trigger).toBeFocused()
})

test("mobile menu exposes localized navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/en/about")
  await page.getByRole("button", { name: "Open navigation menu" }).click()

  const navigation = page.getByRole("navigation", { name: "Main navigation" })
  await expect(
    navigation.getByRole("link", { name: "Services" })
  ).toHaveAttribute("href", "/en/services")
  await expect(
    navigation.getByRole("link", { name: "Case Studies" })
  ).toHaveAttribute("href", "/en/cases")
  await expect(
    page.getByRole("button", { name: "Close navigation menu" })
  ).toBeVisible()

  await navigation.getByRole("button", { name: "Contact" }).click()
  await expect(navigation).toBeHidden()
  await expect(page.getByRole("dialog")).toBeVisible()
})

test("language switch preserves the current subpage", async ({ page }) => {
  await page.goto("/pt/apps")
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: "English" })
    .click()

  await expect(page).toHaveURL(/\/en\/apps$/)
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "A clear path to getting your app into the stores.",
    })
  ).toBeVisible()
})

test("localized social images are generated as PNG", async ({ request }) => {
  for (const locale of ["pt", "en"]) {
    const response = await request.get(`/${locale}/opengraph-image`)
    expect(response.ok()).toBeTruthy()
    expect(response.headers()["content-type"]).toContain("image/png")
    expect((await response.body()).byteLength).toBeGreaterThan(40_000)
  }
})
