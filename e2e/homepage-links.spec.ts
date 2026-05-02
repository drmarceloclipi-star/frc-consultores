import { test, expect } from '@playwright/test'

test.describe('Homepage Links and Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Logo should navigate to home', async ({ page }) => {
    await page.click('a[href="/en"]')
    await expect(page).toHaveURL('/')
    await expect(page.locator('text=Put AI Agents')).toBeVisible()
  })

  test('Why Now link should scroll to top', async ({ page }) => {
    await page.goto('/#case-studies')
    const scrollPosBefore = await page.evaluate(() => window.scrollY)
    await page.click('a:has-text("Why Now")')
    await page.waitForTimeout(500)
    const scrollPosAfter = await page.evaluate(() => window.scrollY)
    expect(scrollPosAfter).toBeLessThan(scrollPosBefore)
  })

  test('Solutions link should navigate to case-studies section', async ({ page }) => {
    await page.click('text=Solutions')
    await expect(page).toHaveURL(/#case-studies/)
    await expect(page.locator('text=Real Implementations')).toBeVisible()
  })

  test('Academy link should navigate to academy page', async ({ page }) => {
    await page.click('a[href="/en/academy"]')
    await expect(page).toHaveURL(/\/en\/academy/)
    await expect(page.locator('text=Tavon Academy')).toBeVisible()
  })

  test('About Us link should navigate to about page', async ({ page }) => {
    await page.click('a[href="/en/about"]')
    await expect(page).toHaveURL(/\/en\/about/)
    await expect(page.locator('text=Agent Whisperers')).toBeVisible()
  })

  test('Blog link should navigate to blog page', async ({ page }) => {
    await page.click('a[href="/en/blog"]')
    await expect(page).toHaveURL(/\/en\/blog/)
    await expect(page.locator('h1:has-text("Blog")')).toBeVisible()
  })

  test('Contact button should navigate to contact page', async ({ page }) => {
    await page.click('a[href="/contact"]')
    await expect(page).toHaveURL(/\/contact/)
    await expect(page.locator('text=Get in Touch')).toBeVisible()
  })

  test('See What\'s Different CTA should navigate to comparison section', async ({ page }) => {
    await page.click('text=See What\'s Different')
    await expect(page).toHaveURL(/#comparison/)
    await expect(page.locator('text=Not Your Average')).toBeVisible()
  })

  test('View Real Examples CTA should navigate to case-studies section', async ({ page }) => {
    await page.click('text=View Real Examples')
    await expect(page).toHaveURL(/#case-studies/)
    await expect(page.locator('text=Real Implementations')).toBeVisible()
  })

  test('CRM Automation tab should display correct content', async ({ page }) => {
    await page.goto('/#case-studies')
    const tab = page.locator('button[role="tab"]:has-text("CRM Automation")')
    await tab.click()
    await expect(page.locator('text=SALES & MARKETING')).toBeVisible()
    await expect(page.locator('text=CRM Automation').first()).toBeVisible()
    await expect(page.locator('text=The Challenge')).toBeVisible()
  })

  test('Quote Automation tab should display correct content', async ({ page }) => {
    await page.goto('/#case-studies')
    const tab = page.locator('button[role="tab"]:has-text("Quote Automation")')
    await tab.click()
    await expect(page.locator('text=SALES OPERATIONS')).toBeVisible()
    await expect(page.locator('text=Quote Automation').first()).toBeVisible()
    await expect(page.locator('text=The Challenge')).toBeVisible()
  })

  test('Order Processing & Quality Control tab should display correct content', async ({ page }) => {
    await page.goto('/#case-studies')
    const tab = page.locator('button[role="tab"]:has-text("Order Processing & Quality Control")')
    await tab.click()
    await expect(page.locator('text=OPERATIONS & MANUFACTURING')).toBeVisible()
    await expect(page.locator('text=Order Processing & Quality Control').first()).toBeVisible()
    await expect(page.locator('text=The Challenge')).toBeVisible()
  })

  test('AI Planning Assistant tab should display correct content', async ({ page }) => {
    await page.goto('/#case-studies')
    const tab = page.locator('button[role="tab"]:has-text("AI Planning Assistant")')
    await tab.click()
    await expect(page.locator('text=PROJECT & RESOURCE MANAGEMENT')).toBeVisible()
    await expect(page.locator('text=AI Planning Assistant').first()).toBeVisible()
    await expect(page.locator('text=The Challenge')).toBeVisible()
  })

  test('All case study sections should have Results content', async ({ page }) => {
    await page.goto('/#case-studies')

    const tabs = ['CRM Automation', 'Quote Automation', 'Order Processing & Quality Control', 'AI Planning Assistant']

    for (const tabName of tabs) {
      const tab = page.locator(`button[role="tab"]:has-text("${tabName}")`)
      await tab.click()
      await expect(page.locator('text=Results & Impact')).toBeVisible()
      await expect(page.locator('text=Team:')).toBeVisible()
    }
  })

  test('Academy page should have webinar section with FREE badge', async ({ page }) => {
    await page.goto('/en/academy')
    await expect(page.locator('span:has-text("FREE")')).toBeVisible()
    await expect(page.locator('text=Introducing Claude Cowork')).toBeVisible()
  })

  test('About page should display team member cards', async ({ page }) => {
    await page.goto('/en/about')
    await expect(page.locator('text=Matthias Lübken')).toBeVisible()
    await expect(page.locator('text=Ivan Pedrazas')).toBeVisible()
    await expect(page.locator('text=Dr. Anna Maria Gajda')).toBeVisible()
    await expect(page.locator('text=Advisory')).toBeVisible()
  })

  test('Blog page should display featured article', async ({ page }) => {
    await page.goto('/en/blog')
    await expect(page.locator('h1:has-text("Blog")')).toBeVisible()
    await expect(page.locator('text=The App-Store Moment of AI')).toBeVisible()
    await expect(page.locator('text=Matthias Lübken')).toBeVisible()
  })

  test('Contact page should display contact heading', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('text=Get in Touch')).toBeVisible()
    await expect(page.locator('text=business operations with AI agents')).toBeVisible()
  })

  test('All pages should have functional header with logo', async ({ page }) => {
    const pages = ['/', '/en/academy', '/en/about', '/en/blog', '/contact']

    for (const route of pages) {
      await page.goto(route)
      await expect(page.locator('a[href="/en"]:has-text("TAVON.ai")')).toBeVisible()
    }
  })

  test('Hero section should be visible on homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Put AI Agents')).toBeVisible()
    await expect(page.locator('text=The next generation of AI agents is here')).toBeVisible()
  })

  test('Features section should display all feature cards on homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=We Speak')).toBeVisible()
    await expect(page.locator('span:has-text("Agentic AI")')).toBeVisible()
    await page.locator('main').scrollIntoViewIfNeeded()

    const featureLinks = await page.locator('a[href*="/blog/"]').all()
    expect(featureLinks.length).toBeGreaterThan(0)
  })

  test('Comparison section should display Old vs New Generation', async ({ page }) => {
    await page.goto('/#comparison')
    await expect(page.locator('text=Not Your Average')).toBeVisible()
    await expect(page.locator('h3:has-text("Old Generation")').first()).toBeVisible()
    await expect(page.locator('h3:has-text("New Generation")').first()).toBeVisible()
  })

  test('Case studies section should display all tabs', async ({ page }) => {
    await page.goto('/#case-studies')
    await expect(page.locator('button[role="tab"]:has-text("CRM Automation")')).toBeVisible()
    await expect(page.locator('button[role="tab"]:has-text("Quote Automation")')).toBeVisible()
    await expect(page.locator('button[role="tab"]:has-text("Order Processing & Quality Control")')).toBeVisible()
    await expect(page.locator('button[role="tab"]:has-text("AI Planning Assistant")')).toBeVisible()
  })
})
