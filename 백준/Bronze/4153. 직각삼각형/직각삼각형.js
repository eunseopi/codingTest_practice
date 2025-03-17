const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const [n, k, l] = input[i].split(" ").map(Number);

  if (n === 0 && k === 0 && l === 0) break;

  const sides = [n, k, l].sort((a, b) => a - b);

  if (sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
