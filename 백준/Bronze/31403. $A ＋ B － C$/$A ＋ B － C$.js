const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

const num = input.slice(0).map(Number);

let a = [...num].map(Number);
let b = [...num].map(String);

for (let i = 0; i < 1; i++) {
  if (typeof a[i] === "number") {
    console.log(a[0] + a[1] - a[2]);
  }
  if (typeof b[i] === "string") {
    console.log(b[0] + b[1] - b[2]);
  }
}
