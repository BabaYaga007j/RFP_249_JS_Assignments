// Write a program that takes User Inputs and does Unit Conversion of

// different Length units
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet

// Get the user inputs
const prompt = require("prompt-sync")();
const fromUnit = prompt("Enter the unit to convert from (feet, inch, meter): ").toLowerCase();
const toUnit = prompt("Enter the unit to convert to (inch, feet, meter): ").toLowerCase();
const value = parseFloat(prompt("Enter the value to convert: "));

// Initialize a variable to store the result
let result;

// Use a switch statement to convert the length between different units
switch (fromUnit) {
  case "feet":
    switch (toUnit) {
      case "inch":
        result = value * 12;
        break;
      case "meter":
        result = value * 0.3048;
        break;
      case "feet":
        result = value;
        break;
      default:
        result = "Invalid input. Please enter inch, feet, or meter as the unit to convert to.";
        break;
    }
    break;
  case "inch":
    switch (toUnit) {
      case "feet":
        result = value / 12;
        break;
      case "meter":
        result = value * 0.0254;
        break;
      case "inch":
        result = value;
        break;
      default:
        result = "Invalid input. Please enter inch, feet, or meter as the unit to convert to.";
        break;
    }
    break;
  case "meter":
    switch (toUnit) {
      case "feet":
        result = value / 0.3048;
        break;
      case "inch":
        result = value / 0.0254;
        break;
      case "meter":
        result = value;
        break;
      default:
        result = "Invalid input. Please enter inch, feet, or meter as the unit to convert to.";
        break;
    }
    break;
  default:
    result = "Invalid input. Please enter feet, inch, or meter as the unit to convert from.";
    break;
}

// Output the result to the console
console.log(`${value} ${fromUnit} = ${result} ${toUnit}`);
