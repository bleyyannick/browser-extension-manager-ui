import { test, expect } from './fixtures';

test.describe('Smoke tests', () => {
  test('should load the page successfully', async ({ extensionsPage }) => {
    await expect(extensionsPage.page).toHaveURL(extensionsPage.url);
  });

  test('the button Active should become active', async ({ extensionsPage }) => {
    await extensionsPage.clickActiveButton();

    await expect(extensionsPage.activeButton()).toHaveClass(/active/);
  });

  test('the button Inactive should become inactive', async ({ extensionsPage }) => {
    await extensionsPage.clickInactiveButton();

    await expect(extensionsPage.inactiveButton()).toHaveClass(/active/);
  });

  test('should show only active extensions when Active button is clicked', async ({ extensionsPage }) => {
    const activeBtn = extensionsPage.activeButton();
    const activeExtensions = extensionsPage.getActiveExtensions();
    const inactiveExtensions = extensionsPage.getInactiveExtensions();

    await extensionsPage.clickActiveButton();

    await expect(activeBtn).toHaveClass(/active/);
    await expect(inactiveExtensions).toHaveCount(0);
    await expect(activeExtensions).not.toHaveCount(0);
  });

  test('should show only inactive extensions when Inactive button is clicked', async ({ extensionsPage }) => {
    const inactiveBtn = extensionsPage.inactiveButton();
    const activeExtensions = extensionsPage.getActiveExtensions();
    const inactiveExtensions = extensionsPage.getInactiveExtensions();

    await extensionsPage.clickInactiveButton();

    await expect(inactiveBtn).toHaveClass(/active/);
    await expect(activeExtensions).toHaveCount(0);
    await expect(inactiveExtensions).not.toHaveCount(0);
  });

  test('should delete an active extension from the list', async ({ extensionsPage }) => {
    const singleExtension = extensionsPage.getExtensionByName('JSONWizard');
    await extensionsPage.clickActiveButton();
    await expect(singleExtension).toBeVisible();

    await extensionsPage.changeStatusOfExtension('JSONWizard');

    await expect(singleExtension).not.toBeVisible();
  });
});