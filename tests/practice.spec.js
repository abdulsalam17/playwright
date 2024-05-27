const { test, expect } = require('@playwright/test')

test('practice', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', {name: 'username'}).click()
    await page.getByRole('textbox', {name: 'username'}).fill('Admin')

    await page.getByPlaceholder('Password').click()
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button', {name:'Login'}).click()

    //await page.pause()
    await expect(page.locator('//p[@class="oxd-userdropdown-name"]')).toContainText('Test 7Test 47Test 93 testRigor')
  
  
    await page.locator('//a[@class="oxd-userdropdown-link"]/following::a[3][@class="oxd-userdropdown-link"]]').click()

   
await page.getByRole('link',{name:'Logout'}).click()
    // Get radio by id
    // await page.locator('id=radioId').check()

    // Get radio by xpath
    // await page.locator("//input[@class='radioclass']").check()

    // // Get radio by xpath combination
    // page.locator('//input[@type="radio" and @value="Not sure"]').check()

    // await page.locator('//input[@type="radio" and @value="No"][3]').check()


    // Get by value
   // await page.locator("input[value='Radio1']").check()

   await page.waitForTimeout(3000)
})
