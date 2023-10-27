const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('login test', async ({ page }) => {
    const home = new HomePage(page);

    await home.navigate();
    await home.login(process.env.USERNAME, process.env.PASSWORD);

    const url = page.url();
    expect(url).toContain('/inventory.html');  // Asserting the URL changes on successful login
});
