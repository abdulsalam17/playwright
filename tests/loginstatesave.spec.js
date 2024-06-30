const { test, chromium, expect } = require("@playwright/test")

test('LoginState Save test', async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    await page.waitForTimeout(4000)
    await expect(page.getByText('Edit your account information')).toBeVisible()

})

test('Test 2', async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    await page.waitForTimeout(4000)
    await expect(page.getByText('Edit your account information')).toBeVisible()

})

test('Test 3', async ({ page, context }) => {
    await context.clearCookies()
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    await page.waitForTimeout(4000)
    await expect(page.getByText('Edit your account information')).toBeVisible()

})