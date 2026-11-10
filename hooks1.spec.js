import { test, expect, chromium } from '@playwright/test';
let browser;
let page;
test.beforeAll(async () =>{
  //browser= await chromium.launch({headless:false})
 // page= await browser.newPage()
  //await page.goto('https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26useRedirectOnSuccess%3D1%26signIn%3D1%26action%3Dsign-out%26ref_%3Dnav_AccountFlyout_signout&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')
console.log('test started')
})

test.beforeEach(async ({ page}) => {
    await page.goto('https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26useRedirectOnSuccess%3D1%26signIn%3D1%26action%3Dsign-out%26ref_%3Dnav_AccountFlyout_signout&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
//login
await page.locator('#ap_email_login').fill('kishanmasfj@gmail.com')//username
await page.locator('#continue').click()
await page.locator('#ap_password').fill('kishan0203')//password
await page.locator('#signInSubmit').click()
await page.waitForTimeout(4000)
  await page.locator('#twotabsearchtextbox').fill('iphone 17 pro')
await page.locator('#nav-search-submit-button').click()
await page.waitForTimeout(3000)
})

test.describe('group1',() =>{
test('test1',async({page}) =>{

const apple=await page.locator('//h2[@aria-label="iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; White"]')
await page.waitForTimeout(3000)
await expect(apple).toHaveText('iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; White')
//cart
const applecart=await page.locator('#a-autoid-5').first()
await applecart.click()
console.log('apple added to cart')
})

test('test2', async ({ page }) => {

  const iphone18=await page.locator('//h2[@aria-label="Sponsored Ad - iPhone 18 Pro (256 GB) - Silver"]').first()
await expect(iphone18).toHaveText('iPhone 18 Pro (256 GB) - Silver')
//cart
const iphone18cart=await page.locator('#a-autoid-2').first()
await iphone18cart.click()
console.log('iphone18 added to cart')
})
})
test.describe('group2',() =>{
test('test3', async ({ page }) => {

  const iphone17=await page.locator('//h2[@aria-label="iPhone 17 Pro 256 GB: 15.93 cm (6.3″) Display with Promotion up to 120Hz, A19 Pro Chip, Breakthrough Battery Life, Pro Fusion Camera System with Center Stage Front Camera; Deep Blue"]')
  await page.waitForTimeout(3000)
await expect(iphone17).toHaveText('iPhone 17 Pro 256 GB: 15.93 cm (6.3″) Display with Promotion up to 120Hz, A19 Pro Chip, Breakthrough Battery Life, Pro Fusion Camera System with Center Stage Front Camera; Deep Blue')
//cart
const iphone17cart=await page.locator('#a-autoid-1').first()
await iphone17cart.click()
console.log('iphone17 added to cart')
})
})
test.afterEach(async ({page}) =>{
    await page.locator('#nav-link-accountList').hover()
  await page.getByText('Sign Out').click()
   console.log('test completed and started next test')
   await page.waitForTimeout(3000)
})
test.afterAll(async () =>{
     console.log('all test completed')
})

