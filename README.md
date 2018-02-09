# @jahed/bem

[![Travis](https://img.shields.io/travis/jahed/bem.svg)](https://travis-ci.org/search/bem)
[![npm](https://img.shields.io/npm/v/@jahed/bem.svg)](https://www.npmjs.com/package/bem)

Functions for using BEM in CSS.

- [Using CSS Modules with BEM](https://medium.com/@jahed/using-css-modules-with-bem-9a5f41ee592e)
- [@jahed/bem, A Brief History](https://medium.com/@jahed/jahed-bem-a-brief-history-94e370d29a12)

## Usage

```
npm install --save @jahed/bem

yarn add @jahed/bem
```

### API

#### `bem(block: string, modifiers: object<string, (boolean|number|string)?>): string`

Generates BEM-compliant class names for the given `block` (or `element`) with modifiers.

[Examples](src/bemModule.test.js)

#### `bemModule(cssModuleLocals): bem`

Generates a `bem`-compliant function which maps the resulting class names to the given 
`cssModuleLocals` map.

[Examples](src/bemModule.test.js)

#### `join(...string): string`

Joins the given `string`s with a whitespace (` `), filtering any falsy 
values (such as `undefined`, `null`, `false`, `''`).

[Examples](src/join.test.js)
