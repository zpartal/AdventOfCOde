// http://adventofcode.com/day/13

var fs = require('fs');
var input = fs.readFileSync('day13_input.txt').toString().split('\n');

var guests = {};
input.forEach(function (val) {
  var re = /(\w+)\s\w+\s(\w+)\s(\d+)\s(?:\w+\s){6}(\w+)/.exec(val);
  var happ = (re[2] === "gain") ? Number(re[3]) : -1 * Number(re[3]);
  guests[re[1]] = guests[re[1]] || {};
  guests[re[4]] = guests[re[4]] || {};
  guests[re[1]][re[4]] = guests[re[1]][re[4]] + happ || happ;
  guests[re[4]][re[1]] = guests[re[4]][re[1]] + happ || happ;
});

// Part 2
guests.me = {};
for (var guest in guests) {
  guests[guest].me = 0;
  guests.me[guest] = 0;
}

var tables = [];
function genTable(currGuest, visited) {
  visited.push(currGuest);
  for (var guest in guests)
    if (visited.indexOf(guest) === -1)
      genTable(guest, visited.slice());
  if (visited.length === Object.keys(guests).length)
    tables.push(visited);
  return;
}

for (var guest in guests) {
  genTable(guest, []);
}

var output = tables.reduce(function (acc, val) {
  var happ = val.reduce(function (acc, val, idx, arr) {
    return acc += (idx < arr.length - 1) ? guests[val][arr[idx + 1]] : guests[val][arr[0]];
  }, 0);
  return (happ > acc) ? happ : acc;
}, 0);

console.log(output);
