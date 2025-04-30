const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

let N = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);

let sum = 0;
let total = 0;

for (let i = 0; i < N; i++) {
  sum += arr[i];
  total += sum;
}

console.log(total);
