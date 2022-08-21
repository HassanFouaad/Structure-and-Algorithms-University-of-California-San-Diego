// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(ld(parseInt(line, 10)));
  process.exit();
}

function ld(n) {
  n = (n + 2) % 60;
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = ((fib[i - 1] % 10) + (fib[i - 2] % 10)) % 10;
  }

  if (fib[n] == 0) {
    return 9;
  }
  return (fib[n] % 10) - 1;
}

module.exports = ld;
