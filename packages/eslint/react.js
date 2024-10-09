// @ts-check

const coreRules = require("./rules/core");
const importRules = require("./rules/import");
const reactRules = require("./rules/react");
const jsxA11yRules = require("./rules/jsx-a11y");
const typescriptRules = require("./rules/typescript");
const importSettings = require("./settings/import");
const reactSettings = require("./settings/react");

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
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
    ecmaVersion: "latest",
    babelOptions: {
      presets: [require.resolve("@babel/preset-react")],
    },
  },
  plugins: ["import", "react", "react-hooks", "jsx-a11y"],
  settings: {
    ...reactSettings,
    ...importSettings,
  },
  rules: {
    ...coreRules,
    ...importRules,
    ...reactRules,
    ...jsxA11yRules,
  },
  overrides: [
    {
      files: ["**/*.js?(x)", "**/*.ts?(x)"],
      extends: ["plugin:import/typescript"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
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
