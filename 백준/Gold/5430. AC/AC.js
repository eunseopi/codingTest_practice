const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const p = input[line++];
  const n = Number(input[line++]);
  let arrStr = input[line++].trim();

  // 배열이 비어 있는 경우 → JSON.parse('[]') 안전하게 처리
  let arr = [];
  if (arrStr === "[]") {
    arr = [];
  } else {
    arr = JSON.parse(arrStr);
  }

  let isReversed = false;
  let isError = false;

  for (let cmd of p) {
    if (cmd === "R") {
      isReversed = !isReversed;
    } else if (cmd === "D") {
      if (arr.length === 0) {
        isError = true;
        break;
      }
      if (isReversed) {
        arr.pop();
      } else {
        arr.shift();
      }
    }
  }

  if (isError) {
    console.log("error");
  } else {
    if (isReversed) arr.reverse();
    console.log(`[${arr.join(",")}]`);
  }
}
