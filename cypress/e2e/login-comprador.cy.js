describe("Login Comprador Ticketazo", () => {
  it("Debe hacer login exitoso con credenciales válidas", () => {
    cy.visit("https://ticketazo.com.ar/");
    cy.get(".justify-end > .text-sm").click();
    cy.url().should("include", "/auth/login");
    cy.get('[data-cy="input-email"]').type("liliraspitu@gmail.com");
    cy.get('[data-cy="input-password"]').type("CursoTest2*");
    cy.get('[data-cy="btn-login"]').click();
    cy.url().should("eq", "https://ticketazo.com.ar/");
  });

  it("Debe mostrar error con credenciales inválidas", () => {
    cy.visit("https://ticketazo.com.ar/");
    cy.get(".justify-end > .text-sm").click();
    cy.url().should("include", "/auth/login");
    cy.get('[data-cy="input-email"]').type("liliraspitu@gmail.com");
    cy.get('[data-cy="input-password"]').type("ContraseñaMala");
    cy.get('[data-cy="btn-login"]').click();
    cy.contains(/contraseña incorrectos/i).should("exist");
    cy.url().should("include", "/auth/login");
  });

  it("No debe permitir campos vacíos", () => {
    cy.visit("https://ticketazo.com.ar/auth/login");
    cy.get('[data-cy="btn-login"]').click();
    cy.get('[data-cy="input-email"]').then(($input) => {
      expect($input[0].validationMessage).to.not.be.empty;
    });
    cy.url().should("include", "/auth/login");
  });

  it("No debe permitir login con email mal colocado", () => {
    cy.visit("https://ticketazo.com.ar/auth/login");
    cy.url().should("include", "/auth/login");
    cy.get('[data-cy="input-email"]').type("usuario.com");
    cy.get('[data-cy="input-password"]').type("CursoTest2*");
    cy.get('[data-cy="btn-login"]').click();

    cy.get('[data-cy="input-email"]').then(($input) => {
      expect($input[0].validationMessage).to.not.be.empty;
    });
    // Esto coloco para confirmar que seguimos en el login
    cy.url().should("include", "/auth/login");
  });

  it("Debe cerrar sesión correctamente", () => {
    cy.visit("https://ticketazo.com.ar/");
    cy.get(".justify-end > .text-sm").click();
    cy.get('[data-cy="input-email"]').type("liliraspitu@gmail.com");
    cy.get('[data-cy="input-password"]').type("CursoTest2*");
    cy.get('[data-cy="btn-login"]').click();
    cy.url().should("eq", "https://ticketazo.com.ar/");
    cy.get(".space-y-1 > :nth-child(1)").click();

    cy.contains("button", "Logout").click({ force: true });
  });
});
