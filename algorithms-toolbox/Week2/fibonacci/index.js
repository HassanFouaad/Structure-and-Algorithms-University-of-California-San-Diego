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
  let outPutList = [0, 1];
  for (var i = 1; i < count - 1; i++) {
    const reduce = outPutList[i - 1];
    const plus = outPutList[i];
    console.log(reduce, plus);
    outPutList.push(parseInt(reduce) + parseInt(plus));
  }
  return outPutList;
}
