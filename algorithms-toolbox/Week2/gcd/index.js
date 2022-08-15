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

    console.log(gcd(a, b));
    process.exit();
  }
}

function gcd(a = 0, b = 0) {
  if (b === 0) return a;
  else return gcd(b, a % b);
}
