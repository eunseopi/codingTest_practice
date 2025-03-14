const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const month = input[0];

if ((month % 4 === 0 && month % 100 !== 0) || month % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}