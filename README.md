# sayHello 👋

An npm library to return a greeting as a string like ` Moni (Chewa)` from 100 languages.

## Why?

As our colorful world have way more than 100 languages this project trys to make curious. You may use it to greet your visitors and users in your landingpage or just to surprise yourself with the diversity the languages on our planet earth. 'Moni' is used in the Chewa language and spoken Southern, Southeast and East Africa: https://en.wikipedia.org/wiki/Chewa_language

# NPM Installation

As you like install sayHello as dev or dependece librarty:

```sh
# local
$ npm i sayHello
```

```sh
# global
$ npm -g i sayHello
```

```sh
# local dev
$ npm -D i sayHello
```

# Usage by Example with Options

Run the examples with

```js
node examples.js
```

To use it as a npm library in your project, you just need to import it in a JS file:

```js
const sayHello = require('./sayHello.js')
```

As sayHello returns you a string just by call you may use it like:

1. Random output without options

```js
console.log(sayHello())
// random output: Hallo (German)
```

2. Use an integer for a specific language as ordered in hellos.json

```js
console.log(sayHello(0))
// fixed output: Hello (English)
```

3. You may use a complete or part string to search for a specific language or hello. If noting is found you get 'Sorry, no match :('

```js
console.log(sayHello('dish'))
// found output: Hej (Swedish)
```

# Contributing

Get involved! There are more than 100 languages so would be nice you add some Hello’s :)

# MIT LICENSE

Copyright (c) 2021 [riskieee](https://github.com/riskieee)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
