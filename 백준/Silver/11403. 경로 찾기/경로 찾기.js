const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const graph = input.slice(1).map((line) => line.split(" ").map(Number));

// 플로이드-워셜 알고리즘 적용: k는 중간 경유지
for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // i->j 로 직접 못가더라도, i->k 경로 있고 k->j 경로 있으면 가능
      if (graph[i][k] === 1 && graph[k][j] === 1) {
        graph[i][j] = 1;
      }
    }
  }
}

let result = "";
for (let i = 0; i < n; i++) {
  result += graph[i].join(" ") + "\n";
}

console.log(result.trim());
