import { test, expect } from '@playwright/test';
import { CareersHomePage } from '../pages/CareersHome.page';
import { SearchResultsPage } from '../pages/SearchResults.page';
import { Helper } from '../helpers/Helper';

test.beforeEach(async ({ page }) => {
  await page.goto('https://careers.justeattakeaway.com/global/en/home');
});

test.describe('Job search tests', () => {
  test('Search results can be filtered by country', async ({ page }) => {
    const careersHomePage = new CareersHomePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    const helper = new Helper();
    await careersHomePage.searchInput.type('Test');
    await careersHomePage.searchButton.click();
    await searchResultsPage.firstLocation.waitFor();
    let locationsTextValues =
      await searchResultsPage.locationList.allInnerTexts();
    expect(helper.cleanStrings(locationsTextValues)).toContain('Berlin');
    expect(helper.cleanStrings(locationsTextValues)).toContain('London');
    await searchResultsPage.countryButton.click();
    await searchResultsPage.countryItemCheckbox('Netherlands').check();
    expect(searchResultsPage.appliedFilterTag).toHaveText('Netherlands');
    // SHAME SHAME SHAME:
    await page.waitForTimeout(1000);
    locationsTextValues = await searchResultsPage.locationList.allInnerTexts();
    expect(helper.cleanStrings(locationsTextValues)).not.toContain('London');
    expect(helper.cleanStrings(locationsTextValues)).not.toContain('Berlin');
  });

  test('Search results count is returned correctly, after multiple fiters applied', async ({
    page,
  }) => {
    const careersHomePage = new CareersHomePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    const helper = new Helper();
    careersHomePage.searchInput.click();
    await searchResultsPage.salesListItem.click();
    expect(searchResultsPage.appliedFilterTag).toHaveText('Sales');
    expect(searchResultsPage.selectedJobCheckbox).toBeChecked();
    expect(searchResultsPage.selectedJobCheckboxText).toHaveText('Sales');
    let filteredJobCount = await searchResultsPage
      .jobsInFilter('CategoryBody', 'Sales')
      .textContent();
    expect(searchResultsPage.topMenuJobCount).toHaveText(
      helper.extractNumber(filteredJobCount),
    );
    await searchResultsPage.countryButton.click();
    await searchResultsPage.countryItemCheckbox('Germany').check();
    expect(searchResultsPage.appliedCountryTag).toHaveText('Germany');
    filteredJobCount = await searchResultsPage
      .jobsInFilter('CountryBody', 'Germany')
      .textContent();
    await expect(searchResultsPage.topMenuJobCount).toHaveText(
      helper.extractNumber(filteredJobCount),
    );
  });
});
