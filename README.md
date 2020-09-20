# kbDays

![](https://img.shields.io/bundlephobia/min/kbdays)
![](https://img.shields.io/npm/v/kbdays)
![](https://img.shields.io/npm/dt/kbdays)
![](https://img.shields.io/github/license/markmead/kbdays)

## Install

```js
npm install kbdays

yarn add kbdays
```

## Usage

```js
import DateFormat from 'kbjdays'

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
import DateFormat from 'kbjdays'

new DateFormat(new Date(), {
  lang: 'en',
  country: 'US',
  dateStyle: 'long',
}).format()

// September 18, 2020

new DateFormat(new Date(), {
  lang: 'en',
  country: 'US',
  timeStyle: 'long',
}).format()

// 2:30:30 PM GMT+1
```
