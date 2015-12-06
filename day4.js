// http://adventofcode.com/day/4

var crypto = require('crypto');

var input = "yzbqklnj";

// Part 1
var inc = 0;
while (!crypto.createHash('md5').update(input+inc).digest("hex").startsWith("00000")) { ++inc; }
console.log(inc);

// Part 2
inc = 0;
while (!crypto.createHash('md5').update(input+inc).digest("hex").startsWith("000000")) { ++inc; }
console.log(inc);