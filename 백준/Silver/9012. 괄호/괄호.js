const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

let len = Number(input[0]);

for (let i = 1; i <= len; i++) {
  const line = input[i];
  let stack = [];
  let isVPS = true;

  for (let char of line) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        isVPS = false;
        break;
      }
      stack.pop();
    }
  }

  if (isVPS && stack.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
