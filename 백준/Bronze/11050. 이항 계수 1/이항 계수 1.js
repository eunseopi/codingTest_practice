const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);

let result = 1;

for (let i = 0; i < K; i++) {
  result *= N - i;
}

for (let i = 0; i < K; i++) {
  result /= i + 1;
}

console.log(result);

