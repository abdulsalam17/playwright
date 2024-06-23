const { test, chromium } = require("@playwright/test")

import logindata from "../../data/login"
import applepage from "../../pages/ApplePage"

test.describe('Login Test Suite', async () => {

    let browser;
    let context;
    let loginpage;
    let Applepage;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        loginpage = await context.newPage();
        Applepage = new applepage(loginpage)
        await Applepage.login()
        await Applepage.AppleSection()
    })

     test (`Dropdown 15`, async () => {
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

    test (`Navigatealltolastpage`, async () => {
        await Applepage.Navigatalltolastpage()
    })

    test (`Navigatolastpage`, async () => {
        await Applepage.Navigatetolastpage()
    })

    test (`Navigatonextpage`, async () => {
        await Applepage.NavigatetoNextpage()
    })
   
    test (` NavigatetoPreviouspage`, async () => {
        await Applepage. NavigatetoPreviouspage()
    })

    test (` NavigatetoFirstpage`, async () => {
        await Applepage. NavigatetoFirstpage()
    })
})