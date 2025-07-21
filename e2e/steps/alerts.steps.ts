import { When, Then } from '@cucumber/cucumber';
import { expect, type Dialog } from '@playwright/test';

let lastDialogMessage: string = '';

When('I accept the JS alert', async function () {
    this.page.once('dialog', (dialog: Dialog) => {
        lastDialogMessage = dialog.message();
        dialog.accept();
    });
    await this.page.click('button[onclick="jsAlert()"]');
});

When('I accept the JS confirm', async function () {
    this.page.once('dialog', (dialog: Dialog) => {
        lastDialogMessage = dialog.message();
        dialog.accept();
    });
    await this.page.click('button[onclick="jsConfirm()"]');
});

When('I dismiss the JS confirm', async function () {
    this.page.once('dialog', (dialog: Dialog) => {
        lastDialogMessage = dialog.message();
        dialog.dismiss();
    });
    await this.page.click('button[onclick="jsConfirm()"]');
});

When('I enter {string} into the prompt and accept', async function (inputText: string) {
    this.page.once('dialog', (dialog: Dialog) => {
        lastDialogMessage = dialog.message();
        dialog.accept(inputText);
    });
    await this.page.click('button[onclick="jsPrompt()"]');
});

When('I dismiss the JS prompt', async function () {
    this.page.once('dialog', (dialog: Dialog) => {
        lastDialogMessage = dialog.message();
        dialog.dismiss();
    });
    await this.page.click('button[onclick="jsPrompt()"]');
});

Then('the alert message should be {string}', async function (expected: string) {
    expect(lastDialogMessage).toBe(expected);
});

Then('I should see {string}', async function (msg: string) {
    await expect(this.page.locator('#result')).toHaveText(msg);
});
