// Nov 9th (Tuesday) - Lesson 7


All of tonight's content (the slides, code and homework exercises) has been uploaded to GitHub and can be found here (https://github.com/ga-wolf/jsdr-06/blob/main/class_06/code/dom/index.html).
The Zoom recording can be found here and the the password is 3zVwvJ%%

Homework
There are some exercises (they will be quite tough!):
The DOM Detective
Replace the Logo
I'd also suggest you go through as much of JavaScript.info's Browser: Documents, Events and Interfaces section as you can.
If you don't feel comfortable with your CSS selectors, it will be worth reviewing them too. FlukeOut does a good job of covering them!
What's next?
More DOM
DOM Access Methods
DOM Traversal
Events
Animations

function add(x, y = 0) {
  let result = x + y;
  return result;
}

let res = add(5, 10); // Call-site

// Scope and Hoisting
// JS uses lexical scope
// Two types of scoping
//  - Function Scope (var uses this)
//  - Block Scope (let and const use this)

// if (false) {
//   let test = true;
// }

// console.log(test);

// console.log(anotherTest);
// TEMPORAL DEAD ZONE
const anotherTest = true;

// let and const prevent redeclarations
let reallyImportant = true;
// let reallyImportant = false;

// console.log(reallyImportant);

// let global = "GLOBAL";

// function newScope() {
//   let local = "LOCAL";

//   if (true) {
//     let superLocal = "SUPER LOCAL";
//   }

//   console.log(superLocal);
// }

// newScope();

for (let i = 1; i <= 5; i += 1) {
  // console.log(i);
}

console.log(i);

Jack Jeffress  18:58
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Intro</title>
  </head>
  <body>
    <h1>Hello World</h1>

    <button>Click Me</button>

    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <a href="https://ga.co">Link to GA</a>
  </body>
</html>

Jack Jeffress  19:23
<!DOCTYPE html>
<html>
  <head>
    <title>Some website</title>
  </head>
  <body>
    <div class="container">
      <h1>Some heading</h1>
      <a href="http://www.google.com">Link</a>
    </div>
    <ul>
      <li>A list item</li>
    </ul>
  </body>
</html>

Jack Jeffress  21:06
// DOM Access Methods

// document.querySelector("CSS SELECTOR");
// Return the first matching DOM Node or null

let heading = document.querySelector("h1");
let list = document.querySelector("ul");
let button = document.querySelector("button");
let aTag = document.querySelector("a");

// document.querySelectorAll("CSS SELECTOR");
// Return a NodeList containing all matching DOM Nodes
// NodeList is very similar to an Array

let allParagraphs = document.querySelectorAll("p");
let listItems = document.querySelectorAll("li");

// Working with individual DOM Nodes

// Access the current text or HTML

// Using .innerHTML
console.log(heading.innerHTML);
console.log(button.innerHTML);

// Using .innerText
console.log(heading.innerText);
console.log(aTag.innerText);

// Get the current value of an attribute
// domNode.getAttribute("attrName");

let currentHref = aTag.getAttribute("href");
console.log(currentHref);

let script = document.querySelector("script");
let scriptSrc = script.getAttribute("src");

console.clear();

// Changing the innerText or innerHTML

heading.innerHTML = "This was changed by JS";

button.innerText = "CLICK ME!!";

let paragraph = document.querySelector("p");
console.log(paragraph.innerHTML);

paragraph.innerHTML = "This was <b>changed</b> by JS";

// Create a new variable called anchor
let anchor = document.querySelector("a");

// Change the innerHTML to be "A link to Google"
anchor.innerHTML = "A link to Google";

// Log the current HREF
let href = anchor.getAttribute("href");
console.log(href);

// Change the href attribute

anchor.setAttribute("href", "https://google.com");

// Get access to an input's value
let input = document.querySelector("input");

console.log(input.value);

// Update the input's value

input.value = "Written by JS";

// Access the current CSS

let mainHeading = document.querySelector("h1");
let headingStyles = getComputedStyle(mainHeading);

let currentFontSize = headingStyles.fontSize;
console.log(currentFontSize);

// Change the current CSS

heading.style.color = "blue";
heading.style.fontSize = "5px";

// Events in JavaScript
// 1. Target DOM Node
// 2. Event Type
// 3. Callback Function

let myButton = document.querySelector("button");

let eventType = "click";

function onClick() {
  console.log("The button was clicked");
}

// Creating an event listener (which binds those 3 things together)
myButton.addEventListener(eventType, onClick);

