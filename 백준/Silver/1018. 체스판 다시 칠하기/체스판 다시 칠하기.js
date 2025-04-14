const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1);

let minCount = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    minCount = Math.min(minCount, repaintCount(i, j));
  }
}

console.log(minCount);

function repaintCount(row, col) {
  let countW = 0;
  let countB = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const current = board[row + i][col + j];
      const isEven = (i + j) % 2 === 0;

      // W
      if (isEven && current !== "W") countW++;
      if (!isEven && current !== "B") countW++;

      if (isEven && current !== "B") countB++;
      if (!isEven && current !== "W") countB++;
    }
  }

  return Math.min(countW, countB);
}
