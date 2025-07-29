class DatosFuncion {

  accederCargarEvento() {
    cy.get('a[href="/newEvent"]').click();
  }

  titulo(titulo) {
    cy.get('[data-cy="input-titulo"]').click().type(titulo);
  }

  fecha(dia, mes, año) {
    cy.get('[data-type="day"]').click().type(dia)
    cy.get('[data-type="month"]').click().type(mes)
    cy.get('[data-type="year"]').click().type(año);
  }

  fechaMultiple(dia2, mes2, año2) {
    cy.get('[data-type="day"]').eq(1).click().type(dia2);
    cy.get('[data-type="month"]').eq(1).click().type(mes2);
    cy.get('[data-type="year"]').eq(1).click().type(año2);
  }

  edad() {
    cy.get('button[data-cy="select-edad"]').click();
    cy.get('li[data-key="ATP"]').should('be.visible').click();
  }

  genero() {
    cy.get('button[data-cy="select-genero"]').click();
    cy.get('li[data-key="Recital"]').should('be.visible').click();
  }

  horario(hora, minutos) {
    cy.get('[data-cy*="input-horario"]').within(() => {
      cy.get('div[data-type="hour"]').click().type(hora);
      cy.get('div[data-type="minute"]').click().type(minutos);
    });
  }

  horarioMultiple(hora2, minutos2) {
    cy.get('[data-cy*="input-horario"]').eq(1).within(() => {
      cy.get('div[data-type="hour"]').click().type(hora2);
      cy.get('div[data-type="minute"]').click().type(minutos2);
    });
  }

  duracion(hora, minutos) {
    cy.get('[data-cy="input-duracion"]').within(() => {
      cy.get('div[data-type="hour"]').click().type(hora);
      cy.get('div[data-type="minute"]').click().type(minutos);
    });
  }

  lugar() {
    cy.get('button[data-cy="select-lugar-evento"]').click();
    cy.get('li[data-cy="option-lugar-7"]').should('be.visible').click();
  }

  nombreLugar(nombreLugar) {
    cy.get('[data-cy="input-nombre-lugar"]').type(nombreLugar);
  }

  calleLugar(calle) {
    cy.get('[data-cy="input-calle-lugar"]').type(calle);
  }

  alturaLugar(altura) {
    cy.get('[data-cy="input-altura-lugar"]').type(altura);
  }

  codigoPostalLugar(codigoPostalLugar) {
    cy.get('[data-cy="input-codigo-postal-lugar"]').type(codigoPostalLugar);
  }

  provincia() {
    cy.get('[aria-label="Provincia"]').click();
    cy.get('li[data-key="14"]').should('be.visible').click();
  }

  localidad() {
    cy.get('[aria-label="Localidad"]').click();
    cy.get('li[data-key="14098010"]').should('be.visible').click();
  }

  info() {
    cy.get('[data-cy="input-info"]').click().type('Esta es la descripcion del evento');
  }

  activarEventoMultiple() {
    cy.get('[data-cy="switch-multifecha"] input[type="checkbox"]').click();
  }

  agregarHorario() {
  return cy.get(':nth-child(1) > .flex-col.gap-1 > .flex-wrap > .bg-primary').click()
  }

  eliminarHorario() {
  return cy.contains('button', '×').eq(0).click();
  }

  eliminarHorario2() {
  cy.get('button').contains('×').then(($btn) => {
    if ($btn.length > 0) {
      cy.wrap($btn[0]).click();      
      cy.wait(200);                  
      this.eliminarHorario2();      
    }
  });
}

  agregarFecha() {
  return cy.contains('button', '+ Agregar Fecha').click();
  }

  eliminarFecha() {
  return cy.contains('button', 'Eliminar Fecha').click();
  }

  siguiente() {
  cy.contains('button', 'Siguiente').should('not.be.disabled').and('be.visible').click();
  }

  crearEventoSimple(titulo, dia, mes, año, hora, minutos, duracionHora, duracionMinutos, nombreLugar, calle, altura, codigoPostalLugar) {
    this.accederCargarEvento();
    this.titulo(titulo);
    this.fecha(dia, mes, año);
    this.edad();
    this.genero();
    this.horario(hora, minutos);
    this.duracion(duracionHora, duracionMinutos);
    this.lugar();
    this.nombreLugar(nombreLugar);
    this.calleLugar(calle);
    this.alturaLugar(altura);
    this.codigoPostalLugar(codigoPostalLugar);
    this.provincia();
    this.localidad();
    this.info();
    this.siguiente();
  }

  crearEventoMultiplesFechas(titulo, duracionHora, duracionMinutos, nombreLugar, calle, altura, codigoPostalLugar, dia, mes, año, hora, minutos, dia2, mes2, año2, hora2, minutos2) {
    this.accederCargarEvento();
    this.titulo(titulo);
    this.edad();
    this.genero();
    this.horario(hora, minutos);
    this.duracion(duracionHora, duracionMinutos);
    this.lugar();
    this.nombreLugar(nombreLugar);
    this.calleLugar(calle);
    this.alturaLugar(altura);
    this.codigoPostalLugar(codigoPostalLugar);
    this.provincia();
    this.localidad();
    this.info();
    this.activarEventoMultiple();
    this.fecha(dia, mes, año);
    this.horario(hora, minutos);
    this.agregarFecha();
    this.fechaMultiple(dia2, mes2, año2);
    this.horarioMultiple(hora2, minutos2);
  }

  crearEventoMultiplesHorarios(titulo, duracionHora, duracionMinutos, nombreLugar, calle, altura, codigoPostalLugar, dia, mes, año, hora, minutos, hora2, minutos2) {
    this.accederCargarEvento();
    this.titulo(titulo);
    this.edad();
    this.genero();
    this.horario(hora, minutos);
    this.duracion(duracionHora, duracionMinutos);
    this.lugar();
    this.nombreLugar(nombreLugar);
    this.calleLugar(calle);
    this.alturaLugar(altura);
    this.codigoPostalLugar(codigoPostalLugar);
    this.provincia();
    this.localidad();
    this.info();
    this.activarEventoMultiple();
    this.fecha(dia, mes, año);
    this.horario(hora, minutos);
    this.agregarHorario()
    this.horarioMultiple(hora2, minutos2);
  }
}

export default new DatosFuncion()