"use strict";
// http://adventofcode.com/2017/day/1
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('2017/day01_input.txt').toString().split('').map(function (val) { return Number(val); });
// Part 1
var captcha = 0;
if (input[0] === input[input.length - 1]) {
    captcha += input[0];
}
input.forEach(function (val, idx, arr) {
    if (val === arr[idx - 1]) {
        captcha += val;
    }
});
console.log(captcha);
// Part 2
captcha = 0;
input.forEach(function (val, idx, arr) {
    if (val === arr[(idx + (arr.length / 2)) % arr.length]) {
        captcha += val;
    }
});
console.log(captcha);
