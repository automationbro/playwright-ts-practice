import { Locator, Page } from "@playwright/test";

class HomePage {
  getStartedBtn: Locator;
  page: Page;
  headingText: Locator;
  homeLink: Locator;
  searchIcon: Locator;
  navLinks: Locator;

  constructor(page: Page) {
    this.page = page
    this.getStartedBtn = page.locator('#get-started')
    this.headingText = page
      .locator('text=Think different. Make different.')
    this.homeLink = page
      .locator('#primary-menu:has-text("Home")')
    this.searchIcon = page
      .locator('//*[@id="primary-menu"]//*[@class="tg-icon tg-icon-search"]')
    this.navLinks = page
      .locator('#primary-menu li[id*=menu]')
  }

  async navigate() {
    await this.page.goto('https://practice.automationbro.com/')
  }

  getNavLinksText() {
    return this.navLinks.allInnerTexts()
  }
}

export default HomePage;