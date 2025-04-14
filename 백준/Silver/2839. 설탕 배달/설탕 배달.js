const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 그리디문제
// 3킬로그램 봉지, 5킬로그램 봉지

let weight = Number(input);
let cnt = 0;

while (weight >= 0) {
  if (weight % 5 === 0) {
    cnt += weight / 5;
    console.log(cnt);
    return;
  }
  weight -= 3;
  cnt += 1;
}

console.log(-1);
