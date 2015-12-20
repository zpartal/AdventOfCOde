// http://adventofcode.com/day/14

var fs = require('fs');
var input = fs.readFileSync('day14_input.txt').toString().split('\n');

function loc(reindeer, time) {
  var extra = time % (reindeer.fly + reindeer.rest);
  return reindeer.speed * reindeer.fly * Math.floor(time / (reindeer.fly + reindeer.rest)) +
    ((extra > reindeer.fly) ? reindeer.speed * reindeer.fly : extra * reindeer.speed);
}

var reindeer = {};
input.forEach(function (val) {
  var re = /^(\w+).*?(\d+).*?(\d+).*?(\d+)/.exec(val);
  reindeer[re[1]] = { speed: Number(re[2]), fly: Number(re[3]), rest: Number(re[4]), points: 0 };
});

var P1 = Math.max.apply(null, Object.keys(reindeer).map(function (val) { return loc(reindeer[val], 2503); }));
console.log(P1);

for (var i = 1; i <= 2503; ++i) {
  var places = {};
  for (var deer in reindeer)
    places[deer] = loc(reindeer[deer], i);

  var max = Math.max.apply(null, Object.keys(places).map(function (val) { return places[val]; }));
  for (var deer in reindeer)
    if (places[deer] === max)
      ++reindeer[deer].points;
}

var P2 = Math.max.apply(null, Object.keys(reindeer).map(function (val) { return reindeer[val].points; }));
console.log(P2);
