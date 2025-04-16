const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input.slice(1).map(Number);

let start = 1;
let end = Math.max(...arr);
let res = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    cnt += Math.floor(arr[i] / mid);
  }

  if (cnt >= M) {
    res = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(res);
