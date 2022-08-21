const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  if (line !== "\n") {
    const n = parseInt(line.toString().split(" ")[0], 10);
    const m = parseInt(line.toString().split(" ")[1], 10);

    console.log(partialSum(parseInt(n, 10), parseInt(m, 10)));
    process.exit();
  }
}

function partialSum(n, m) {
  let a = [];
  a[0] = 0;
  a[1] = 1;
  let sum = 0;
  sum = a[0] + a[1];
  for (let i = 2; i < 60; i++) {
    a[i] = a[i - 1] + a[i - 2];
    a[i] = a[i] % 10;
    sum = (sum + a[i]) % 10;
  }
  let x = (m - n + 1) / 60;
  sum = (sum * x) % 10;
  let i = n + 60 * x;
  while (i <= m) {
    sum = (sum + a[i % 60]) % 10;
    i++;
  }
  return sum;
}

module.exports = partialSum;
