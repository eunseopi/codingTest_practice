const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const primeList = input[1].split(" ").map(Number);
let sum = 0;

for (let i = 0; i < n; i++) {
  if (isPrime(primeList[i])) {
    sum += 1;
  }
}

console.log(sum);

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
