const upperCase = require('upper-case').upperCase;

function greet(name) {
  console.log(upperCase(name));
}

greet('Hi Gkov');

module.exports = greet;
