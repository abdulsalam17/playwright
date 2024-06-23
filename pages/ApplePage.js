const { expect } = require("@playwright/test")
const LoginPage = require("../pages/LoginPage")

class ApplePageclass extends LoginPage {

    constructor(page) {
        super(page)
        this.page = page
        this.Applehover = page.getByRole('button', { name: /Mega Menu/ })
        this.Apple = page.getByRole('listitem')
            .filter({ hasText: /Apple/ })
            .getByRole('link', { name: 'Apple', exact: true })
        this.Appleheading = page.getByRole('heading', { name: 'Apple', exact: true })
        this.Filtersection = page.getByRole('heading', { name: 'Filter', exact: true }).nth(1)
        this.Filterslider = page.locator('//span[@class="ui-slider-handle ui-corner-all ui-state-default" and @style="left: 100%;"]')
            .nth(1)
        this.MinPrice = page.getByPlaceholder('Minimum Price').nth(0)
        this.Searchtextbox = page.getByPlaceholder('Search', { exact: true }).nth(1)
        this.Greencolor = page.getByRole('img', { name: 'Green' }).nth(1)
        this.Availability = page.getByText('Availability').first()
        this.stock = page.locator('#mz-filter-panel-0-3').getByText('In Stock')
        this.Large = page.locator('#mz-filter-panel-0-4').getByText('L', { exact: true })
        this.percent = page.locator('#mz-filter-panel-0-5').getByText('10% off or more')
        this.Rating = page.locator('#mz-filter-panel-0-6').getByText('& up').first()

        this.Gridview = page.locator('//button[@id="grid-view"]')
        this.Listview = page.locator('//button[@id="list-view"]')

        //  const Showlimitvalue= page.locator('#input-limit-212433').textContent()
        //  this.SLV=Showlimitvalue.textContent()

        // this.Showlimit = page.selectOption('#input-limit-212433', '15')
        this.Sortdrop = page.locator('#input-sort-212434')
        //  this.Sortdrop = page.selectOption('#input-sort-212434', 'Default')
        this.Productcompare = page.getByRole('link', { name: 'Product Compare (0)' })

        /// Assignment # 21 
        this.limitdropdown = page.locator('#input-limit-212433')
        this.applepageitems = page.locator('//div[@class="product-layout product-grid no-desc col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"]')

        // Assignment # 22 
        this.pagination = page.locator('.pagination li a')
        this.lastpage = page.getByRole('link', { name: '>|' })
        this.nextpage = page.getByRole('link', { name: '>', exact: true })
        this.previouspage = page.getByRole('link', { name: '<', exact: true })
        this.firstpage =page.getByRole('link', { name: '|<', exact: true })
    }

    async AppleSection() {
        await this.Applehover.hover()
        await this.Apple.click()
        await expect(this.Appleheading).toBeVisible()
    }

    async Filter() {
        await expect(this.Filtersection).toBeVisible()
        await expect(this.Filterslider).toBeVisible()
        await expect(this.MinPrice).toBeVisible()
    }

    async Search() {
        await expect(this.Searchtextbox).toBeVisible()
    }

    async Color() {
        await expect(this.Greencolor).toBeVisible()
    }

    async Availabilitycheck() {
        await expect(this.Availability).toBeVisible()
        await expect(this.stock).toBeVisible()
    }

    async Size() {
        await expect(this.Large).toBeVisible()
    }

    async Discount() {
        await expect(this.percent).toBeVisible()
    }

    async Ratingsection() {
        await expect(this.Rating).toBeVisible()
    }

    async Gridsection() {
        await expect(this.Gridview).toBeVisible()
    }

    async ListviewSection() {
        await expect(this.Listview).toBeVisible()
    }

    async showlimitvalidation() {
        let status = false
        let arr = [15, 25, 50, 75, 100]
        for (let i = 0; i < arr.length; i++) {
            if (Showlimitvalue.includes(arr[i])) {
                status = true
            }

            else {
                status = false
                break
            }

        }
        await expect(status).toBeTruthy()
        console.log(this.Showlimitvalue)
    }

    // async Showlimitection() {
    //     await expect(this.Showlimit).toBeTruthy()
    // }

    async Sortdropsection() {
        await expect(this.Sortdrop.selectOption('Default')).toBeTruthy()
    }

    async Productcomparesection() {
        await expect(this.Productcompare).toBeVisible()
    }

    /////////// Assignment #21 ////////

    
    async Resetdropdown()
    {
        await this.pagination.nth(1).click()
        await this.page.waitForLoadState()
        await this.page.waitForTimeout(1000)
    }

    async Limitdropdowntask15() {
        await this.limitdropdown.selectOption('15')
        await this.page.waitForTimeout(1500)
        let countitems = await this.applepageitems.count()
        await expect(this.applepageitems).toHaveCount(countitems)
    }

    async Limitdropdowntask25() {
        await this.limitdropdown.selectOption('25')
        await this.page.waitForTimeout(1500)
        let countitems = await this.applepageitems.count()
        await expect(this.applepageitems).toHaveCount(countitems)
    }

    async Limitdropdowntask50() {
        await this.limitdropdown.selectOption('50')
        await this.page.waitForTimeout(1500)
        let countitems = await this.applepageitems.count()
        await expect(this.applepageitems).toHaveCount(countitems)
    }

    async Limitdropdowntask100() {
        await this.limitdropdown.selectOption('100')
        await this.page.waitForTimeout(1500)
        let countitems = await this.applepageitems.count()
        await expect(this.applepageitems).toHaveCount(countitems)
        await this.limitdropdown.selectOption('15')
        await this.page.waitForTimeout(1500)

         }

    /////////// Assignment #22 ////////


    async Navigatalltolastpage() {
       
        for (let i = 2; i < await this.pagination.count(); i++) {
            await this.pagination.nth(i).click()
            await this.page.waitForLoadState()
            await this.page.waitForTimeout(1500)
            let count = await this.applepageitems.count()
            await expect(await this.applepageitems).toHaveCount(count)
        }
    }

    async Navigatetolastpage() {
        await this.pagination.nth(1).click()
        await this.page.waitForLoadState()
        await this.page.waitForTimeout(1500)
        if (await this.lastpage.isEnabled()) {
            await this.lastpage.click()
            await this.page.waitForTimeout(1500)
            let count = await this.applepageitems.count()
            await expect(await this.applepageitems).toHaveCount(count)

        }

    }

    async NavigatetoNextpage() {
        await this.pagination.nth(1).click()
        await this.page.waitForLoadState()
        await this.page.waitForTimeout(1500)
        if (await this.nextpage.isEnabled()) {
            await this.nextpage.click()
            await this.page.waitForTimeout(1500)
            let count = await this.applepageitems.count()
            await expect(await this.applepageitems).toHaveCount(count)
        }

    }

    async NavigatetoPreviouspage() {
        await this.pagination.nth(3).click()
        await this.page.waitForLoadState()
        await this.page.waitForTimeout(1500)
        if (await this.previouspage.isEnabled()) {
            await this.previouspage.click()
            await this.page.waitForTimeout(1500)
            let count = await this.applepageitems.count()
            await expect(await this.applepageitems).toHaveCount(count)
        }
    }

    async NavigatetoFirstpage() {
        await this.pagination.nth(2).click()
        await this.page.waitForLoadState()
        await this.page.waitForTimeout(1500)
        if (await this.firstpage.isEnabled()) {
            await this.firstpage.click()
            await this.page.waitForTimeout(1500)
            let count = await this.applepageitems.count()
            await expect(await this.applepageitems).toHaveCount(count)
        }

    }

}
module.exports = ApplePageclass