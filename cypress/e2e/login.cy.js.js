const Azar = ["Cortar el pasto", "probar pag web", "cocinar"];

describe("PruebasTodoMVC", () => {
  beforeEach(() => {
    cy.visit("https://todomvc.com/examples/angular/dist/browser/#/all");
    Azar.forEach((Amalia) => {
      cy.get(".new-todo").type(`${Amalia}{enter}`);
    });
  });
  it.skip("primer Test", () => {
    cy.get(".todo-list li").each((listItem, index) => {
      cy.wrap(listItem).should("have.text", Azar[index]);
    });
  });

  it("segundo Test", () => {
    cy.get(":nth-child(2) > li > .view > .toggle").click();
    cy.contains("cocinar").parent().find(".destroy").click({ force: true });
  });
});
