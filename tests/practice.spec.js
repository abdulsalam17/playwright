const { test, expect } = require('@playwright/test')

test('practice', async ({ page }) => {

    await page.goto('http://test.rubywatir.com/radios.php');

    // Get radio by id
    // await page.locator('id=radioId').check()

    // Get radio by xpath
    // await page.locator("//input[@class='radioclass']").check()

    // // Get radio by xpath combination
    // page.locator('//input[@type="radio" and @value="Not sure"]').check()

    // await page.locator('//input[@type="radio" and @value="No"][3]').check()


    // Get by value
    await page.locator("input[value='Radio1']").check()

    await page.waitForTimeout(3000)
})
