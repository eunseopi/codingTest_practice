const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);

let first = 666;

while (n > 0) {
  if (String(first).includes("666")) {
    n--;
  }
  first++;
}

console.log(first - 1);
