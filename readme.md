![time-differ logo](https://lh3.googleusercontent.com/TJE-ozoA8iHnXvddhB8W1qN5vZGiYnRd43CoD3l2GuSfRS0AjtkGuPgiVuLwuYsYDgJMsbRMJ7lwYpIjAlnZVFiPfrdKMTeVLX5394WuvWsW9BmNZEExFdwSimaiACQMqdVfulcavg=w466-h142)

---

Measure time difference.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install time-differ
```

## Declaration

via ES5:

```js
const timeDiff = require("time-differ");
```

## Usage

### Time Unit

```ts
type Unit =
  | "*"
  | "all"
  | "years"
  | "months"
  | "weeks"
  | "days"
  | "hours"
  | "minutes"
  | "seconds"
  | "milliseconds";
```

### Create an Index Point

Creates a new index point of time, with an option to set the **Time Unit**.

```js
const timeDiff = require("time-differ");

const point = timeDiff.create("seconds");
```

### Time Difference

Measure the time difference.

```js
const timeDiff = require("time-differ");

let point = timeDiff.create("seconds");

// ..some code goes here (took 40s)

point(); // ⇆ 40s

// ..some code goes here (took 15s)

point("After some code"); // ⇆ 55s (After some code)

point = timeDiff.create("*");

// ..some code goes here

point("An example of all units."); // ⇆ 1m::20s::325ms  # An example of all units.
```

### Time Precision

Set the time precision (decimal places).

```js
const timeDiff = require("time-differ");

timeDiff.precision(1);

const point = timeDiff.create("seconds");

// ..some code goes here

point("1 decimal places"); // ⇆ 4.3s  # 1 decimal places

timeDiff.precision(4);

// ..some code goes here

point("1 decimal places"); // ⇆ 16.3254s  # 4 decimal places
```

### Time Object

An object that is automatically generated within callback argument.

```ts
type TimeObject = {
  y?: number;
  mn?: number;
  w?: number;
  d?: number;
  h?: number;
  m?: number;
  s?: number;
  ms: number;
};
```

### Custom Time Difference

Use the difference data to create custom scenario.

```js
const timeDiff = require("time-differ");

const point = timeDiff.create("*");

// ..some code goes here # took 15s

point((timeObject) => {
  console.log(`It took ${timeObject.mn} months.`); // It took 0 months.
  console.log(`It took ${timeObject.s} seconds.`); // It took 7 seconds.
});
```

## Author

[Liav Barsheshet, LBDevelopments](https://github.com/liavbarsheshet)

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/time-differ.svg
[npm-url]: https://www.npmjs.com/package/time-differ
[downloads-image]: https://img.shields.io/npm/dm/time-differ.svg
[downloads-url]: https://npmcharts.com/compare/time-differ?minimal=true
