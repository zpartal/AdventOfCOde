// http://adventofcode.com/day/6

var fs = require('fs');
var input = fs.readFileSync('day06_input.txt').toString().split('\n');

var lights = { A: [], B: [] };

for (var i = 0; i < 1000; i++) { lights.A[i] = []; lights.B[i] = []; }

function updateLightsA(lights, mode, x1, y1, x2, y2) {
  for (var x = x1; x <= x2; ++x)
    for (var y = y1; y <= y2; ++y)
      lights[y][x] = (mode === "toggle") ? !lights[y][x] : (mode === "on");
}

function updateLightsB(lights, mode, x1, y1, x2, y2) {
  for (var x = x1; x <= x2; ++x)
    for (var y = y1; y <= y2; ++y) {
      lights[y][x] = lights[y][x] || 0;
      if (mode === "on")++lights[y][x];
      else if (mode === "off" && lights[y][x] > 0)--lights[y][x];
      else if (mode === "toggle") lights[y][x] += 2;
    }
}

input.forEach(function (val) {
  var regEx = /(on|off|toggle)\D+(\d+),(\d+)\D+(\d+),(\d+)/;
  var cmd = regEx.exec(val);
  updateLightsA(lights.A, cmd[1], Number(cmd[2]), Number(cmd[3]), Number(cmd[4]), Number(cmd[5]));
  updateLightsB(lights.B, cmd[1], Number(cmd[2]), Number(cmd[3]), Number(cmd[4]), Number(cmd[5]));
}, lights);

var output1 = 0;
var output2 = 0;
for (var x = 0; x < 1000; ++x)
  for (var y = 0; y < 1000; ++y) {
    output1 += lights.A[y][x] || 0;
    output2 += lights.B[y][x] || 0;
  }

console.log(output1);
console.log(output2);
