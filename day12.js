// http://adventofcode.com/day/11

var fs = require('fs');
var input = JSON.parse(fs.readFileSync('day12_input.txt').toString());

var sum = 0;
function parseJson(json) {
  for (var key in json) {
    if (!Array.isArray(json) && json[key] === "red") 
      return;
  }
  for (key in json) {
    if (typeof json[key] === "number") 
      sum += json[key];
    else if (typeof json[key] == "object")
      parseJson(json[key]);
  }
}

parseJson(input);
console.log(sum);
