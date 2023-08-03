module.exports = {
    name: "javascript-data-structure-kata",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 98,
        branches: 92,
        lines: 98,
        functions: 100,
      },
    },
  };