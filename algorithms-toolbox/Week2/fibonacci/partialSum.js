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

function partialSum(from, to) {
  let sum = 0;
  let current = 0;
  let next = 1;

  for (let i = 0; i <= to; i++) {
    if (i >= from) {
      sum = sum + current;
    }

    let newCurrent = next;
    next = next + current;

    current = newCurrent;
  }

  return sum % 10;
}

module.exports = partialSum;
