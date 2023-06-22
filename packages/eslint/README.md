# @tknf-labs/eslint-config

Prettier configuration for TKNF.

## Usage

Install `@tknf-labs/eslint-config`.

```bash
$ yarn add -D @tknf-labs/eslint-config
# or
$ pnpm add -D @tknf-labs/eslint-config
# or
$ npm install --save-dev @tknf-labs/eslint-config
```

And then, you use it in ESLint configraiton.

node:
```json
{
  ...
  "extends": ["@tknf-labs/eslint-config/node"]
}
```

react:
```json
{
  ...
  "extends": ["@tknf-labs/eslint-config/react"]
}
```
