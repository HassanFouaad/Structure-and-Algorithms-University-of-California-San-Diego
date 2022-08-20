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
  if (n <= 1) {
    return n;
  }

  let outPutList = [0, 1];
  for (let i = 2; i <= n; i++) {
    const reduce = outPutList[i - 1];
    const plus = outPutList[i - 2];
    outPutList.push(reduce + plus);
  }
  return outPutList[n];
}

module.exports = fib;
