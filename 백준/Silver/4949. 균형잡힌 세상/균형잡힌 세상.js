const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let line of input) {
  if (line === ".") break;

  let stack = [];
  let isBalanced = true;

  for (let char of line) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.pop() !== "(") {
        isBalanced = false;
        break;
      }
    } else if (char === "]") {
      if (stack.pop() !== "[") {
        isBalanced = false;
        break;
      }
    }
  }

  if (stack.length !== 0) isBalanced = false;

  console.log(isBalanced ? "yes" : "no");
}
