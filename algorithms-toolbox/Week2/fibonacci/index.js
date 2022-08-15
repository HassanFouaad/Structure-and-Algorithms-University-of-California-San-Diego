const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  const count = parseInt(line.toString());
  console.log(fibonacci(count));
  process.exit();
}

function fibonacci(count) {
  count = parseInt(count);
  if (count === 0 || count === 1) {
    return n;
  }

  let outPutList = [0, 1];
  for (let i = 2; i <= count; i++) {
    const reduce = outPutList[i - 1];
    const plus = outPutList[i - 2];
    outPutList.push(reduce + plus);
  }
  return outPutList;
}
