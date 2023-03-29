// describe("Transactions", () => {
//   it("Add transaction", () => {
//     cy.visit("https://devfinance-agilizei.netlify.app");
//     cy.get("#transaction > .button").click();
//     cy.get("#description").type("Freela");
//     cy.get("#amount").type(150);
//     cy.get("#date").type("2023-03-29");
//     cy.contains("button", "Salvar").click();
//   });
// });

const BASE_URL = "https://devfinance-agilizei.netlify.app";
const buttonAddTransaction = "#transaction > .button";
const inputDescription = "#description";
const inputAmount = "#amount";
const inputDate = "#date";
const buttonSave = "Salvar";
const incomeDisplay = "#incomeDisplay";
const expenseDisplay = "#expenseDisplay";

describe("Transactions", () => {
  it("Add transaction", () => {
    cy.visit(BASE_URL);
    addTransaction("Freela", 150);
    addTransaction("Salário", 220);

    addTransaction("Transporte", -20);
    addTransaction("Lanche", -25);
    addTransaction("Hospedagem", -120);
  });
});

const addTransaction = (description, amount) => {
  cy.get(buttonAddTransaction).click();
  cy.get(inputDescription).type(description);
  cy.get(inputAmount).type(amount);
  cy.get(inputDate).type("2023-03-29");
  cy.contains(buttonSave).click();
};
