// Enter 3 Numbers do following arithmetic operation and find the one that

// is maximum and minimum
// 1. a + b * c    3. c + a / b
// 2. a % b + c    4. a * b + c

//Get the three numbers as input
const prompt = require("prompt-sync")();
const a = parseInt(prompt("Enter the first number: "));
const b = parseInt(prompt("Enter the second number: "));
const c = parseInt(prompt("Enter the third number: "));

// Calculate the results of the arithmetic operations
const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;

// Find the maximum and minimum results
const maxResult = Math.max(result1, result2, result3, result4);
const minResult = Math.min(result1, result2, result3, result4);

// Output the results to the console

console.log(`Result 1st operation is : ${result1}`);
console.log(`Result 2nd operation is : ${result2}`);
console.log(`Result 3rd operation is : ${result3}`);
console.log(`Result 4th operation is : ${result4}`);

console.log(`The maximum result is: ${maxResult}`);
console.log(`The minimum result is: ${minResult}`);
