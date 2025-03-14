const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = [...input];
let res = 0;
for (let i = 0; i < a.length; i++) {
  a[i] = a[i] ** 2;
  res += a[i];
}

console.log(res % 10);