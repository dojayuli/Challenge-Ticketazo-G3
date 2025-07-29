class Home {
  
    /*
    //filtro busqueda
    cy.get('input[placeholder="Busca tu próxima función!"]')

    // Día entrada
    cy.get('[data-slot="segment"][data-type="day"]').eq(0)

    // Mes entrada
    cy.get('[data-slot="segment"][data-type="month"]').eq(0)

    // Año entrada
    cy.get('[data-slot="segment"][data-type="year"]').eq(0)

    // Día entrada
    cy.get('[data-slot="segment"][data-type="day"]').eq(1)

    // Mes entrada
    cy.get('[data-slot="segment"][data-type="month"]').eq(1)

    // Año entrada
    cy.get('[data-slot="segment"][data-type="year"]').eq(1)

    //filtro categoria
    cy.intercept('GET', '/api/backend/events').as('getEvents')
    cy.get('button[aria-label="Categoría"]').click()
    cy.wait('@getEvents', {timeout: 8000})
    cy.contains('li', 'Recital').should('be.visible').click({ force: true })

    //filtro Provincia
    cy.get('button[aria-label="Provincia"]').click()
    cy.contains('li', 'Córdoba').should('be.visible').click({ force: true })

    //filtro Localidad VER QUE ESTA MAL
    cy.get('button[arial-label="Localidad"]').should('be.visible').click()
    cy.contains('li').should('be.visible').eq(0).click({ force: true })

    //Boton limpiar filtro
    cy.contains('button', 'Limpiar filtros').click()

    //Seleccionar las card y recorrerlas
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
    */
    //ampliar un evento
    //cy.intercept('POST', '**/GetViewportInfo').as('ampliarEvento')
    //cy.get('[data-cy^="evento-card-"] button').eq(0).click()
    //cy.wait('@ampliarEvento', {timeout: 8000})

    //compartir evento
   // cy.get('section[role="dialog"] button').eq(3).click()
    //cy.contains('Link copiado al portapapeles').should('be.visible') //Ver como capturar el mensaje por que esta mal

    //volver atras de ampliar evento
    //cy.get('section[role="dialog"] button').eq(1).click()

    //comprar evento
    //cy.get('section[role="dialog"] button').eq(2).click()


    //LoginLogOut.loginLogOut()
   // cy.intercept('POST', '**/GetViewportInfo').as('ampliarEvento')
    //cy.get('[data-cy^="evento-card-"] button').eq(0).click()
    //cy.wait('@ampliarEvento', {timeout: 8000})
   // cy.get('section[role="dialog"] button').eq(2).click()

   // SeleccionarEntradas.seleccionarSectores()
   // SeleccionarEntradas.seleccionarButacas()
   // SeleccionarEntradas.botonComprar()
  
}

export default new Home()
