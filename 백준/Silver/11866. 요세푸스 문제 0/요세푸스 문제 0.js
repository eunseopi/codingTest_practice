const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map((v) => Number(v));

let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(i);
}

let res = [];
let inx = 0;
while (arr.length > 0) {
  inx = (inx + K - 1) % arr.length;
  res.push(arr[inx]);
  arr.splice(inx, 1);
}

console.log(`<${res.join(", ")}>`);
