"use strict";
// http://adventofcode.com/2017/day/2
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('2017/day02_input.txt').toString();
// Part 1
var part1 = input
    .split('\n')
    .map(function (val) { return val.split('\t').map(function (num) { return Number(num); }).sort(function (a, b) { return a - b; }); })
    .reduce(function (prev, curr) {
    return prev + curr[curr.length - 1] - curr[0];
}, 0);
console.log(part1);
// Part 2
var part2 = input
    .split('\n')
    .map(function (val) { return val.split('\t').map(function (num) { return Number(num); }).sort(function (a, b) { return a - b; }); })
    .reduce(function (prev, curr) {
    for (var i = 0; i < curr.length; ++i) {
        for (var j = 0; j < curr.length; ++j) {
            if (i === j) {
                continue;
            }
            if (curr[i] % curr[j] === 0) {
                return prev + (curr[i] / curr[j]);
            }
        }
    }
    return prev;
}, 0);
console.log(part2);
