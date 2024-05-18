const {test, expect} = require('@playwright/test')

test('PW day5 task', async ({page}) => {

await page.goto('https://the-internet.herokuapp.com/checkboxes')
//await page.pause()
//test.slow(); 
await page.getByRole('checkbox').first().check()
await expect(page.getByRole('checkbox').first().isChecked()).toBeTruthy()

// Another way to get check box using xpath
//await page.locator("//input[@type='checkbox'][1]").check()


await page.locator("//input[@type='checkbox'][2]").uncheck()
// Another way to get 2nd checkbox 
//await page.getByRole('checkbox').nth(1).uncheck()
}
)