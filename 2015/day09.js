// http://adventofcode.com/day/9
// 207
// 804

var fs = require('fs');
var input = fs.readFileSync('day09_input.txt').toString().split('\n');

var cities = {};
input.forEach(function (val) {
  var dist = /(\w+)\sto\s(\w+)\s=\s(\d+)/.exec(val);
  cities[dist[1]] = cities[dist[1]] || {};
  cities[dist[2]] = cities[dist[2]] || {};
  cities[dist[1]][dist[2]] = Number(dist[3]);
  cities[dist[2]][dist[1]] = Number(dist[3]);
});

var tours = [];
function genTours(currCity, visited) {
  visited.push(currCity);
  for (var city in cities)
    if (visited.indexOf(city) === -1)
      genTours(city, visited.slice());
  if (visited.length === Object.keys(cities).length)
    tours.push(visited);
  return;
}

for (var city in cities) {
  genTours(city, []);
}

var output = tours.reduce(function (acc, val) {
  var dist = val.reduce(function (acc, val, idx, arr) {
    return (idx < arr.length - 1) ? acc += cities[val][arr[idx + 1]] : acc;
  }, 0);
  return (dist > acc) ? dist : acc;
}, 0);

console.log(output);
