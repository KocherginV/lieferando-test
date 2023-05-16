import { Locator, Page } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly locationList: Locator;
  readonly firstLocation: Locator;
  readonly countryButton: Locator;
  readonly countryItemCheckbox: (countryName: string) => Locator;
  readonly appliedFilterTag: Locator;
  readonly salesListItem: Locator;
  readonly selectedJobCheckbox: Locator;
  readonly selectedJobCheckboxText: Locator;
  readonly jobsInFilter: (filterSelector: string, filterName: string) => Locator;
  readonly topMenuJobCount: Locator;
  readonly appliedCountryTag: Locator;


  constructor(page: Page) {
    this.page = page;
    this.locationList = page.locator('.job-location');
    this.firstLocation = page.locator('.job-location').nth(0);
    this.countryButton = page.locator('#CountryAccordion');
    this.countryItemCheckbox = (countryName) => page.getByText(`${countryName}`, {exact: true});
    this.appliedFilterTag = page.locator('.tag span');
    this.salesListItem = page.getByRole('link', { name: 'Sales' });
    this.selectedJobCheckbox = page.locator('.checkbox').first();
    this.selectedJobCheckboxText = page.locator('.result-text').first();
    this.topMenuJobCount = page.locator('.result-count');
    this.appliedCountryTag = page.locator('.tag span').last();
    this.jobsInFilter = (filterSelector, filterName) => page.locator(`//*[@id="${filterSelector}"]//li[@data-ph-at-id="facet-results-item"]//*[text()=\'${filterName}\']/parent::label`);
  }
}
