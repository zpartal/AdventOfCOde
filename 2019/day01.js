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

function calcFuel2(mass, totalMass = 0) {
  const x = parseInt(Math.floor(mass / 3)) - 2;

  if (x < 0) {
    return totalMass;
  }

  return calcFuel2(x, totalMass + x);
}

const result2 = input.reduce((acc, curr) => acc + calcFuel2(curr), 0);

console.log(result2);
