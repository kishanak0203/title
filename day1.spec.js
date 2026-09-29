import {test,expect} from '@playwright/test';
test('verify google page title and url',async({page})=>{
    await page.goto('https://www.google.com/');
    const title = await page.title();
    console.log('Page title is:', title);
    await expect(page).toHaveTitle('Google');
    const url = await page.url();
    console.log('Page URL is:', url);
    await expect(page).toHaveURL('https://www.google.com/');
    await page.waitForTimeout(3000); // Wait for 3 seconds before closing the browser
});

test('verify myntra page title and url',async({page})=>{
    await page.goto('https://www.myntra.com/login/password');
    const title = await page.title();
    console.log('Page title is:', title);
    await expect(page).toHaveTitle('mass');
    const url = await page.url();
    console.log('Page URL is:', url);
    await expect(page).toHaveURL('https://www.myntra.com/login/password');
    await page.waitForTimeout(3000); // Wait for 3 seconds before closing the browser
});

