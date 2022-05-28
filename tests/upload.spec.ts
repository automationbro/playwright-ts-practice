import { test, expect } from '@playwright/test';
const path = require('path');

test.describe('Upload', () => {
  test('Upload file', async ({ page }) => {
    // Open url
    await page.goto("https://practice.automationbro.com/cart/");

    // store test file path
    const filePath = path.join(__dirname, '../data/3mb-file.pdf');

    // upload test file
    await page.setInputFiles('input#upfile_1', filePath);

    // click the submit button
    await page.locator('#upload_1').click();

    // wait 5 sec
    // await page.waitForTimeout(5000)

    // wait for element
    // await page.locator('#wfu_messageblock_header_1_label_1').waitFor({ state: 'visible', timeout: 10000 })

    // assertion
    await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully', { timeout: 10000 });
  })

  test('Upload file on a hidden input', async ({ page }) => {
    // Open url
    await page.goto("https://practice.automationbro.com/cart/");

    // store test file path
    const filePath = path.join(__dirname, '../data/logotitle.png');

    // upload test file
    await page.evaluate(selector => document.querySelector(selector).className = '', 'input#upfile_1');
    await page.setInputFiles('input#upfile_1', filePath);

    // click the submit button
    await page.locator('#upload_1').click();

    // assertion
    await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');
  })
});