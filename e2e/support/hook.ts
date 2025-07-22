import { Before, After } from '@cucumber/cucumber';
import { chromium, firefox, webkit } from '@playwright/test';

Before(async function () {
    const browserName = process.env.BROWSER || 'chromium';
    const browserType = { chromium, firefox, webkit }[browserName];
    if (!browserType) throw new Error(`Unknown browser: ${browserName}`);

    this.browser = await browserType.launch();
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function () {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});
