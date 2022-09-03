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

    console.log(change(n));
    process.exit();
  }
}

const demos = [1, 5, 10];

const change = (money) => {
  let greedyNumber;

  demos.map((demo) => {
    if (money <= demo) return;
    else greedyNumber = demo;
  });
  let max = money - greedyNumber;

  return max + 1;
};
