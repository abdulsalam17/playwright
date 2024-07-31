const {expect, chromium} = require('@playwright/test');
import logindata from "../project1/data/login"

 async function globalsetup()
{

    const browser=await chromium.launch({ headless: false });
    const context= await browser.newContext();
    const loginpage=await context.newPage();

    await loginpage.goto(logindata[0].loginURL)

    await loginpage.getByPlaceholder('E-Mail Address').click()
    await loginpage.getByPlaceholder('E-Mail Address').fill(logindata[0].username)

    await loginpage.getByPlaceholder(/Password/, { exact: true }).click()
    await loginpage.getByPlaceholder(/Password/, { exact: true }).fill(logindata[0].password)

    await loginpage.getByRole('button', { name: 'Login' }).click()

    await expect(loginpage.getByText('Edit your account information')).toBeVisible()

    await loginpage.context().storageState({path:"./LoginAuth.json"})

}
export default globalsetup