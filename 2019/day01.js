var fs = require("fs");
var input = fs
  .readFileSync("day01_input.txt")
  .toString()
  .split("\n");

function calculateFuel(mass) {
  return parseInt(Math.floor(mass / 3)) - 2;
}

/* Part 1 */
const result1 = input.reduce((acc, curr) => acc + calculateFuel(curr), 0);

console.log(result1);

/* Part 2 */

function calculateFuel2(mass, totalMass = 0) {
  const fuel = calculateFuel(mass);
  return fuel < 0 ? totalMass : calculateFuel2(fuel, totalMass + fuel);
}

const result2 = input.reduce((acc, curr) => acc + calculateFuel2(curr), 0);

console.log(result2);
