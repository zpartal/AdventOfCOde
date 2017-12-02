// http://adventofcode.com/2016/day/1

var fs = require('fs');
var input = fs.readFileSync('2016/day01_input.txt').toString().split(',').map((val) => val.trim());

let loc = {
  x:           0,
  y:           0,
  orientation: 'N',
};

let ops = {
  'N': { 
        'R': (dist, coord) => { coord.x += dist; coord.orientation = 'E' },
        'L': (dist, coord) => { coord.x -= dist; coord.orientation = 'W' },
       },
  'E': { 
        'R': (dist, coord) => { coord.y -= dist; coord.orientation = 'S' },
        'L': (dist, coord) => { coord.y += dist; coord.orientation = 'N' },
      },
 'S': { 
        'R': (dist, coord) => { coord.x -= dist; coord.orientation = 'W' },
        'L': (dist, coord) => { coord.x += dist; coord.orientation = 'E' },
      },
 'W': { 
        'R': (dist, coord) => { coord.y += dist; coord.orientation = 'N' },
        'L': (dist, coord) => { coord.y -= dist; coord.orientation = 'S' },
      },
}

input.forEach((val) => {
  let dir  = val.slice(0,1);
  let dist = Number(val.slice(1));
  ops[loc.orientation][dir](dist, loc);  
});

// Part 1
console.log(Math.abs(loc.x)+Math.abs(loc.y));

// Part 2