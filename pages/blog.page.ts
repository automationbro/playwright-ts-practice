import { Locator, Page } from "@playwright/test";

class BlogPage {
  recentPostsList: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page
    this.recentPostsList = page.locator('#recent-posts-3 ul li')
  }

  async navigate() {
    await this.page.goto("https://practice.automationbro.com/blog/");
  }
}

export default BlogPage;