const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input[0]);
let num = input.slice(1).map(Number);

const dp = Array.from({ length: 41 }, () => [0, 0]);

dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 2; i <= 40; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
  dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
}

num.forEach((n) => {
  console.log(dp[n][0], dp[n][1]);
});
