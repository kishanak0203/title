import { test, expect } from '@playwright/test';

test('webtable handling', async ({ page }) => {
  //launching url
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
 
const column=await page.locator('table[name="BookTable"]')
const column1=await column.locator('tbody tr th')
 console.log('count of column:', await column1.count())
 expect( await column1.count()).toBe(4)
const rows=await column.locator('tbody tr')
console.log('count of rows:', await rows.count())
expect( await rows.count()).toBe(7)

for(let i=0;i< await rows.count();i++){
   const row=rows.nth(i);
   const tds=row.locator('td')
    for(let j=0;j< await tds.count();j++){
      const text=await tds.nth(j).innerText()
      console.log(text)
    }
}
})
test('webtable page 2', async ({ page }) => {
  //launching url
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
 await page.locator('//ul[@id="pagination"]/li[2]').click()
  await page.waitForTimeout(2000)
//printing colun count and row count and then verifying those count
const column=await page.locator('#productTable')
const column1=await column.locator('thead tr th')
console.log('count of column:', await column1.count())
expect( await column1.count()).toBe(4)
const rows=await column.locator('tbody tr')
console.log('count of rows:', await rows.count())
expect( await rows.count()).toBe(5)
//single checkbox checked
const matchingrows=rows.filter({
has:page.locator('td'),
hasText:'Action Camera'
})
const checkbox=matchingrows.locator('input[type="checkbox"]').first()
await checkbox.check()
await page.waitForTimeout(2000)
//second page text content
for(let i=0;i< await rows.count();i++){
   const row=rows.nth(i);
   const tds=row.locator('td')
    for(let j=0;j< await tds.count()-1;j++){
      console.log(await tds.nth(j).textContent())
    }
}
//multiple checkbox checked
for(const name of ['Bluetooth Speaker','Television','Gaming Console','Digital Camera']){
const matchingrows=rows.filter({
has:page.locator('td'),
hasText:name
})
const checkbox=matchingrows.locator('input[type="checkbox"]').first()
await checkbox.check()
await page.waitForTimeout(3000)
}
})

test('full webtable text', async ({ page }) => {
  //launching url
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
//printing all text content of webtable 
const pages=await page.locator('.pagination li a')
console.log("count of pages:", await pages.count())
const table=await page.locator('#productTable')
const rows=await table.locator('tbody tr')

for(let k=0;k<await pages.count();k++){
  if(k>=0){
    await pages.nth(k).click()
  }
for(let i=0;i< await rows.count();i++){
   const row=rows.nth(i);
   const tds=row.locator('td')
    for(let j=0;j< await tds.count()-1;j++){
      console.log(await tds.nth(j).textContent())
    }
}
}
})
test('dynamic webtable handling', async ({ page }) => {
  //launching url
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
 
const column=await page.locator('#taskTable')
const column1=await column.locator('thead tr th')
 console.log('count of column:', await column1.count())
 expect( await column1.count()).toBe(5)
const rows=await column.locator('tbody tr')
console.log('count of rows:', await rows.count())
expect( await rows.count()).toBe(4)

for(let i=0;i< await rows.count();i++){
   const row=rows.nth(i);
   const tds=row.locator('td')
    for(let j=0;j< await tds.count();j++){
      const text=await tds.nth(j).innerText()
      console.log(text)
    }
}
})