//const url = "http://127.0.0.1:8080/gridHackathonV1.html";
const url = "http://127.0.0.1:8080/gridHackathonV2.html";

const browserCombo = [
  { width: 800, height: 600, name: "chrome" } 
];

const appName = " FilterBtnsCB";
const batchName = "CB";

function eyesCheck(params) {
  cy.eyesOpen({
    appName: appName,
    batchName: batchName,
    testName: params.testName,
    browser: browserCombo,
  });

  if (params.target != "region") {
    cy.eyesCheckWindow(params.testName);
  } else {
    cy.eyesCheckWindow({
      tag: params.testName,
      target: "region",
      selector: params.selector,
    });
  }

  cy.eyesClose();
}

describe("Cross-Browser Tests", () => {

  it(`test Layout`, function () {
    cy.visit(url);
    eyesCheck({ testName: this.test.title });
  });

 
});
