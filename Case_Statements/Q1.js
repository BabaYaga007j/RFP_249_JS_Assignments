//Read a single digit number and write the number in word using Case

// Get the single digit number as input
const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a single digit number: "));

// Initialize a variable to store the word representation of the number
let word;

// Use a switch statement to convert the number to its word representation
switch (num) {
  case 0:
    word = "Zero";
    break;
  case 1:
    word = "One";
    break;
  case 2:
    word = "Two";
    break;
  case 3:
    word = "Three";
    break;
  case 4:
    word = "Four";
    break;
  case 5:
    word = "Five";
    break;
  case 6:
    word = "Six";
    break;
  case 7:
    word = "Seven";
    break;
  case 8:
    word = "Eight";
    break;
  case 9:
    word = "Nine";
    break;
  default:
    word = "Invalid input. Please enter a single digit number.";
    break;
}

// Output the word representation of the number to the console
console.log(`The word representation of ${num} is: ${word}`);
