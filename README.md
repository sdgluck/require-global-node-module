# require-global-node-module

> Require a globally installed npm module

See also: [`require-local-node-module`](https://github.com/sdgluck/require-local-node-module)

## Install

```sh
npm install --save require-global-node-module
```

```sh
yarn add require-global-node-module
```

## Import

```js
// ES2015
import requireglobal from 'require-global-node-module'
```

```sh
// CommonJS
var requireglobal = require('require-global-node-module')
```

## Usage

### `requireGlobal (module) : *`

Require a globally installed npm module.

- __module__ {String} (required) Name of the module to require

Returns the required module as per usual calls to `require`.

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out the [great video tutorials on egghead.io](http://bit.ly/2aVzthz)!

## License

MIT © [Sam Gluck](github.com/sdgluck)
