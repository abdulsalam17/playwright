const { test, expect, chromium } = require('@playwright/test')

import logindata from "..//data/login"

test.describe("D1", async () => {

    let browser;
    let context;
    let loginpage;

    test.beforeAll('beforeall', async () => {

        browser = await chromium.launch({ headless: false })
        context = await browser.newContext()
        loginpage = await context.newPage()

    })


    for (let i = 0; i < logindata.length; i++) {

        test(`${i}`, async () => {

            await loginpage.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
        })
        await loginpage.getByRole('textbox', {name:'First Name'}).click()
        await loginpage.getByRole('textbox', {name:'First Name'}).fill(logindata[i].username)
    }
    
})