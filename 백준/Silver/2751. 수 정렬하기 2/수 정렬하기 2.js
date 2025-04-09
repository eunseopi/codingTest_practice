const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

console.log(arr.join("\n"));
