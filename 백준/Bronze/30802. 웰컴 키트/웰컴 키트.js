const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const clothes = input[1].split(" ").map(Number);
const [t, pen] = input[2].split(" ").map(Number);

for (let i = 0; i < clothes.length; i++) {
  clothes[i] = Math.ceil(clothes[i] / t);
}

let clothesCount = clothes.reduce((acc, cur) => acc + cur, 0);
let penBundle = Math.floor(n / pen);
let penCount = n % pen;


console.log(clothesCount);
console.log(penBundle, penCount);
