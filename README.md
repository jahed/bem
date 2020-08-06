# @jahed/bem

[![Travis](https://img.shields.io/travis/jahed/bem.svg)](https://travis-ci.org/jahed/bem)
[![npm](https://img.shields.io/npm/v/@jahed/bem.svg)](https://www.npmjs.com/package/@jahed/bem)
[![Patreon](https://img.shields.io/badge/patreon-donate-f96854.svg)](https://www.patreon.com/jahed)
[![Liberapay](https://img.shields.io/badge/liberapay-donate-d9b113.svg)](https://liberapay.com/jahed)
[![PayPal](https://img.shields.io/badge/paypal-donate-009cde.svg)](https://paypal.me/jahed/5)

Functions for using BEM in CSS and CSS Modules.

- [Using CSS Modules with BEM](https://jahed.dev/2018/02/09/using-css-modules-with-bem/)
- [@jahed/bem, A Brief History](https://jahed.dev/2018/02/09/jahed-bem-a-brief-history/)

## Installation

```bash
# NPM
npm install @jahed/bem

# Yarn
yarn add @jahed/bem
```

## Usage

```js
import { bem } from '@jahed/bem'

const className = bem('MyElement', {
  color: 'red',
  active: true,
  disabled: false
})

console.log(className)
// .MyElement .MyElement--color--red .MyElement--active
```

### CSS Modules

The example below assumes you've configured CSS Modules to render classes with a `-hash` suffix.

```js
import { bemModule } from '@jahed/bem'
import styles from 'styles.module.css'

cont bem = bemModule(styles)

const className = bem('MyElement', {
  color: 'red',
  active: true,
  disabled: false
})

console.log(className)
// .MyElement-hash .MyElement-hash--color--red .MyElement-hash--active
```

For more thorough examples, see the tests and blog posts linked above.

## API

For complete API documentation, [see the documentation website](https://jahed.github.io/bem/).

**`bem(block: string, modifiers: object<string, (boolean|number|string)?>): string`**

Generates BEM-compliant class names for the given `block` (or `element`) with modifiers.

[Examples](src/bemModule.test.ts)

---

**`bemModule(cssModuleLocals): bem`**

Generates a `bem`-compliant function which maps the resulting class names to the given
`cssModuleLocals` map.

[Examples](src/bemModule.test.ts)

---

**`join(...string): string`**

Joins the given `string`s with a whitespace (` `), filtering any falsy
values (such as `undefined`, `null`, `false`, `''`).

[Examples](src/join.test.ts)

---

## License

[MIT](LICENSE)
