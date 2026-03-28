import { When, Then } from '@cucumber/cucumber';
import { InventoryPage } from '../../pages/InventoryPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { expect } from '@playwright/test';
import { CustomWorld } from './world';

When('I add {string} to the cart', async function(this: CustomWorld, productName: string) {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.addToCart(productName);
});

When('I remove {string} from the cart', async function(this: CustomWorld, productName: string) {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.removeFromCart(productName);
});

Then('the cart count should be {string}', async function(this: CustomWorld, count: string) {
  const inventoryPage = new InventoryPage(this.page);
  const actual = await inventoryPage.getCartCount();
  expect(actual).toBe(count);
});

When('I go to the cart', async function(this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.goToCart();
});

When('I proceed to checkout', async function(this: CustomWorld) {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.proceedToCheckout();
});

When('I fill in first name {string} last name {string} zip {string}', async function(this: CustomWorld, first: string, last: string, zip: string) {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.fillShippingInfo(first, last, zip);
});

When('I continue the checkout', async function(this: CustomWorld) {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.continue();
});

When('I finish the order', async function(this: CustomWorld) {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.finish();
});

Then('I should see the order confirmation', async function(this: CustomWorld) {
  const checkoutPage = new CheckoutPage(this.page);
  const confirmed = await checkoutPage.isOrderConfirmed();
  expect(confirmed).toBe(true);
});
