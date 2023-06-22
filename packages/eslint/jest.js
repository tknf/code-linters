const jestRules = require("./rules/jest");
const jestDomRules = require("./rules/jest-dom");

/** @type { import("eslint").Linter.Config } */
module.exports = {
  plugins: ["jest", "jest-dom"],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["**/__tests__/**/*", "**/*.{spec,test}.*"],
      env: {
        "jest/globals": true,
      },
      rules: {
        ...jestRules,
        ...jestDomRules,
      },
    },
  ],
};
