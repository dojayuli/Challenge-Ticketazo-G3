import LogInLogOut from '../../support/Pages/loginLogOut.js';
import DatosFuncion from '../../support/Pages/cargarFuncionDatos.js';
import EntradasFuncion from '../../support/Pages/cargarFuncionEntradas.js';
import ImagenFuncion from '../../support/Pages/cargarFuncionImagen.js';

describe('Visualizacion final y confirmacion', () => {
  it('TC-11.0	Visualización del resumen final y confirmacion del evento', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();
    DatosFuncion.crearEventoSimple(
      'Evento de prueba',  //nombre evento
      '27', '08', '2025',  //fecha
      '21', '30',          //horario
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '5000'               //codPostal
    );
   EntradasFuncion.cargarEntradas();
   ImagenFuncion.subirImagen('cypress/fixtures/400x400.jpg')
   ImagenFuncion.siguiente()

   //verifico
   cy.contains('h2', 'Evento de prueba').should('be.visible')
   cy.contains('27/08/2025 - 21:30').should('be.visible');
   cy.get('img').should('exist').and('be.visible');
   cy.contains('Esta es la descripcion del evento').should('be.visible');
   cy.contains('button', 'Adquirir tu entrada').should('be.visible')
   cy.contains('button', 'ATP').should('be.visible')

  });

});

//Tu evento fue guardado y está pendiente de aprobación.