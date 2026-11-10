import { test, expect } from '@playwright/test';

test('suggestion verification', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/autocomplete#google_vignette');
  await page.locator('#country').fill('in')
  await page.waitForSelector('#countryautocomplete-list div')
  const suggestion = await page.$$('#countryautocomplete-list div')
  for(const suggest of suggestion) {
    const text = await suggest.textContent();
    console.log(text);
    if(text.includes('India')){
        await suggest.click();
        await page.waitForTimeout(3000);
        break;
    }
  
      
  }



})