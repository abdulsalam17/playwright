const {test,expect, chromium} =  require('@playwright/test')
const exp = require('constants')

import applepage from "../../pages/ApplePage"

test.describe('Login Test Suite', async () => {

    let browser;
    let context;
    let cartpage;
    let Applepage;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        cartpage = await context.newPage();
        Applepage = new applepage(cartpage)
        //  loginsite = new login(loginpage)
        await Applepage.login()   
        await Applepage.AppleSection()
    })

test('Out of stock', async() => {

  //  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8')
  //  await page.pause()
  
  await cartpage.getByRole('link', {name:'iPod Touch iPod Touch iPod'}).click()
//
await cartpage.waitForTimeout(2000)

    
    //await expect(page.getByText('Out Of Stock').isVisible())
    
     if (cartpage.locator('//span[@class="badge badge-danger"]').isVisible())
        {
           await expect(cartpage.getByRole('button',{name:'Out Of Stock'}).nth(1)).toBeDisabled()
            
        }
})

test.only('Add cart', async() => {

  //  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8')
   await cartpage.getByRole('link', {name:'iPod Shuffle iPod Shuffle'}).click()
//
//await page.waitForTimeout(2000)

    
    //await expect(page.getByText('Out Of Stock').isVisible())
    
     if (cartpage.locator('//span[@class="badge badge-success"]').isVisible())
        {
        //   await expect(page.getByRole('button',{name:'Add to Cart'}).nth(1)).toBeVisible()
           await cartpage.getByRole('button',{name:'Add to Cart'}).click()
           await expect(cartpage.getByRole('link', {name:/View Cart/})).toBeVisible()
           await cartpage.getByRole('link', {name:/View Cart/}).click()
           await cartpage.waitForTimeout(2000)
           //await expect(page.getByRole('cell',{name:'iPod Shuffle', exact:true}).getByRole('link')).toBeVisible()
            await expect(cartpage.locator('#content').getByText('iPod Shuffle')).toBeVisible()
            await cartpage.getByRole('link', {name:'Checkout'}).click()
            await cartpage.waitForTimeout(2000)
            if(await cartpage.getByRole('textbox',{name:'First Name'}).isVisible())
                {
                    await cartpage.getByRole('textbox',{name: 'First Name'}).fill('Test user1')
                    await cartpage.getByRole('textbox',{name: 'Last Name'}).fill('Byte')
                    await cartpage.getByRole ('textbox',{name: 'Address 1'}).fill('Address 1')
                    await cartpage.getByRole('textbox',{name: 'City'}).fill('City')
                    await cartpage.getByRole('textbox',{name: 'Post Code'}).fill('Post Code')
                   // 
                    await cartpage.locator('#input-payment-country').selectOption('United Arab Emirates')
                    await cartpage.waitForTimeout(2000)
                    await cartpage.locator('#input-payment-zone').selectOption('Dubai')
               //     await page.locator('#custom-select')
              // await cartpage.pause()
                    await cartpage.getByText('I have read and agree to the Terms & Conditions').click()
                    await cartpage.getByRole('button', {name:/Continue/}).click()

                }

        }
})

})