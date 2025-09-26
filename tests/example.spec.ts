import { test, expect } from "@playwright/test";
import { SearchPage } from "../pages/SearchPage";



let searchPage: SearchPage; 

test.beforeEach(async ({ page }) => {

searchPage = new SearchPage(page);
await searchPage.visitCartPage();

});

test.describe("Suite de tests", async () => {
  //test("Test input Iphone", async ({ page }) => {

     test("Verify navigation to Search page ", async () => {

    
      await expect(searchPage.pageTitle).toBeVisible();

    // await test.step("Visita la página", async () => {
    //   await page.goto("https://opencart.abstracta.us/");
    });


     test( "Verify searched item is displayed", async () => {

      await searchPage.searchForItem("Iphone");
      await expect(searchPage.page.getByRole('link', {name: 'iPhone'}).first()).toBeVisible(); 
    
    });

    test( "Verify navigation to searched item page", async () => {

      
      await searchPage.selectItem("MacBook");
      await expect(searchPage.page.getByRole('heading', {name: 'MacBook'})).toBeVisible();

    });
      //await searchPage.page.pause();

   });



   

