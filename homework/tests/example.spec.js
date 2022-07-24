// @ts-check
// susikurti homework branch'a
// npm install
// nmp test
const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];

let functions = ['Add', 'Subtract', 'Multiply', 'Divide', 'Concatenate'];

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 2 and 3 results in 5', async ({ page }) => {
      let homePage = new HomePage(page);
      await homePage.navigate();
      await homePage.selectOption(version);
      await homePage.selectNumbers('2', '3');
      await homePage.selectLabel('Add');
      await homePage.clickCalculate();
      await homePage.expectedResult('5');
    });
  });

  test.describe(version + ': Subtract', () => {
    test('Subtracting 3 and 2 results in 1', async ({ page }) => {
      let homePage = new HomePage(page);
      await homePage.navigate();
      await homePage.selectOption(version);
      await homePage.selectNumbers('3', '2');
      await homePage.selectLabel('Subtract');
      await homePage.clickCalculate();
      await homePage.expectedResult('1');
    });
  });

  test.describe(version + ': Multiply', () => {
    test('Multiplying 3 and 2 results in 6', async ({ page }) => {
      let homePage = new HomePage(page);
      await homePage.navigate();
      await homePage.selectOption(version);
      await homePage.selectNumbers('3', '2');
      await homePage.selectLabel('Multiply');
      await homePage.clickCalculate();
      await homePage.expectedResult('6');
    });
  });

  test.describe(version + ': Divide', () => {
    test('Dividing 4 and 2 results in 2', async ({ page }) => {
      let homePage = new HomePage(page);
      await homePage.navigate();
      await homePage.selectOption(version);
      await homePage.selectNumbers('4', '2');
      await homePage.selectLabel('Divide');
      await homePage.clickCalculate();
      await homePage.expectedResult('2');
    });
  });

  test.describe(version + ': Concatenate', () => {
    test('Concatenating 3 and 2 results in 32', async ({ page }) => {
      let homePage = new HomePage(page);
      await homePage.navigate();
      await homePage.selectOption(version);
      await homePage.selectNumbers('3', '2');
      await homePage.selectLabel('Concatenate');
      await homePage.clickCalculate();
      await homePage.expectedResult('32');
    });
  });

  test.describe(version + ': Add - Checking Integers Only Button', () => {
    test('Integers Only button returns whole number', async ({ page }) => {
      let homePage = new HomePage(page);
      await homePage.navigate();
      await homePage.selectOption(version);
      await homePage.integersOnly();
      await homePage.selectNumbers('3.5', '2');
      await homePage.selectLabel('Add');
      await homePage.clickCalculate();
      await homePage.expectedResult('5');
    });
  });

  test.describe(version + ': Checking Clear Button', () => {
    test('Clear button clears the answer field', async ({ page }) => {
      let homePage = new HomePage(page);
      for (let i of functions) {
        await homePage.navigate();
        await homePage.selectOption(version);
        await homePage.selectNumbers('3', '2');
        await homePage.selectLabel(i);
        await homePage.clickCalculate();
        await homePage.clearButton();
        await homePage.expectedResult('');
      }
    });
  });
});
