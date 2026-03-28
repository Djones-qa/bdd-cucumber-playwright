import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async assertOnInventoryPage() {
    await expect(this.page).toHaveURL(/inventory/);
    await this.page.locator('.inventory_list').waitFor({ state: 'visible' });
  }

  async isProductListVisible(): Promise<boolean> {
    return this.page.locator('.inventory_list').isVisible();
  }

  async addToCart(productName: string) {
    await this.page.locator('.inventory_item')
      .filter({ hasText: productName })
      .locator('button')
      .click();
  }

  async removeFromCart(productName: string) {
    await this.page.locator('.inventory_item')
      .filter({ hasText: productName })
      .locator('button')
      .click();
  }

  async getCartCount(): Promise<string> {
    return this.page.locator('.shopping_cart_badge').innerText();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async sortBy(option: string) {
    const select = this.page.locator('[data-test=product-sort-container]');
    await select.waitFor({ state: 'visible' });
    await select.selectOption(option);
  }

  async getProductNames(): Promise<string[]> {
    return this.page.locator('.inventory_item_name').allInnerTexts();
  }

  async getProductPrices(): Promise<number[]> {
    const prices = await this.page.locator('.inventory_item_price').allInnerTexts();
    return prices.map(p => parseFloat(p.replace('$', '')));
  }
}
