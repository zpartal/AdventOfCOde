// http://adventofcode.com/2017/day/3

const input = 289326;

// x = (a,b) y = (c,d) then distance between x and y is |a-c|+|b-d|
// Part 1

let spiral = 1;
let x      = 0;
let y      = 0;

for (let i = 1; i <= input; ++i) {
  // Right
  x = spiral + x;
  // Up
  y = spiral + y;
  // Left
  x = spiral
  // Down
}

// Part 2
