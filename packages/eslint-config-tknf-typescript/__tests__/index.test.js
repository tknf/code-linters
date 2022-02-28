const ESLint = require("eslint").ESLint;
const baseConfig = require("../index");

const normalizePath = (path) => {
  return /node_modules/.test(path) ? path.split("node_modules")[1] : path;
};

describe("eslint-config-tknf-typescript", () => {
  test("should match snapshot", async () => {
    const config = await new ESLint({
      baseConfig,
      useEslintrc: false
    }).calculateConfigForFile("test.ts");
    const keys = Object.keys(config);

    ["extends", "parser"].forEach((key) => {
      const _config = config[key];
      if (Array.isArray(_config)) {
        config[key] = _config.map(normalizePath);
      } else {
        config[key] = normalizePath(_config);
      }
    });

    keys.forEach((key) => {
      expect(config[key]).toMatchSnapshot(key);
    });
  });
});
