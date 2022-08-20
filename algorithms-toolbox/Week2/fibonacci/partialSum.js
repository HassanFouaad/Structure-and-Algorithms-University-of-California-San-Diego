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

function fib(n) {
  let phi = (1 + Math.sqrt(5)) / 2;
  return parseInt(Math.round(Math.pow(phi, n) / Math.sqrt(5)));
}

function partialSum(from, to) {
  var sum = 0;

  for (i = from; i <= to; i++) sum += fib(i);

  return sum;
}

module.exports = partialSum;
