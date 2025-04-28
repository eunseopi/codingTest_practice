const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input);
const dp = new Array(num + 1).fill(0);

dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= num; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[num]);
