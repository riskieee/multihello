# multihello 👋

[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/) [![Coverage Status](https://coveralls.io/repos/github/riskieee/multihello/badge.svg?branch=main)](https://coveralls.io/github/riskieee/multihello?branch=main) [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/riskieee/multihello/blob/main/LICENSE) [![Build Status ](https://travis-ci.com/riskieee/multihello.svg?branch=main)](https://travis-ci.com/riskieee/multihello)

An npm library to return a greeting as a string like `Moni (Chewa)` from initially 100 languages.

## Why?

As our colorful world have way more than 100 languages this project tries to get you excited about it. So you may use it to greet your visitors and users on your landing page or just to surprise yourself with the diversity of the languages on our planet Earth. I had the idea in a text capture web project to greet the visitors and at the same time allow them to use their language.

Funfact: 'Moni' is used in the Chewa language as spoken in Southern, Southeast and East Africa: https://en.wikipedia.org/wiki/Chewa_language

# NPM Installation

As you like install multihello as dev or dependence librarty:

```sh
# local
$ npm i multihello
```

```sh
# global
$ npm -g i multihello
```

```sh
# local dev
$ npm -D i multihello
```

# Usage by Example with Options

Run the examples with

```js
node run demo
```

To use it as a npm library in your project, you just need to import it in a JS file:

```js
const multihello = require('./multihello.js')
```

As multihello returns you a string just by call you may use it like:

1. Random output without options

```js
console.log(multihello())
// random output: Hallo (German)
```

2. Use an integer for a specific language as ordered in hellos.json

```js
console.log(multihello(0))
// fixed output: Hello (English)
```

3. You may use a complete or partial string to search for a specific language or hello. If nothing is found you get 'Sorry, no match :('

```js
console.log(multihello('dish'))
// found output: Hej (Swedish)
```

# Contributing

Get involved! There are more than 100 languages so would be nice you add some Hello’s in hellos.json and helloskeys.json :)

# MIT LICENSE

Copyright (c) 2021 [riskieee](https://github.com/riskieee)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
