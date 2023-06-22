# @tknf-labs/code-linters

Lint and format tools for TypeScript(or JavaScript) project.

## Packages
- `@tknf-labs/eslint-config`
- `@tknf-labs/prettier-config`

## ESLint

### Installation

#### Install package
```bash
$ yarn add -D @tknf-labs/eslint-config
# or
$ npm install --save-dev @tknf-labs/eslint-config
```

### Configuration
```json:.eslintrc
{
  "extends": ["@tknf-labs/eslint-config/node"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## Prettier

### Installation
```bash
$ yarn add -D @tknf-labs/prettier-config`
# or
$ npm install --save-dev @tknf-labs/prettier-config
```

### Configuration
```json:package.json
{
  "prettier": "@tknf-labs/prettier-config"
}
```
