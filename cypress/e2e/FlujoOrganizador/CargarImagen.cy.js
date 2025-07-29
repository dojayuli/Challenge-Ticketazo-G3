import LogInLogOut from '../../support/Pages/loginLogOut.js';
import DatosFuncion from '../../support/Pages/cargarFuncionDatos.js';
import EntradasFuncion from '../../support/Pages/cargarFuncionEntradas.js';
import ImagenFuncion from '../../support/Pages/cargarFuncionImagen.js';

describe('Cargar imagen correcta', () => {
  it('TC-10.1	Carga exitosa de imagen .jpg', () => {
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

  });

  it('TC-10.2	Carga de imagen en formato no válido', () => {
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
   ImagenFuncion.subirImagen('cypress/fixtures/png.png')
   cy.contains('La imagen debe ser en formato .jpg (.jpeg).').should('be.visible');

  });


  it('TC-10.3	Carga de imagen con peso mayor a 2MB', () => {
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
    ImagenFuncion.subirImagen('cypress/fixtures/400x300.jpg')
    cy.contains('La imagen debe ser cuadrada (mismo ancho y alto).').should('be.visible');

  });

  it('TC-10.4	Carga de imagen con dimensiones no cuadradas', () => {
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
    ImagenFuncion.subirImagen('cypress/fixtures/5MB.jpg')

  });

  it('TC-10.5	Intento de avanzar sin imagen cargada', () => {
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
    ImagenFuncion.siguiente()
    cy.contains('button', 'Adquirir tu entrada').should('not.be.visible')

  });

});