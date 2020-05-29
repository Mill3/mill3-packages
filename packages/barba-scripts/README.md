[![NPM version](https://img.shields.io/npm/v/@mill3-packages/barba-scripts?style=flat-square)](https://www.npmjs.com/package/@mill3-packages/barba-scripts)
[![Dependencies](https://img.shields.io/librariesio/release/npm/@barba/prefetch?style=flat-square)](https://github.com/barbajs/barba/network/dependencies)

# MILL3-packages : @barba/scripts

TODO: what it does

## Install

Using npm:

```sh
npm install --save-dev @barba/scripts
```

or using yarn:

```sh
yarn add @barba/scripts --dev
```

## How to use

First, import script in your file where you also init Barba.

```js
import scripts from "@mill3-packages/barba-scripts/dist";
```

Then just before your main Barba init call, `use()` this script.

```js
barba.use(scripts);
barba.init();
```
