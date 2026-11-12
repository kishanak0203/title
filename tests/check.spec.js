import { test, expect } from '@playwright/test';

test('check radio button', async ({ page }) => {
  await page.goto('https://demoqa.com/radio-button');
    const yesRadio = await page.locator('#yesRadio');
    await yesRadio.check();
    await expect(yesRadio).toBeChecked();
    await expect(yesRadio.isChecked()).toBeTruthy();
    await page.waitForTimeout(3000);
});

test('validate checkbox button', async ({ page }) => {
  await page.goto('https://qa-automation-practice.netlify.app/checkboxes');

  const checkbox1 = await page.locator('#checkbox1');
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();
  await expect(checkbox1.isChecked()).toBeTruthy();
  await checkbox1.uncheck();
  await expect(checkbox1).not.toBeChecked();
  await page.waitForTimeout(3000);
 });

test('validate multiple checkbox buttons', async ({ page }) => {
  await page.goto('https://qa-automation-practice.netlify.app/checkboxes');
const checkbox=[
        '#checkbox1',
        '#checkbox2',
        '#checkbox3'
]
   for(const result of checkbox){
    await page.locator(result).check();
    if(await page.locator(result).isChecked()){
    await page.locator(result).uncheck();
    await page.waitForTimeout(2000);
   }
 }
 });