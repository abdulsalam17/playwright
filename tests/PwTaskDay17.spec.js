const { test, expect } = require("@playwright/test")

import regdata from "../data/register"

test.describe('Block1', async () => {

    test.beforeEach(async ({ page }) => {
        console.log('Inside before each == inside describe')

        await page.goto(regdata[0].URL);
        await expect(page).toHaveTitle('Your Store');

        await page.getByRole('button', { name: /My account/ }).hover()

        await expect(page.getByRole('link', { name: 'Register' })).toBeVisible()
        await page.getByRole('link', { name: 'Register' }).click()

        await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible()

    })

    for (let i = 0; i < 5; i++) {

        test(`User Registration ${i}`, async ({ page }) => {

            await page.getByPlaceholder('First Name').click()
            await page.getByPlaceholder('First Name').fill(regdata[i].FirstName)

            await page.locator('id=input-lastname').click()
            await page.locator('id=input-lastname').fill(regdata[i].LastName)

            // Returns random number 0-100
            let ran = Math.floor(Math.random() * 1000)
            let email = 'abdul' + ran + '@gmail.com'

            await page.getByPlaceholder('E-Mail').click()
            await page.getByPlaceholder('E-Mail').fill(email)
            console.log(email)

            await page.getByPlaceholder('Telephone').click()
            await page.getByPlaceholder('Telephone').fill(regdata[i].Phone)

            await page.getByPlaceholder('Password', { exact: true }).click()
            await page.getByPlaceholder('Password', { exact: true }).fill(regdata[i].password)

            await page.getByPlaceholder('Password Confirm').click()
            await page.getByPlaceholder('Password Confirm').fill(regdata[i].confirmpass)

            await page.locator('//label[@class="custom-control-label" and @for="input-newsletter-yes"]').check()

            await page.getByText('I have read and agree').check()
            await expect(page.getByText('I have read and agree').isChecked()).toBeTruthy()

            await page.getByRole('button', { name: 'Continue' }).click()

            /////Check if email is already registered

            if (await page.getByText(/ Warning: E-Mail Address is already registered!/).isVisible()) {
                await page.getByPlaceholder('E-Mail').clear()
                await page.getByPlaceholder('E-Mail').fill(regdata[i].Email)
                await page.getByRole('button', { name: 'Continue' }).click()
            }

            // First and last name error checks should not be shown with valid input
            await expect(page.getByText(/First Name must be between 1 and 32 characters!/)).toBeHidden()
            await expect(page.getByText(/Last Name must be between 1 and 32 characters!/)).toBeHidden()

            await expect(page.getByRole('heading', { name: 'Your Account Has Been Created!' })).toBeVisible()

            await expect(page.getByRole('link', { name: 'Continue' })).toBeVisible()
            await page.getByRole('link', { name: 'Continue' }).click()

            await page.waitForTimeout(2000)
        })
    }
})

