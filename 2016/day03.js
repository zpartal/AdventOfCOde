"use strict";
// http://adventofcode.com/2016/day/3
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('2016/day03_input.txt').toString().split('\n') //
    .map(function (data) {
    var tri = data.trim().split('  ').map(function (num) { return parseInt(num); }).sort();
    return (tri[0] + tri[1] > tri[2]) && (tri[0] + tri[2] > tri[1]) && (tri[1] + tri[2] > tri[0]) ? 1 : 0;
})
    .reduce(function (prev, curr) {
    return prev + curr;
}, 0);
console.log(input);
