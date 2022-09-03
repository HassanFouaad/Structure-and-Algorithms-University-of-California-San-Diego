// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");

rl.once("line", (line) => {
  const [itemsCount, knapsackCapacity] = line.toString().split(" ").map(Number);
  const values = [];
  const weights = [];
  let items = [];
  let count = 0;

  rl.on("line", (line) => {
    const [v, w] = readLine(line);
    values.push(v);
    weights.push(w);
    items.push({ v, w });

    if (++count >= itemsCount) {
      console.log(max(itemsCount, knapsackCapacity, values, weights));
      process.exit();
    }
  });
});

function readLine(line) {
  const v = parseInt(line.toString().split(" ")[0], 10);
  const w = parseInt(line.toString().split(" ")[1], 10);

  return [v, w];
}

function max(n, capacity, values, weights) {
  if (capacity < 0) {
    return Number.MIN_SAFE_INTEGER;
  }

  //base case: when no items are left or capacity becomes 0
  if (n < 0 || capacity === 0) {
    return 0;
  }

  // pick current item n in knapSack and recur for
  // remaining items (n - 1) with reduced capacity (weight - weights[n])
  let include =
    values[n] + knapSack(values, weights, n - 1, capacity - weights[n]);

  // leave the current item n from knapSack and recur for
  // remaining items (n - 1)
  let exclude = knapSack(values, weights, n - 1, capacity);

  // return maximum value we get by picking or leaving the current item
  return Math.max(include, exclude);
}

module.exports = max;
