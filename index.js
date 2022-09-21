/*!
 * time-differ - Measure time difference.
 *
 * [index.js] - Styled Terminal main module.
 *
 * Author: Liav Barsheshet, LBDevelopments <liavbarsheshet@gmail.com, liavb@campus.technion.ac.il>
 * Website: https://www.liavbarsheshet.net
 * Copyright(c) 2020-2022 Liav Barsheshet <LBDevelopments>
 * MIT Licensed
 */

const properties = {
  y: 31556925945.216,
  mn: 2629743828.768,
  w: 604800000,
  d: 86400000,
  h: 3600000,
  m: 60000,
  s: 1000,
  ms: 1,
};

const propertiesDict = {
  //Years
  y: "y",
  yr: "y",
  year: "y",
  years: "y",
  // Months
  mn: "mn",
  month: "mn",
  months: "mn",
  //Weeks
  w: "w",
  wk: "w",
  week: "w",
  weeks: "w",
  //Days
  d: "d",
  ds: "d",
  day: "d",
  days: "d",
  //Hours
  h: "h",
  hr: "h",
  hour: "h",
  hours: "h",
  //Minutes
  m: "m",
  min: "m",
  minute: "m",
  minutes: "m",
  //Seconds
  s: "s",
  sec: "s",
  second: "s",
  seconds: "s",
  //Seconds
  ms: "ms",
  millisecond: "ms",
  milliseconds: "ms",
  //All
  "*": "*",
  all: "*",
};

let decimalPlaces = 2;

function precision(number) {
  if (typeof number !== "number") return;
  number = Math.floor(number);
  if (number < 0) return;
  decimalPlaces = number;
}

function differ(from, to, unit) {
  let diff = to.getTime() - from.getTime();
  const DEC_FIX = Math.pow(10, decimalPlaces);
  const isAll = unit === "*";

  const res = {};

  if (!isAll) {
    res[unit] = Math.round((diff / properties[unit]) * DEC_FIX) / DEC_FIX;
    return res;
  }

  // If All selected
  for (let key in properties) {
    const cur = properties[key];
    const value = !isLast ? Math.floor(diff / cur) : diff;
    const isLast = key === "ms";

    if (value === 0 && !isLast) continue;
    res[key] = value;
    diff -= res[key] * cur;
    continue;
  }

  return res;
}

function create(unit = "ms") {
  if (typeof unit !== "string") unit = "ms";
  unit = unit.toLowerCase();

  if (!propertiesDict[unit] && !["*", "all"].includes(unit)) unit = "ms";
  unit = propertiesDict[unit];

  const timePoint = new Date();

  return (...args) => {
    const diff = differ(timePoint, new Date(), unit);

    let comment, cb;

    if (args.length >= 1) {
      if (typeof args[0] === "string") comment = args[0];
      if (typeof args[0] === "function") cb = args[0];
    }

    if (cb) return cb(diff);

    const res = [];

    for (let key in diff) res.push(`${diff[key]}${key}`);

    return console.log(`⇆ ${res.join("::")}${comment ? `\t# ${comment}` : ""}`);
  };
}

module.exports = {
  create: create,
  precision: precision,
};
