import { test, expect } from '@playwright/test';

test('single file upload', async ({ page }) => {
  //launching url
  await page.goto('https://practice.expandtesting.com/upload');
const file=await page.locator('#fileInput')
await file.click()
await file.setInputFiles('tests/uploadfile/kishan resume .pdf')
await page.locator('#fileSubmit').click()
await page.waitForTimeout(3000)
await expect (page.locator('//h1[text()="File Uploaded!"]')).toHaveText('File Uploaded!')
})
test('copy as path upload', async ({ page }) => {
  //launching url
  await page.goto('https://practice.expandtesting.com/upload');
const file=await page.locator('#fileInput')
await file.click()
await file.setInputFiles('D:/documents/10th marksheet.pdf')
await page.locator('#fileSubmit').click()
await page.waitForTimeout(3000)
await expect (page.locator('//h1[text()="File Uploaded!"]')).toHaveText('File Uploaded!')
})
test('multiple upload', async ({ page }) => {
  //launching url
  await page.goto('https://www.patternfly.org/components/file-upload/multiple-file-upload/');
  const fileChooserPromise=page.waitForEvent('filechooser');
await page.locator('//span[text()="Upload"]').click()
const filechooser=await fileChooserPromise;
await filechooser.setFiles(['D:/documents/10th marksheet.pdf','D:/documents/11th marksheet.pdf'])
await page.waitForTimeout(3000)
})