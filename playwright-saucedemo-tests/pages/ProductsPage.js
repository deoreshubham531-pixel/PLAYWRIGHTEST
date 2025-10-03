class ProductsPage{

constructor(page)
{
  this.page=page;
  this.products=page.locattor('.inventory_item');
  this.cartbadge = page.locator('.shopping_cart_badge');
  this.sortDropdown=page.locator('[data-test="product_sort_container"]');

}

async getProductCount()
{
  return await this.products.count();

}

async addFirstProduct()
{
  await this.page.locator('')
}

async removalFirstProduct()
{
  await this.page.locator()
}
async getCartCount()
{
  return this.cartbadge.count()>0 ? await this.cartbadge.textContent(): '0';

}

async sortByLowToHigh()
{
  await this.sortDropdown.selectOption('lohi')
}
}
