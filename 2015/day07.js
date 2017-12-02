// http://adventofcode.com/day/7 
// 16076
// 2797

var fs = require('fs');
var input = fs.readFileSync('day07_input.txt').toString().split('\n');

var instructions = {};

// Parse Instructions
input.forEach(function (val) {
  var cmd = /(.+?)\s->\s(\S+)/.exec(val);
  instructions[cmd[2]] = cmd[1];
}, instructions);

// Circuit
function Circuit(instructions) {
  this.instructions = instructions;
  this.cache = {};
  this.operations = {
    "AND":    function (a, b) { return a & b; },
    "OR":     function (a, b) { return a | b; },
    "LSHIFT": function (a, b) { return a << b; },
    "RSHIFT": function (a, b) { return a >> b; },
  };

  this.evaluate = function (val) {
    // Immediately return Constant 
    if (!isNaN(val))
      return val;

    if (!(val in this.cache)) {
      var input = this.instructions[val];
      var result;
      var tkns = [];
      // Constant 
      if (!isNaN(input))
        result = input;
      // Wire
      else if (/^(?!.*\s)(\D+?)$/.test(input))
        result = this.evaluate(input);
      // NOT
      else if (input.match(/^.?NOT/)) {
        tkns = /^.*NOT\s(\S+?)$/.exec(input);
        result = ~this.evaluate(tkns[1]);
      }
      // AND/OR/LSHIFT/RSHIFT
      else {
        tkns = /^(\S+?)\s(\S+?)\s(\S+?)$/.exec(input);
        result = this.operations[tkns[2]](this.evaluate(tkns[1]), this.evaluate(tkns[3]));
      }
      this.cache[val] = result;
    }
    return this.cache[val];
  };
}

// Part 1
var circuit = new Circuit(instructions);
var result = circuit.evaluate("a");
console.log(result);

// Part 2;
instructions.b = result.toString();
var circuit2 = new Circuit(instructions);
console.log(circuit2.evaluate("a"));
