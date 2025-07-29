describe('Verificar vista eventos disponibles y su informacion', () => {
  it('passes', () => {
    cy.viewport(1920, 1080)
    cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
    
    cy.get('[data-cy^="evento-card-"]').each(($card) => {
      // Dentro de cada tarjeta, verificamos contenido esperado
      cy.wrap($card).within(() => {
        cy.get('[data-cy^="evento-img-"]').should('be.visible')
        cy.get('[data-cy="evento-titulo"]').should('be.visible')
        cy.get('[data-cy="evento-fecha"]').should('be.visible')
        cy.get('[data-cy="evento-horario"]').should('be.visible')
        cy.get('[data-cy="evento-lugar"]').should('be.visible')
        cy.get('[data-cy^="btn-ver-evento-"]').should('be.visible')
      })
    })
  })
})