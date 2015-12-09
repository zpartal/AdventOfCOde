// http://adventofcode.com/day/8
// 1333
// 2046

var fs = require('fs');
var input = fs.readFileSync('day8_input.txt').toString().split('\n');

// Part 1
var output = input.reduce(function (acc, val) {
  var esc = val.replace(/(\\x\w{2})|(\\\")|(\\\\)/g, 'z');
  return acc += val.length - (esc.length - 2);
}, 0);

console.log(output);

// Part 2
output = input.reduce(function (acc, val) {
  var esc = val.replace(/(\\)/g, '\\\\');
  esc = esc.replace(/(\")/g, '\\\"');
  return acc += esc.length - val.length + 2;
}, 0);

console.log(output);
