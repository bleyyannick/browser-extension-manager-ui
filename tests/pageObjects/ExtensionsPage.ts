import { Page } from "@playwright/test";

export class ExtensionsPage {

    page: Page;
    url: string = ''

    constructor(page: Page) {
        this.page = page;
        this.url = 'https://bleyyannick.github.io/browser-extension-manager-ui/';
    }


    async goto() {
        await this.page.goto(this.url);
    }

    async clickActiveButton() {
        const activeBtn = this.page.locator('.extensions_filter-list').getByRole('button', { name: /^Active$/ });
        await activeBtn.click(); 
    }

    async clickInactiveButton() {
        const inactiveBtn = this.page.locator('.extensions_filter-list').getByRole('button', { name: /^Inactive$/ });
        await inactiveBtn.click();
    }

    async changeStatusOfExtension(extensionName: string) {
        const extension = this.getExtensionByName(extensionName);
        await extension.locator('.slider-circle').click();
    }

    activeButton() {
        return this.page.locator('.extensions_filter-list').getByRole('button', { name: /^Active$/ });
    }

    inactiveButton() {
        return this.page.locator('.extensions_filter-list').getByRole('button', { name: /^Inactive$/ });
    }

    getActiveExtensions() {
        return this.page.locator('article[data-status="active"]');
    }

    getInactiveExtensions() {
        return this.page.locator('article[data-status="inactive"]');
    }

    getExtensionByName(name: string) {
        return this.page.getByRole('article').filter({ hasText: name });
    }
     getAllExtensions() {
        return this.page.getByRole('article');
    }


 }