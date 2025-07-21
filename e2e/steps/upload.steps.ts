import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Before(async function () {
  await this.launchBrowser();
});

After(async function () {
  await this.closeBrowser();
});

Given('I navigate to {string}', async function (path) {
  await this.page.goto(`https://the-internet.herokuapp.com${path}`);
  await expect(this.page.getByRole('button', { name: 'Upload' })).toBeVisible();
});

When('I upload {string}', async function (fileName: string) {
  await this.page.setInputFiles('#file-upload', `e2e/test-data/${fileName}`);
  await this.page.click('input[type="submit"]');
});

Then('I should see {string}', async function (text) {
  await expect(this.page.locator('#content > div > h3')).toHaveText(text);
});
