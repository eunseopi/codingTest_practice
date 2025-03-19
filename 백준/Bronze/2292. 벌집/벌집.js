const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

function findMinRooms(N) {
  if (N === 1) return 1;

  let room = 1; // 첫 번째 방
  let layer = 1; // 몇 번째 껍질인지?

  while (room < N) {
    room += 6 * layer; // 다음 층의 마지막 방 번호
    layer++; // 층 증가
  }
  return layer;
}

console.log(findMinRooms(Number(input[0])));
