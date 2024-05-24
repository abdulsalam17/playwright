//https://www.softwaretestinghelp.com/xpath-axes-tutorial
const {test, expect} = require('@playwright/test')

test('xpath',async ({page}) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
    await expect(page).toHaveTitle('Your Store');

    // Absolute xpath of email text field
    // let absolutexpath="/html/body/div[1]/div[5]/header/div[2]/div[1]/div[2]/div/form/div/div/div[1]/div[2]/input"
    // await page.locator(absolutexpath).click()
    // await page.locator(absolutexpath).fill('nikon')

    // Develop a XPath using wildcard asterisk - Click on search * 
    let str= '//*[@name="search" and @data-autocomplete="5"]'
    await page.locator(str).click()
    await page.locator(str).fill('nikon')


    // Child click on home
    let childxpath= '//*[@class="icon-left both nav-link active"]/child::div/span'
    await page.locator(childxpath).click()

    // descendant click menu
    let descendantval='//a[@class="icon-left both text-reset"]/descendant::span'
    await page.locator(descendantval).click()
    


    await page.waitForTimeout(2000)
})

test('xpath2nd site',async ({page}) => {

    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await expect(page).toHaveTitle(/Xpath Practice Page | Shadow dom, nested shadow dom/);
    

    // xpath preceding
    let precedingpath='//input[@id="pass"]/preceding::input[@title="Email" or @type="email"]'
    await page.locator(precedingpath).click()
    await page.locator(precedingpath).fill("abdul@gmail.com")

    // xpath preceding-sibling
    let precedingsibling='//input[@id="pass"]/preceding-sibling::input'
    await page.locator(precedingsibling).click()
    await page.locator(precedingsibling).fill("abdul@gmail.com")


    //xpath following 
    // let following='//input[@id="shub7"]/following::input[@name="Password"]'
    // await page.locator(following).click()
    // await page.locator(following).fill('password')

    // // xpath following-sibling
    // let followingsib='//input[@id="shub7"]/following-sibling::input[@name="Password"]'
    // await page.locator(followingsib).click()
    // await page.locator(followingsib).fill("abdul@gmail.com")

    //XPath using combination of parent and following-sibling axes
    // let parentfollowing='//div[@class="userform"]/descendant::input/preceding-sibling::input[@name="company"]'
    // await page.locator(parentfollowing).fill("company name")

    // //XPath using combination of ancestor and following axes
    // let ancestorefollowing='//input[@id="shub7"]/ancestor::div/following::input[@name="chkSelectRow[]" and @value="14"]'
    // await page.locator(ancestorefollowing).check()
    
////div[@class="Mammal"]/descendant::div/preceding-sibling::div


    let precedingchild='//td[normalize-space()="Garry.White"]/preceding-sibling::td/child::input'
    await page.locator(precedingchild).check()

})