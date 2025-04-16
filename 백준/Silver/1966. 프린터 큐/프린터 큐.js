const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const [N, M] = input[line++].split(" ").map(Number);
  const priorities = input[line++].split(" ").map(Number);
  let queue = priorities.map((val, idx) => [val, idx]);

  let cnt = 0;

  while (queue.length) {
    const cur = queue.shift();

    if (queue.some((doc) => doc[0] > cur[0])) {
      queue.push(cur);
    } else {
      cnt++;
      if (cur[1] === M) {
        console.log(cnt);
        break;
      }
    }
  }
}
