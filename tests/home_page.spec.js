import { test, expect } from '@playwright/test';
import { navigateToHomePage } from 'C:/JavaScriptPrograms/PlaywrightDemo/pages/home_page_bookingform'
import bookingformData from '../data/bookingform.json';

const validData = bookingformData.valid;
const invalidData = bookingformData.invalid
test.describe('Home Page Tests', () => {
test('Book the room with the valid data', async ({ page }) => {
  await navigateToHomePage(page, expect, validData);
});
test('Book the room with the invalid data', async ({ page }) => {
  await navigateToHomePage(page, expect, invalidData);
});
});
