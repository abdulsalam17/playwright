const {test,expect}= require('@playwright/test')

test ("Day3task", async({page}) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await expect(page).toHaveTitle(/Test Login/)
    await page.locator('id=username').fill('student')
    await page.locator('id=password').fill('Password123')
    await page.getByRole('button').click
    await expect(page).toHaveTitle(/Logged In Successfully | Practice Test Automation/)
    }
)