const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split("").map(Number));

let maxSum = 0;

for (let bit = 0; bit < 1 << (N * M); bit++) {
  let sum = 0;

  // 가로 조각
  for (let i = 0; i < N; i++) {
    let cur = 0;
    for (let j = 0; j < M; j++) {
      const idx = i * M + j;
      if ((bit & (1 << idx)) !== 0) {
        cur = cur * 10 + board[i][j];
      } else {
        sum += cur;
        cur = 0;
      }
    }
    sum += cur;
  }

  // 세로 조각
  for (let j = 0; j < M; j++) {
    let cur = 0;
    for (let i = 0; i < N; i++) {
      const idx = i * M + j;
      if ((bit & (1 << idx)) === 0) {
        cur = cur * 10 + board[i][j];
      } else {
        sum += cur;
        cur = 0;
      }
    }
    sum += cur;
  }

  maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);
