# kbdayz

![](https://img.shields.io/bundlephobia/min/kbdayz)
![](https://img.shields.io/npm/v/kbdayz)
![](https://img.shields.io/npm/dt/kbdayz)
![](https://img.shields.io/github/license/markmead/kbdayz)

## Install

```js
npm install kbdayz

// or with Yarn

yarn add kbdayz
```

## Usage

```js
new DateFormat(new Date(), {
  lang: 'en',
  country: 'US',
}).format()

// 9/18/2020
```

Will return a date in English with American formatting `9/18/2020`.

## Options

You can pass a `dateStyle` and a `timeStyle` to format the date differently.

These take `short`, `medium` and `long` as options.

```js
new DateFormat(new Date(), {
  lang: 'en',
  country: 'US',
  dateStyle: 'long',
}).format()

// September 18, 2020

new DateFormat(new Date(), {
  lang: 'en',
  country: 'US',
  dateStyle: 'long',
}).format()

// 2:30:30 PM GMT+1
```
