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

let calc = (n) => {
  let pre = 0,
    cur = 1;
  n = n % 60;
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    for (let i = 2; i <= n; i++) {
      let temp = (pre + cur) % 60;
      pre = cur;
      cur = temp;
    }
  }

  return cur;
};

function fibSumSquare(n) {
  let a = calc(n);
  let b = calc(n + 1);
  return (a * b) % 10;
}

module.exports = fibSumSquare;
