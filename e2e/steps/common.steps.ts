import { Given } from '@cucumber/cucumber';

Given('I navigate to {string}', async function (path) {
    await this.page.goto(`https://the-internet.herokuapp.com${path}`);
});
