import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async enterUsername(username: string) {
    await this.page.fill('[data-test=username]', username);
  }

  async enterPassword(password: string) {
    await this.page.fill('[data-test=password]', password);
  }

  async clickLogin() {
    await this.page.click('[data-test=login-button]');
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async getErrorMessage(): Promise<string> {
    return this.page.locator('[data-test=error]').innerText();
  }

  async isErrorVisible(): Promise<boolean> {
    return this.page.locator('[data-test=error]').isVisible();
  }
}
