import { test, expect } from '@playwright/test';

test.describe('Contact', () => {
  test('Fill contact form and verify success message', async ({ page }) => {
    await page.goto("https://practice.automationbro.com/contact/");

    // Fill out the input fields & click submit
    await page.fill('.contact-name input', 'Test Name');
    await page.fill('.contact-email input', 'test@mail.com');
    await page.fill('.contact-phone input', '123456789');
    await page.fill('.contact-message textarea', 'This is a test message');

    await expect.soft(page.locator('.contact-message textarea')).toHaveText('This is a test message fail')

    await page.locator('button[type=submit]').click();

    // Assert the success message
    const successAlert = page.locator("[role='alert']");
    await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
  })
});