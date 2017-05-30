// scripts.js

var a = prompt('Enter a');
var b = prompt('Enter b');
var value = (a * a) + (2 * a * b) - (b * b);

console.log('Result of your operation is ' + value);

if (value > 0) {
  console.log('Your result is positive');
}
else if (value < 0) {
  console.log('Your result is negative');
}
else {
  console.log('Your result is equal 0');
}
