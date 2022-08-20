const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(fib(parseInt(line, 10)));
  process.exit();
}

function fib(n) {
  if (n <= 1) {
    return n;
  }

  let prev = 0;
  let curr = 1;
  let sum = 1;

  for (let i = 0; i < n - 1; i++) {
    let tmpPrev = prev;
    prev = curr;
    curr += tmpPrev;
    sum += curr;
  }

  return sum % 10;
}

module.exports = fib;
