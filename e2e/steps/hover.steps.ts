import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('I hover over profile {int}', async function (num) {
  await this.page.hover(`.figure:nth-of-type(${num})`);
});

Then('I should see "name: user{int}"', async function (userNum: number) {
  const nameText = `name: user${userNum}`;
  const selector = `.figure:nth-of-type(${userNum}) .figcaption h5`;
  await expect(this.page.locator(selector)).toHaveText(nameText);
});
