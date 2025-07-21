import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('I upload {string}', async function (fileName: string) {
  await this.page.setInputFiles('#file-upload', `e2e/test-data/${fileName}`);
  await this.page.click('input[type="submit"]');
});

Then('I should see upload message {string}', async function (msg: string) {
  await expect(this.page.locator('#content > div > h3')).toHaveText(msg);
});
