const {expect, chromium} = require('@playwright/test');

 async function globalsetup()
{

    const browser=await chromium.launch({ headless: false });
    const context= await browser.newContext();
    const loginpage=await context.newPage();

    await loginpage.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')

    await loginpage.getByPlaceholder('E-Mail Address').click()
    await loginpage.getByPlaceholder('E-Mail Address').fill('abdul128@gmail.com')

    await loginpage.getByPlaceholder(/Password/, { exact: true }).click()
    await loginpage.getByPlaceholder(/Password/, { exact: true }).fill('123456')

    await loginpage.getByRole('button', { name: 'Login' }).click()

    await expect(loginpage.getByText('Edit your account information')).toBeVisible()

    await loginpage.context().storageState({path:"./LoginAuth.json"})

}
export default globalsetup