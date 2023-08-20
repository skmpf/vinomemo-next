describe("Login page", () => {
  it("completes login", () => {
    cy.login("cypress@vinomemo.com", "cypress123");
  });
});
