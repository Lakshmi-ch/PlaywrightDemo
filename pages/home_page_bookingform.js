
import { selectors } from "../utils/selectors.json";
const selector = selectors;

export async function bookRoomForm(page, expect, bookingformData) {
  await page.getByText("Book this room").first().click();
  await page.locator(selector.bookingformFirstName).type(bookingformData.firstName);
  await page.locator(selector.bookingformLastName).type(bookingformData.lastName);
  await page.locator(selector.bookingformEmail).type(bookingformData.email);
  await page.locator(selector.bookingformPhone).type(bookingformData.phone);
  await page.locator(selector.bookButton).click();
  const text = await page.locator(selector.errorMessage).textContent();
  expect(text.includes(bookingformData.expectedErrormessage)).toBe(bookingformData.expected);

}
export async function contactForm(page, expect, contactformData) {
  
 await page.locator(selector.contactformFirstName).type(contactformData.firstName);
 await page.locator(selector.contactformEmail).type(contactformData.email);
 await page.locator(selector.contactformPhone).type(contactformData.phone);
 await page.locator(selector.contactformSubject).type(contactformData.subject);
 await page.locator(selector.contactformMessage).type(contactformData.message);
 await page.locator(selector.submitButton).click();
 await expect(async () => {
  await expect(page.getByText(contactformData.expectedMessage)).toBeVisible({timeout: 500})
 }).toPass();

}




