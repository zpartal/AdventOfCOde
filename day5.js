// http://adventofcode.com/day/5

var fs = require('fs');
var input = fs.readFileSync('day5_input.txt').toString().split('\n');

// Part 1
var threeVowles = new RegExp("(.*[aeiou]){3}");
var doubleLetter = new RegExp("(.)\\1");
var badLetters = new RegExp("ab|cd|pq|xy");

var output = input.reduce(function (prev, curr) {
  return (threeVowles.test(curr) && doubleLetter.test(curr) && !badLetters.test(curr)) ? ++prev : prev;
}, 0);

console.log(output);

// Part 2
var doubleDoubleLetters = new RegExp("(..).*\\1");
var sandwichLetter = new RegExp("(.).\\1");

var output2 = input.reduce(function (prev, curr) {
  return (doubleDoubleLetters.test(curr) && sandwichLetter.test(curr)) ? ++prev : prev;
}, 0);

console.log(output2);