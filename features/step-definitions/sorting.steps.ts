import { When, Then } from '@cucumber/cucumber';
import { InventoryPage } from '../../pages/InventoryPage';
import { expect } from '@playwright/test';
import { CustomWorld } from './world';

When('I sort products by {string}', async function(this: CustomWorld, option: string) {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.sortBy(option);
});

Then('products should be sorted by price ascending', async function(this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page);
  const prices = await inventoryPage.getProductPrices();
  const sorted = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sorted);
});

Then('products should be sorted by name ascending', async function(this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page);
  const names = await inventoryPage.getProductNames();
  const sorted = [...names].sort();
  expect(names).toEqual(sorted);
});
