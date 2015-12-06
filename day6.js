// http://adventofcode.com/day/6

var fs = require('fs');
var input = fs.readFileSync('day6_input.txt').toString().split('\n');

var gridWidth = 1000;

var lights = [];
for (var x = 0; x < gridWidth; ++x) {
  lights.push([]);
  for (var y = 0; y < gridWidth; ++y)
    lights[x].push(false); 
}

input.forEach(function(val) {
  var splitInp = val.split(' ');
  var mode = "";
  var trc,blc = [];
  if (splitInp.indexOf("toggle") > -1) {
    mode = splitInp[0];
    trc  = splitInp[1].split(',');
    blc  = splitInp[3].split(',');
  }
  else {
    mode = splitInp[1];
    trc  = splitInp[2].split(',');
    blc  = splitInp[4].split(',');
  }
  
  for (var x = Number(trc[0]); x <= Number(blc[0]); ++x)
      for (var y = Number(trc[1]); y <=Number(blc[1]); ++y)
        lights[y][x] = (mode === "toggle") ? !lights[y][x] : (mode === "on");

},lights);

var output = 0;
for (var x = 0; x < gridWidth; ++x)
  for (var y = 0; y < gridWidth; ++y)
    if (lights[x][y]) ++output;

console.log(output);

