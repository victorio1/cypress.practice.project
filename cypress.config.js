const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'k88r2z',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
