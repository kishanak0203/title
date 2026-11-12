import { test, expect } from '@playwright/test';

test('drag handling', async ({ page }) => {
  //launching url
  await page.goto('https://practice.expandtesting.com/drag-and-drop');
 const drag= await page.locator('#column-a')
const drop= await page.locator('#column-b')
//usin dragto
await drag.dragTo(drop)
//using hover and mouse method
await drag.hover()
await page.mouse.down()
await drop.hover()
await page.mouse.up()
//right click 
await page.locator('//h1[text()="Drag and Drop page for Automation Testing Practice"]').click({button:'right'})
})
test('dblclick handling', async ({ page }) => {
  //launching url
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
//double click using dblclick 
await page.locator('[ondblclick="myFunction1()"]').dblclick()
//using keyboard press
await page.locator('#field1').click()
await page.locator('#field1').press('Control+A')
await page.locator('#field1').press('Control+C')
await page.locator('#field2').click()
await page.locator('#field2').press('Control+V')
})
test('dblcli handling', async ({ page }) => {
  //launching url
  await page.goto('https://www.amazon.in/');
//mouse hover
await page.locator('#nav-link-accountList').hover()
await page.locator('#nav_prefetch_yourorders').click()
})