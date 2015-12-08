// http://adventofcode.com/day/1

var fs = require('fs');
var input = fs.readFileSync('day1_input.txt').toString();

// Part 1
var output1 = input.split('').reduce(function (prev, curr) {
  return (curr === '(') ? ++prev : --prev;
}, 0);

console.log(output1);

// Part 2
var inputArr = input.split('');
var floor = 0;
for (var i = 0; i < inputArr.length; ++i) {
  floor = (inputArr[i] === '(') ? ++floor : --floor;
  if (floor === -1) { console.log(i + 1); break; }
}
