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
        //  loginsite = new login(loginpage)
        await Applepage.login()   
        await Applepage.AppleSection()
    })

    test.skip(`Apple Section`, async () => {

        //  await loginsite.login()   create direct class obj and call login method()
       // await Applepage.login()   // Utilize login method using extend (inherited)
        await Applepage.AppleSection()

    })

    test('Filter Section', async () => {
        await Applepage.Filter()
    })

    test('Search Section', async () => {
        await Applepage.Search()
    })

    test('Color Section', async () => {
        await Applepage.Color()

    })

    test('Availabilitycheck Section', async () => {
        await Applepage.Availabilitycheck()
    })

    test('Size Section', async () => {
        await Applepage.Size()
    })

    test('Discount Section', async () => {
        await Applepage.Discount()
    })

    test('Ratingsection Section', async () => {
        await Applepage.Ratingsection()
    })

    test('Gridsection Section', async () => {
        await Applepage.Gridsection()
    })

    test('ListviewSection Section', async () => {
        await Applepage.ListviewSection()
    })

    test.skip('Showlimitection Section', async () => {
        await Applepage.showlimitvalidation()
    })

    // test ('Showlimitection Section', async () => {
    //     await Applepage.Showlimitection()
    // })

    test.skip('Sortdropsection Section', async () => {
        await Applepage.Sortdropsection()
    })

    test('Productcomparesection Section', async () => {
        await Applepage.Productcomparesection()
    })

    

})