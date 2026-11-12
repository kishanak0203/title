import { test, expect } from '@playwright/test';

test('slider handling', async ({ page }) => {
  //launching url
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
 const slider= await page.locator('#slider-range')
const slid= await slider.boundingBox()
await page.mouse.move(
    slid.x + slid.width /2,
    slid.y + slid.height /2
)
await page.mouse.down()

await page.mouse.move(
    slid.x + 30,
    slid.y + slid.height /2,
    {steps:10}
)
await page.mouse.up()


})