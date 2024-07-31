const {test,expect}= require('@playwright/test')

test ("Environment Test", async({page}) => {

    let myURL=process.env.stageURL;
    let username=process.env.USERNAME;
    let password=process.env.PASSWORD;

    await page.goto(myURL)
    await page.getByPlaceholder('E-Mail Address').click()
    await page.getByPlaceholder('E-Mail Address').fill(username)
    await page.getByPlaceholder(/Password/, { exact: true }).click()
    await page.getByPlaceholder(/Password/).fill(password)
    await page.getByRole('button', { name: 'Login' }).click()
    await page.waitForTimeout(2000)
    await expect(page.getByText(' Edit your account information')).toBeVisible()
}
)