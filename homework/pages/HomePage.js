const { expect } = require('@playwright/test');

class HomePage {

    constructor(page) {
        this.page = page;
    }
    async navigate() {
        await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
    }
    async selectOption(version) {
        await this.page.selectOption('#selectBuild', { label: version});
    }
    async selectNumbers(first, second) {
        await this.page.locator('#number1Field').type(first);
        await this.page.locator('#number2Field').type(second);
    }
    async selectLabel(label) {
        await this.page.selectOption('#selectOperationDropdown', {label: label});
    }
    async clickCalculate() {
        await this.page.locator('#calculateButton').click();
    }
    async expectedResult(expvalue) {
        return await expect(this.page.locator('#numberAnswerField')).toHaveValue(expvalue);
    }
    async integersOnly() {
        await this.page.locator('#integerSelect').click();
    }
    async clearButton() {
        await this.page.locator('#clearButton').click();
    }
}

module.exports = { HomePage };
