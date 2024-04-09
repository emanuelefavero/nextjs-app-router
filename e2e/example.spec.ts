import { test, expect } from '@playwright/test'

test('should navigate to the hello page', async ({ page }) => {
  await page.goto('http://localhost:3000/playwright-e2e-testing')
  await page.click('text=Hello')
  await expect(page).toHaveURL(
    'http://localhost:3000/playwright-e2e-testing/hello'
  )
  await expect(page.locator('h1')).toContainText('Hello')
})
