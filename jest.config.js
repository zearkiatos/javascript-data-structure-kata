module.exports = {
    name: "javascript-data-structure-kata",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 100,
        branches: 75,
        lines: 100,
        functions: 100,
      },
    },
  };