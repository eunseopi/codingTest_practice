const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 달팽이가 낮에 A 미터 올라가, 자는동안 B미터 떨어져
const [A, B, V] = input[0].split(" ").map(Number);

const day = Math.ceil((V - A) / (A - B)) + 1;

console.log(day);
