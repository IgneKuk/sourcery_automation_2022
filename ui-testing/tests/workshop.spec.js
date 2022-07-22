const { test, expect } = require('@playwright/test'); //importuojam biblioteką
const { SearchPage } = require('../pages/SearchPage');
const { SearchResultPage } = require('../pages/SearchResultPage');

test.describe('Search Result', () => {
    test('First result should contain devbridge.com', async ({ page }) => {
        let searchPage = new SearchPage(page); // is klases susikuriu objekta, kuri naudosime
        await searchPage.navigate();
        await searchPage.search('devbridge');
        let index = 0;
        let hefAttribute = await page.locator('#r1-0 h2 a').getAttribute('href');
        await expect(hefAttribute).toContain('devbridge.com');
        // jei reiktu susistabdyti narsykle + ismesta toki inspektoriu
        // await page.pause()
    });

    test('First page should contain linkedin.com', async ({ page }) => {
        let searchPage = new SearchPage(page); // is klases susikuriu objekta, kuri naudosime
        await searchPage.navigate();
        await searchPage.search('devbridge');

        // First page should contain linkedin.com
        // let result = await page.locator('article[data-testid=result]');
        // for (let index = 0; index < result.length; index++) {
        //     const result = await result[index];
        //     let href = await result.locator('h2 a').getAttribute('href');            
        //     if (href.contains('linkedin.com')) {
        //         break;
        //     }
        // }

        let searchResultPage = new SearchResultPage(page);
        // let hefAttribute = await searchResultPage.getResultHeadingHref(2);
        expect(await searchResultPage.getResultHeadingHref(2)).toContain('linkedin.com');
    });
    test('Search query should get populated in search result page', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');
        let searchResultDevbridge = await page.locator('input[name=q]').getAttribute('value')
        await expect(searchResultDevbridge).toEqual('devbridge')

    });
});