const { test, expect } = require("@playwright/test")

import regdata from "../data/register"
import regpage from "../pages/RegisterPage"

test.describe('Block1', async () => {

        test.beforeEach(async () => {
        console.log('Inside before each')

        await page.goto(regdata[0].URL);
        await expect(page).toHaveTitle('Your Store');
        await page.getByRole('button', { name: /My account/ }).hover()
        await expect(page.getByRole('link', { name: 'Register' })).toBeVisible()
        await page.getByRole('link', { name: 'Register' }).click()
        await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible()

    })

    test('User Registration Suite', async ({ page }) => {

        const register = new regpage(page)
        await register.registration()
        await page.waitForTimeout(2000)
    })

})