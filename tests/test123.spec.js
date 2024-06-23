import { expect, test } from "@playwright/test";


test.describe.serial("Drop Down Test Suite", () => {

 test("Basic Drag and drop", async ({ page }) => {
   await page.goto("https://commitquality.com/practice-drag-and-drop");
  await page.waitForTimeout(4000)
    if(page.getByText('Success!').isHidden())
    {
   await page.locator("#small-box").dragTo(page.locator(".large-box "));
   await page.waitForTimeout(4000)
  // await expect.soft(page.locator('//div[@class="large-box inside"]')).toBeVisible();
    await expect.soft(page.getByText('Success!')).toBeVisible();
    await page.waitForTimeout(4000)
    }
 });


 test("Advance Drag and drop", async ({ page }) => {
   await page.goto("https://commitquality.com/practice-drag-and-drop");
   await page.waitForTimeout(4000)
   await page.locator("#small-box").hover();
   await page.waitForTimeout(4000)
   await page.mouse.down();
   await page.waitForTimeout(4000)
   await page.locator(".large-box ").hover();
   await page.waitForTimeout(4000)
   await page.mouse.up();
   await page.waitForTimeout(4000)
  
 });

 test("Basic Drag and drop 3", async ({ page }) => {
  await page.goto("https://commitquality.com/practice-drag-and-drop");
 await page.waitForTimeout(4000)
   if(page.getByText('Success!').isHidden())
   {
  await page.locator("#small-box").dragTo(page.locator(".large-box "));
  await page.waitForTimeout(4000)
 // await expect.soft(page.locator('//div[@class="large-box inside"]')).toBeVisible();
   await expect.soft(page.getByText('Success!')).toBeVisible();
   await page.waitForTimeout(4000)
   }
});


test("Advance Drag and drop 4", async ({ page }) => {
  await page.goto("https://commitquality.com/practice-drag-and-drop");
  await page.waitForTimeout(4000)
  await page.locator("#small-box").hover();
  await page.waitForTimeout(4000)
  await page.mouse.down();
  await page.waitForTimeout(4000)
  await page.locator(".large-box ").hover();
  await page.waitForTimeout(4000)
  await page.mouse.up();
  await page.waitForTimeout(4000)
 
});
});
