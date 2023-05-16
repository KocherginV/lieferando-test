import { Locator, Page } from '@playwright/test';

export class CareersHomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('#keywordSearch');
    this.searchButton = page.locator('button[type="submit"]');
  }
}
