// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/expect-expect */

// Import commands.js using ES2015 syntax:

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests
// const app = window.top

// if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
//   const style = app.document.createElement('style')
//   style.innerHTML = '.command-name-request, .command-name-xhr { display: none }'
//   style.setAttribute('data-hide-command-log-request', '')

//   app.document.head.appendChild(style)
// }

Cypress.on('uncaught:exception', () => {
  // we don't want to fail the test so we return false
    return false
  
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})
