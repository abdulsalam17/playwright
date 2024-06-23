import { Module } from "module";
import logindata from "../data/login"


export async function gotopage(page)
{
   // await page.goto(logindata[0].URL);
   await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8');

}
module.exports={gotopage}