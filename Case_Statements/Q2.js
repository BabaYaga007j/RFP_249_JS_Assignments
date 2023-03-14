//Read a Number and Display the week day (Sunday, Monday,...)

// Get the number as input
const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a number between 1 and 7: "));
// Initialize a variable to store the weekday
let weekday;

// Use a switch statement to convert the number to its corresponding weekday
switch (num) {
  case 1:
    weekday = "Sunday";
    break;
  case 2:
    weekday = "Monday";
    break;
  case 3:
    weekday = "Tuesday";
    break;
  case 4:
    weekday = "Wednesday";
    break;
  case 5:
    weekday = "Thursday";
    break;
  case 6:
    weekday = "Friday";
    break;
  case 7:
    weekday = "Saturday";
    break;
  default:
    weekday = "Invalid input. Please enter a number between 1 and 7.";
    break;
}

// Output the weekday to the console
console.log(`The corresponding weekday for ${num} is: ${weekday}`);
