import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test('Get the list of all Recent Posts & assert the length of each list item > 1 & assert the total count = 4', async ({ page }) => {
    await page.goto("https://practice.automationbro.com/blog/");

    // Get the Recent Post List Elements
    const recentPostsList = await page.locator('#recent-posts-3 ul li');

    // Loop through the list and assert the text length is greater than 10
    for (const el of await recentPostsList.elementHandles()) {
      expect((await el.textContent()).length).toBeGreaterThan(10)
    }

    // Assert the total length of the list is 4
    expect(await recentPostsList.count()).toEqual(5);
  })
});