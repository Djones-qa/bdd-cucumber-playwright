import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async assertOnCartPage() {
    await expect(this.page).toHaveURL(/cart/);
  }

  async proceedToCheckout() {
    await this.page.click('[data-test=checkout]');
  }

  async fillShippingInfo(firstName: string, lastName: string, zip: string) {
    await this.page.fill('[data-test=firstName]', firstName);
    await this.page.fill('[data-test=lastName]', lastName);
    await this.page.fill('[data-test=postalCode]', zip);
  }

  async continue() {
    await this.page.click('[data-test=continue]');
  }

  async finish() {
    await this.page.click('[data-test=finish]');
  }

  async isOrderConfirmed(): Promise<boolean> {
    return this.page.locator('.complete-header').isVisible();
  }
}
