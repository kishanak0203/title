import { test, expect } from '@playwright/test';

test('JS alerts verification', async ({ page }) => {
  //launching url
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('Dialog', async dialog=>{
    expect(dialog.type()).toContain('JS Alert')
    expect(dialog.message()).toContain('I am a JS Alert')
    await dialog.accept()
})
page.getByText('Click for JS Alert').click()
expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
})

test(' confirm alerts verification', async ({ page }) => {
  //launching url
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  page.on('Dialog', async dialog=>{

   expect(dialog.type()).toContain('JS Confirm')
   expect(dialog.message()).toContain('I am a JS Confirm')
   await dialog.dismiss()
})

page.getByText('Click for JS Confirm').click()
expect(page.locator('#result')).toHaveText('You clicked: Cancel')
})

test(' prompt alerts verification', async ({ page }) => {
  //launching url
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('Dialog', async dialog=>{

   expect(dialog.type()).toContain('JS Prompt')
   expect(dialog.message()).toContain('I am a JS prompt')
   await dialog.accept('kishan')
})

page.getByText('Click for JS Prompt').click()
expect(page.locator('#result')).toHaveText('You entered: kishan')

})