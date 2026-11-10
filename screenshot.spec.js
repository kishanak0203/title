import { test, expect } from '@playwright/test';

test('home page screenshot', async ({ page }) => {
  //launching url
  await page.goto('https://www.amazon.in/');
  await page.waitForTimeout(5000)
await page.screenshot({path:'tests/screenshots/'+'homepage.png'})
})
test('full page screenshot', async ({ page }) => {
  //launching url
  await page.goto('https://www.amazon.in/');
  await page.waitForTimeout(5000)
await page.screenshot({path:'tests/screenshots/'+'fullpage.png',fullPage:true})
})
test('element screenshot', async ({ page }) => {
  //launching url
  await page.goto('https://www.amazon.in/s?k=iphone+17+pro&crid=1NKKY53T2WLYL&sprefix=%2Caps%2C615&ref=nb_sb_ss_recent_7_0_recent');
  await page.waitForTimeout(3000)
const element=await page.locator('#a-autoid-1-announce')
await element.screenshot({path:'tests/screenshots/'+'element.png'})
await expect(element).toHaveText('Add to cart')
await page.waitForTimeout(3000)

})