const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.once("line", () => {
  rl.on("line", readLine);
});

function readLine(line) {
  const arr = line.toString().split(" ").map(Number);

  console.log(max(arr));
  process.exit();
}
function max(arr) {
  // write your code here
  var max_index_1, max_index_2;
  max_index_1 = max_index_2 = -1;
  for (var i = 0; i < arr.length; i++) {
    if (max_index_1 == -1 || arr[i] > arr[max_index_1]) {
      max_index_1 = i;
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (i != max_index_1 && (max_index_2 == -1 || arr[i] > arr[max_index_2])) {
      max_index_2 = i;
    }
  }
  return arr[max_index_1] * arr[max_index_2];
}
