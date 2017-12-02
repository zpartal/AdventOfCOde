// http://adventofcode.com/2017/day/2

import * as fs from 'fs';
const input = fs.readFileSync('2017/day02_input.txt').toString();

// Part 1
const part1 = input
  .split('\n')
  .map((val) => val.split('\t').map((num) => Number(num)).sort((a, b) => a - b))
  .reduce((prev, curr) => {
    return prev + curr[curr.length - 1] - curr[0];
  }, 0);

console.log(part1);

// Part 2
const part2 = input
  .split('\n')
  .map((val) => val.split('\t').map((num) => Number(num)).sort((a, b) => a - b))
  .reduce((prev, curr) => {
    for (let i = 0; i < curr.length; ++i) {
      for (let j = 0; j < curr.length; ++j) {
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
