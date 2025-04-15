const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

if (n === 0) {
  console.log(0);
} else {
  let arr = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);
  const cut = Math.round(n * 0.15);
  arr = arr.slice(cut, n - cut);

  const avg = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  console.log(Math.round(avg));
}
