// http://adventofcode.com/day/2

var fs = require('fs');
var input = fs.readFileSync('day02_input.txt').toString().split('\n').map(function (val) {
  return val.split('x').map(Number).sort(function (a, b) { return a - b; });
});

// Part 1
var wrappingPaper = input.reduce(function (prev, curr) {
  return prev += 2 * (curr[0] * curr[1] + curr[0] * curr[2] + curr[1] * curr[2]) + (curr[0] * curr[1]);
}, 0);

console.log(wrappingPaper);

// Part 2
var ribbon = input.reduce(function (prev, curr) {
  return prev += (curr[0] * curr[1] * curr[2]) + 2 * (curr[0] + curr[1]);
}, 0);

console.log(ribbon);
