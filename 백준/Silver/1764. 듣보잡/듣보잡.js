const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

const arr = input.slice(1).sort();
let cnt = 0;
let res = [];
const obj = {};

for (const name of arr) {
  obj[name] = (obj[name] || 0) + 1;
}

for (const key in obj) {
  let value = obj[key];
  if (value === 2) {
    res.push(key);
    cnt++;
  }
}

console.log(cnt);
console.log(res.join("\n"));