import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('I click the link to open new window', async function () {
  const [newPage] = await Promise.all([
    this.context.waitForEvent('page'),
    this.page.click('a[href="/windows/new"]'),
  ]);
  await newPage.waitForLoadState();
  this.page = newPage;
});

Then('I switch and see {string}', async function (title: string) {
  await expect(this.page.locator('h3')).toHaveText(title);
});
