Proyecto de Automatización de Pruebas con Cypress – Ticketazo

Este repositorio contiene los test automatizados realizados con Cypress para validar funcionalidades críticas de la plataforma [Ticketazo](https://ticketazo.com.ar/). Los casos de prueba fueron desarrollados como parte del proyecto estudiantil de QA Automation.
Se realizo:
Instalación

1. Clona el repositorio o abre tu proyecto local en VS Code.
2. Asegurate de tener [Node.js](https://nodejs.org/) instalado.
3. Desde la terminal, ejecutá:
npm init -y
npm install cypress --save-dev
npx cypress open

Seleccioná el archivo de test que querés correr desde el panel.

También podés correrlo por consola (modo headless):

bash
Copiar
Editar
npx cypress run --spec "cypress/e2e/login-comprador.cy.js"
🧑‍💻 Autor
Yuli Riveros – Estudiante de QA Manual & Automation