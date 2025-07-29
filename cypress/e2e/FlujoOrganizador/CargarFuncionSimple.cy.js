import LogInLogOut from '../../support/Pages/loginLogOut.js';
import DatosFuncion from '../../support/Pages/cargarFuncionDatos.js';

describe('Crear evento con fechas simples', () => {
  it('TC-7.1 Crear evento simple exitoso', () => {
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
      '2000'               //codPostal
    );

    cy.contains('button', 'Anterior').should('be.visible');
  });
 
  it('TC-7.2	Avanzar sin llenar los campos obligatorios al cargar  datos del evento', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();
    DatosFuncion.accederCargarEvento();
    DatosFuncion.edad();
    DatosFuncion.genero();
    DatosFuncion.horario('21', '30');
    DatosFuncion.duracion('2', '0');
    DatosFuncion.siguiente();

    cy.contains('El título no puede estar vacío.').should('be.visible');
    cy.contains('Debe seleccionar un lugar para el evento.').should('be.visible');
    cy.contains('Debe agregar una descripción del evento.').should('be.visible');
    cy.get('button').contains('Anterior').should('not.exist');
  });

  it('TC-7.3	Avanzar llenando solo los campos obligatorios al cargar  datos del evento', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();
    DatosFuncion.accederCargarEvento();
    DatosFuncion.titulo('Titulo');
    DatosFuncion.fecha('20', '07', '2026');
    DatosFuncion.horario('21', '30');
    DatosFuncion.duracion('2', '0');
    DatosFuncion.siguiente();

    cy.contains('button', 'Anterior').should('be.visible');
  });

  it('TC-7.4	Validación de fecha pasada no permitida', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();

    DatosFuncion.crearEventoSimple(
      'Evento de prueba',  //nombre evento
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '2000',              //codPostal
      '26', '07', '2025',  //fecha
      '21', '30',          //horario
    );

    cy.contains('Debe seleccionar una fecha válida.').should('not.be.visible');
  });
});