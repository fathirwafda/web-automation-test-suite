const { expect } = require('@playwright/test');
require('dotenv').config(); // Env variables loaded

class HomePage {
  constructor(page) {
      this.page = page;
  }

  async navigate() {
      await this.page.goto(process.env.BASE_URL);
      await this.page.setViewportSize({ width: 1366, height: 768 });  // Example size; adjust as needed.

  }

  async login(username, password) {
      await this.page.fill('input[data-test="username"]', username);
      await this.page.fill('input[data-test="password"]', password);
      await this.page.click('input[data-test="login-button"]');
      await expect(this.page).toHaveURL(/\/inventory/);
  }
}

module.exports = { HomePage };
