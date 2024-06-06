const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6p1mpk',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-html-reporter/GenerateReport')(on, config)
    },
  },
});
