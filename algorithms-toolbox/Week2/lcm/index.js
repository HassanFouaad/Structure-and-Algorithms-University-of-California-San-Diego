// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  if (line !== "\n") {
    const a = parseInt(line.toString().split(" ")[0], 10);
    const b = parseInt(line.toString().split(" ")[1], 10);

    console.log(lcm(a, b));
    process.exit();
  }
}

function gcd(a, b) {
  if (b === 0) return a;
  else return gcd(b, a % b);
}

const lcm = (a, b) => a * (b / gcd(a, b));

module.exports = lcm;
