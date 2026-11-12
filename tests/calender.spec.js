import { test, expect } from '@playwright/test';

test('calender handling', async ({ page }) => {
  //launching url
  await page.goto('https://testautomationpractice.blogspot.com/');

 const date='2';
 const month='May';
 const year='2027';

 await page.click('//input[@id="txtDate"]')

 while(true){
const currentyear=await page.locator('//select[@class="ui-datepicker-year"]//option[@selected="selected"]').textContent()
const currentmonth=await page.locator('//select[@class="ui-datepicker-month"]//option[@selected="selected"]').textContent()

    if(currentyear === year && currentmonth === month){

         break;
      }
     await page.locator('[title="Next"]').click()

    }
const datepick=await page.$$('//td[@data-handler="selectDay"]//a')

for(const dt of datepick){
 if(await dt.textContent() ==date){
     await dt.click()
     break;
 }
}
     await page.waitForTimeout(3000)
})
// test('calender handling', async ({ page }) => {
//   //launching url
//   await page.goto('https://testautomationpractice.blogspot.com/');

//   await page.click('#start-date')

//   const date="2"
//  const month="May"
//  const year="2027"

//  while(true){
// const currentyear=await page.locator('').textContent()
// const currentmonth=await page.locator('').textContent()

//     if(currentyear == year && currentmonth == month){

//          break;
//       }
//      await page.locator('').click()

//     }
// const datepick= page.$$('')

// for(const dt of datepick){
//  if(await dt.textContent() ==date){
//      await dt.click()
//      break;
//  }
// }
//      await page.waitForTimeout(3000)


// })