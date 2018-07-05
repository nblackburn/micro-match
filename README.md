# micro match

A simple url matching utility for micro.

## Installation

To install micro match, simply run the following command in your terminal of choice.

```bash
npm install -g micro-match
```

Once you have installed micro match, simply include it in your project like so...

```javascript
const match = require('micro-match');
```

## Usage

micro match exposes a single method which allows you to match a route binding to it's real world counterpart and return it's bindings.

```javascript
const {id} = match('/users/:id', '/users/1');
```
Parameters are defined as a comma followed by an alias to bind it's value to.

You can also create optional parameters by attaching a `?` suffix. This will allow both `/users` and `/users/1` to be matched.

Now you will be able to access the `id` parameter with the value of `1` and handle it however ever you like.

## Changes

Details for each release are documented in the [release notes](CHANGELOG.md).

## License

This utility is licensed under [MIT](http://opensource.org/licenses/mit), see [LICENSE.md](LICENSE.md) for details.

## Donations

[![](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://buymeacoffee.com/nblackburn)
