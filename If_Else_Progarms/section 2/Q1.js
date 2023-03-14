//Read a single digit number and write the number in word

// Get the single digit number as input
const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a single digit number: "));
// Check if the input is a single digit number
if (num >= 0 && num <= 9) {
  // Convert the number to its corresponding word
  let word;
  switch(num) {
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
  }
  // Output the number in words
  console.log(`The number ${num} in words is "${word}".`);
} else {
  console.log("Invalid input. Please enter a single digit number.");
}
