const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

let arr = input.slice(1).map((v) => v.split("\n"));

let res = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0].includes("push")) {
    let a = arr[i].map((v) => v.split(" "));
    res.push(Number(a[0][1]));
  } else if (arr[i].includes("pop")) {
    if (res.length === 0) {
      console.log(-1);
    } else {
      console.log(res.pop());
    }
  } else if (arr[i].includes("size")) {
    console.log(res.length);
  } else if (arr[i].includes("empty")) {
    console.log(res.length === 0 ? 1 : 0);
  } else if (arr[i].includes("top")) {
    console.log(res.length === 0 ? -1 : res[res.length - 1]);
  }
}
