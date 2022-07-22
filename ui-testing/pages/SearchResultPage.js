class SearchResultPage {

    constructor(page) {
      this.page = page;
    }
    async getResultHeadingHref(index) {
      return await this.page.locator(`#r1-${index} h2 a`).getAttribute('href');
    }
  }
  module.exports = { SearchResultPage };