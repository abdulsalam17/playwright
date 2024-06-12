import logindata from "../data/login"

class LoginPage {

    constructor(page) {
        this.page = page
        this.siteaccess = page.goto(logindata[0].URL);
        this.storetitle = page.toHaveTitle('Your Store')
        this.myaccount = page.getByRole('button', { name: /My account/ })
        this.Loginlink = page.getByRole('link', { name: 'Login' })
        this.Verifyloginpage = page.getByRole('heading', { name: 'Returning Customer' })
        this.EmailAddress = page.getByPlaceholder('E-Mail Address')
        this.Password = page.getByPlaceholder(/Password/, { exact: true })
        this.LoginButton = page.getByRole('button', { name: 'Login' })
        this.Accountinfo = page.getByText(' Edit your account information')
    }

    async login() {
        await this.siteaccess;
        await expect(this.storetitle).toBeVisible();
        await this.myaccount.hover()
        await expect(this.Loginlink).toBeVisible()
        await this.Loginlink.click()
        await expect(this.Verifyloginpage).toBeVisible()
        await this.EmailAddress.click()
        await this.EmailAddress.fill(logindata[0].username)
        await this.Password.click()
        await this.Password.fill(logindata[0].password)
        await this.LoginButton.click()
        await expect(this.Accountinfo).toBeVisible()
    }
}

module.exports = LoginPage