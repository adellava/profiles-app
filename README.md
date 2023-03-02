# Setup

```zsh
npm install
```

# Development

```zsh
npm run start
```

# Unit Test

```zsh
npm run test
```

# e2e Test

```zsh
npm run e2e
```

# UI Architecture

- it follows the [atomic design](https://atomicdesign.bradfrost.com/chapter-2/) and [BEM](http://getbem.com/) methodologies
- In the `src/styles` folder there are the "members" (variables, functions, mixins, etc) that can be imported with scss modules (`@use "src/styles";`) by every component
- we a [javascript friendly version of BEM](https://medium.com/trabe/a-more-javascript-friendly-bem-naming-convention-75c7f01ff736) in oder to facilitate the manipulation of the class names
  - `MyBlock` blocks are written using PascalCase
  - `MyBlock_myElement` elements are written using camelCase, joined to the block name using a single underscore (`_`)
  - `MyBlock___myModifier` modifier also use camelCase, but we use three underscores (`___`) to join the modifier to the block or element name
