import { setWorldConstructor, World as CucumberWorld } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

class World extends CucumberWorld {
    browser!: Browser;
    page!: Page;

    async launchBrowser() {
        this.browser = await chromium.launch({ headless: true });
        this.page = await this.browser.newPage();
    }

    async closeBrowser() {
        await this.page.close();
        await this.browser.close();
    }
}

setWorldConstructor(World);
