import { expect, test } from '@playwright/test';

test.describe('Smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/browser-extension-manager-ui/');
  });

  test('should load the page successfully', async ({ page }) => {
    expect(page.url()).toContain('browser-extension-manager-ui');
  });

  test('the button Active should become active', async ({ page }) => {
    const activeBtn = page.locator('.extensions_filter-list').getByRole('button', { name: /^Active$/ });
    await activeBtn.click();
    await expect(activeBtn).toHaveClass(/active/);
  });

  test('the button Inactive should become inactive', async ({ page }) => {
    const inactiveBtn = page.locator('.extensions_filter-list').getByRole('button', { name: /^Inactive$/ });
    await inactiveBtn.click();
    await expect(inactiveBtn).toHaveClass(/active/);
  });

  test('should show only active extensions when Active button is clicked', async ({ page }) => {
    const activeBtn = page.locator('.extensions_filter-list').getByRole('button', { name: /^Active$/ });
    const activeExtensions = page.locator('article[data-status="active"]');
    const inactiveExtensions = page.locator('article[data-status="inactive"]');
    await activeBtn.click();

    await expect(activeBtn).toHaveClass(/active/);
    await expect(inactiveExtensions).toHaveCount(0);
    await expect(activeExtensions).not.toHaveCount(0);
  });

  test('should show only inactive extensions when Inactive button is clicked', async ({ page }) => { 
    const inactiveBtn = page.locator('.extensions_filter-list').getByRole('button', { name: /^Inactive$/ });
    const activeExtensions = page.locator('article[data-status="active"]');
    const inactiveExtensions = page.locator('article[data-status="inactive"]');
    await inactiveBtn.click();

    await expect(inactiveBtn).toHaveClass(/active/);
    await expect(activeExtensions).toHaveCount(0);
    await expect(inactiveExtensions).not.toHaveCount(0);
   })

  test('should delete an active extension from the list', async ({ page }) => {
    const extension = page.getByRole('article').filter({ hasText: 'JSONWizard' })
    const activeBtn = page.locator('.extensions_filter-list').getByRole('button', { name: /^Active$/ });
    await activeBtn.click();

    await expect(activeBtn).toHaveClass(/active/);
    await expect(extension).toBeVisible();

    await extension.locator('.slider-circle').click();
    await expect(extension).not.toBeVisible();
  });
});