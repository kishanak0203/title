import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/assertion.js';

test('validates the login form', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await expect(page).toHaveTitle('STORE');
  await expect(page).toHaveURL('https://www.demoblaze.com/');

  await loginPage.openLoginForm();

  await expect(loginPage.usernameInput).toBeEnabled();
  await expect(loginPage.passwordInput).toBeEnabled();
  await expect(loginPage.usernameInput).toBeEditable();
  await expect(loginPage.passwordInput).toBeEditable();
  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
  await expect(loginPage.phonesHeading).toHaveText('Phones');

  await loginPage.fillCredentials('kishanmasfj@gmail.com', 'kishan2002');

  await expect(loginPage.usernameInput).toHaveValue('kishanmasfj@gmail.com');
  await expect(loginPage.passwordInput).toHaveValue('kishan2002');
  await loginPage.submitLogin();
  await page.waitForTimeout(4000);
});

test('validates the login form using soft assertions', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.openLoginForm();

  await loginPage.fillCredentials('kishanmasfj@gmail.com', 'kishan2002');

  await expect.soft(loginPage.usernameInput).toHaveValue('kishanmasfj@gmail.com');
  await expect.soft(loginPage.passwordInput).toHaveValue('kishan2002');
  await loginPage.submitLogin();
  await page.waitForTimeout(4000);
});