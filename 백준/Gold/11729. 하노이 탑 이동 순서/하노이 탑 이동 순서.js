const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// input 만큼의 원판
const rod = Number(input);

const res = [];

function hanoi(n, from, to, via) {
  if (n === 1) {
    res.push(`${from} ${to}`);
    return;
  }
  hanoi(n - 1, from, via, to); // 1단계: n-1개를 보조 기둥으로
  res.push(`${from} ${to}`); // 2단계: 가장 큰 원반을 목적지로
  hanoi(n - 1, via, to, from); // 3단계: n-1개를 목적지로
}

console.log(2 ** rod - 1); // 이동횟수
hanoi(rod, 1, 3, 2);
console.log(res.join("\n"));
