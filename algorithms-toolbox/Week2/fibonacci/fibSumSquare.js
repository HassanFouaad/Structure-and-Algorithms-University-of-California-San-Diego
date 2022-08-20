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

    console.log(fibSumSquare(parseInt(n, 10)));
    process.exit();
  }
}

function fibSumSquare(n) {
  if (n <= 1) return n;

  let previous = 0;
  let current = 1;
  let sum = 1;

  for (let i = 0; i < n - 1; i++) {
    let tmp_previous = previous;
    previous = current;
    current = tmp_previous + current;
    sum += current * current;
  }

  return sum % 10;
}

module.exports = fibSumSquare;
