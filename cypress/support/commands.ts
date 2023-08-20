/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");

  cy.get("input[name=email]").type(email);
  cy.get("input[name=password]").type(password);
  cy.get("button[type=submit]").click();

  cy.url().should("include", "/notes");
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
    }
  }
}

export {};
