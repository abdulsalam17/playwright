import regdata from "../data/register"
const { expect } = require("@playwright/test")

class Registerpageclass {

    constructor(page) {
        this.page = page
        this.Myaccount = page.getByRole('button', { name: /My account/ })
        this.FirstName_Textbox = page.getByPlaceholder('First Name')
        this.LastName_Textbox = page.locator('id=input-lastname')
        this.Email_Textbox = page.getByPlaceholder('E-Mail')
        this.Mobile_Textbox = page.getByPlaceholder('Telephone')
        this.Password_Textbox = page.getByPlaceholder('Password', { exact: true })
        this.PasswordConfirm_Textbox = page.getByPlaceholder('Password Confirm')
        this.Newsletter_radiobuttons = page.locator('//label[@class="custom-control-label" and @for="input-newsletter-yes"]')
        this.Termscodition_checkbox = page.getByText('I have read and agree')
        this.Continue_button = page.getByRole('button', { name: 'Continue' })
        this.Accountcreated_heading = page.getByRole('heading', { name: 'Your Account Has Been Created!' })
        this.Continue_accountcreated = page.getByRole('link', { name: 'Continue' })
        this.Alreadyregisteredemail = page.getByText(/ Warning: E-Mail Address is already registered!/)
    }

    async registration() {

        await this.FirstName_Textbox.click()
        await this.FirstName_Textbox.fill(regdata[0].FirstName)

        await this.LastName_Textbox.click()
        await this.LastName_Textbox.fill(regdata[0].LastName)

        // Returns random number 0-1000
        let ran = Math.floor(Math.random() * 1000)
        console.log("Random int " + ran)
        let email = 'abdul' + ran + '@gmail.com'

        await this.Email_Textbox.click()
        await this.Email_Textbox.fill(email)

        console.log(email)

        await this.Mobile_Textbox.click()
        await this.Mobile_Textbox.fill(regdata[0].Phone)

        await this.Mobile_Textbox.click()
        await this.Mobile_Textbox.fill(regdata[0].Phone)

        await this.Password_Textbox.click()
        await this.Password_Textbox.fill(regdata[0].password)

        await this.PasswordConfirm_Textbox.click()
        await this.PasswordConfirm_Textbox.fill(regdata[0].confirmpass)

        await this.Newsletter_radiobuttons.check()

        await this.Termscodition_checkbox.check()
        await expect(this.Termscodition_checkbox.isChecked()).toBeTruthy()

        await this.Continue_button.click()

        /////Check if email is already registered

        if (await this.Alreadyregisteredemail.isVisible()) {
            await this.Email_Textbox.clear()
            await this.Email_Textbox.fill('abdulsalam' + ran + '@gmail.com')
            await this.Continue_button.click()
        }

        await expect(this.Accountcreated_heading).toBeVisible()
        await expect(this.Continue_accountcreated).toBeVisible()
        await this.Continue_accountcreated.click()

    }

}

module.exports = Registerpageclass