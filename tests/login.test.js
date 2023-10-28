const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test.describe('Login scenarios', () => {

    test('login is succeeded', async ({ page }) => {
        const home = new HomePage(page);

        await home.navigate();
        await home.login(process.env.USERNAME, process.env.PASSWORD);

        const url = page.url();
        expect(url).toContain('/inventory.html');  // Asserting the URL changes on successful login
    });

    test('Login is failed', async ({ page }) => {
        const home = new HomePage(page);

        await home.navigate();
        await home.login(process.env.USERNAME, process.env.WRONG_PASSWORD);

        // Make sure the login is invalid
        const isLoginInvalid = await home.verifyErrorLogin();
        expect(isLoginInvalid).toBe(true);

    });

});