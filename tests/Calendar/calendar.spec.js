import { expect, test } from "@playwright/test";
import moment from "moment";


test("Calendar - Date selection using fill function", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  let date = "1994-12-04";


  await page.fill("id=birthday", date);
  await page.waitForTimeout(3000);
});


test.only("Calendar - Date selection using moment", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  await page.click("//input[@placeholder='Start date']");
  await page.waitForTimeout(1000);

  //await selectDate(27, "July 2024");
  await selectDate(12, "December 2023");


  await page.waitForTimeout(1000);
  await page
    .getByRole("heading", { name: "Bootstrap Date Pickers Demo" })
    .click();


    // Another way to fix the issue is clear the End date first
  // await page.locator("//input[@placeholder='End date']").clear()
  await page.click("//input[@placeholder='End date']");


  await page.waitForTimeout(1000);


  //await selectDate(22, "November 2025");
await selectDate(27, "June 2024");

  await page.waitForTimeout(1000);
  await page
    .getByRole("heading", { name: "Bootstrap Date Pickers Demo" })
    .click();

  async function selectDate(date, dateToSelect) {

    const mmYY = page.locator(
      "(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]"
    );
    const prev = page.locator(
      "(//table[@class='table-condensed']//th[@class='prev'])[1]"
    );
    const next = page.locator(
      "(//table[@class='table-condensed']//th[@class='next'])[1]"
    );


    // Fixed the code by passing current month in isBefore() method

    const current= moment().format('MMMM YYYY')
    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore(current);

    console.log("this month? " + thisMonth);
    console.log("date is ", date);
    console.log("date to select is ", dateToSelect);
    console.log("test" + await mmYY.textContent())
    console.log("test format data" + moment().format('MMMM YYYY'))

     while ((await mmYY.textContent()) != dateToSelect) {

      if (thisMonth) {
                await prev.click();
              } 
      else {
        await next.click();
      }
    }
    await page.waitForTimeout(2000);
    await page.click(`//td[@class='day'][text()='${date}']`);

       await page
      .getByRole("heading", { name: "Bootstrap Date Pickers Demo" })
      .click();


    await page.waitForTimeout(3000);
  }
});


