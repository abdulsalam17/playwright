import { test, expect } from '@playwright/test';
import { title } from 'process';
import { text } from 'stream/consumers';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.pause()
  await page.getByRole('textbox', { name: 'Search For Products' }).click();
  await page.getByRole('textbox', { name: 'Search For Products' }).fill('nikon');
  await page.getByRole('button', { name: 'Search' }).click();


 await expect(page.locator("//h1[normalize-space()='Search - nikon' and @class='h4']")).toBeVisible()
  //expect(page.locator('title= Poco Theme')).toHaveClass(/nikon/)
  //await expect(page.locator('//div[@class="h4"]'))
  // await expect(page.locator('text=Search - nikon'))
})