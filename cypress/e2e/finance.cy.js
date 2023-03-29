describe("Transactions", () => {
  it("Add transaction", () => {
    cy.visit("https://devfinance-agilizei.netlify.app");
    cy.get("#transaction > .button").click();
    cy.get("#description").type("Freela");
    cy.get("#amount").type(150);
    cy.get("#date").type("2023-03-29");
    cy.contains("button", "Salvar").click();
  });
});
