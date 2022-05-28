import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact-page';

test.describe('Contact', () => {
  let contactPage: ContactPage
  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page)
  })

  test('Fill contact form and verify success message', async ({ page }) => {
    await contactPage.navigate()

    // Fill out the input fields & click submit
    contactPage.submitForm('Test Name', 'test@mail.com', '123456789', 'This is a test message')

    // Assert the success message
    await expect(contactPage.successTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
  })
});