import LogInLogOut from '../../support/Pages/loginLogOut.js';
import DatosFuncion from '../../support/Pages/cargarFuncionDatos.js';

describe('Crear evento con fechas multiples', () => {
  it('TC-7.5	Crear evento con múltiples fechas correctamente', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();
 
    DatosFuncion.crearEventoMultiplesFechas(
      'Evento de prueba',  //nombre evento
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '2000',              //codPostal
      '27', '08', '2025',  //fecha
      '21', '30',          //horario
      '30', '08', '2025',  //fecha2
      '9', '30'          //horario2
    );
    
    DatosFuncion.siguiente()
    cy.contains('button', 'Anterior').should('be.visible');
  });
 
  it('TC-7.6	Crear evento con múltiples horarios y una fecha correctamente', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();
 
    DatosFuncion.crearEventoMultiplesHorarios(
      'Evento de prueba',  //nombre evento
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '2000',              //codPostal
      '29', '07', '2025',  //fecha
      '21', '30',          //horario
      '9', '30'          //horario2
    );
 
    DatosFuncion.siguiente()
    cy.contains('button', 'Anterior').should('be.visible');
  });

  it('TC-7.7	Validación de horarios duplicados en la misma fecha', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();

    DatosFuncion.crearEventoMultiplesHorarios(
      'Evento de prueba',  //nombre evento
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '2000',              //codPostal
      '29', '08', '2025',  //fecha
      '21', '30',          //horario
      '21', '30'          //horario2
    );

    DatosFuncion.siguiente()
    cy.contains('button', 'Anterior').should('not.be.visible');
  });

  it('TC-7.8	Eliminar horario de una fecha', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();
 
    DatosFuncion.crearEventoMultiplesHorarios(
      'Evento de prueba',  //nombre evento
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '2000',              //codPostal
      '29', '07', '2025',  //fecha
      '21', '30',          //horario
      '9', '30'          //horario2
    );
 
    DatosFuncion.eliminarHorario()
    DatosFuncion.siguiente()
    cy.contains('button', 'Anterior').should('be.visible');
  });
 
  it('TC-7.9	Intento de avanzar con una fecha sin horarios', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();
 
    DatosFuncion.crearEventoMultiplesHorarios(
      'Evento de prueba',  //nombre evento
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '2000',              //codPostal
      '29', '07', '2025',  //fecha
      '21', '30',          //horario
      '9', '30'          //horario2
    );
 
    DatosFuncion.eliminarHorario()
    DatosFuncion.eliminarHorario()
    DatosFuncion.siguiente()
    cy.contains('button', 'Anterior').should('be.visible');
  });

  
});
