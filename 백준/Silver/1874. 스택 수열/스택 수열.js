const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const sequence = input.slice(1).map(Number);

let stack = [];
let result = [];
let current = 1;
let possible = true;

for (let i = 0; i < N; i++) {
  let target = sequence[i];

  while (current <= target) {
    stack.push(current++);
    result.push("+");
  }

  if (stack[stack.length - 1] === target) {
    stack.pop();
    result.push("-");
  } else {
    possible = false;
    break;
  }
}

if (!possible) {
  console.log("NO");
} else {
  console.log(result.join("\n"));
}
