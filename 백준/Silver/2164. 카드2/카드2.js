const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input);
const queue = [];

for (let i = 1; i <= num; i++) {
  queue.push(i);
}

let front = 0;
while (queue.length - front > 1) {
  front++;
  const next = queue[front];
  queue.push(next);
  front++;
}

console.log(queue[front]);
