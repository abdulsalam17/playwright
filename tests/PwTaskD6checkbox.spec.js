const { test, expect } = require('@playwright/test')

test('PW day6 task', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes')
    // await page.pause()
    //test.slow(); 

    const checkbox1 = await page.getByRole('checkbox').first()
    const checkbox2 = await page.getByRole('checkbox').nth(1)

    if (checkbox1.uncheck()) {
        await checkbox1.check()
        await expect(checkbox1.isChecked()).toBeTruthy()
    }

    if (checkbox2.check()) {
        await checkbox2.uncheck()
        // await expect(checkbox2.isChecked()).toBeFalsy()
    }
}
)