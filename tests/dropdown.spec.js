import { test, expect } from '@playwright/test';

test('verify dropdown functionality', async ({ page }) => {
  //launching url
  await page.goto('https://automationtesting.co.uk/dropdown.html');
//selecting dropdown option 
     await page.locator('#cars').selectOption('BMW');
      await page.locator('#cars').selectOption({ label: 'Ford' });
      await page.selectOption('#cars','BMW');
//verifying the dropdown option count
     const selectedOption = await page.locator('#cars option')
      await expect(selectedOption).toHaveCount(8);
//verifying the dropdown option count using $$ selector and printed the count of options
     const selectedOptions = await page.$$('#cars option')
       console.log("total car option count:", selectedOptions.length);
       await expect(selectedOptions.length).toBe(8);
//verifying the selected option is present in the dropdown and printed the all drpdown option 
     const text = await page.locator('#cars').textContent();
     console.log(text);
     await expect(text.includes('BMW')).toBeTruthy();
     await page.waitForTimeout(3000);
});

test('verify multiple dropdown functionality', async ({ page }) => {
  //launching url
  await page.goto('https://qaplayground.com/practice/dropdowns');
//slected multiple dropdown option
await page.locator('#heroSelect').selectOption(['Ant-Man','Aquaman']);
//verifying the dropdown option count
const multipleSelection = await page.locator('#heroSelect option')
      await expect(multipleSelection).toHaveCount(4);
//verifying the dropdown option count using $$ selector and printed the count of options
const multipleSelections = await page.$$('#heroSelect option')
      console.log("total hero option count:", multipleSelections.length);
      await expect(multipleSelections.length).toBe(4);
//verifying the selected option is present in the dropdown and printed the all drpdown option
      const text1 = await page.locator('#heroSelect').textContent();
      console.log(text1);
      await expect(text1.includes('Ant-Man')).toBeTruthy();
       await page.waitForTimeout(3000);
});

test('verify multiples dropdown functionality', async ({ page }) => {
  //launching url
  await page.goto('https://www.htmlelements.com/demos/dropdownlist/multiple-selection/index.htm');
//slected multiple dropdown option
await page.getByPlaceholder('Select items:').click();
await page.getByText('Caffé macchiato').click();
//verifying the dropdown option count
const options = await page.locator('.smart-element smart-list-item')
await expect(options).toHaveCount(28);
const options1 = await page.$$('.smart-element smart-list-item')
console.log(options1.length);
await page.waitForTimeout(3000);
});

