const { test, chromium } = require("@playwright/test")

import logindata from "../../data/login"
import applepage from "../../pages/ApplePage"
import login from "../../pages/LoginPage"


test.describe('Login Test Suite', async () => {

    let browser;
    let context;
    let loginpage;
    let Applepage;
      //   let loginsite;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        loginpage = await context.newPage();
        Applepage = new applepage(loginpage)
        await Applepage.login()   
    })

    test(`Apple Section`, async () => {
         await Applepage.AppleSection()
    })


    test(`Dropdown 15`, async () => {
        await Applepage.Limitdropdowntask15()
   })

   test(`Dropdown 25`, async () => {
    await Applepage.Limitdropdowntask25()
})

test(`Dropdown 50`, async () => {
    await Applepage.Limitdropdowntask50()
})

test(`Dropdown 100`, async () => {
    await Applepage.Limitdropdowntask100()
})


})