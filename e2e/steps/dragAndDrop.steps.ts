import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';


When('I drag box A onto box B', async function () {
  await this.page.locator('#column-a').dragTo(this.page.locator('#column-b'));
});

Then('their positions should have swapped', async function () {
  await expect(this.page.locator('#column-a header')).toHaveText('B');
  await expect(this.page.locator('#column-b header')).toHaveText('A');
});
