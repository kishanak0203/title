import { test, expect } from '@playwright/test';
//Use test.only to run the specific test
test.only('test1', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/bookstore/user/signin');
  await page.locator('#email').fill('kishanmasfj@gmail.com');
  await page.locator('#password').fill('kishan0203');
  await page.locator('[type="submit"]').click();
  await page.getByRole('link', { name: 'All Books' }).click();
})

test('test2', async ({ page }) => {
 await page.goto('https://practice.expandtesting.com/bookstore/user/signin');
  await page.locator('#email').fill('kishanmasfj@gmail.com');
  await page.locator('#password').fill('kishan0203');
  await page.locator('[type="submit"]').click();
  await page.getByRole('link', { name: 'All Books' }).click();

  const productName = 'JavaScript for Web Developers';
  const productTitles = page.locator('.card-title');
  const product = productTitles.filter({ hasText: productName }).first();
  await expect(product).toBeVisible();
  await product.click();
})
//Use test.skip to skip the test
test.skip('test3', async ({ page }) => {
 await page.goto('https://practice.expandtesting.com/bookstore/user/signin');
  await page.locator('#email').fill('kishanmasfj@gmail.com');
  await page.locator('#password').fill('kishan0203');
  await page.locator('[type="submit"]').click();
  await page.getByRole('link', { name: 'All Books' }).click();
})
// test.fixme also used to skip the test
test.fixme('test4', async ({ page }) => {
 await page.goto('https://practice.expandtesting.com/bookstore/cart');
  await page.getByRole('link', { name: 'All Books' }).click();
  const productName = 'JavaScript for Web Developers';
  const productTitles = page.locator('.card-title');
  const product = productTitles.filter({ hasText: productName }).first();
  await expect(product).toBeVisible();
  await product.click();
})
//test.fail used to fail the correct test and pass the test which is wrong
test.fail('test5', async ({ page }) => {
 await page.goto('https://practice.expandtesting.com/bookstore/user/signin');
  await page.locator('#email').fill('kishanmasfj@gmail.com');
  await page.locator('#password').fill('kishan0203');
  await page.locator('[type="submit"]').click();
  await page.getByRole('link', { name: 'All Books' }).click();
})//this test is correct but expected to fail

test.fail('test6', async ({ page }) => {
 await page.goto('https://practice.expandtesting.com/bookstore/cart');
  const productName = 'JavaScript ';
  const productTitles = page.locator('.card-title');
  const product = productTitles.filter({ hasText: productName }).first();
  await expect(product).toHaveText('This assertion is expected to fail');
  await product.click();//this test is wrong but expected to pass

})