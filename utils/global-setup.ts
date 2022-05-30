import { chromium, FullConfig } from '@playwright/test';
const { bsLocal, BS_LOCAL_ARGS } = require('../fixtures')
const { promisify } = require('util');
const sleep = promisify(setTimeout);
const redColour = '\x1b[31m';
const whiteColour = '\x1b[0m';

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

  console.log('Starting BrowserStackLocal ...');
  // Starts the Local instance with the required arguments
  let localResponseReceived = false;
  bsLocal.start(BS_LOCAL_ARGS, (err) => {
    if (err) {
      console.error(
        `${redColour}Error starting BrowserStackLocal${whiteColour}`
      );
    } else {
      console.log('BrowserStackLocal Started');
    }
    localResponseReceived = true;
  });
  while (!localResponseReceived) {
    await sleep(1000);
  }
}

export default globalSetup;

