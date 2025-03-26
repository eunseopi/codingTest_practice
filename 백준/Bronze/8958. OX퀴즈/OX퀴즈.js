const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

const len = Number(input[0]);

const answer = input.slice(1, len + 1).map((line) => line.trim().split(""));

for (let i = 0; i < len; i++) {
  let cnt = 0;
  let sum = 0;
  for (let j = 0; j < answer[i].length; j++) {
    if (answer[i][j] === "O") {
      cnt++;
      sum += cnt;
    } else {
      cnt = 0;
    }
  }
  console.log(sum);
}
