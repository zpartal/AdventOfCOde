// http://adventofcode.com/day/16

var fs = require('fs');
var input = fs.readFileSync('day16_input.txt').toString().split('\n');

var masterSue = { children: 3, cats: 7, samoyeds: 2, pomeranians: 3, akitas: 0, vizslas: 0, goldfish: 5, trees: 3, cars: 2, perfumes: 1 };
var sues = [];
input.forEach(function (val) {
  var re = /^.*?(\d+):\s(\w+):\s(\d+),\s(\w+):\s(\d+),\s(\w+):\s(\d+)/.exec(val);
  var sue = {};
  sue[re[2]] = Number(re[3]); sue[re[4]] = Number(re[5]); sue[re[6]] = Number(re[7]);
  sues.push(sue);
});

sues.forEach(function (sue, i) {
  var pass = true;
  Object.keys(sue).forEach(function (key, j) {
    if (pass && (key === "cats" || key === "trees")) {
      if (sues[i][key] <= masterSue[key])
        pass = false;
    }
    else if (key === "goldfish" || key === "pomeranians") {
      if (pass && (sues[i][key] >= masterSue[key]))
        pass = false;
    }
    else if (pass && (masterSue[key] != sues[i][key])) {
      pass = false;
    }
  });
  if (pass) console.log(i + 1);
});
