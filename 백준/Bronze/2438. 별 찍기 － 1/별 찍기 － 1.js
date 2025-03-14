const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(n) {
  let res = "";
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    res += line + "\n";
  }
  return res;
}

console.log(solution(input));
