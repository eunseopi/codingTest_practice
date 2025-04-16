const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const arr = input.slice(1).map(Number);

// 1. 산술 평균
let sum = 0;
for (let i = 0; i < N; i++) {
  sum += arr[i];
}

let avg = Math.round(sum / arr.length);
if (avg === -0) avg = 0;

// 2. 중앙값
let arr2 = [...arr].sort((a, b) => a - b);
let mid = Math.floor(arr2.length / 2);

// 3. 최빈값
const map = {};

for (let num of arr) {
  map[num] = (map[num] || 0) + 1;
}

const maxCount = Math.max(...Object.values(map));
const modeList = Object.keys(map)
  .filter((key) => map[key] === maxCount)
  .map(Number)
  .sort((a, b) => a - b);

const mode = modeList.length > 1 ? modeList[1] : modeList[0];

console.log(avg);
console.log(arr2[mid]);
console.log(mode);
console.log(Math.max(...arr) - Math.min(...arr));
