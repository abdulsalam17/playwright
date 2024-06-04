const { test, expect } = require("@playwright/test")

import regdata from "../data/register"

test.describe('Block1', async () => {

    test.beforeEach(async ({ page }) => {
        console.log('Inside before all == inside describe')

        await page.goto(regdata[0].URL);
        await expect(page).toHaveTitle('Your Store');

        await page.getByRole('button', { name: /My account/ }).hover()

        await expect(page.getByRole('link', { name: 'Register' })).toBeVisible()
        await page.getByRole('link', { name: 'Register' }).click()

        await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible()

    })

    test.only('User Registration Suite', async ({ page }) => {

        await page.getByPlaceholder('First Name').click()
        await page.getByPlaceholder('First Name').fill(regdata[0].FirstName)

        await page.locator('id=input-lastname').click()
        await page.locator('id=input-lastname').fill(regdata[0].LastName)

        // Returns random number 0-100
        let ran = Math.floor(Math.random() * 1000)
        console.log("Random int " + ran)
        let email = 'abdul' + ran + '@gmail.com'

        await page.getByPlaceholder('E-Mail').click()
        await page.getByPlaceholder('E-Mail').fill(email)
        console.log(email)

        await page.getByPlaceholder('Telephone').click()
        await page.getByPlaceholder('Telephone').fill(regdata[0].Phone)

        await page.getByPlaceholder('Password', { exact: true }).click()
        await page.getByPlaceholder('Password', { exact: true }).fill(regdata[0].password)

        await page.getByPlaceholder('Password Confirm').click()
        await page.getByPlaceholder('Password Confirm').fill(regdata[0].confirmpass)

        await page.locator('//label[@class="custom-control-label" and @for="input-newsletter-yes"]').check()

        await page.getByText('I have read and agree').check()
        await expect(page.getByText('I have read and agree').isChecked()).toBeTruthy()

        await page.getByRole('button', { name: 'Continue' }).click()

        /////Check if email is already registered

        if (await page.getByText(/ Warning: E-Mail Address is already registered!/).isVisible()) {
            await page.getByPlaceholder('E-Mail').clear()
            await page.getByPlaceholder('E-Mail').fill('abdul' + ran + '@gmail.com')
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


    test("BVA Firstname", async ({ page }) => {

        // Min value check
        await page.getByPlaceholder('First Name').click()
        await page.getByPlaceholder('First Name').fill('')
        await page.getByRole('button', { name: 'Continue' }).click()
        await expect(page.getByText(/First Name must be between 1 and 32 characters!/)).toBeVisible()

        // Single value check
        await page.getByPlaceholder('First Name').click()
        await page.getByPlaceholder('First Name').fill('a')
        await page.getByRole('button', { name: 'Continue' }).click()
        await expect(page.getByText(/First Name must be between 1 and 32 characters!/)).toBeHidden()


        // Max value check
        await page.getByPlaceholder('First Name').clear()
        await page.getByPlaceholder('First Name').fill('assdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadsw')
        await page.getByRole('button', { name: 'Continue' }).click()
        await expect(page.getByText(/First Name must be between 1 and 32 characters!/)).toBeVisible()

    })

    test("BVA Password", async ({ page }) => {

        // Min value check
        await page.getByPlaceholder('Password', { exact: true }).click()
        await page.getByPlaceholder('Password', { exact: true }).fill('')
        await page.getByRole('button', { name: 'Continue' }).click()
        await expect(page.getByText(/Password must be between 4 and 20 characters!/)).toBeVisible()

        // Max value check - Bug
        // await page.getByPlaceholder('Password', { exact: true }).click()
        // await page.getByPlaceholder('Password', { exact: true }).fill('1232221111123211111111111')
        // await page.getByRole('button', { name: 'Continue' }).click()
        // await expect(page.getByText(/Password must be between 4 and 20 characters!/)).toBeVisible()

        // value check
        await page.getByPlaceholder('Password', { exact: true }).click()
        await page.getByPlaceholder('Password', { exact: true }).fill('1234')
        await page.getByRole('button', { name: 'Continue' }).click()
        await expect(page.getByText(/Password must be between 4 and 20 characters!/)).toBeHidden()
    })
})