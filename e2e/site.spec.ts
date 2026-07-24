import { expect, test } from "@playwright/test"

const localizedRoutes = [
  { locale: "pt", path: "/pt", heading: "Software Sob Medida para o Seu Negócio" },
  { locale: "en", path: "/en", heading: "Custom Software for Your Business" },
  { locale: "pt", path: "/pt/about", heading: "Sobre a FRC Consultores" },
  { locale: "en", path: "/en/about", heading: "About FRC Consultores" },
  { locale: "pt", path: "/pt/services", heading: "Do problema ao software em produção." },
  { locale: "en", path: "/en/services", heading: "From the problem to production software." },
  { locale: "pt", path: "/pt/cases", heading: "Software real, disponível para conhecer." },
  { locale: "en", path: "/en/cases", heading: "Real software, available to explore." },
  { locale: "pt", path: "/pt/impressum", heading: "Dados Legais" },
  { locale: "en", path: "/en/impressum", heading: "Legal Notice" },
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
  await page.goto("/pt/cases")
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: "English" })
    .click()

  await expect(page).toHaveURL(/\/en\/cases$/)
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Real software, available to explore.",
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
