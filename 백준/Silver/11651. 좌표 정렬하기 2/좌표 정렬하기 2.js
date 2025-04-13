const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const points = input.slice(1).map((line) => {
  const [x, y] = line.split(" ").map(Number);
  return [x, y];
});

points.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  return a[0] - b[0];
});

points.forEach((point) => {
  console.log(point.join(" "));
});
