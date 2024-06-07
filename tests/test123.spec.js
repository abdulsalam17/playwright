const { test, expect, chromium } = require("@playwright/test");
import loginData from "../data/register";
	
test.describe("Register Suite", () => {
 let browser;
 let context;
 let regPage;
 test.beforeAll(async () => {
   browser = await chromium.launch({ headless: false });
   context = await browser.newContext();
   regPage = await context.newPage();

  
 });


 // test.beforeEach(async () => {});


 for (let i = 0; i < loginData.length; i++) {
   test(`Test Case ${i + 1} `, async () => {
     // Navigate to the form page
     await regPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");

     // Fill in the "First Name" field using getByRole
     await regPage
       .getByRole("textbox", { name: "First Name" })
       .fill(loginData[i].FirstName);

     await regPage
       .getByRole("textbox", { name: "Last Name" })
       .fill(loginData[i].LastName);
   
     await regPage.waitForTimeout(1000);

     // Additional assertions or actions can be performed here

    /// page2 

    // context2 = await browser.newContext();
    // regPage2 = await context2.newPage();
    // await regPage2.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");

    // // Fill in the "First Name" field using getByRole
    // await regPage2
    //   .getByRole("textbox", { name: "First Name" })
    //   .fill(loginData[i+1].FirstName);

    // await regPage2
    //   .getByRole("textbox", { name: "Last Name" })
    //   .fill(loginData[i+1].LastName);

   });
 }
});
