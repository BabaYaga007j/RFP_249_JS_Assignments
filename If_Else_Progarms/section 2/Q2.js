//Read a Number and Display the week day (Sunday, Monday,...)

// Get the number as input
const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a number between 1 and 7: "));

// Check if the input is a number between 1 and 7
if (num >= 1 && num <= 7) {
  // Convert the number to its corresponding weekday
  let weekday;
  switch(num) {
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
  }
  // Output the weekday
  console.log(`The number ${num} corresponds to ${weekday}.`);
} else {
  console.log("Invalid input. Please enter a number between 1 and 7.");
}
