

import { Locator, Page } from "@playwright/test";

export class SearchPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly pageTitle: Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByPlaceholder('Search');
        this.searchButton = page.locator('[name="search"]');
        this.pageTitle = page.getByRole('heading', {name: 'Your Store'});

       
    
    }

    async visitCartPage() {
        await this.page.goto('https://opencart.abstracta.us/');
        await this.page.waitForLoadState('networkidle');
    }


    async searchForItem(itemName: string) {
        await this.searchInput.fill(itemName);
        await this.searchInput.press('Enter');
    }

    async selectItem(itemName: string) {
        await this.page.getByText(itemName).click();
    }




    // async getCartItemCount(): Promise<number> {

    //     return await this.cartItems.count();
    // }
    

    // async getCartBadgeCount(): Promise<string | null> {
        
    //         const isVisible = await this.cartBadge.isVisible();
    //         if (!isVisible) {
    //             return null;
    //         }
    //         return await this.cartBadge.textContent();
       
        
        
    // }

    // async removeItemByName (itemName: string) {
    //     const kebabCaseName = itemName.toLowerCase().replace(/\s+/g, '-');
    //     await this.page.getByTestId(`remove-${kebabCaseName}`).click();
    // }

    //  //aca =========

    

    // async removeItemByIndex(index: number) {
    //     const removeButtons = this.page.locator('[data-test*="remove-"]');
    //     await removeButtons.nth(index).click();
    // }

    // async getCartItems(): Promise<string[]> {
    //     return await this.cartItems.allTextContents();
    // }

    // async getItemNames(): Promise<string[]> {
    //     return await this.itemName.allTextContents();
    // }

    // async getItemPrices(): Promise<string[]> {
    //     return await this.itemPrice.allTextContents();
    // }

    // async getItemQuantities(): Promise<string[]> {
    //     return await this.itemQuantity.allTextContents();
    // }

    // async isItemInCart(itemName: string): Promise<boolean> {
    //     const itemNames = await this.getItemNames();
    //     return itemNames.includes(itemName);
    // }

    // async continueShopping() {
    //     await this.continueShoppingButton.click();
    // }

    // async proceedToCheckout() {
    //     await this.checkoutButton.click();
    // }

    // async isCartEmpty(): Promise<boolean> {

    //     const itemCount = await this.getCartItemCount();
    //     return itemCount === 0;
    // }

    // async getItemDetailsByName(itemName: string): Promise<{name: string, price: string, quantity: string} | null> {
    //     const itemCount = await this.getCartItemCount();
    //     for (let i = 0; i < itemCount; i++) {
    //         const name = await this.itemName.nth(i).textContent() || '';
    //         if (name === itemName) {
    //             const price = await this.itemPrice.nth(i).textContent() || '';
    //             const quantity = await this.itemQuantity.nth(i).textContent() || '';
    //             return { name, price, quantity };
    //         }
    //     }
    //     return null;
    // }

    // async verifyCartTitle(): Promise<boolean> {
    //     const title = await this.cartTitle.textContent();
    //     return title === 'Your Cart';
    // }
}