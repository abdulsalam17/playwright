const { test, expect, chromium } = require("@playwright/test")

import logindata from "../../data/login"
import applepage from "../../pages/ApplePage"
import login from "../../pages/LoginPage"

test.describe('Login Test Suite', async () => {

    let browser;
    let context;
    let loginpage;
    
    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        loginpage = await context.newPage();
    })

    test (`Apple Section`, async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.login()
        await Applepage.AppleSection()

    })

    test('Filter Section', async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.Filter()
    })

    test('Search Section', async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.Search()

    })

    test('Color Section', async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.Color()

    })

    test('Availabilitycheck Section', async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.Availabilitycheck()

    })

    test('Size Section', async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.Size()

    })

    test('Discount Section', async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.Discount()

    })

    test('Ratingsection Section', async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.Ratingsection()

    })

    test('Gridsection Section', async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.Gridsection()

    })

    test('ListviewSection Section', async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.ListviewSection()

    })
    test ('Showlimitection Section', async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.Showlimitection()

    })

    test ('Sortdropsection Section', async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.Sortdropsection()
    })

    test('Productcomparesection Section', async () => {

        const Applepage = new applepage(loginpage)
        await Applepage.Productcomparesection()

    })



})