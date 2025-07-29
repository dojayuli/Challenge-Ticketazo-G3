class SeleccionarEntradas {
  seleccionarSectores() {
    // Click en el botón "Auditorio"
    cy.contains('button', 'Auditorio').click()
  }

  seleccionarButacas() {
    // Interceptar la API de sectores (cubre todas las variantes con *)
    cy.intercept('GET', '/api/backend/layout/sectors/sector/*').as('verButacas')

    // Click en el primer botón habilitado
    cy.get('button:not([disabled])').last().click()

    // Esperar la respuesta de la API de butacas
    cy.wait('@verButacas', { timeout: 8000 }).then(({ response }) => {
      cy.log('Respuesta de butacas:', JSON.stringify(response.body))
      expect(response.statusCode).to.eq(200) // Validación básica
    })
  }

  botonComprar() {
    cy.contains('button', 'Comprar').click()
  }

  botonContinuar() {
    cy.contains('button', 'Continuar').click()
  }

  adquirirEntrada() {
    cy.contains('button', 'Comprar').click()
    cy.get('h1').contains('Mis Entradas')
  }

  aceptarTerminos() {
    cy.get('input[aria-label="Aceptar términos"]').check({ force: true })
  }

}

export default new SeleccionarEntradas()