const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let arr1 = input[1].split(" ").map(Number);
let M = Number(input[2]);
let arr2 = input[3].split(" ").map(Number);

const countMap = {};

for (let num of arr1) {
  countMap[num] = (countMap[num] || 0) + 1;
}

let result = arr2.map((num) => countMap[num] || 0);
console.log(result.join(" "));
