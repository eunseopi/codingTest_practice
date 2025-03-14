const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const num = input[0];
let line = "";

for (let i = 1; i <= 9; i++) {
  line += `${num} * ${i} = ${num * i}\n`;
}

console.log(line);