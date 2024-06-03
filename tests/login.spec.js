const { test, expect } = require("@playwright/test")

import logindata from "../data/login"

test.describe('Login Test Suite', async () => {

    test.beforeEach(async ({ page }) => {
        console.log('Inside beforeeach describe')

        await page.goto(logindata[0].URL);
        await expect(page).toHaveTitle('Your Store');

        await page.getByRole('button', { name: /My account/ }).hover()

        await expect(page.getByRole('link', { name: 'Login' })).toBeVisible()
        await page.getByRole('link', { name: 'Login' }).click()

        await expect(page.getByRole('heading', { name: 'Returning Customer' })).toBeVisible()

    })

    test ('Login with valid credentials', async ({ page }) => {

        await page.getByPlaceholder('E-Mail Address').click()
        await page.getByPlaceholder('E-Mail Address').fill(logindata[0].username)

        await page.getByPlaceholder(/Password/, { exact: true }).click()
        await page.getByPlaceholder(/Password/).fill(logindata[0].password)

        await page.getByRole('button', { name: 'Login' }).click()

        await expect(page.getByText(' Edit your account information')).toBeVisible()

       // await page.waitForTimeout(2000)
    })


    test('Login with username and without password', async ({ page }) => {

        await page.getByPlaceholder('E-Mail Address').click()
        await page.getByPlaceholder('E-Mail Address').fill(logindata[0].username)

        await page.getByRole('button', { name: 'Login' }).click()
        await expect(page.getByText('Warning: No match for E-Mail Address and/or Password')).toBeVisible()

        console.log("Test")
    })

    test('Login without username and with password', async ({ page }) => {

        await page.getByPlaceholder(/Password/, { exact: true }).click()
        await page.getByPlaceholder(/Password/).fill(logindata[0].password)

        await page.getByRole('button', { name: 'Login' }).click()

        await expect(page.getByText(/ Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour./))
            .toBeVisible()
    })


    test('Login without username and password', async ({ page }) => {

        await page.getByRole('button', { name: 'Login' }).click()

        await expect(page.getByText(/ Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour./))
            .toBeVisible()
    })

})