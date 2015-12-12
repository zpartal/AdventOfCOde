// http://adventofcode.com/day/11
// input => "hxbxwxba"

function* genNextPassword(password) {
  while (true) {
    // Convert to Base26 and increment
    var inc = parseInt(password.split('').map(function (char) {
      return (char.charCodeAt(0) - 97).toString(26);
    }).join(''), 26) + 1;
    // Convert to Base10 ascii
    var newinput = inc.toString(26).split('').map(function (char) {
      return (parseInt(char, 26) + 97);
    });
    if (newinput.length < password.length) newinput.unshift(97);
    password = String.fromCharCode.apply(String, newinput);
    // At least two sets of double letters
    if (!/(.)\1.+(.)\2/.test(password)) continue;
    // No i,l, or o
    if (/[ilo]/.test(password)) continue;
    // Increasing straight
    for (var i = 2; i < password.length; ++i) {
      if (password.charCodeAt(i - 2) === (password.charCodeAt(i - 1) - 1) &&
        password.charCodeAt(i - 2) === (password.charCodeAt(i) - 2))
        yield password;
    }
  }
}

var pwgen = genNextPassword("hxbxwxba");
console.log(pwgen.next().value); // Part 1
console.log(pwgen.next().value); // Part 2
