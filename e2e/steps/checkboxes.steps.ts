import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('I check the first checkbox', async function () {
  const box = this.page.locator('form#checkboxes input[type="checkbox"]').first();
  if (!(await box.isChecked())) await box.check();
});

Then('it should be checked', async function () {
  await expect(this.page.locator('form#checkboxes input[type="checkbox"]').first()).toBeChecked();
});
