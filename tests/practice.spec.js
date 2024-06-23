const { test, expect } = require('@playwright/test');
const exp = require('constants');


test ("Task1", async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8');
    // await expect(page).toHaveTitle('Your Store');
    // await page.getByRole('button', { name: /Mega Menu/ }).hover()

    // await page.getByRole('listitem')
    //     .filter({ hasText: /Apple/ })
    //     .getByRole('link', { name: 'Apple', exact: true })
    //     .click()

    await page.locator('#input-limit-212433').selectOption('25')
    const applepageitems = await page.locator('//div[@class="product-layout product-grid no-desc col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"]')
    await page.waitForTimeout(1500)
    let count1=await applepageitems.count()
    console.log(count1)



})

















