//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

// Get the number as input
const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a number: "));

// Initialize a variable to store the result
let result;

// Use a switch statement to convert the number to its corresponding unit, ten, hundred, etc.
switch (num) {
  case 1:
    result = "unit";
    break;
  case 10:
    result = "ten";
    break;
  case 100:
    result = "hundred";
    break;
  case 1000:
    result = "thousand";
    break;
  default:
    result = "Invalid input. Please enter a number that is 1, 10, 100, or 1000.";
    break;
}

// Output the result to the console
console.log(`The corresponding term for ${num} is: ${result}`);
