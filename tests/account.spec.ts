import { test, expect, Page } from '@playwright/test';

// test.describe.configure({ mode: 'serial' })
test.describe.serial('My Account', () => {
  // let page: Page
  // test.beforeAll(async ({ browser }) => {
  //   page = await browser.newPage()
  //   await page.goto('/my-account')
  //   await page.locator('#username').fill('testuser1')
  //   await page.locator('#password').fill('PracticeTest!!@')
  //   await page.locator('[value="Log in"]').click()
  //   await expect(page.locator('a:has-text("Logout")'))
  //     .toBeVisible()
  // })
  // test.beforeEach(async ({ page }) => {
  //   await page.goto('/my-account')
  //   await page.locator('#username').fill('testuser1')
  //   await page.locator('#password').fill('PracticeTest!!@')
  //   await page.locator('[value="Log in"]').click()
  //   await expect(page.locator('a:has-text("Logout")'))
  //     .toBeVisible()
  // })

  // test('Login', async ({ page }) => {
  //   // testuser1 - PracticeTest!!@
  //   await page.goto('/my-account')
  //   await page.locator('#username').fill('testuser1')
  //   await page.locator('#password').fill('PracticeTest!!@')
  //   await page.locator('[value="Log in"]').click()
  //   await expect(page.locator('a:has-text("Logout")'))
  //     .toBeVisible()
  // })

  test('Access Orders', async ({ page }) => {
    await page.goto('/my-account')
    await page.locator(`li a[href*='orders']`).click()
    await expect(page).toHaveURL(/.*orders/)
  });

  test('Access Downloads', async ({ page }) => {
    await page.goto('/my-account')
    await page.locator(`li a[href*='downloads']`).click()
    await expect(page).toHaveURL(/.*downloads/)
  });
});

test.describe('Account Page', () => {
  test.use({ storageState: 'notsignedin.json' })

  test('Verify login and register is visible', async ({ page }) => {
    await page.goto('/my-account')
    await expect(page.locator('form[class*="login"]')).toBeVisible()
    await expect(page.locator('form[class*="register"]')).toBeVisible()
  });
})