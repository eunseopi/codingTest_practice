const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

const N = Number(input[0]);
const normal = input.slice(1).map((line) => line.split(""));
const blind = normal.map((row) => [...row]);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (blind[i][j] === "R") {
      blind[i][j] = "G";
    }
  }
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function bfs(x, y, graph, visited) {
  const queue = [[x, y]];
  visited[x][y] = true;
  const color = graph[x][y];

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        graph[nx][ny] === color
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

function countArea(graph) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        bfs(i, j, graph, visited);
        cnt++;
      }
    }
  }

  return cnt;
}

const normalCnt = countArea(normal);
const blindCnt = countArea(blind);

console.log(normalCnt, blindCnt);
