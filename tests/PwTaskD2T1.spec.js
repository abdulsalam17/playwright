const { test, expect } = require('@playwright/test');
const exp = require('constants');

test("Task1", async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8');
    // await expect(page).toHaveTitle('Your Store');
    // await page.getByRole('button', { name: /Mega Menu/ }).hover()

    // await page.getByRole('listitem')
    //     .filter({ hasText: /Apple/ })
    //     .getByRole('link', { name: 'Apple', exact: true })
    //     .click()


    //   const option= page.locator('#input-limit-212433 option')
    //   await expect(option).toHaveCount(5)


    let arr = [15, 25, 50, 75, 100]

console.log(arr[0])

        await page.selectOption('#input-limit-212433', `$arr[1]`)
     //   await page.locator('#input-limit-212433').selectOption(`$arr[1]`)
        await page.waitForTimeout(2000)
      //  await page.pause()
      //  const option = await page.locator('//div[@class="product-layout product-grid no-desc col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"]').count()
     //   console.log(option)
        await expect(page.locator('//div[@class="product-layout product-grid no-desc col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"]'))
        .toHaveCount(25)
        
      
      



    // await page.pause()
    await page.waitForTimeout(500)
})