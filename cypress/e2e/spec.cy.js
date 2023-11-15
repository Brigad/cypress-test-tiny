/// <reference types="cypress" />

describe("page", () => {
  beforeEach(() => {
    cy.readFile("cypress/fixtures/example.json").then((data) => {
      cy.log(data);
    });
  });

  it("works", () => {
    cy.visit("https://example.cypress.io/");
  });
});
