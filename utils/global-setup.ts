import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://practice.automationbro.com/my-account');

  await page.context().storageState({ path: 'notsignedin.json' });

  const page2 = await browser.newPage();
  await page2.goto('https://practice.automationbro.com/my-account');
  await page2.locator('#username').fill('testuser1')
  await page2.locator('#password').fill('PracticeTest!!@')
  await page2.locator('[value="Log in"]').click()

  // Save signed-in state to 'storageState.json'.
  await page2.context().storageState({ path: 'loggedInState.json' });
  await browser.close();
}

export default globalSetup;