const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCase = input.slice(1).map(Number);

for (const n of testCase) {
  let cnt = 0;
  const queue = [0];

  while (queue.length > 0) {
    const sum = queue.shift();

    if (sum === n) {
      cnt++;
    } else if (sum < n) {
      queue.push(sum + 1);
      queue.push(sum + 2);
      queue.push(sum + 3);
    }
  }

  console.log(cnt);
}
