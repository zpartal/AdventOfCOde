// http://adventofcode.com/day/19

let fs = require('fs');
let input = fs.readFileSync('day19_input.txt').toString().split('\n');

let replacements = {};

input.forEach(function(val) {
  let matches = /(\w+)\W+(\w+)/.exec(val);
  (matches[1] in replacements) ? replacements[matches[1]].push(matches[2]) : replacements[matches[1]] = [matches[2]];
});

let rawMolecule = 
  'ORnPBPMgArCaCaCaSiThCaCaSiThCaCaPBSiRnFArRnFArCaCaSiThCaCaSiThCaCaCaCaCaCaSiRnFYFArSiRnMgArCaSiRnPTiTiBFYPBFArSiRnCaSiRnTiRnFArSiAlArPTiBPTiRnCaSiAlArCaPTiTiBPMgYFArPTiRnFArSiRnCaCaFArRnCaFArCaSiRnSiRnMgArFYCaSiRnMgArCaCaSiThPRnFArPBCaSiRnMgArCaCaSiThCaSiRnTiMgArFArSiThSiThCaCaSiRnMgArCaCaSiRnFArTiBPTiRnCaSiAlArCaPTiRnFArPBPBCaCaSiThCaPBSiThPRnFArSiThCaSiThCaSiThCaPTiBSiRnFYFArCaCaPRnFArPBCaCaPBSiRnTiRnFArCaPRnFArSiRnCaCaCaSiThCaRnCaFArYCaSiRnFArBCaCaCaSiThFArPBFArCaSiRnFArRnCaCaCaFArSiRnFArTiRnPMgArF';

let molecule = rawMolecule.split(/(?=[A-Z])/);

let results = {};

for (atom in molecule) {
  let copyMol = molecule.slice(0);
  let replaceSet = replacements[molecule[atom]] || [];
  for (newAtom in replaceSet) {
    copyMol[atom] = replaceSet[newAtom];
    results[copyMol.join('')] = '';
  }
}

// Part 1
console.log(Object.keys(results).length);

// Part 2 207