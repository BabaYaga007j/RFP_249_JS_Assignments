//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

// Generate a random number between 0 and 1
const randomNum = Math.random();

// Convert the random number to either "Heads" or "Tails"
const result = randomNum < 0.5 ? "Heads" : "Tails";

// Output the result
console.log(result);
