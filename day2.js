// http://adventofcode.com/day/2

var fs = require('fs');
var input = fs.readFileSync('day2_input.txt').toString().split('\n').map(function(val) {
	return val.split('x').map(Number);
});
// console.log(input);

var wrappingPaper = input.reduce(function(prev,curr) {
	var box = curr.slice();
	// Calculate surface area
	prev += (2*box[0]*box[1]+2*box[0]*box[2]+2*box[1]*box[2]);
	// Remove largest number from box array
	box.splice(box.indexOf(Math.max.apply(Math, box)),1);
	// Calculate the smallest side extra
	return prev += box[0] * box[1];
},0);

console.log(wrappingPaper);

var ribbon = input.reduce(function(prev,curr) {
	var box = curr.slice();
	// Calculate volume
	prev += (box[0]*box[1]*box[2]);
	// Remove largest number from box array
	box.splice(box.indexOf(Math.max.apply(Math, box)),1);
	// Calculate ribbon length
	return prev += 2*(box[0] + box[1]);
},0);

console.log(ribbon);
