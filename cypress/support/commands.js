Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Tais");
  cy.get("#lastName").type("Nissizaki");
  cy.get("#email").type("tais@exemplo.com");
  cy.get("#open-text-area").type("Teste");
  cy.contains("button", "Enviar").click();
});
