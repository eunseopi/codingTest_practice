const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

const T = Number(input[0]);
const room = input.slice(1).map((inx) => inx.split(" ").map(Number));

for (let i = 0; i < T; i++) {
  const [H, W, N] = room[i];
  const floor = ((N - 1) % H) + 1;
  const roomNum = Math.floor((N - 1) / H) + 1;
  console.log(floor * 100 + roomNum);
}
