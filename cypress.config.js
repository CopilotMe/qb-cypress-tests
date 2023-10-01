const cypress = require('cypress')
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  defaultCommandTimeout: 10000,
  failOnStatusCode: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // require('./cypress/plugins/index.js')(on, config)     
      return config
    },
    // baseUrl: 'https://staging-shift-planning.dental21.de',
    specPattern: 'cypress/e2e/*/**/*.cy.js',
  },
})
