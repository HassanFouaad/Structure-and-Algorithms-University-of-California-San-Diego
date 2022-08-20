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
  n = (n + 2) % 60;
  let fibN = [n + 1];
  fibN[0] = 0;
  fibN[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibN[i] = ((fibN[i - 1] % 10) + (fibN[i - 2] % 10)) % 10;
  }

  if (fibN[n] == 0) {
    return 9;
  }
  return (fibN[n] % 10) - 1;
}
module.exports = fib;
