const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr1 = new Set(input[1].split(" ").map(Number));
const arr2 = input[3].split(" ").map(Number);

const res = arr2.map((num) => (arr1.has(num) ? 1 : 0));
console.log(res.join("\n"));
