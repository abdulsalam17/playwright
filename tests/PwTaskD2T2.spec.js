const {test,expect} = require('@playwright/test')

test('Task2',async ({page}) => {

    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await expect(page).toHaveTitle(/Xpath Practice Page | Shadow dom, nested shadow dom, iframe, nested iframe and more complex automation scenarios/);
})