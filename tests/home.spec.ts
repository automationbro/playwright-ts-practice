import { test, expect } from '@playwright/test';

test.describe('Home', () => {
  test('Open HomePage and verify title', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/')
    await expect(page, "Title didn't match").toHaveTitle("Practice E-Commerce Site – Automation Bro")
  });

  test('Click get started btn using CSS Selector', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/')
    await page.locator('#get-started').click()
    await expect(page).toHaveURL(/.*get-started/);
  });

  test('Verify heading text is visible using text selector', async ({ page }) => {
    await page.goto('https://practice.automationbro.com');
    const textLocator = page
      .locator('text=Think different. Make different.')
    await expect(textLocator).toBeVisible();
  });

  test('Verify home link is enabled using text and css selector', async ({ page }) => {
    await page.goto('https://practice.automationbro.com');
    const textCssLocator = page
      // .locator('#primary-menu >> text=Home')
      .locator('#primary-menu:has-text("Home")')

    await expect(textCssLocator).not.toBeHidden();
    await expect(textCssLocator).toBeVisible();
  });

  test('Verify search icon is enabled using text and css selector', async ({ page }) => {
    await page.goto('https://practice.automationbro.com');
    const xpathLocator = page
      .locator('//*[@id="primary-menu"]//*[@class="tg-icon tg-icon-search"]')
    await expect(xpathLocator).toBeVisible();
  });

  test('Verify text of all nav links', async ({ page }) => {
    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];
    await page.goto('https://practice.automationbro.com');
    const navLinks = page
      // .locator('#primary-menu li[id*=menu]')
      // .locator('#primary-menu li[id*=menu]').first()
      .locator('#primary-menu li[id*=menu]').nth(2)
    // expect(await navLinks.allInnerTexts()).toEqual(expectedLinks);
    expect(await navLinks.textContent()).toEqual(expectedLinks[2]);
  });
});