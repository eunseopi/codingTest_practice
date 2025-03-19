const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

function computeHash(str) {
  const r = 31;
  const M = 1234567891;
  let hash = 0;
  let power = 1; // r^i 값을 저장할 변수

  for (let i = 0; i < str.length; i++) {
    let charValue = str.charCodeAt(i) - "a".charCodeAt(0) + 1; // a 에는 1, b 에는 2, c 에는 3,... z 에는 26
    hash = (hash + charValue * power) % M;
    power = (power * r) % M;
  }

  return hash;
}

console.log(computeHash(input[1]));
