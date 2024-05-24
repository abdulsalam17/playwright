// Roles used textbox, button, heading, link, search

const { test, expect } = require('@playwright/test')

test('Task2', async ({ page }) => {

    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await expect(page).toHaveTitle(/Xpath Practice Page | Shadow dom, nested shadow dom/);

    await page.pause()
    await page.getByRole('textbox', { name: 'email' }).click()
    await page.getByRole('textbox', { name: 'email' }).fill('abdul@gmail.com')

    await page.getByRole('button', { name: 'submit' }).click()

    await expect(page.getByRole('heading', { name: 'Users Table' })).toBeVisible()

    await expect(page.getByRole('link', { name: 'Find out how to automate these controls without XPath' }))
        .toBeVisible()

    await page.getByRole('search').click()

    await page.waitForTimeout(2000)

})