// @ts-check
import { test, expect } from '@playwright/test';

test('verify admin can search for an enabled system user', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  const adminLink = page.getByRole('link', { name: 'Admin' });
  await expect(adminLink).toBeVisible();
  await adminLink.click();

  await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();

  const usernameField = page.locator('.oxd-input-group').filter({ hasText: 'Username' }).locator('input');
  await usernameField.fill('Admin');

  const userRoleField = page.locator('.oxd-input-group').filter({ hasText: 'User Role' });
  await userRoleField.locator('.oxd-select-text').click();
  await page.getByRole('option', { name: 'Admin', exact: true }).click();

  const employeeName = page.locator('input[placeholder="Type for hints..."]').first();
  await employeeName.fill('manda akhil user');
  await page.locator('.oxd-autocomplete-option').filter({ hasText: 'manda akhil user' }).click();

  const statusField = page.locator('.oxd-input-group').filter({ hasText: 'Status' });
  await statusField.locator('.oxd-select-text').click();
  await page.getByRole('option', { name: 'Enabled', exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();

  const matchingRow = page.getByRole('row').filter({ hasText: 'manda akhil user' });
  await expect(matchingRow).toBeVisible();
  await expect(matchingRow).toContainText('Admin');
  await expect(matchingRow).toContainText('Enabled');
});

