const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
  let [tall, weight] = input[i].split(" ").map(Number);
  arr.push([tall, weight]);
}

let rank = new Array(n).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
      rank[i]++;
    }
  }
}

console.log(rank.join(" "));
