import logindata from "../data/login"

export async function gotopage(page)
{
    await page.goto(logindata[0].URL);
}