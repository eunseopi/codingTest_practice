const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const num = input[0];

for (let i = 1; i <= num; i++) {
  console.log(i);
}