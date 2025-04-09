let n = Number(require('fs').readFileSync(0).toString().trim());
let count = 0;

for (let i = 5; i <= n; i *= 5) {
  count += Math.floor(n / i);
}

console.log(count);
