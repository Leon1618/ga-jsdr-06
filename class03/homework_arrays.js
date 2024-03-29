//     Create an empty array, and call it rainbowColors. Using Array methods:

//     Add "yellow" to the end
//     Add "green", "blue", "indigo", and "violet" to the end of the array
//     Bonus: Do this using one method call
//     Log out the length of the array
//     Log out the second item
//     Log out the last item (make this flexible/dynamic!)
//     Log out the index of the string "blue"
//     Bonus: Find out the difference between .slice and .splice
//     Create a copy of rainbowColors using an array method and call it twoColors. Essentially pull two colors out of the array (say, between the index of 1 and 3)
//     Starting with this array const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate). Note: This will have to be done with multiple method calls
//     Bonus: Work with arrays of arrays
//     Starting with this array const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
//     Access "inner array first item" and print it out
//     Print "third" by using a dynamic index (hint: maybe indexOf or includes would help!)
//     Bonus: Loop through the second inner array! Print out the first item, the second item, then the third item

//     let rainbowColors = [];

//     rainbowColors.push("orange"); // Add "orange" to the end of the array
//     console.log(rainbowColors);

//     rainbowColors.unshift("red"); // Add "red" to the start of the array
//     console.log(rainbowColors);

//     rainbowColors.push("yellow"); // Add "yellow" to the end
//     console.log(rainbowColors);

//     rainbowColors.push("green", "blue", "indigo", "violet"); // Add "g, b, i, v" to the end
//     console.log(rainbowColors);

//     console.log(rainbowColors.length); //Log out the length of the array
//     console.log(rainbowColors[1]); //Log out the second item
//     console.log(rainbowColors[rainbowColors.length - 1]); //Log out the last item (make this flexible/dynam)

//     console.log(rainbowColors.indexOf("blue"));

//     let twoColors = rainbowColors.slice(0, rainbowColors.length + 1);
//     console.log(twoColors);

//     twoColors.splice(1, 3);
//     console.log(twoColors);

//     const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

//     const arrOfArrs = [
//       ["inner array first item", "inner array second item"],
//       ["first", "second", "third"],
//     ];

//     Your top choices
//     Create an array to hold your top five choices of something (dogs, books, presidents, whatever you want).

//     const topFive = ["Lamborghini", "Ferrari", "Bugatti", "Porsche", "Pagani"];
//     console.log(topFive);

//     for (let i = 0; i <= topFive.length - 1; i += 1) {
//     console.log(`My #${i + 1} choice is ${topFive[i]}`);
//     }

//     Bonus: Change it to log "My 1st choice", "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

//     const rightSuffix = ["st", "nd", "rd", "th", "th"];

//     for (let i = 0; i <= topFive.length - 1; i++) {
//     console.log(`My ${i + 1}${rightSuffix[i]} choice is ${topFive[i]}.`);
//     }
