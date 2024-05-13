const {test, expect} = require('@playwright/test')

test("Task1", async ({page}) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await expect(page).toHaveTitle('Your Store');
})