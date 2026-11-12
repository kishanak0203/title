import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  //launching url
  await page.goto('https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26useRedirectOnSuccess%3D1%26signIn%3D1%26action%3Dsign-out%26ref_%3Dnav_AccountFlyout_signout&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
//login
const username=await page.locator('#ap_email_login').fill('kishanmasfj@gmail.com')
await page.locator('#continue').click()
const password=await page.locator('#ap_password').fill('kishan0203')
await page.locator('#signInSubmit').click()//before all
await page.waitForTimeout(4000)
//search
await page.locator('#twotabsearchtextbox').fill('iphone 17 pro')
await page.locator('#nav-search-submit-button').click()
//product visible
const apple=await page.getByText('iPhone 17 Pro 256 GB: 15.93 cm (6.3″) Display with Promotion up to 120Hz, A19 Pro Chip, Breakthrough Battery Life, Pro Fusion Camera System with Center Stage Front Camera; Cosmic Orange');
await expect(apple).toHaveText('iPhone 17 Pro 256 GB: 15.93 cm (6.3″) Display with Promotion up to 120Hz, A19 Pro Chip, Breakthrough Battery Life, Pro Fusion Camera System with Center Stage Front Camera; Cosmic Orange')
//cart
const applecart=await page.locator('#a-autoid-1-announce')
await applecart.click()
console.log('apple added to cart')
})

test('test2', async ({ page }) => {
  //launching url
  await page.goto('https://www.amazon.in/s?k=iphone+17+pro&crid=KKTDAB8OYIAM&sprefix=%2Caps%2C321&ref=nb_sb_ss_recent_2_0_recent')

  const iphone18=await page.locator('//h2[@aria-label="Sponsored Ad - iPhone 18 Pro (256 GB) - Silver"]')
await expect(iphone18).toHaveText('iPhone 18 Pro (256 GB) - Silver')
//cart
const iphone18cart=await page.locator('#a-autoid-2-announce')
await iphone18cart.click()
console.log('iphone18 added to cart')
})

test('test3', async ({ page }) => {
  //launching url
  await page.goto('https://www.amazon.in/s?k=iphone+17+pro&crid=KKTDAB8OYIAM&sprefix=%2Caps%2C321&ref=nb_sb_ss_recent_2_0_recent')

  const iphone17=await page.getByText('iPhone 17 Pro 256 GB: 15.93 cm (6.3″) Display with Promotion up to 120Hz, A19 Pro Chip, Breakthrough Battery Life, Pro Fusion Camera System with Center Stage Front Camera; Deep Blue')
await expect(iphone17).toHaveText('iPhone 17 Pro 256 GB: 15.93 cm (6.3″) Display with Promotion up to 120Hz, A19 Pro Chip, Breakthrough Battery Life, Pro Fusion Camera System with Center Stage Front Camera; Deep Blue')
//cart
const iphone17cart=await page.locator('#a-autoid-3-announce')
await iphone17cart.click()
console.log('iphone17 added to cart')
})
test('test4', async ({ page }) => {
  //launching url
  await page.goto('https://www.amazon.in/s?k=iphone+17+pro&crid=KKTDAB8OYIAM&sprefix=%2Caps%2C321&ref=nb_sb_ss_recent_2_0_recent')
//signout
  const signout=await page.locator('#nav-link-accountList').hover()
  await page.getByText('Sign Out').click()

})