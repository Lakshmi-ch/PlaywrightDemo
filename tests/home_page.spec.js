import { test, expect } from '@playwright/test';
import { navigateToHomePage } from 'C:/JavaScriptPrograms/PlaywrightDemo/pages/home_page_bookingform'
test.describe('Home Page Tests', () => {
test('has title', async ({ page }) => {
  await navigateToHomePage(page, expect);
});
});
