# empty-yarn-package

This is a very simple starter-kit for JavaScript packages.

Here's what's in the box:

* Babel compilation with `env` and `flow` presets
  (with `src` being treated as a modules directory
  for more convenient `import`s)
* Automatic generation of `.js.flow` files through `copy-flow-source`
* Tests using [AVA]
* Linting using [eslint] and [prettier]
* Enforcement of green tests and happy linters
  using [husky] and [lint-staged].

[ava]: https://github.com/avajs/ava
[eslint]: https://eslint.org
[prettier]: https://prettier.io
[husky]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged
