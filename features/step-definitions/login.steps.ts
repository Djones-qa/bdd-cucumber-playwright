import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { expect } from '@playwright/test';
import { CustomWorld } from './world';

Given('I am on the login page', async function(this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

Given('I am logged in as {string}', async function(this: CustomWorld, username: string) {
  const loginPage = new LoginPage(this.page);
  const inventoryPage = new InventoryPage(this.page);
  await loginPage.goto();
  await loginPage.login(username, 'secret_sauce');
  await inventoryPage.assertOnInventoryPage();
});

When('I enter username {string} and password {string}', async function(this: CustomWorld, username: string, password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});

When('I click the login button', async function(this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.clickLogin();
});

Then('I should be on the inventory page', async function(this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.assertOnInventoryPage();
});

Then('I should see the product list', async function(this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page);
  const visible = await inventoryPage.isProductListVisible();
  expect(visible).toBe(true);
});

Then('I should see an error message', async function(this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const visible = await loginPage.isErrorVisible();
  expect(visible).toBe(true);
});
