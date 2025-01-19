
 import { selectors } from "../utils/selectors.json";
 const selector = selectors;
 
 export async function navigateToHomePage(page, expect, bookingformData){
  
  await page.goto('https://automationintesting.online/', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle("Restful-booker-platform demo");
  await page.getByText("Book this room").first().click();
  //await page.waitForTimeout(5000);
  await page.locator(selector.bookingformFirstName).type(bookingformData.firstName);
  await page.locator(selector.bookingformLastName).type(bookingformData.lastName);
  await page.locator(selector.bookingformEmail).type(bookingformData.email);
  await page.locator(selector.bookingformPhone).type(bookingformData.phone);
  await page.locator(selector.bookButton).click();
  const text = await page.locator(selector.errorMessage).textContent();
  expect(text.includes(bookingformData.expectedErrormessage)).toBe(bookingformData.expected);

}



