const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

let res = [];
let arr = input.slice(1).map((v) => Number(v));

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) res.push(arr[i]);
  else if (arr[i] === 0) {
    res.pop();
  }
}

console.log(res.reduce((acc, cur) => acc + cur, 0));
