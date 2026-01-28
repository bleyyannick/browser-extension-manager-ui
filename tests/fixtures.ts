import { test as base } from '@playwright/test';
import { ExtensionsPage } from './pageObjects/ExtensionsPage';

export const test = base.extend<{ extensionsPage: ExtensionsPage }>({
  extensionsPage: async ({ page }, use) => {
    const extensionsPage = new ExtensionsPage(page);
    await extensionsPage.goto();
    await use(extensionsPage);
  },
});

export { expect } from '@playwright/test';
