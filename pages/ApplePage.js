const { expect } = require("@playwright/test")
const LoginPage= require("../pages/LoginPage")

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
       // this.Showlimit = page.selectOption('#input-limit-212433', '15')
        // this.Sortdrop = page.selectOption('#input-sort-212434', 'Default')
        this.Productcompare = page.getByRole('link', { name: 'Product Compare (0)' })

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

    // async Showlimitection() {
    //     await expect(this.Showlimit).toBeTruthy()
    // }

    // async Sortdropsection() {
    //     await expect(this.Sortdrop).toBeTruthy()
    // }

    async Productcomparesection() {
        await expect(this.Productcompare).toBeVisible()
    }


}
module.exports = ApplePageclass