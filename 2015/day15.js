// http://adventofcode.com/day/15

var fs = require('fs');
var input = fs.readFileSync('day15_input.txt').toString().split('\n');

var ings = [];
input.forEach(function (val) {
  var re = /^(\w+).*?(-?\d+).*?(-?\d+).*?(-?\d+).*?(-?\d+).*?(-?\d+)/.exec(val);
  ings.push([Number(re[2]), Number(re[3]), Number(re[4]), Number(re[5]), Number(re[6])]);
});

var max = 0;
for (var i = 0; i < 100; i++)
for (var j = 0; j < 100 - i; j++)
for (var k = 0; k < 100 - i - j; k++) {
  var l = 100 - i - j - k;
  if (i + j + k + l !== 100) continue;
  var a = [i, j, k, l];
  var vals = [];
  for (var x = 0; x <= ings.length; ++x) {
    vals[x] = ings.reduce(function (prev, curr, idx) { return prev += curr[x] * a[idx]; }, 0);
    vals[x] = (vals[x] < 0 && x !== ings.length) ? 0 : vals[x];
  }
  var tot = vals[0] * vals[1] * vals[2] * vals[3];
  // if (vals[4] === 500) // Part 2
  max = (tot > max) ? tot : max;
}

console.log(max);
