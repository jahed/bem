# @jahed/bem

[![Travis](https://img.shields.io/travis/jahed/bem.svg)](https://travis-ci.org/search/bem)
[![npm](https://img.shields.io/npm/v/@jahed/bem.svg)](https://www.npmjs.com/package/bem)
[![Patreon](https://img.shields.io/badge/patreon-donate-f96854.svg)](https://www.patreon.com/jahed)

Functions for using BEM in CSS.

- [Using CSS Modules with BEM](https://jahed.io/2018/02/09/using-css-modules-with-bem/)
- [@jahed/bem, A Brief History](https://jahed.io/2018/02/09/jahed-bem-a-brief-history/)

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
