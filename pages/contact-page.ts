import { Locator, Page } from "@playwright/test";

class ContactPage {
  page: Page;
  nameInput: string;
  emailInput: string;
  phoneInput: string;
  messageTxtArea: string;
  submitBtn: Locator;
  successTxt: Locator;

  constructor(page: Page) {
    this.page = page
    this.nameInput = '.contact-name input'
    this.emailInput = '.contact-email input'
    this.phoneInput = '.contact-phone input'
    this.messageTxtArea = '.contact-message textarea'
    this.submitBtn = page.locator('button[type=submit]')
    this.successTxt = page.locator(`[role='alert']`)
  }

  async navigate() {
    await this.page.goto("https://practice.automationbro.com/contact/");
  }

  async submitForm(name, email, phone, message) {
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.phoneInput, phone);
    await this.page.fill(this.messageTxtArea, message);
    await this.submitBtn.click();
  }
}

export default ContactPage;