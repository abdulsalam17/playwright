const { test, expect } = require("@playwright/test")

test.describe('Block1', async () => {

    test.only('User Registration Suite', async ({ page }) => {

        await page.goto('https://ecommerce-playground.lambdatest.io/');
        await expect(page).toHaveTitle('Your Store');

        await page.getByRole('button', { name: /My account/ }).hover()

        await expect(page.getByRole('link', { name: 'Register' })).toBeVisible()
        await page.getByRole('link', { name: 'Register' }).click()

        await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible()
        // await page.pause()
        await page.getByPlaceholder('First Name').click()
        await page.getByPlaceholder('First Name').fill('Abdul')

        await page.locator('id=input-lastname').click()
        await page.locator('id=input-lastname').fill('Salam')
        
        // Returns random number 0-100
        let ran = Math.floor(Math.random() * 1000)
        console.log("Random int " + ran)

        await page.getByPlaceholder('E-Mail').click()
        await page.getByPlaceholder('E-Mail').fill('abdul' + ran + '@gmail.com')
       
        await page.getByPlaceholder('Telephone').click()
        await page.getByPlaceholder('Telephone').fill('923225252555')

        await page.getByPlaceholder('Password', { exact: true }).click()
        await page.getByPlaceholder('Password', { exact: true }).fill('123456')

        await page.getByPlaceholder('Password Confirm').click()
        await page.getByPlaceholder('Password Confirm').fill('123456')

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

        // First and last name error checks
        await expect(page.getByText(/First Name must be between 1 and 32 characters!/)).toBeHidden()
        await expect(page.getByText(/Last Name must be between 1 and 32 characters!/)).toBeHidden()
        
        await expect(page.getByRole('heading', { name: 'Your Account Has Been Created!' })).toBeVisible()
   
        await expect(page.getByRole('link', { name: 'Continue' })).toBeVisible()
        await page.getByRole('link', { name: 'Continue' }).click()

        await page.waitForTimeout(2000)
    })


    test("BVA Firstname", async ({ page }) => {

        await page.goto('https://ecommerce-playground.lambdatest.io/');
        await expect(page).toHaveTitle('Your Store');

        await page.getByRole('button', { name: /My account/ }).hover()

        await expect(page.getByRole('link', { name: 'Register' })).toBeVisible()
        await page.getByRole('link', { name: 'Register' }).click()

        await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible()

        await page.getByPlaceholder('First Name').click()
        await page.getByPlaceholder('First Name').fill('')
        await page.getByRole('button', { name: 'Continue' }).click()

        // Min value check
        await expect(page.getByText(/First Name must be between 1 and 32 characters!/)).toBeVisible()

        await page.getByPlaceholder('First Name').clear()
        await page.getByPlaceholder('First Name').fill('assdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadsw')
        await page.getByRole('button', { name: 'Continue' }).click()

        // Max value check
        await expect(page.getByText(/First Name must be between 1 and 32 characters!/)).toBeVisible()
    })

    test ("BVA Lastname", async ({ page }) => {

        await page.goto('https://ecommerce-playground.lambdatest.io/');
        await expect(page).toHaveTitle('Your Store');

        await page.getByRole('button', { name: /My account/ }).hover()

        await expect(page.getByRole('link', { name: 'Register' })).toBeVisible()
        await page.getByRole('link', { name: 'Register' }).click()

        await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible()

        await page.getByPlaceholder('Password', { exact: true }).click()
        await page.getByPlaceholder('Password', { exact: true }).fill('')

        await page.getByRole('button', { name: 'Continue' }).click()

        // Min value check
        await expect(page.getByText(/Last Name must be between 1 and 32 characters!/)).toBeVisible()

        await page.getByPlaceholder('Password', { exact: true }).click()
        await page.getByPlaceholder('Password', { exact: true }).fill('12322211111232111111111111111232131231')
        await page.getByRole('button', { name: 'Continue' }).click()

        // Max value check
        await expect(page.getByText(/Last Name must be between 1 and 32 characters!/)).toBeVisible()
        
    })
})