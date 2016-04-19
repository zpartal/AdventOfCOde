// http://adventofcode.com/day/18

var fs = require('fs');
var input = fs.readFileSync('day18_input.txt').toString().split('\n');

var lightGrid = [];

input.forEach(function (row, y) {
  row.split("").forEach(function (val, x) {
    lightGrid[y] = lightGrid[y] || [];
    lightGrid[y][x] = (val === "#");
  });
});

var evalState = function (grid, x, y) {
  var live = 0;
  for (var j = -1; j <= 1; ++j)
    for (var i = -1; i <= 1; ++i)
      if (!(i === 0 && j === 0) && (x + i >= 0 && x + i < grid.length && y + j >= 0 && y + j < grid.length && grid[y + j][x + i]))
        ++live;
  return ((grid[y][x] && (live === 2 || live === 3)) || (!grid[y][x] && live === 3));
}

var step = function (grid) {
  var bufferGrid = [];
  for (var y = 0; y < lightGrid.length; ++y)
    for (var x = 0; x < lightGrid[y].length; ++x) {
      bufferGrid[y] = bufferGrid[y] || [];
      bufferGrid[y][x] = evalState(grid, x, y);
    }
  // Part 2: Set the corners to always on
  // bufferGrid[0][0] = bufferGrid[0][bufferGrid.length - 1] = bufferGrid[bufferGrid.length - 1][0] = bufferGrid[bufferGrid.length - 1][bufferGrid.length - 1] = true;
  return bufferGrid;
};

for (var i = 0; i < 100; ++i)
  lightGrid = step(lightGrid);

var count = [].concat.apply([], lightGrid).reduce(function (acc, val) { return acc + val; }, 0);
console.log(count);
