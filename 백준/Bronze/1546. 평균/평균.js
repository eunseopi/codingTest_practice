const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const scores = input[1].split(" ").map(Number);
let res = 0;

// 자기 점수 중 최대값을 M, 모든 점수를 점수/M*100 으로 수정.

const M = Math.max(...scores);
const modifiedScores = scores.map((score) => (score / M) * 100);

for (const score of modifiedScores) {
  res += score / n;
}

console.log(res);
