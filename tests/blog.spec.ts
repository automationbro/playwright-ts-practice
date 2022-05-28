import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page';

test.describe('Blog', () => {
  let blogPage: BlogPage

  test.beforeEach(async ({ page }) => {
    blogPage = new BlogPage(page)
  })

  test('Get the list of all Recent Posts & assert the length of each list item > 1 & assert the total count = 5', async ({ page }) => {
    await blogPage.navigate()

    // Loop through the list and assert the text length is greater than 10
    for (const el of await blogPage.recentPostsList.elementHandles()) {
      expect((await el.textContent()).length).toBeGreaterThan(10)
    }

    // Assert the total length of the list is 5
    expect(await blogPage.recentPostsList.count()).toEqual(5);
  })
});