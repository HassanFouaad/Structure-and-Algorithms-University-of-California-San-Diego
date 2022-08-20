
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

    console.log(getFibMod(n, m));
    process.exit();
  }
}

function getFibMod(n, m) {
  if (n === 0 || n === 1) {
    return n;
  }

  let prev = 0;
  let curr = 1;

  for (let i = 0; i < n - 1; i++) {
    let tmpPrev = prev;
    prev = curr;
    curr += tmpPrev;
  }

  return curr % m;
}

module.exports = getFibMod;
