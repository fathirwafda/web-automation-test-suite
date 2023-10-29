// tests/checkout.test.js
const { test, expect } = require('@playwright/test');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { HomePage } = require('../pages/HomePage');
const { ProductsPage } = require('../pages/ProductsPage');

test.describe('Checkout process', () => {
    let checkoutPage;

    test.beforeEach(async ({ page }) => {
      const home = new HomePage(page);
      const productPage = new ProductsPage(page);

      await home.navigate();
      await home.login(process.env.USERNAME, process.env.PASSWORD);
      const url = page.url();
      expect(url).toContain('/inventory.html'); 
      // Sort by highest price and select first product
      await productPage.sortProductsByPrice();
      await productPage.selectFirstProduct();

      // Add the selected product to cart
      await productPage.addToCart();

      checkoutPage = new CheckoutPage(page);
    });

    test('should handle successful checkout process', async () => {
      await checkoutPage.navigateToCart();
      await checkoutPage.proceedToCheckout();
      // Example data
      await checkoutPage.fillCheckoutDetails(process.env.BUYER_FIRST_NAME, process.env.BUYER_LAST_NAME, process.env.POSTAL_CODE); 

      await checkoutPage.finishCheckout();

      // Verify that the order is complete
      const isOrderComplete = await checkoutPage.isOrderConfirmed();
      expect(isOrderComplete).toBe(true);
    });

    test('The checkout process is failed', async () => {
      await checkoutPage.navigateToCart();
      await checkoutPage.proceedToCheckout();

      await checkoutPage.continueCheckout();

      // Verify that the order is complete
      const isOrderComplete = await checkoutPage.isOrderConfirmed();
      expect(isOrderComplete).toBe(false);
    });
});
