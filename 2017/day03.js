// http://adventofcode.com/2017/day/3
var input = 289326;
// x = (a,b) y = (c,d) then distance between x and y is |a-c|+|b-d|
// Part 1
var spiral = 1;
var x = 0;
var y = 0;
for (var i = 1; i <= input; ++i) {
    // Right
    x = spiral + x;
    // Up
    y = spiral + y;
    // Left
    x = spiral;
    // Down
}
// Part 2
