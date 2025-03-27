const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

const [a, b] = input[0].split(" ").map(Number);

// 최소공배수(LCM) 구하기
function getLCM(a, b) {
  return (a * b) / getGCD(a, b); // 두 수를 곱하고, 최대공약수로 나눈 값이 최대공배수
}

// 유클리드 호제법을 사용한 최대공약수(GCD) 구하기
function getGCD(a, b) {
  while (b !== 0) {
    let r = a % b; // a를 b로 나눈 나머지
    a = b; // a를 b로 대체
    b = r; // b를 나머지로 대체
  }
  return a; // 최대공약수 반환
}

console.log(getGCD(a, b));
console.log(getLCM(a, b));
