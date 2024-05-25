const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://main--demo-qasite.netlify.app/test.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/My Testing Application/);

  await page.pause()
  await expect (page.getByTestId('1')).toContainText('johnmail@gmail.com')

  await expect (page.getByTestId('2')).toBeVisible()

  await expect (page.getByTestId('3')).toHaveAccessibleName(/developer/)

  await expect (page.getByTestId('1')).toHaveId('abc')
});

