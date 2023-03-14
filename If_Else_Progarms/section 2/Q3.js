//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

// Get the number as input
const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a number: "));


// Check if the input is a power of 10
if (Math.log10(num) % 1 === 0) {
  // Define an array of words for the units, tens, hundreds, etc
  const words = ["", "one", "ten", "hundred", "thousand", "ten thousand", "hundred thousand", "million", "ten million", "hundred million", "billion"];
  
  // Get the length of the number
  const length = num.toString().length;
  
  // Display the corresponding word for the unit, ten, hundred, thousand, etc
  console.log(`The number ${num} corresponds to ${words[length]} in words.`);
} else {
  console.log("Invalid input. Please enter a power of 10.");
}
