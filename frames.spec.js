import { test, expect } from '@playwright/test';

test('suggestion verification', async ({ page }) => {
  //launching url
  await page.goto('https://ui.vision/demo/webtest/frames/');
//parent frame locator selection and filling the text box
   const parentFrame = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});
   await parentFrame.locator('[name="mytext3"]').fill('Hi kishan');
//switched to child frame and selecting the check boxes and clicking next button
   const childFrame = parentFrame.childFrames()[0];
   await childFrame.locator('#i9').check();
   await childFrame.locator('#i21').check();
   await childFrame.getByText('Next').click();
   await page .waitForTimeout(2000);
//filling the text box  nad validating text valueand clicking submit button
   await childFrame.locator('input[type="text"]').fill('i am kishan');
   await childFrame.locator('textarea').fill('i am kishan,i am a qa tester');
   await expect(childFrame.locator('input[type="text"]')).toHaveValue('i am kishan');
   await expect(childFrame.locator('textarea')).toHaveValue('i am kishan,i am a qa tester');
   await childFrame.getByRole('button', { name: 'Submit' }).click();
   // printing the form title 
    const formTitle = await childFrame.getByText('Form Filling Demo Page').textContent();
    console .log('form title : ' ,formTitle);
    await page .waitForTimeout(2000);
   
})