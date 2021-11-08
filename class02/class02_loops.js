// Oct 26th (Tuesday) - Lesson 3 (Loops)

// Recording: https://generalassembly.zoom.us/rec/share/0u37QXS_rlZiK-s189Mnp1CrB8YMoV31NK3drQ1-O-s06-GFx9cv_NX5CWpNCa4_.myL5LtO4YAt4TKmp

// Code and slides: https://github.com/ga-wolf/jsdr-06/tree/main/class_02/code/conditionals

// For homework tonight:
// - These loop exercises: https://github.com/ga-wolf/jsdr-06/blob/main/class_02/exercises/00_loops.md
// - Read JavaScript.info's Loop page: https://javascript.info/while-for
// - Read JavaScript.info's Array page: https://javascript.info/array
// - Read JavaScript.info's Array Methods page: https://javascript.info/array-methods
// If you want to have a go (though they aren't things we have covered yet), feel free to try these (https://github.com/ga-wolf/jsdr-06/blob/main/class_02/exercises/01_arrays.md) array exercises out too. This page (https://javascript.info/array-methods) will help!
// The Zoom recording can be found here and the passcode is h7acA+9m
// The code from tonight can be found here and the slides can be found here. Next up: more on arrays, objects and functions!

// // How could we determine if a given programming language is a front-end programming language?

// let language = "Rust";

// if (language === "HTML" || language === "CSS" || language === "JS") {
// console.log("It is front end");
// } else {
// console.log("It is likely back end");
// }

// // If language is HTML or CSS or JS, its front end
// // Otherwise (else), its probably a back end

// let personName = "Suguna";

// if (personName === "Stacey" || personName === "Jack") {
// console.log("Teacher!");
// } else {
// console.log("Student!");
// }

// console.clear();

// let userIsLoggedIn = true;
// let userIsAdmin = true;

// if (userIsLoggedIn && userIsAdmin) {
// console.log("You can do anything!");
// }

// console.clear();

// let hasAccount = false;

// // If they don't have an account
// //   Tell them to sign up
// // Otherwise
// //   Tell them to log in

// if (!hasAccount) {
// console.log("You should sign up");
// } else {
// console.log("You should log in");
// }

// userIsLoggedIn === true && userIsAdmin === true;
// true === true && userIsAdmin === true;
// true && userIsAdmin === true;
// true && true === true;
// true && true;
// true;

// Primitive Data Types
// - Single value
// - Immutable (can't change)
// Structural Data Types (Composite)
// - Can be more than one value (they are collections)
// - Mutable (can change)

// // Array is:
// //  Structural
// //  Ordered
// //  Access is done using a zero-based index

// let emptyArr = [];

// let random = ["", 1, false, null];

// let letters = ["a", "b", "c", "d", "e"];

// // Accessing Items
// // zero-based index (the first item is index 0)

// let letterA = letters[0];
// let letterD = letters[3];
// let whatHappens = letters[10];

// console.log(letterA, letterD);
// console.log(whatHappens);

// const instruments = [
// "The Great Stalacpipe Organ",
// "Stylophone",
// "Ondes Martenot",
// "Sharpischord",
// "Hydraulophone",
// "Pyrophone",
// ];

// // Reassign Values
// instruments[1] = "Roli Seaboard";

// // I want to change "Pyrophone" to "OP1"
// instruments[5] = "OP1";

// let lastItem = instruments[instruments.length - 1];
// console.log(lastItem);

// const ordinals = ["Zeroeth", "First", "Second", "Third"];

// // Loop || Iterate through the ordinals array
// //
// // Starting Point: 0
// // Ending Condition: < 4
// // Step || Increment: += 1

// for (let i = 0; i < 4; i += 1) {
// let value = ordinals[0];
// console.log(value);
// }

// Exercise List (3)

//     // Exercises: Loops
// // Log every number from 0 to 10
// for (let i = 0; i < 11; i++) {
// console.log(i);
// }
// // Log every number from 4 to -16
// for (let i = 4; i >= -16; i--) {
// console.log(i);
// }
// // Log every fourth number from 8 to 41
// for (let i = 8; i <= 41; i += 4) {
// console.log(i);
// }
// // The Classic Fizzbuzz Program
// // Loop from 0 to 100.
// for (let i = 0; i <= 100; i++) {
// console.log(i);
// }
// If the number is evenly divisible by 3, log the number and "Fizz"
// If the number is evenly divisible by 5, log the number and "buzz"
// If the number is evenly divisible by both 3 AND 5, log the number and "Fizzbuzz"
// for (let i = 0; i <= 100; i++) {
// if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
//     console.log(`${i} Fizz Buzz`);
// } else if (i % 5 === 0 && i !== 0) {
//     console.log(`${i} Buzz`);
// } else if (i % 3 === 0 && i !== 0) {
//     console.log(`${i} Fizz`);
// } else {
//     console.log(`${i}`);
// }
// }
// If the number is evenly divisible by both 3 AND 5, log the number and "Fizzbuzz"
// Working with Arrays
// Create an empty array, and call it rainbowColors. Using Array methods:
// const rainbowColors = [];
// // Add "orange" to the end of the array
// rainbowColors.push("orange");
// // Add "red" to the start of the array
// rainbowColors.unshift("red");
// // Add "yellow" to the end
// rainbowColors.push("yellow");
// // Add "green", "blue", "indigo", and "violet" to the end of the array
// rainbowColors.push("green", "blue", "indigo", "violet");
// console.log(rainbowColors);
// // Bonus: Do this using one method call
// // Log out the length of the array
// console.log(rainbowColors.length);
// // Log out the second item
// console.log(rainbowColors[1]);
// // Log out the last item (make this flexible/dynamic!)
// console.log(rainbowColors[rainbowColors.length - 1]);
// // Log out the index of the string "blue"
// console.log(rainbowColors.indexOf("blue"));
// // Bonus: Find out the difference between .slice and .splice
// console.log(rainbowColors.slice(0, 1)); //Returns selected items in an array as a new array.
// console.log(rainbowColors.splice(1, 3)); //You can add and remove items from an array by using the index.
// // Create a copy of rainbowColors using an array method and call it twoColors. Essentially pull two colors out of the array (say, between the index of 1 and 3)
// let twoColors = rainbowColors.splice(1, 2);
// console.log(twoColors);
// console.log(rainbowColors);
// Starting with this array const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate). Note: This will have to be done with multiple method calls
// const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
// nums.splice(3, 3);
// console.log(nums);
// Bonus: Work with arrays of arrays
// Starting with this array const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
// const arrOfArrs = [
// ["inner array first item", "inner array second item"],
// ["first", "second", "third"],
// ];
// Access "inner array first item" and print it out
// console.log(arrOfArrs[0][0]);
// Print "third" by using a dynamic index
// for (let i = 0; i <= arrOfArrs.length - 1; i++) {
// for (let j = 0; j <= arrOfArrs[i].length - 1; j++) {
//     if (arrOfArrs[i][j] === "third") {
//     console.log(arrOfArrs[i][j]);
//     }
// }
// }
// Bonus: Loop through the second inner array! Print out the first item, the second item, then the third item
// for (let i = 0; i <= arrOfArrs.length - 1; i++) {
// for (let j = 0; j <= arrOfArrs[i].length - 1; j++) {
//     if (i === 1) {
//     console.log(arrOfArrs[i][j]);
//     }
// }
// }

// // 1. Log every number from 0 to 10
// let i = 1;
// while (i <= 10) {
// console.log(i);
// i += 1;
// }

// // 2. Log every number from 4 to -16
// let i2 = 4;

// while (i2 >= -16) {
// console.log(i2);
// i2 -= 1;
// }

// // 3. Log every fourth number from 8 to 41
// // 3. while
// let i3 = 8;

// while (i3 <= 41) {
// console.log(i3);
// i3 += 4;
// }

// // 3. for
// for (let i4 = 8; i4 <= 41; i4 += 4) {
// console.log(i4);
// }

// // 4. FizzBuzz While Loop
// let count = 0;

// while (count <= 100) {
// if (count % 5 == 0 && count % 3 == 0) {
//     console.log(count + " FizzBuzz");
// } else if (count % 5 == 0) {
//     console.log(count + " Buzz");
// } else if (count % 3 == 0) {
//     console.log(count + " Fizz");
// } else {
//     console.log(count);
// }
// count++;
// }

// // 4. FizzBuzz For Loop
// for (num = 0; num <= 100; num++) {
// if (num % 5 == 0 && num % 3 == 0) {
//     console.log(num + " FizzyBuzzy");
// } else if (num % 5 == 0) {
//     console.log(num + " Buzzy");
// } else if (num % 3 == 0) {
//     console.log(num + " Fizzy");
// } else {
//     console.log(num);
// }
// }

// Log every number from 0 to 10

// let num = 0;
// for (num = 0; num <= 10; num += 1) {
//   console.log(num);
// }

// Log every number from 4 to -16

// let num = 4;
// for (num = 4; num >= -16; num -= 1) {
//   console.log(num);
// }
// Log every fourth number from 8 to 41

// let num = 8;

// for (num = 8; num <= 41; num += 4) {
//   console.log(num);
// }

// The Classic Fizzbuzz Program
// Loop from 0 to 100.
// If the number is evenly divisible by 3, log the number and "Fizz"
// If the number is evenly divisible by 5, log the number and "buzz"
// If the number is evenly divisible by both 3 AND 5, log the number and "Fizzbuzz"

// let num = 1;

// for (num = 1; num <= 100; num += 1) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log(num + " Fizzbuzz");
//   } else if (num % 5 === 0) {
//     console.log(num + " buzz");
//   } else if (num % 3 === 0) {
//     console.log(num + " Fizz");
//   }
// }
