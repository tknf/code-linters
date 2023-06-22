// @ts-check

const coreRules = require("./rules/core");
const importRules = require("./rules/import");
const typescriptRules = require("./rules/typescript");
const importSettings = require("./settings/import");

// const OFF = 0;
// const WARN = 1;
// const ERROR = 2;

/** @type { import("eslint").Linter.Config } */
const config = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
    ecmaVersion: "latest",
  },
  plugins: ["import"],
  settings: {
    ...importSettings,
  },
  rules: {
    ...coreRules,
    ...importRules,
  },
  overrides: [
    {
      files: ["**/*.ts"],
      extends: ["plugin:import/typescript"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint"],
      rules: {
        ...typescriptRules,
      },
    },
  ],
};

module.exports = config;
