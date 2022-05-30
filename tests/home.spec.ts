const { test } = require('../fixtures');
import { expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
  })

  test('Open HomePage and verify title @smoke', async ({ page }) => {
    await homePage.navigate()
    await expect(page, "Title didn't match").toHaveTitle("Practice E-Commerce Site – Automation Bro")
  });

  test('Click get started btn using CSS Selector @regression', async ({ page }) => {
    await homePage.navigate()
    await homePage.getStartedBtn.click()
    await expect(page).toHaveURL(/.*get-started/);
  });

  test('Verify heading text is visible using text selector @smoke', async ({ page }) => {
    await homePage.navigate()
    await expect(homePage.headingText).toBeVisible()
  });

  test('Verify home link is enabled using text and css selector', async ({ page }) => {
    await homePage.navigate()
    await expect(homePage.homeLink).not.toBeHidden();
    await expect(homePage.homeLink).toBeVisible();
  });

  test('Verify search icon is enabled using text and css selector', async ({ page }) => {
    await homePage.navigate()
    await expect(homePage.searchIcon).toBeVisible();
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
    await homePage.navigate()
    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
  });
});