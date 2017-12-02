// http://adventofcode.com/2015/day/20

let input = 33100000;

let houseNum = 0;
let giftCount = 0;
let giftMultiplier = 11;  // 10 for part 1, 11 for part 2

while (giftCount < input) {
  ++houseNum;
  giftCount = giftMultiplier * factors(houseNum).reduce((prev,curr) => {
    return prev+curr;
  }, 0);
}

function factors(num) {
  let x = 1;
  let factors = [];
  while ( Math.pow(x,2) <= num) {
    if (num % x === 0) {
      factors.push(x, num / x);
    }
    ++x;
    if (x > 50) break; // Part 2
  }
  return factors;
}

// Part 1, 2
console.log(houseNum);
