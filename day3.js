// http://adventofcode.com/day/3

var fs = require('fs');
var input = fs.readFileSync('day3_input.txt').toString().split('');

var info = {
  loc: { x: 0, y: 0 },
  visited: { '{"x":0,"y":0}': 1 },

  santa: { x: 0, y: 0 },
  robotSanta: { x: 0, y: 0 },
  visited2: { '{"x":0,"y":0}': 1 },

  ">": { x: 1, y: 0 },
  "^": { x: 0, y: 1 },
  "<": { x: -1, y: 0 },
  "v": { x: 0, y: -1 }
};

// Part 1
input.forEach(function (val) {
  this.loc.x += this[val].x;
  this.loc.y += this[val].y;
  var key = JSON.stringify(this.loc);
  this.visited[key] = isNaN(this.visited[key]) ? 1 : this.visited[key] += 1;
}, info);

console.log(Object.keys(info.visited).length);

// Part 2
input.forEach(function (val, idx) {
  var key;
  if (idx % 2 === 0) {
    this.santa.x += this[val].x;
    this.santa.y += this[val].y;
    key = JSON.stringify(this.santa);
  }
  else {
    this.robotSanta.x += this[val].x;
    this.robotSanta.y += this[val].y;
    key = JSON.stringify(this.robotSanta);
  }
  this.visited2[key] = isNaN(this.visited2[key]) ? 1 : this.visited2[key] += 1;
}, info);

console.log(Object.keys(info.visited2).length);
