//Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value   

// Generate 5 random 3-digit values
const values = Array.from({length: 5}, () => Math.floor(Math.random() * 900) + 100);

// Find the minimum and maximum values
const min = Math.min(...values);
const max = Math.max(...values);

// Output the minimum and maximum values
console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);



// We use the Array.from() method to generate an array of 5 elements, each of which is a random 3-digit value. The Math.random() method generates a random value between 0 and 1, which we multiply by 900 to get a value between 0 and 900. We then add 100 to this value to get a value between 100 and 1000. Finally, we use the Math.floor() method to round down to the nearest integer.
// We use the spread operator (...) to pass the values array as arguments to the Math.min() and Math.max() methods, which find the minimum and maximum values in the array, respectively.
// We use console.log() to output the minimum and maximum values to the console, along with some descriptive text.