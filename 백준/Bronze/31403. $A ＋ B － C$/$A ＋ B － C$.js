const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

const [a, b, c] = input.map(Number);

console.log(a + b - c);
console.log(a.toString() + b - c);
