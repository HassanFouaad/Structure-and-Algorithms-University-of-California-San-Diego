function printLargest(amount, denominations) {
  denominations.map((d, i) => {
    amount = amount % denominations[i];
  });
  console.log("amount", amount);
}

// driver code

printLargest(8, [1, 4, 6]);
