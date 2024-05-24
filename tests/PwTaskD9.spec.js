const { test, expect } = require('@playwright/test')

test('Task2', async ({ page }) => {

    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await expect(page).toHaveTitle(/Xpath Practice Page | Shadow dom, nested shadow dom/);

    await page.pause()

    await expect(page.getByText(/Inspect this element, you will see comment just below/)).toBeVisible()

    // getbytitle()
    await page.getByTitle('Email').click()
    await page.getByTitle('Email').fill('abdul@gmail.com')

    // getbyplaceholder()
    await expect(page.getByPlaceholder('Enter Password')).toBeEditable()
    await page.getByPlaceholder('Enter Password').click()
    await page.getByPlaceholder('Enter Password').fill('123456@')

    //getbylabel()
    await page.getByLabel('Choose a car:').click()

    // getbyAltText All images should have an alt attribute that describes the image. You can locate an image based on the text alternative using page.getByAltText().
    await page.getByAltText('SH_512x512').click()

    //getbytext()
    // await page.getByText(/Today's Special Offer/).click()

})