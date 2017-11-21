# ai-asfullfills

[![Travis Build Status](https://img.shields.io/travis/parro-it/ai-asfullfills/master.svg)](http://travis-ci.org/parro-it/ai-asfullfills)
[![NPM downloads](https://img.shields.io/npm/dt/ai-asfullfills.svg)](https://npmjs.org/package/ai-asfullfills)

> Return an aync iterable that emit a series promises as they fullfills

This module could be a useful substitute for `Promise.all` to use when you need
to parallelized the resolution of a set of promises and you need to receive the
resolve promises as soon as possible.

> **_This module is part of
> [Async iterable fun](https://github.com/parro-it/ai-fun), a complete toolset
> of modules to work with async iterables._**

## Usage

description of the example

```js
import asFullfills from 'ai-asfullfills';
import concat from 'ai-concat';

const emit = n => new Promise(resolve =>
  setTimeout(() => Promise.resolve(n), n * 100
);

console.log (
  await concat.obj(asFullfills([emit(1), emit(3), emit(2)]))
);
```

This will output

```
1
2
3
```

## API

## Install

With [npm](https://npmjs.org/) installed, run

```bash
npm install --save ai-asfullfills
```

## See Also

* [`parro-it/ai-fun`](https://github.com/parro-it/ai-fun) - A collection of
  modules to easy deal with async iterables.

* [`noffle/common-readme`](https://github.com/noffle/common-readme) - « a common
  readme for node ».

## License

MIT Licensed © 2017 Andrea Parodi
