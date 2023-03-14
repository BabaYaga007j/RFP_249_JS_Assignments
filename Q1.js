// Program to Add two Numbers

let a = 12
let b = 13
c= a+b
console.log(c)
console.log(a+b)

//check even or odd


function evenorodd (number)
{
    if(number%2 ==0)
    {
        console.log(number+ " is even")
    }
    else{
        console.log(number + "is odd ")
    }
}
evenorodd(10)

//Program to check whether input character is vowel or consonant


function checkVowelOrConsonant(char) {
  // convert the character to lowercase for easier comparison
  char = char.toLowerCase();

  // check if the character is a vowel or consonant
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(char + ' is a vowel');
  } else {
    console.log(char + ' is a consonant');
  }
}

// example usage
checkVowelOrConsonant('a'); // prints "a is a vowel"
checkVowelOrConsonant('b'); // prints "b is a consonant"
checkVowelOrConsonant('E'); // prints "e is a vowel"

//Program to Convert char to String and String to Char

// convert a character to a string
const char = 'a';
const str = char.toString();
console.log(str); // prints "a"

// convert a string to a character
const str2 = 'b';
const char2 = str2.charAt(0);
console.log(char2); // prints "b"

//sort strings in alphabetical order
// sort an array of strings in alphabetical order
const strings = ['banana', 'apple', 'pear', 'orange'];
strings.sort();
console.log(strings);

// sort an array of strings in reverse alphabetical order
const string = ['banana', 'apple', 'pear', 'orange'];
string.sort().reverse();
console.log(string);

