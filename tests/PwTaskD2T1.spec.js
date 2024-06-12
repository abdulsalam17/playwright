const {test, expect} = require('@playwright/test')

test("Task1", async ({page}) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await expect(page).toHaveTitle('Your Store');
    // await page.getByRole('button', {name:/Mega Menu/}).hover()

    // await page.getByRole('listitem')
    //     .filter({hasText:/Apple/})
    //     .getByRole('link',{name:'Apple', exact:true})
    //     .click()


    //     await expect(page.locator('//button[@id="grid-view"]')).toBeVisible()
        
    //     await expect(page.locator('//button[@id="list-view"]')).toBeVisible()

    // await expect(page.selectOption('#input-limit-212433','15')).toBeTruthy()

    // await expect(page.selectOption('#input-sort-212434','Default')).toBeTruthy()

    // await expect(page.getByRole('link',{name:'Product Compare (0)'})).toBeVisible()

// await page.pause()
    await page.waitForTimeout(500)
})