const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.replace("\r", ""));

let n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
  let [age, name] = input[i].split(" ");
  arr.push([age, name]);
}

arr.sort((a, b) => a[0] - b[0]);

console.log(arr.join("\n").split(",").join(" "));
