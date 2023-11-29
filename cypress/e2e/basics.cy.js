/// <reference types="Cypress" />

describe("tasks page", () => {
  it("should render the image properly", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".main-header img").should("be.visible");
  });

  it("should render the main title correctly", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h1").contains("React Tasks");
  });
});
