// http://adventofcode.com/2016/day/2

import * as fs from 'fs';
const input = fs.readFileSync('2016/day02_input.txt').toString().split('\n').map((line) => line.split(''));

const mov = {
  U: { x: 0,  y: -1 },
  R: { x: 1,  y: 0 },
  D: { x: 0,  y: 1 },
  L: { x: -1, y: 0 },
};

const pad  = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // [y][x]
// const pad = [[0, 0, 1, 0, 0], [0, 2, 3, 4, 0], [5, 6, 7, 8, 9], [0, 'A', 'B', 'C', 0], [0, 0, 'D', 0, 0]];
const pos  = { x: 0, y: 2 };
const code = [];

input.forEach((line) => {
  line.forEach((instr) => {
    const newX = pos.x + mov[instr].x;
    const newY = pos.y + mov[instr].y;
    if (newY < pad.length && pad[newY] &&  newX < pad[newY].length && newX > -1 && newY > -1 && pad[newY][newX] !== 0) {
      pos.x = newX;
      pos.y = newY;
    }
  });
  code.push(pad[pos.y][pos.x]);
});

console.log(code);
