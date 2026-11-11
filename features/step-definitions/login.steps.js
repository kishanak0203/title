import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60*1000)
import { chromium } from '@playwright/test';

let browser;
let context;
let page;
Given('the user is on the login page', async function () {
    browser=await chromium.launch({
        headless:false
    })
    context=await browser.newContext()
    page=await context.newPage()
    console.log('Opening login page');

    await page.goto('https://www.saucedemo.com/');

    console.log('Login page opened successfully');
});

When('the user enters a valid username and password', async function () {
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    
});

When('clicks the login button', async function () {
    await page.locator('#login-button').click()
})

Then('the home page should be displayed', async function () {
    const title = await page.title();
    console.log('Page title:', title);
    await browser.close()
});