import { test, expect } from '@playwright/test';

test('new tab handling', async ({ page,browser }) => {
const context= await browser.newContext()
const page1=await context.newPage()
const page2=await context.newPage()
const alltab=context.pages()
console.log('count of tabs:'+alltab.length)
await page1.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
console.log('page1 url: ' + page1.url())
console.log('page1 title: '+ await page1.title())

await page2.goto('https://practice.expandtesting.com/')
console.log('page2 url: '+ page2.url())
console.log('page2 title: '+ await page2.title())
await page.waitForTimeout(3000)
})

test('multiple tab handling', async ({ page,context }) => {
await page.goto('https://vinothqaacademy.com/multiple-windows/')
console.log('page1 url :'+page.url())
console.log('page1 title: ', await page.title())

let alltab=context.pages();
console.log('count of tabs:'+alltab.length)

const newTabPromise= context.waitForEvent('page')
await page.locator('//button[text()="New Browser Tab"]').click()
const page2=await newTabPromise;
await page2.waitForLoadState()

 alltab=context.pages();
console.log('count of tabs:'+alltab.length)
console.log('current page url :'+page2.url())
console.log('page2 title: '+ await page2.title())
await expect(page2).toHaveTitle('Demo Site – WebTable – V-Tech Solutions')
await expect(page2).toHaveURL('https://vinothqaacademy.com/webtable/')
await page.waitForTimeout(3000)
})

test('tab handling', async ({ page,browser }) => {
const context= await browser.newContext()
const page1=await context.newPage()
const page2=await context.newPage()

await page1.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
await page.waitForTimeout(3000)
await page2.goto('https://practice.expandtesting.com/')

const alltab=context.pages();
console.log('count of tabs:',alltab.length)
for(const tab of alltab){
    console.log(tab.url())
     console.log(await tab.title())
}
await page.waitForTimeout(3000)
})