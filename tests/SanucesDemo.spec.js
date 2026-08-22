import { test } from '@playwright/test';
import env from '../env/env.config.js';

test("@Regression End To End Flow", async ({ page }) =>{
   

    await page.goto(env.BASE_URL);

    await page.locator("#user-name").fill(env.USERNAME);
    await page.locator("#password").fill(env.PASSWORD);

    await page.waitForTimeout(5000);

    await page.locator("#login-button").click();

    //await page.waitForTimeout(6000);

    await page.locator(".product_sort_container").selectOption({label : 'Price (high to low)'});

    await page.waitForTimeout(6000);

    await page.locator("button[name='add-to-cart-sauce-labs-fleece-jacket']").click();

    await page.waitForTimeout(7000);

    // used to locate Single element in HTML DOM Structure
    const container = await page.locator("//span[@class='shopping_cart_badge']");
    await container.click();

    await page.waitForTimeout(5000);

    // await page.locator("//input[@id='continue']").click();

    //     await page.waitForTimeout(5000);

});


test("@Sanity Group Test Case ", async ({page})=>{
    console.log("Sanity Group Test case 1");
    console.log("Sanity Group Test case 2");
    console.log("Sanity Group Test case 3");
    console.log("Sanity Group Test case 4");
    console.log("Sanity Group Test case 5");
});

test("@Smoke Group Test Case ", async ({page})=>{
    console.log("Smoke Group Test case 1");
    console.log("Smoke Group Test case 2");
    console.log("Smoke Group Test case 3");
    console.log("Smoke Group Test case 4");
    console.log("Smoke Group Test case 5");
});

test("@End 2 End  Group Test Case ", async ({page})=>{
    console.log("End 2 End  Group Test case 1");
    console.log("End 2 End  Group Test case 2");
    console.log("End 2 End  Group Test case 3");
    console.log("End 2 End Group Test case 4");
    console.log("End 2 End  Group Test case 5");
});