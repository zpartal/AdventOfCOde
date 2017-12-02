// http://adventofcode.com/day/10
// Input -> 1321131112
// Output1 -> 492982
// Output2 -> 6989950 
// var re = /(\d)\1*/g.exec(input);

var start = "1321131112";

for (var x = 0; x < 40; ++x) {
  var out = "";
  var count = 1;
  for (var i = 1; i < start.length; ++i) {
    if (start[i] != start[i - 1]) {
      out += count.toString() + start[i - 1];
      count = 1;
    }
    else ++count;
  }
  out += count.toString() + start[start.length - 1];
  start = out;
}

console.log(start.length);
