const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

function findGenerator(N) {
  for (let i = 1; i < N; i++) {
    let sum = i;
    let numStr = String(i);
    for (let digit of numStr) {
      sum += Number(digit);
    }
    if (sum === N) return i;
  }

  return 0;
}

console.log(findGenerator(Number(input[0])));
