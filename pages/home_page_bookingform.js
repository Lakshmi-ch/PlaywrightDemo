
 export async function navigateToHomePage(page, expect){
  
  await page.goto('https://automationintesting.online/', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle("Restful-booker-platform demo");
  await page.getByText("Book this room").first().click();
  await page.waitForTimeout(5000);
  await page.locator("//input[@name = 'firstname']").type("Leela");
  await page.locator("//input[@name = 'lastname']").type("Cho");
  await page.locator("//input[@name = 'email']").type("leela@test.com");
  await page.locator("//input[@name = 'phone']").type("123456789109");
  await page.locator("//button[text()='Book']").click();
  await page.waitForTimeout(5000);

}



