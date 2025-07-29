class EntradasFuncion {

  nombreEntradas() {
    cy.get('button[aria-haspopup="listbox"]').click();
    return cy.get('li[tabindex="-1"]').should('be.visible').eq(0).click();
  }

  cantidadEntradas() {
    return cy.get('input[name="capacidadEntrada0"]').click().type('15');
  }

  precioEntradas() {
    return cy.get('input[name="precioEntrada0"]').click().type('100');
  }

  siguiente() {
    return cy.contains('button', 'Siguiente').click();
  }

  cargarEntradas() {
    this.nombreEntradas();
    this.cantidadEntradas();
    this.precioEntradas();
    this.siguiente();
  }

}

export default new EntradasFuncion();