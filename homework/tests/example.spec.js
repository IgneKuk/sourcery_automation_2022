// @ts-check
// susikurti homework branch'a
// npm install
// nmp test
const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");

const data = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let functions = ["Add", "Subtract", "Multiply", "Divide", "Concatenate"];

const values = [
  {
    number1: 3,
    number2: 2,
    expect: [5, 1, 6, 1.5, 32],
  },
  {
    number1: -5,
    number2: -10,
    expect: [-15, 5, 50, 0.5, "-5-10"],
  },
  {
    number1: "",
    number2: "",
    expect: [0, 0, 0, 0, 0],
  },
];

const warnings = [
  {
    number1: "a",
    number2: 2,
    expect: "Number 1 is not a number",
  },
  {
    number1: 2,
    number2: "a",
    expect: "Number 2 is not a number",
  },
];

const integersOnlyFirstValue = [4.5, 5.5, 6.5, 7.5, 8.5];
const integersOnlySecondValue = [2.3, 3.3, 4.3, 5.3, 5.3];
const integersOnlyExpectedValue = [6, 2, 27, 1, "8.55.3"];

data.forEach((version) => {
  test.describe(version + ": Add", () => {
    values.forEach((data) => {
      test(`Adding ${data.number1} and ${data.number2} results in ${data.expect[0]}`, async ({
        page,
      }) => {
        let homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.selectOption(version);
        await homePage.selectNumbers(data.number1, data.number2);
        await homePage.selectLabel("Add");
        await homePage.clickCalculate();
        await homePage.expectedResult(data.expect[0]);
      });
    });
  });

  test.describe(version + ": Subtract", () => {
    values.forEach((data) => {
      test(`Substracting ${data.number1} and ${data.number2} results in ${data.expect[1]}`, async ({
        page,
      }) => {
        let homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.selectOption(version);
        await homePage.selectNumbers(data.number1, data.number2);
        await homePage.selectLabel("Subtract");
        await homePage.clickCalculate();
        await homePage.expectedResult(data.expect[1]);
      });
    });
  });

  test.describe(version + ": Multiply", () => {
    values.forEach((data) => {
      test(`Multiplying ${data.number1} and ${data.number2} results in ${data.expect[2]}`, async ({
        page,
      }) => {
        let homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.selectOption(version);
        await homePage.selectNumbers(data.number1, data.number2);
        await homePage.selectLabel("Multiply");
        await homePage.clickCalculate();
        await homePage.expectedResult(data.expect[2]);
      });
    });
  });

  test.describe(version + ": Divide", () => {
    values.forEach((data) => {
      test(`Dividing ${data.number1} and ${data.number2} results in ${data.expect[3]}`, async ({
        page,
      }) => {
        let homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.selectOption(version);
        await homePage.selectNumbers(data.number1, data.number2);
        await homePage.selectLabel("Divide");
        await homePage.clickCalculate();
        await homePage.expectedResult(data.expect[3]);
      });
    });
  });

  test.describe(version + ": Concatenate", () => {
    values.forEach((data) => {
      test(`Concatenating ${data.number1} and ${data.number2} results in ${data.expect[4]}`, async ({
        page,
      }) => {
        let homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.selectOption(version);
        await homePage.selectNumbers(data.number1, data.number2);
        await homePage.selectLabel("Concatenate");
        await homePage.clickCalculate();
        await homePage.expectedResult(data.expect[4]);
      });
    });
  });

  test.describe(version + ": Warning messages", () => {
    warnings.forEach((data) => {
      test(`Warning message for strings usage: ${data.expect}`, async ({
        page,
      }) => {
        let homePage = new HomePage(page);
        for (let i of functions) {
          await homePage.navigate();
          await homePage.selectOption(version);
          await homePage.selectNumbers(data.number1, data.number2);
          await homePage.selectLabel(i);
          await homePage.clickCalculate();
          await expect(await page.innerText("#errorForm")).toContain(
            data.expect
          );
        }
      });
    });
  });

  // test.describe(version + ": Checking Integers Only Button", () => {
  //   functions.forEach((func) => {
  //     integersOnlyFirstValue.forEach((first) => {
  //       integersOnlySecondValue.forEach((second) => {
  //         integersOnlyExpectedValue.forEach((exp) => {
  //           test(`Integers Only button returns whole number. Method ${func}`, async ({
  //             page,
  //           }) => {
  //             let homePage = new HomePage(page);
  //             await homePage.navigate();
  //             await homePage.integersOnly();
  //             await homePage.selectOption(version);
  //             await homePage.selectLabel(func);
  //             await homePage.selectNumbers(first, second);
  //             await homePage.expectedResult(exp);
  //             await homePage.clickCalculate();
  //           });
  //         });
  //       });
  //     });
  //   });
  // });

  test.describe(version + ": Checking Clear Button", () => {
    test("Clear button clears the answer field", async ({ page }) => {
      let homePage = new HomePage(page);
      for (let i of functions) {
        await homePage.navigate();
        await homePage.selectOption(version);
        await homePage.selectNumbers("3", "2");
        await homePage.selectLabel(i);
        await homePage.clickCalculate();
        await homePage.clearButton();
        await homePage.expectedResult("");
      }
    });
  });
});
