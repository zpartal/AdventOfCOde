// http://adventofcode.com/day/17

var fs = require('fs');
var input = fs.readFileSync('day17_input.txt').toString().split('\n');
var containers = input.map(function (val) { return Number(val); });

var validCount = [];
var min = containers.length;
for (var subset = 0; subset < Math.pow(2,containers.length); ++subset) {
  var tot = 0;
  var numContainers = 0;
  for (var bit = 0; bit < containers.length; ++bit) {
    if (((subset >> bit) & 1) > 0) {
      tot += containers[bit];
      ++numContainers;
    }
  }
  if (tot === 150) {
    validCount[numContainers] = (validCount[numContainers] || 0) + 1;
    min = (min > numContainers) ? numContainers : min;
  }
}

console.log(validCount.reduce(function (prev, curr) { return prev + curr; }), validCount[min]);
