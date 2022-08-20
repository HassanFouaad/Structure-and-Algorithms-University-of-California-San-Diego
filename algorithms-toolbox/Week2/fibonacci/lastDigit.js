// by Alexander Nikolskiy

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
  n = parseInt(n);

  if (n === 0 || n === 1) {
    return n;
  }
  let prev = 0;
  let curr = 1;

  for (let i = 1; i < n; i++) {
    let temp = (prev + curr) % 10;
    prev = curr;
    curr = temp;
  }
  return curr % 10;
}

module.exports = fib;
