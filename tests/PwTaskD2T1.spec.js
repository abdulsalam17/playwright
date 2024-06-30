const { test, expect } = require('@playwright/test');
const exp = require('constants');
const helper= require('../libs/helper')

test.only ("Task1", async ({ page }) => {

    //await helper.gotopage(page)

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8');
   //  await expect(page).toHaveTitle('Your Store');
    // await page.getByRole('button', { name: /Mega Menu/ }).hover()

    // await page.getByRole('listitem')
    //     .filter({ hasText: /Apple/ })
    //     .getByRole('link', { name: 'Apple', exact: true })
    //     .click()

    //   const option= page.locator('#input-limit-212433 option')
    //   await expect(option).toHaveCount(5)

    const pagetext = await page.locator('//div[@class="col-sm-6 text-right"]')
    let str=await pagetext.textContent()
    console.log(str)

    // Remove extra spaces from string 
    let trimedstr=str.replace(/\s/g, '').toString();
    // Remove alphabets from string
    let intStr1 = trimedstr.replace(/[A-Za-z$-]/g, "");
    // Convert to int
    let  total = parseInt(intStr1)
    // Get last 2 digits
    console.log(total%100)
    



    // const applepageitems = await page.locator('//div[@class="product-layout product-grid no-desc col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"]')
    // let count

    // for (let i = 2; i < await pages.count(); i++) {

    //     await pages.nth(i).click()
    //     await page.waitForLoadState()
    //     count = await applepageitems.count()
    //     console.log(count)
    //     await expect(await applepageitems).toHaveCount(count)

    // }

})


test ('Last page', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8');

    const applepageitems = await page.locator('//div[@class="product-layout product-grid no-desc col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"]')
    let count

    const last = await page.getByRole('link', { name: '>|' })
    
    if (await last.isEnabled()) {
        await last.click()
        await page.waitForTimeout(1500)
        count = await applepageitems.count()
        await expect(await applepageitems).toHaveCount(count)

    }

})

test('Next page', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8');

    const next = await page.getByRole('link', { name: '>', exact: true })
    if (await next.isEnabled()) {
        await next.click()
        await page.waitForTimeout(1500)
    }

})

test('Previous page', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8');

    const pages = await page.locator('.pagination li a')
    await pages.nth(2).click()

    const previous = await page.getByRole('link', { name: '<', exact: true })
    if (await previous.isEnabled()) {
        await previous.click()
        await page.waitForTimeout(1500)
    }

})

test('First page', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8');

    const pages = await page.locator('.pagination li a')
    await pages.nth(2).click()

    const First = await page.getByRole('link', { name: '|<', exact: true })
    if (await First.isEnabled()) {
        await First.click()
        await page.waitForTimeout(1500)
    }

})













