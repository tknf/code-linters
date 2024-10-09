// const OFF = 0;
const WARN = 1;
const ERROR = 2;

/** @type { Record<string, import("eslint/lib/shared/types").RuleConf> } */
module.exports = {
  "import/first": ERROR,
  "import/no-amd": ERROR,
  "import/no-webpack-loader-syntax": ERROR,
  "import/order": WARN,
};
