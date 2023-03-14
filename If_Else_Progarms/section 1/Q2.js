//Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.

// Get the day and month from the command line arguments
const day = parseInt(process.argv[2]);
const month = parseInt(process.argv[3]);

// Check if the day falls between March 20 and June 20
if ((month === 3 && day >= 20) || (month > 3 && month < 6) || (month === 6 && day <= 20)) {
  console.log("True");
} else {
  console.log("False");
}

// We use the process.argv array to get the command line arguments. process.argv[0] is the Node.js executable, process.argv[1] is the name of the script being executed, and process.argv[2] and process.argv[3] are the day and month, respectively.
// We use the parseInt() method to convert the day and month from strings to integers.
// We check if the day falls between March 20 and June 20 using a series of logical conditions. If the month is March and the day is greater than or equal to 20, or if the month is between April and May, or if the month is June and the day is less than or equal to 20, then the program outputs "True". Otherwise, it outputs "False".
// We use console.log() to output the result of the check to the console.