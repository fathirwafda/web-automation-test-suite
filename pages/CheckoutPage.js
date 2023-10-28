const { expect } = require("../playwright.config");

class CheckoutPage {
  constructor(page) {
      this.page = page;
  }

  async navigateToCart() {
      await this.page.click('.shopping_cart_link');
  }

  async proceedToCheckout() {
      await this.page.click('#checkout');
  }

  async fillCheckoutDetails(firstName, lastName, postalCode) {
      await this.page.fill('#first-name', firstName);
      await this.page.fill('#last-name', lastName);
      await this.page.fill('#postal-code', postalCode);
      await this.page.click('.btn_primary');
  }

  async continueCheckout(){
    await this.page.click('#continue');
  }

  async finishCheckout() {
      await this.page.click('#finish');
  }

  async isOrderConfirmed() {
      return await this.page.isVisible('.complete-header');
  }
}

module.exports = {CheckoutPage};
