import { test, expect } from '@playwright/test';
import { bookRoomForm, contactForm } from '../pages/home_page_bookingform'
import bookingformData from '../data/bookingform.json';
import contactformData from '../data/contactform.json';


const bookingformvalidData = bookingformData.valid;
const bookingforminvalidData = bookingformData.invalid
const validContactformData = contactformData.valid;
const invalidContactformData = contactformData.invalid
test.describe('Home Page Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationintesting.online/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle("Restful-booker-platform demo");
  });
  test('Book the room with the valid data', async ({ page }) => {
    await bookRoomForm(page, expect, bookingformvalidData);
  });
  test('Book the room with the invalid data', async ({ page }) => {
    await bookRoomForm(page, expect, bookingforminvalidData);
  });
  test('Contact form validation', async ({ page }) => {
    await contactForm(page, expect, validContactformData);
  });
  test('Contact form validation with invalid data', async ({ page }) => {
    await contactForm(page, expect, invalidContactformData);
  });
});
