// Oct 21st (Thursday) - Lesson 2 (Conditionals)

//     Recording: https://urldefense.com/v3/__https://generalassembly.zoom.us/rec/share/jXZ_B_4ay2gKewzRChN46atvMc72H30ZFWq6LaP95jgXD4DTcGEZ_g36wWHVgiMz.EA7sNEIdYL5E2Fpd__;!!GgcXpDZ2N9l6uyZJ!wNU6wEJw1fzJhpxe6yt4813mhuBPwa__75jryekw5PqEX47EjeGo5e3Iv7nwVlZau9Mc_alEBvc$
//     The passcode is LB24j=Xi

//     Code and slides: https://github.com/ga-wolf/jsdr-06/tree/main/class_01

//     The main homework for tonight is to do the following exercises:
//     Primitive Data Types and Variables: https://github.com/ga-wolf/jsdr-06/blob/main/class_00/exercises/00_primitive_data_types_and_variables.md
//     Conditionals: https://github.com/ga-wolf/jsdr-06/blob/main/class_01/exercises/00_conditionals.md

//     There are a few suggested readings too:
//     - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
//     - https://javascript.info/ifelse
//     - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
//     - http://speakingjs.com/es5/ch01.html#_conditionals
//     - https://eloquentjavascript.net/02_program_structure.html

//     console.log("Hello, I'm Jack");
//     console.log("Hello, I'm Jack");
//     console.log(`Hello World`); // Template Literal (interpolation)

//     // Properties - static pieces of information
//     console.log("hello".length);

//     // Methods - operations we can perform on data
//     console.log("hello".toUpperCase());

//     // undefined - Implicitly empty
//     console.log(undefined);

//     // null - Explicitly empty
//     console.log(null);

//     console.clear();

//     // Variables - Named storage

//     let myFirstVariable;

//     console.log(myFirstVariable);

//     // Declaration and Assignment
//     let message = "Hi everyone!";

//     console.log(message);
//     console.log(message.length);

//     message = "Oh my gosh, JavaScript is awesome";
//     console.log(message);

//     // Dynamic (values can change)
//     // Loosely typed (variable values can change types)

//     // The const keyword
//     // IMMUTABLE BINDING - The place in memory can't change!
//     // const Primitive data type can't change at all
//     // const Structural data type can be edited (values can be added or removed)

//     const favNumber = 42;

//     console.log(favNumber);

//     // The var keyword

//     var myVar = null;
//     console.log(myVar);

//     console.log("Hello");

//     // Comparison Operators
//     // Compare two values and return a boolean

//     // Less than
//     console.log(4 < 5); // true

//     // Less than or equals to
//     console.log(4 <= 5);
//     console.log(26 <= 25);

//     // Greater than
//     console.log(3 > 2); // true

//     // Greater than or equals to
//     console.log(25 >= 34);
//     console.log(12 >= 10);

//     // Loose Equality
//     // Uses type coercion!!
//     // (it'll try to turn the values into the same type)

//     console.log("hello" == "hello");
//     console.log(2 == "2"); // true (because of type coercion)

//     // Strict Equality
//     // No type coercion!!
//     console.log("a" === "a");
//     console.log(2 === "2"); // false (because it doesn't use type coercion)

//     console.clear();

//     // Loose Inequality (uses type coercion)
//     console.log(14 != 20);
//     console.log(10 != 10);
//     console.log(19 != "19");

//     // Strict Inequality (doesn't use type coercion)
//     console.log("hello" !== "hello");
//     console.log(19 !== "19");

//     console.clear();

//     if (2 === 2) {
//     console.log("Math's is working");
//     }

// Exercise List (2)

1. What number's bigger?
Write an if statement that compares two numbers (call them numOne and numTwo).

If numOne is bigger, it should log to the console "numOne (THE VALUE) is bigger than numTwo (THE VALUE)".

If numTwo is bigger, it should log to the console "numOne (THE VALUE) is smaller than numTwo (THE VALUE)".

If they are even, it should log to the console "numOne (THE VALUE) is equal to numTwo (THE VALUE)".

Bonus: Get the two numbers using prompt!

Bonus: Use interpolation (you may need to look up template literals)

let numOne = prompt("Enter the first number: ");
let numTwo = prompt("Enter the second number: ");

if (numOne > numTwo) {
  console.log(numOne + " is bigger than " + numTwo);
} else if (numOne < numTwo) {
  console.log(numOne + " is smaller than " + numTwo);
} else {
  console.log(numOne + " is equal to " + numTwo);
}

2. Driving Age
Store the user's name and age.

If the age is less than 16, log "Sorry, you can't drive yet!"
If the age is greater than or equal to 16, log "Drive into the sunset!"
Bonus: Get the name and age using prompt!

Bonus: If the user can't drive yet, tell them how many years they have before they can drive (e.g. "Sorry, you still have 4 years before you can drive")

let name = prompt("Please enter your name");
let age = prompt("Hi, " + name + "! Please, enter your age: ");

let drivingAge = 16;

let dif = drivingAge - age;

console.log(dif);

if (age < drivingAge) {
  console.log("Sorry, you still have " + dif + " year(s) before you can drive");
  alert("Sorry, you still have " + dif + " year(s) before you can drive");
} else if (age >= drivingAge) {
  console.log("Drive into the sunset!");
  alert("Drive into the sunset!");
}

3. Say Hi!
Store a language (e.g. "English", "French" or "Malaysian")

If the language is "English", log "Hi"
If the language is "French", log "Bonjour"
If the language is "Norwegian", log "Hallo"
If the language is "Turkish", log "Merhaba"
Plus, any other language you want to add!

let language = prompt("Please enter your native language: ");

if (language === "English") {
  console.log("Hi");
} else if (language === "French") {
  console.log("Bonjour");
} else if (language === "Norwegian") {
  console.log("Hallo");
} else if (language === "Turkish") {
  console.log("Merhaba");
} else if (language === "Portuguese") {
  console.log("Oi");
}

4. Southern or Northern Hemisphere?
Store a latitude (e.g. 65.3966675, -43.7251374)

If the latitude is less than 0, log "Southern Hemisphere"
If the latitude is greater than 0, log "Northern Hemisphere"
Otherwise, log "On the equator"
Bonus: Figure out if it is the Eastern or Western Hemisphere too!

let latitude = prompt("Enter a latitude: ");
let longitude = prompt("Enter a longitude: ");

if (latitude < 0) {
  console.log("Southern Hemisphere");
} else if (latitude > 0) {
  console.log("Northern Hemisphere");
} else console.log("On the Equator Line");

if (longitude < 0) {
  console.log("Western Hemisphere");
} else if (longitude > 0) {
  console.log("Eastern Hemisphere");
} else console.log("On the Greenwich Meridian");

5. Year in the 19th, 20th or 21st Century?
Store a year (e.g. 1905, 1814)

If the year is between 1801 and 1900, log "19th Century"
If the year is between 1901 and 2000, log "20th Century"
If the year is between 2001 and 2100, log "21st Century"
Otherwise, log "Sorry, it must be another century"

let year = prompt("Please enter a year: ");

if (year > 1801 && year < 1900) {
  console.log("19th Century");
} else if (year > 1901 && year < 2000) {
  console.log("20th Century");
} else if (year > 2001 && year < 2100) {
  console.log("21st Century");
} else {
  console.log("Sorry, it must be another century");
}

6. Greet
Store an hour, as 24 hour time (e.g. 9, 16)

If hour is less than 10, log "Good Morning"
Else if the hour is less than 19, log "Good Day"
Otherwise, log "Good Evening"

let hour = prompt("Enter an hour: ");

if (hour < 10) {
  console.log("Good Morning");
} else if (hour < 19) {
  console.log("Good Day");
} else {
  console.log("Good Evening");
// }
