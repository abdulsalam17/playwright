// Browser context implemented - Which uses clean slate environment at first and users same session/cookies 

const { test, expect, chromium } = require("@playwright/test")

import logindata from "../data/login"

test.describe('Login Test Suite', async () => {

    let browser;
    let context;
    let loginpage;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        loginpage = await context.newPage();
    })

    test.beforeEach(async ({ }) => {

        await loginpage.goto(logindata[0].URL);
        await expect(loginpage).toHaveTitle('Your Store');

        await loginpage.getByRole('button', { name: /My account/ }).hover()
  
        await expect(loginpage.getByRole('link', { name: 'Login' })).toBeVisible()
        await loginpage.getByRole('link', { name: 'Login' }).click()

        await expect(loginpage.getByRole('heading', { name: 'Returning Customer' })).toBeVisible()
    })


    test.afterEach(async () => {


        // log out
        await loginpage.getByRole('button', { name: /My account/ }).hover()
        await loginpage.getByRole('button', { name: /My account/ }).hover()
        await loginpage.getByRole('link', { name: 'Logout', exact: true }).click()
        await expect(loginpage.getByRole('heading', { name: 'Account Logout' })).toBeVisible()
        await loginpage.getByRole('link', { name: 'Continue', exact: true }).click()

    })

    for (let i = 0; i < logindata.length; i++) {


        test(`Login with user ${i + 1}`, async ({ }) => {

            await loginpage.getByPlaceholder('E-Mail Address').click()

            await loginpage.getByPlaceholder('E-Mail Address').fill(logindata[i].username)

            await loginpage.getByPlaceholder(/Password/, { exact: true }).click()
            await loginpage.getByPlaceholder(/Password/).fill(logindata[i].password)

            await loginpage.getByRole('button', { name: 'Login' }).click()

            await expect(loginpage.getByText(' Edit your account information')).toBeVisible()


        })
    }
})