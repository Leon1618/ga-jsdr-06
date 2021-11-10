// Nov 4th (Thursday) - Lesson 6

// Some links from tonight:
// The code: https://github.com/ga-wolf/jsdr-06/tree/main/class_05/code
// The slides: https://github.com/ga-wolf/jsdr-06/tree/main/class_05/slides
// The Zoom recording (the passcode is kB@y1b2C ): https://urldefense.com/v3/__https://generalassembly.zoom.us/rec/share/JCboSVgY8lSPPBDxU0BmldzAqukEcs0sQQYuCSi1IWkobg3jOU20JdbBHoO9yp93.goRUakE78_QLEzPZ__;!!GgcXpDZ2N9l6uyZJ!3MsHJKKQvvgrf7-nsQM88CCArf5YDlRvWuAELfdTOUsQlCHUUJAff38GWjSbg3P7lXgXU-p0fG4$

// In the extra session we covered a fair bit. During the first half an hour, we just installed a few extensions for our text editors, and went through a few shortcuts. After that though, we covered a lot
// of JS stuff. We spoke mostly about return values and higher order functions (thanks for the questions everyone!), but we also spoke about some topics we haven't covered yet - the main one being something called a closure. It may be worth having a listen!

// In terms of homework, there are a few things:

// Continue on the Functions homework. That transit application one is very, very difficult - it's perfectly okay if that takes weeks before you feel even remotely comfortable giving it a go. If you decide to give it a crack, focus on the pseudocode and go one step at a time (keep it simple!)
// https://github.com/ga-wolf/jsdr-06/blob/main/class_04/exercises/02_functions.md

// Work on your CSS Selectors using FlukeOut(https://flukeout.github.io/) - CSS Selectors are going to be heavily used with the Document Object Model
// Read JavaScript.info's Function page http://javascript.info/
// Read JavaScript.info's Scope and Closure page https://javascript.info/closure
// Read Eloquent JavaScript's Higher Order Function page https://eloquentjavascript.net/05_higher_order.html
// The next couple of topics we will be seeing are (might be worth leaving in to them too):
// How browsers render pages
// The Document Object Model (DOM)
// DOM Access Methods
// DOM Traversal
// Creating DOM Nodes
// Events
// Animations

// JACK:

// function add(x, y) {
//     let res = x + y;
//     return res;
//   }

//   let result = add(10, 5); // call-site

//   function reduce(nums) {
//     // Turn the nums array into a single value by adding the items
//     // Create a variable (called total) that starts at the number 0
//     // Iterate through the nums array and add the current number to total
//     let total = 0;
//     for (let i = 0; i < nums.length; i += 1) {
//       let currentNum = nums[i];
//       total += currentNum;
//     }
//     console.log(total);
//   }

//   reduce([1, 2, 3]);
//   reduce([5, 6, 7, 8]);

//   let personOne = {
//     firstName: "David",
//     middleName: "Frederick",
//     lastName: "Attenborough",
//   };

//   let personTwo = {
//     firstName: "Jane",
//     lastName: "Goodall",
//   };

//   function printFullName(person) {
//     // let middle = "";
//     // if (person.middleName) {
//     //   middle = person.middleName;
//     // }
//     let middle = person.middleName || "";
//     let name = person.firstName + " " + middle + " " + person.lastName;
//     console.log(name);
//   }

//   printFullName(personOne);
//   printFullName(personTwo);
//   printFullName({
//     firstName: "Robert",
//     lastName: "Brown",
//   });
//   printFullName({
//     firstName: "Jack",
//     middleName: "E",
//     lastName: "Jeffress",
//   });

//   let choice = ['Rock', 'Paper', 'Scissor'];

//     function startGame() {
//         function randomNum(max) { return Math.floor(Math.random() * max) }

//         let i = randomNum(3);
//         let j = randomNum(3);
//         console.log('Player A is ' + choice[i] + ', Player B is ' + choice[j])
//         i == j ? console.log('DRAW, retry') : i - j == 1 || i - j == -2 ? console.log('Player A wins') : console.log('Player B wins')
//     }
//     startGame()

//     Robert Brown  20:12
// let game = {
//     score: 0,
//     start: function () {
//         console.log(“The game has started”);
//     },
//     scorePoint: function (num) {
//         this.score += num;
//         console.log(this.score);
//     },
// };
// game.scorePoint(10); // 10
// game.scorePoint(10); // 20
// game.scorePoint(10); // 30
// game.scorePoint(10); // 40
