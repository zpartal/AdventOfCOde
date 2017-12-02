// http://adventofcode.com/2016/day/3

import * as fs from 'fs';
const input = fs.readFileSync('2016/day03_input.txt').toString().split('\n') //
  .map((data) => {
    const tri = data.trim().split('  ').map((num) => parseInt(num)).sort();
    return (tri[0] + tri[1] > tri[2]) && (tri[0] + tri[2] > tri[1]) && (tri[1] + tri[2] > tri[0]) ? 1 : 0;
  })
  .reduce((prev, curr) => {
    return prev + curr;
  }, 0);
console.log(input);
