const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/ProductsPage');
const { HomePage } = require('../pages/HomePage');

test.describe('Product interactions', () => {
    let productsPage;

    test.beforeEach(async ({ page }) => {
      const home = new HomePage(page);

      await home.navigate();
      await home.login(process.env.USERNAME, process.env.PASSWORD);

      productsPage = new ProductsPage(page);
    });

    test('sort products by highest price', async () => {
        await productsPage.sortProductsByPrice();
    
        // Fetch the prices of each product on the page.
        const priceElements = await productsPage.page.$$eval('.inventory_item_price', elements => 
            elements.map(item => parseFloat(item.textContent.replace('$', '')))
        );
    
        // Create a copy of the prices array and sort it in descending order (for highest price sorting).
        const sortedByPrice = [...priceElements].sort((a, b) => b - a);
    
        // Check if the prices are sorted by comparing the sorted array with the original array.
        expect(priceElements).toEqual(sortedByPrice);
    });

    test('choose the first product', async () => {
        await productsPage.selectFirstProduct();
    });
});
