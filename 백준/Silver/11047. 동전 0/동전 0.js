const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// Greedy 로 풀어야됨.
// 제일 큰 돈으로 나누면서 cnt++
let [N, K] = input[0].split(" ").map(Number);
const costs = input.slice(1).map(Number).reverse();

let cnt = 0;
for (let cost of costs) {
  if (K >= cost) {
    cnt += Math.floor(K / cost);
    K %= cost;
  }
}

console.log(cnt);
