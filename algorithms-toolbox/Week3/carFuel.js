const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  if (line !== "\n") {
    const tg = parseInt(line.toString().split(" ")[0], 10);
    const td = parseInt(line.toString().split(" ")[1], 10);
    const sts = parseInt(line.toString().split(" ")[2], 10);

    console.log(carFuel(tg, td, sts));
    process.exit();
  }
}

const carFuel = (targetDistance, tankDistance, stops) => {
  let stopsNeeded = 0;
  let lastStop = 0; // the mileage location of the last stop
  for (let i = 0; i < stops.length; i++) {
    if (lastStop + tankDistance >= targetDistance) {
      return stopsNeeded;
    }
    const stop = stops[i];
    // fail if this stop is out of reach
    if (stop - lastStop > tankDistance) {
      return -1;
    }
    // next stop may be the city
    const nextStop = Math.min(stops[i + 1] ?? targetDistance, targetDistance);
    // If the next stop is out of reach, and this stop is needed, stop here
    if (nextStop - lastStop > tankDistance && stops[i] < targetDistance) {
      stopsNeeded++;
      lastStop = stop;
    }
  }
  return targetDistance - lastStop <= tankDistance ? stopsNeeded : -1;
};
