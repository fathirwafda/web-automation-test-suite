class ProductsPage {
  constructor(page) {
      this.page = page;
  }

  async verifyLogin() {
    // Use Id of container to make sure the targeted page is visible
    return this.page.isVisible('#header_container');
  }

  async sortProductsByPrice() {
    // We need to select parent before select trageted elements
    await this.page.selectOption('select.product_sort_container', "hilo");
  }

  async selectFirstProduct() {
    await this.page.click('.inventory_item:first-child .inventory_item_name');
  }

  async addToCart() {
    await this.page.getByRole('button', { name: 'submit' });
  }
}

module.exports = { ProductsPage };
