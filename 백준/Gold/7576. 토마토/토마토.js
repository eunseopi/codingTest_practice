const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const farm = input.slice(1).map((list) => list.split(" ").map(Number));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const queue = [];
let head = 0; // 큐의 시작 인덱스스

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (farm[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

while (queue.length > head) {
  const [x, y] = queue[head++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    // 범위 안이고, 0인거 익히기
    if (nx >= 0 && nx < M && ny >= 0 && ny < N && farm[nx][ny] === 0) {
      farm[nx][ny] = farm[x][y] + 1; // 하루 추가
      queue.push([nx, ny]);
    }
  }
}

let res = 0;

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (farm[i][j] === 0) {
      // 익지 못한 토마토가 있으면
      console.log(-1);
      return;
    }
    res = Math.max(res, farm[i][j]);
  }
}

console.log(res - 1);
