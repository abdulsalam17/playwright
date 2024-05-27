const { test, expect } = require('@playwright/test');
const { AsyncLocalStorage } = require('async_hooks');

test.describe('Block1', () => {
    test('test1', async ({ page }) => {

        await page.goto('https://selectorshub.com/xpath-practice-page/');
        await expect(page).toHaveTitle(/Xpath Practice Page | Shadow dom, nested shadow dom/);
        await expect(page.getByText(/Inspect this element, you will see comment just below/)).toBeVisible()

    }
    )

    test('test2', async ({ page }) => {

        await page.goto('https://selectorshub.com/xpath-practice-page/');
        await expect(page).toHaveTitle(/Xpath Practice Page | Shadow dom, nested shadow dom/);
        // getbytitle()
        await page.getByTitle('Email').click()
        await page.getByTitle('Email').fill('abdul@gmail.com')

        // getbyplaceholder()
        await expect(page.getByPlaceholder('Enter Password')).toBeEditable()
        await page.getByPlaceholder('Enter Password').click()
        await page.getByPlaceholder('Enter Password').fill('123456@')

        // getbyrole()
        await page.getByRole('button', { name: 'Submit' }).click()
    }
    )

    test('test3', async ({ page }) => {

        //getbylabel()
        await page.goto('https://selectorshub.com/xpath-practice-page/');
        await page.getByLabel('Choose a car:').selectOption('Audi')

    }
    )

}
)

test.describe('Block2', async () => {

    test('Test4', async ({ page }) => {


        await page.goto('https://main--demo-qasite.netlify.app/test.html');

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/My Testing Application/);


    })

    test('Test5', async ({ page }) => {


        await page.goto('https://main--demo-qasite.netlify.app/test.html');

        // Expect a title "to contain" a substring.
        await expect(page.getByTestId('1')).toContainText('johnmail@gmail.com')


    })

    test('Test6', async ({ page }) => {

        await page.goto('https://ecommerce-playground.lambdatest.io/');
        await page.getByRole('textbox', { name: 'Search For Products' }).click();
        await page.getByRole('textbox', { name: 'Search For Products' }).fill('nikon');
        await page.getByRole('button', { name: 'Search' }).click();
        await expect(page.locator("//h1[normalize-space()='Search - nikon' and @class='h4']")).toBeVisible()
    })


    test('Test7', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'username' }).click()
        await page.getByRole('textbox', { name: 'username' }).fill('Admin')

        await page.getByPlaceholder('Password').click()
        await page.getByPlaceholder('Password').fill('admin123')

        await page.getByRole('button', { name: 'Login' }).click()

        //await page.pause()
        await expect(page.locator('//p[@class="oxd-userdropdown-name"]')).toContainText('Test 7Test 47Test 93 testRigor')


    })


})