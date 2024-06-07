const { test, expect } = require("@playwright/test")

import logindata from "../data/login"

test.describe('Login Test Suite', async () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(logindata[0].URL);
        await expect(page).toHaveTitle('Your Store');

        await page.getByRole('button', { name: /My account/ }).hover()

        await expect(page.getByRole('link', { name: 'Login' })).toBeVisible()
        await page.getByRole('link', { name: 'Login' }).click()

        await expect(page.getByRole('heading', { name: 'Returning Customer' })).toBeVisible()
    })

    for (let i = 0; i <logindata.length; i++) {
        

        test(`Login with user ${i}`, async ({ page }) => {

          await page.getByPlaceholder('E-Mail Address').click()
           
           await page.getByPlaceholder('E-Mail Address').fill(logindata[i].username)

            await page.getByPlaceholder(/Password/, { exact: true }).click()
            await page.getByPlaceholder(/Password/).fill(logindata[i].password)

            await page.getByRole('button', { name: 'Login' }).click()

            await expect(page.getByText(' Edit your account information')).toBeVisible()

        })
    }
})