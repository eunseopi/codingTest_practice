const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

const len = Number(input[0]);
const commands = input.slice(1);
let res = [];

for (let i = 0; i < len; i++) {
  const [cmd, value] = commands[i].split(" ");

  if (cmd === "push") {
    res.push(value);
  } else if (cmd === "pop") {
    if (res.length === 0) {
      console.log(-1);
    } else {
      console.log(res.shift());
    }
  } else if (cmd === "size") {
    console.log(res.length);
  } else if (cmd === "empty") {
    console.log(res.length === 0 ? 1 : 0);
  } else if (cmd === "front") {
    if (res.length === 0) {
      console.log(-1);
    } else {
      console.log(res[0]);
    }
  } else if (cmd === "back") {
    if (res.length === 0) {
      console.log(-1);
    } else {
      console.log(res[res.length - 1]);
    }
  }
}
