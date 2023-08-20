export const buildTestAccount = () => ({
  email: `cypress${Date.now()}@vinomemo.com`,
  password: "cypress1234",
  username: "VinoMemo Cypress",
});

describe("Signup page", () => {
  it("completes signup", () => {
    cy.visit("/signup");

    const { email, password, username } = buildTestAccount();

    cy.get("input[name=name]").type(username);
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get("input[name=passwordConfirm]").type(password);
    cy.get("button[type=submit]").click();

    cy.url().should("include", "/notes");
  });
});
