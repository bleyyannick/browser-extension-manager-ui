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
    expect(activeBtn).toHaveClass(/active/);
  });

  test('the button Inactive should become active', async ({ page }) => {
    const inactiveBtn = page.locator('.extensions_filter-list').getByRole('button', { name: /^Inactive$/ });
    await inactiveBtn.click();
    expect(inactiveBtn).toHaveClass(/active/);
  });

  test('should delete an active extension from the list', async ({ page }) => {
    const extension = page.getByRole('article').filter({ hasText: 'JSONWizard' })
    const activeBtn = page.locator('.extensions_filter-list').getByRole('button', { name: /^Active$/ });
    await activeBtn.click();
    expect(activeBtn).toHaveClass(/active/);
    expect(extension).toBeVisible();
    await extension.getByTestId('remove-button').click();
    expect(extension).not.toBeVisible();
  });
});