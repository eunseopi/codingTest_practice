const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

const [n, m, k] = input.slice(0, input.length).map(Number);

let cnt = Array(10).fill(0);
let multiple = (n * m * k).toString();

for (const digit of multiple) {
  cnt[Number(digit)]++;
}

cnt.forEach((c) => console.log(c));
