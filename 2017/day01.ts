// http://adventofcode.com/2017/day/1

import * as fs from 'fs';
const input = fs.readFileSync('2017/day01_input.txt').toString().split('').map((val) => Number(val));

// Part 1
let captcha = 0;

if (input[0] === input[input.length - 1]) {
  captcha += input[0];
}

input.forEach((val, idx, arr) => {
  if (val === arr[idx - 1]) {
    captcha += val;
  }
});

console.log(captcha);

// Part 2
captcha = 0;

input.forEach((val, idx, arr) => {
  if (val === arr[(idx + (arr.length / 2)) % arr.length]) {
    captcha += val;
  }
});

console.log(captcha);
