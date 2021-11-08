Oct 28th (Thursday) - Lesson 4 (Arrays and Objects)

    Recording: https://generalassembly.zoom.us/rec/share/ZBpUKeA4xQFLOLYxrwCO--l12t-_80SelZHnaqF9z27yRI-_yj3XUI4ZezD1c9D4.amhYtgb77Xhpiz9c
    passcode: tM7+FHVr

    Code: https://github.com/ga-wolf/jsdr-06/tree/main/class_03/code

    The homework for tonight is:
    These array exercises: https://github.com/ga-wolf/jsdr-06/blob/main/class_03/exercises/00_arrays.md
    Read about arrays (https://javascript.info/array) and array methods (https://javascript.info/array-methods)
    Read about objects (https://javascript.info/object) and functions (https://javascript.info/function-basics)
    These object exercises (very difficult! This is extra but worth having a go at)(https://github.com/ga-wolf/jsdr-06/blob/main/class_03/exercises/01_objects.md)

    Next up: More on complex data structures (e.g. arrays that contain objects), and much more on functions, as well as scoping, hoisting and higher-order functions.

    https://exercism.org/
    https://www.youtube.com/user/codingmath
    https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw

    https://cdnjs.com/
    https://p5js.org/

    // Creation - Array literal

    let letters = ["a", "b", "c", "d", "e", "f", "g"];

    // Accessing Items - zero-based index

    let letterA = letters[0];
    let lastLetter = letters[letters.length - 1];

    // Reassigning Items

    letters[1] = "B";
    console.log(letters);

    // Looping
    // Iterate through letters

    for (let index = 0; index < letters.length; index += 1) {
    let currentLetter = letters[index];
    console.log(currentLetter);
    }

    // Common Methods

    let nums = [2, 3, 4];

    // If I wanted to add 5 to the end...
    nums.push(5);
    console.log(nums);

    // If I wanted to remove the last item...
    nums.pop();
    console.log(nums);

    // If I wanted to add 1 to the start...
    nums.unshift(1);
    console.log(nums);

    // If I wanted to remove the first item...
    nums.shift();
    console.log(nums);

    const bookSeries = {
        name: "In Search of Lost Time",
        author: "Marcel Proust",
        rating: 5,
        books: [
        "Swann's Way",
        "In the Shadow of Young Girls in Flower",
        "The Guermantes Way",
        "Sodom and Gomorrah",
        "The Prisoner",
        "The Fugitive",
        "Time Regained",
        ],
    };

    // Object Creation

    let emptyObject = {};

    console.log(emptyObject);

    let blueWhale = {
    name: "Blue Whale",
    weight: "150 tonnes",
    length: "26 metres",
    };

    let weight = blueWhale.weight;
    let l = blueWhale.length;

    console.log(l);

    let random = {
    num: 10,
    boo: false,
    arr: [],
    };

    console.log(random);

    const bookSeries = {
    name: "In Search of Lost Time",
    author: "Marcel Proust",
    rating: 5,
    books: [
        "Swann's Way",
        "In the Shadow of Young Girls in Flower",
        "The Guermantes Way",
        "Sodom and Gomorrah",
        "The Prisoner",
        "The Fugitive",
        "Time Regained",
    ],
    };

    // Log the number of books in bookSeries
    console.log(bookSeries.books.length);

    // Log the bookSeries' first book
    console.log(bookSeries.books[0]);

    // Log the book's rating
    console.log(bookSeries.rating);

    // Log the book's author
    console.log(bookSeries.author);

    Functions
    - Creating subprograms
    - Giving a name to a section of code
    - Making it reusable
    - Creating manageable and readable chunks

    Create the function

    Call (or execute) the function

EXERCISE LIST (4)

    // Exercises: Arrays
    // Working with Arrays
    // Create an empty array, and call it rainbowColors. Using Array methods:

    // Add "yellow" to the end
    // Add "green", "blue", "indigo", and "violet" to the end of the array
    // Bonus: Do this using one method call
    // Log out the length of the array
    // Log out the second item
    // Log out the last item (make this flexible/dynamic!)
    // Log out the index of the string "blue"
    // Bonus: Find out the difference between .slice and .splice
    // Create a copy of rainbowColors using an array method and call it twoColors. Essentially pull two colors out of the array (say, between the index of 1 and 3)
    // Starting with this array const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate). Note: This will have to be done with multiple method calls
    // Bonus: Work with arrays of arrays
    // Starting with this array const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
    // Access "inner array first item" and print it out
    // Print "third" by using a dynamic index (hint: maybe indexOf or includes would help!)
    // Bonus: Loop through the second inner array! Print out the first item, the second item, then the third item

    // let rainbowColors = [];

    // rainbowColors.push("orange"); // Add "orange" to the end of the array
    // console.log(rainbowColors);

    // rainbowColors.unshift("red"); // Add "red" to the start of the array
    // console.log(rainbowColors);

    // rainbowColors.push("yellow"); // Add "yellow" to the end
    // console.log(rainbowColors);

    // rainbowColors.push("green", "blue", "indigo", "violet"); // Add "g, b, i, v" to the end
    // console.log(rainbowColors);

    // console.log(rainbowColors.length); //Log out the length of the array
    // console.log(rainbowColors[1]); //Log out the second item
    // console.log(rainbowColors[rainbowColors.length - 1]); //Log out the last item (make this flexible/dynam)

    // console.log(rainbowColors.indexOf("blue"));

    // let twoColors = rainbowColors.slice(0, rainbowColors.length + 1);
    // console.log(twoColors);

    // twoColors.splice(1, 3);
    // console.log(twoColors);

    // const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

    // const arrOfArrs = [
    //   ["inner array first item", "inner array second item"],
    //   ["first", "second", "third"],
    // ];

    // Your top choices
    // Create an array to hold your top five choices of something (dogs, books, presidents, whatever you want).

    // const topFive = ["Lamborghini", "Ferrari", "Bugatti", "Porsche", "Pagani"];
    // console.log(topFive);

    // for (let i = 0; i <= topFive.length - 1; i += 1) {
    // console.log(`My #${i + 1} choice is ${topFive[i]}`);
    // }

    // Bonus: Change it to log "My 1st choice", "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

    // const rightSuffix = ["st", "nd", "rd", "th", "th"];

    // for (let i = 0; i <= topFive.length - 1; i++) {
    // console.log(`My ${i + 1}${rightSuffix[i]} choice is ${topFive[i]}.`);
    // }

The Reading List
Keep track of which books you have read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you have read it yet).
Iterate through that array of books
For each book, log the book title and book author like so: "'Sapiens', by Yuval Noah Harari".
Now use an if/else statement to change the output depending on whether you read it yet or not.
If you have read it, log a string like 'You have already read "Sapiens", by Yuval Noah Harari'
If not, log a string like 'You still need to read "A Life on Our Planet", by David Attenborough.'"

let books = [
  {
    title: "The Witch of Portobello",
    author: "Paulo Coelho",
    alreadyRead: true,
  },
  { title: "Amnesia", author: "Peter Carey", alreadyRead: true },
  { title: "The Confession", author: "Jessie Burton", alreadyRead: false },
  { title: "Bad Science", author: "Ben Goldacre", alreadyRead: false },
  {
    title: "Good News for a Change",
    author: "David Suzuki",
    alreadyRead: false,
  },
];

for (let i = 0; i < books.length; i++) {
  let currentBook = books[i];
  if (currentBook.alreadyRead === true) {
    console.log(
      'You have already read "' +
        currentBook.title +
        '", by ' +
        currentBook.author
    );
  } else if (currentBook.alreadyRead === false) {
    console.log(
      'You still need to read "' +
        currentBook.title +
        '", by ' +
        currentBook.author
    );
  }
}

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for a title (a string), a number of servings (call it numOfServings), and ingredients (an array of strings).

On separate lines log the recipe information so it looks like this:

Ginger, Apple and Banana Smoothie

Serves: 2

Ingredients:

- 500ml Milk
- 2/3 cups of vanilla protein powder
- 2 tbs rolled oats
- Pinch of cinnamon
- 2 cups of baby spinach leaves
- 2 frozen bananas
- 2 roughly chopped apples
- 1/2 avocado
- 2 tsp fresh ginger
- 6 ice cubes
Note: That is actually a very nice smoothie

let recipeCard = {
  title: "Ginger, Apple and Banana Smoothie",
  numOfServings: 2,
  ingredients: [
    " 500ml Milk",
    " 2/3 cups of vanilla protein powder",
    " 2 tbs rolled oats",
    " Pinch of cinnamon",
    " 2 cups of baby spinach leaves",
    " 2 frozen bananas",
    " 2 roughly chopped apples",
    " 1/2 avocado",
    " 2 tsp fresh ginger",
    " 6 ice cubes",
  ],
};

console.log(recipeCard);

console.log(recipeCard.title);
console.log("Serves: " + recipeCard.numOfServings);
console.log("Ingredients: ");
for (i = 0; i < recipeCard.ingredients.length; i++) {
    console.log(`- ${recipeCard.ingredients[i]}`);
    }

The Movie Database
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), director (a string) and stars (an array of strings).
Print out the movie information like so: "'The Life Aquatic' lasts for 118 minutes, and was directed by Wes Anderson. Stars: Bill Murray, Cate Blanchett, Anjelica Huston, Jeff Goldblum and Willem Dafoe."
Maybe the join method will be helpful

let movie = {
  title: "Jurassic Park",
  duration: 207,
  director: "Steven Spielberg",
  stars: [
    "Bill Murray",
    "Cate Blanchett",
    "Anjelica Huston",
    "Jeff Goldblum",
    "Willem Dafoe",
  ],
};

console.log(movie.title);
console.log(
  movie.title +
    " lasts for " +
    movie.duration +
    " minutes, and was directed by " +
    movie.director +
    ". Stars: " +
    movie.stars
);

    // Break
    console.log("\nBOOKS");

    // Create an array of objects, where each object describes a book and has properties for the title (a string),
    // author (a string), and alreadyRead (a boolean indicating if you have read it yet).
    let books = [
    { title: "Earth Unaware", author: "Orson Scott Card", alreadyRead: true },
    { title: "Earth Afire", author: "Orson Scott Card", alreadyRead: true },
    { title: "Earth Awakens", author: "Orson Scott Card", alreadyRead: true },
    { title: "The Swarm", author: "Orson Scott Card", alreadyRead: true },
    { title: "The Hive", author: "Orson Scott Card", alreadyRead: true },
    { title: "The Queens", author: "Orson Scott Card", alreadyRead: false },
    ];
    // Iterate through that array of books
    // For each book, log the book title and book author like so: "'Sapiens', by Yuval Noah Harari".

    for (let i = 0; i < books.length; i += 1) {
    let currentBook = books[i];
    console.log(currentBook.title + ", by " + currentBook.author);
    }

    // Break
    console.log("\nBOOK TRACKER");
    // Now use an if/else statement to change the output depending on whether you read it yet or not.
    // If you have read it, log a string like 'You have already read "Sapiens", by Yuval Noah Harari'
    // If not, log a string like 'You still need to read "A Life on Our Planet", by David Attenborough.'"

    for (let i = 0; i < books.length; i += 1) {
    let currentBook = books[i]; // this declaration can't be inside the IF statement as it would then be block scoped
    if (books[i].alreadyRead === true) {
        console.log(`You have read ${currentBook.title}, by ${currentBook.author}`);
    } else {
        console.log(
        `You haven't read ${currentBook.title}, by ${currentBook.author}`
        );
    }
    }

    // Break
    console.log("\nRECIPE CARD");

    //The Recipe Card
    // Never forget another recipe!

    // Create an object to hold information on your favorite recipe. It should have properties for a title (a string), a number of servings (call it numOfServings), and ingredients (an array of strings).
    let recipe = {
    title: "Ginger, Apple and Banana Smoothie",
    numServings: 2,
    ingredients: [
        "5 oz. unsweetened nut or seed milk",
        "5 oz. brewed coffee, cooled",
        "1/2 frozen banana ",
        "1 cup full-fat greek yogurt (preferably grass-fed) OR 1 serving vanilla protein powder",
        "1 Tbsp. chia seeds",
        "1-2 Tbsp. peanut butter",
        "1 tsp. cinnamon",
        "1 tsp. vanilla extract",
        "pinch of sea salt",
    ],
    };

    // On separate lines log the recipe information so it looks like this:
    console.log(recipe.title);
    console.log(`Serves: ${recipe.numServings}`);
    console.log(`Ingredients:`);
    for (i = 0; i < recipe.ingredients.length; i++) {
    console.log(`- ${recipe.ingredients[i]}`);
    }

    // Break
    console.log("\nTINY MOVIE DATABASE / TMDB");
    // Create an object to store the following information about your favorite movie: title (a string), duration (a number), director (a string) and stars (an array of strings).

    let favMovie = {
    title: "Interstellar",
    runtime: 169,
    director: "Christopher Nolan",
    stars: [
        "Matthew McConaughey",
        "Anne Hathaway",
        "Michael Caine",
        "Casey Affleck",
        "Jessica Chastain",
        "Matt Damon",
    ],
    };

    // Print out the movie information like so: "'The Life Aquatic' lasts for 118 minutes, and was directed by Wes Anderson. Stars: Bill Murray, Cate Blanchett, Anjelica Huston, Jeff Goldblum and Willem Dafoe."
    let stars = favMovie.stars.slice(0, favMovie.stars.length - 1);
    stars = stars.join(", ");
    let lastStar = favMovie.stars.at(-1);

    console.log(
    `'${favMovie.title}' runs for ${favMovie.runtime} minutes, and was directed by ${favMovie.director}. Staring: ${stars} and ${lastStar}`
    );

    console.log("ARRAY METHODS");

    // Working with Arrays
    // Create an empty array, and call it rainbowColors. Using Array methods:
    let rainbowColors = [];

    // Add "orange" to the end of the array
    rainbowColors.push("orange");

    // Add "red" to the start of the array
    rainbowColors.unshift("red");

    // Add "yellow" to the end
    rainbowColors.push("yellow");

    // Add "green", "blue", "indigo", and "violet" to the end of the array

    // Bonus: Do this using one method call
    rainbowColors.push("green", "blue", "indigo", "violet");
    console.log(rainbowColors);

    // Log out the length of the array
    console.log(rainbowColors.length);

    // Log out the second item
    console.log(rainbowColors[1]);

    // Log out the last item (make this flexible/dynamic!)
    console.log(rainbowColors[rainbowColors.length - 1]);

    // Log out the index of the string "blue"
    console.log(rainbowColors.indexOf("blue"));

    // Bonus: Splice and Slice
    // SPLICE can CUT the items from the array. by passing it a start point and the amount of index you wish to slice.
    let twoColors = rainbowColors.splice(2, 2);
    console.log(twoColors); // Prints "yellow" and "green" from the rainbowColors array
    console.log(rainbowColors); // You can see here that "yellow" and "green" have been removed from the rainbowColors array

    // You can also add Items to an array at a specific index without deleting any items
    // Add back in "yellow" and "green" to rainbowColors.
    rainbowColors.splice(2, 0, twoColors[0], twoColors[1]);
    console.log(rainbowColors);

    // Now, SLICE out a new threeColors array using the slice method
    let threeColors = rainbowColors.slice(1, 4);
    console.log(threeColors);

    // Break
    console.log("   ");
    console.log("DESTRUCTIVE REMOVAL ARRAYS");

    // Destructively remove the duplicates using slice or splice (whichever one is appropriate). Note: This will have to be done with multiple method calls
    const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
    nums.splice(2, 2);
    nums.splice(4, 1);
    console.log(nums);

    // Break
    console.log("   ");
    console.log("ARRAYS - COMPLEX & LOOPS");

    // Bonus: Work with Arrays of Arrays
    const arrOfArrs = [
    ["inner array first item", "inner array second item"],
    ["first", "second", "third"],
    ];

    // Access "inner array first item" and print it out
    console.log(arrOfArrs[0][0]);

    //Print "third" by using a dynamic index (hint: maybe indexOf or includes would help!)
    for (let i = 0; i < arrOfArrs.length; i++) {
    for (let ii = 0; ii < arrOfArrs[i].length; ii++) {
        if (arrOfArrs[i][ii] === arrOfArrs[1][2]) {
        console.log(arrOfArrs[1][2]);
        }
    }
    }

    // JACK/STACEY The above works... But my oh my is it convoluted. I could have just console logged (arrOfArrs[1][2]) ?

    // Break
    console.log("   ");
    console.log("ARRAYS - LOOPS BONUS");

    // Bonus: Loop through the second inner array! Print out the first item, the second item, then the third item
    // sets up the for loop to iterate through the outer array
    for (let i = 0; i <= arrOfArrs.length - 1; i++) {
    // sets up the for loop for the inner arrays
    for (let ii = 0; ii < arrOfArrs[i].length; ii++) {
        // checks that the 2nd index in outer array is true
        if (i === 1) {
        // logs each item in the 2nd index inner array
        console.log(arrOfArrs[i][ii]);
        }
    }
    }

    // Break
    console.log("   ");
    console.log("TOP CHOICES");

    // Top Choices - I chose books
    let favBooks = [
    "mindset",
    "atomic habits",
    "essentialism",
    "a breif history of time",
    "deepwork",
    ];

    let suffix = ["st", "nd", "rd", "th", "th"];

    for (let i = 0; i < favBooks.length; i++) {
    console.log(`my ${i + 1}${suffix[i]} choice is ${favBooks[i]}`);
    }
    // note to self, suffix[i] makes sense.
    // As it is just an index number that is gained from the for loop on prev line

    // Exercise: Objects

    // The Reading List

    // Keeps track of which books you have read and which books you want to read!

    // Create an array of objects which describes books: title, author, haveRead.
    // [{title: "Book 1 Title", author: The books author, haveRead: true/false},
    // {title: "Book 2 Title", author: The books author, haveRead: true/false},]
    let readingList = [
        {title: "Divergent", author: "Veronica Roth", haveRead: true},
        {title: "Insurgent", author: "Veronica Roth", haveRead: true},
        {title: "The Two Towers", author: "J. R. R. Tolkien", haveRead: false},
        {title: "Allegiant", author: "Veronica Roth", haveRead: true},
        {title: "The Fellowship of the Ring", author: "J. R. R. Tolkien", haveRead: false},
        {title: "Four", author: "Veronica Roth",haveRead: true},
        {title: "The Return of the King",author: "J. R. R. Tolkien", haveRead: false},
    ];

    for (i in readingList) {
        if (readingList[i].haveRead){
            console.log (`You have already read ${readingList[i].title}, by ${readingList[i].author}`);
        } else {
            console.log (`You still need to read ${readingList[i].title}, by ${readingList[i].author}`);
        }
    }

    // The Recipe Card

    // create an object that holds recipe information: title, number of serves, ingredients

    let recipeCard = {
        title: "Penang Curry Chicken",
        numOfServings: 6,
        ingredients: [
            "1kg of Diced Chicken Breast",
            "3/4 Jar of Valcom Panaeng Curry Paste - adjust for taste",
            "300ml Coconut Cream",
            "500ml Cream",
            "1 packet of Cream of Chicken soup powder",
            "4 cups of Rice"
        ],
        directions: [
            "Start Rice cooking as per packet directions",
            "Lightly oil large pan",
            "Cook Diced Chicken Breast",
            "Drain excess water",
            "Stir in Panang curry paste",
            "Stir in Coconut Cream & Cream",
            "Add Cream of Chicken powdered soup and stir until dissolved",
            "Reduce heat and stir occasionally until desired sauce thickness has been achieved",
            "serve with Rice",
        ]
    }

    let ingredentList = ``;
    let cookingDirections = ``;

    for (i in recipeCard.ingredients) {
        ingredentList = ingredentList + `- ${recipeCard.ingredients[i]} \n`;
    }

    for (i in recipeCard.directions) {
        cookingDirections = cookingDirections + `${i}. ${recipeCard.directions[i]} \n\n`;
    }
    console.log(`${recipeCard.title}

    Serves: ${recipeCard.numOfServings}

    Ingredients:

    ${ingredentList}

    Directions:

    ${cookingDirections}`);

    // The Movie Database

    let favMovie = {
        title: "Howl's Moving Castle",
        duration: 119,
        director: "Hayao Miyazaki",
        stars: [
            "Chieko Baisho",
            "Takuya Kimura",
            "Tatsuya Gashuin",
        ]
    };

    let starsList = favMovie.stars.slice(0,-1).join(", ")+" and "+favMovie.stars.slice(-1);
    console.log(`${favMovie.title} last for ${favMovie.duration} minutes, and was directed by ${favMovie.director}. Stars: ${starsList}`);

    // The Reading List
    let readList = [
    {
      title: "My Story",
      author: "Haden",
      alreadyRead: true,
    },
    {
      title: "Harry Potter",
      author: "J.K.Rowing",
      alreadyRead: false,
    },
    {
      title: "WWI History",
      author: "Mike",
      alreadyRead: false,
    },
  ];
  // Iterate through that array of books
  readList.forEach((book) => {
    console.log(`${book.title}, by ${book.author}.`);
  });
  // use an if/else statement to change the output
  readList.forEach((book) => {
    if (book.alreadyRead == true) {
      console.log(`You have already read "${book.title}", by ${book.author}.`);
    } else {
      console.log(`You still need to read "${book.title}", by ${book.author}.`);
    }
  });
  //The Recipe Card
  let recipe = {
    title: "Ginger, Apple and Banana Smoothie",
    serves: 2,
    ingredients: [
      "500ml Milk",
      "2/3 cups of vanilla protein powder",
      "2 tbs rolled oats",
      "Pinch of cinnamon",
      "2 cups of baby spinach leaves",
      "2 frozen bananas",
      "2 roughly chopped apples",
      "1/2 avocado",
      "2 tsp fresh ginger",
    ],
    };
    // console.log(
    //   `${recipe.title}\n\nServes: ${recipe.serves}\n\nIngredients:\n\n-${recipe.ingredients[0]}\n-${recipe.ingredients[1]}\n-${recipe.ingredients[2]}\n  `
    // );
    console.log(
        `${recipe.title}\n\nServes: ${
        recipe.serves
        }\n\nIngredients:\n\n${recipe.ingredients
        .map((item) => `-${item}\n`)
        .join("")}`
    );
    // The Movie Database
    let movie = {
        title: "Midway",
        duration: 138,
        director: "Roland Emmerich",
        cast: ["Woody Harrelson", "Luke Evans", "Ed Skrein"],
    };
    console.log(
        `${movie.title} lasts for ${movie.duration} minutes, and was directed by ${
        movie.director
        }. Stars: ${movie.cast.slice(0, -1).join(", ")} and ${movie.cast.slice(-1)}.`
    );

    // working with arrays
        let rainbowColors = [];
    rainbowColors.push("orange");
    console.log(rainbowColors);
    rainbowColors.unshift("red");
    console.log(rainbowColors);
    rainbowColors.push("yellow");
    console.log(rainbowColors);
    rainbowColors.push("green", "blue", "indigo", "violet");
    console.log(rainbowColors);
    console.log(rainbowColors.length);
    console.log(rainbowColors[1]);
    console.log(rainbowColors[rainbowColors.length - 1]);
    console.log(rainbowColors.indexOf("blue"));
    // Bonus: Find out the difference between .slice and .splice
    let twoColors = Array.from(rainbowColors);
    console.log(twoColors);
    twoColors.splice(1, 2);
    console.log(twoColors);
    // remove duplicate elements
    const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
    nums.forEach(function (item, index, array) {
    if (array.indexOf(item) !== array.lastIndexOf(item)) {
        array.splice(index, 1);
    }
    });
    console.log(nums);
    // Bonus: Work with arrays of arra
    const arrOfArrs = [
    ["inner array first item", "inner array second item"],
    ["first", "second", "third"],
    ];
    // Access "inner array first item" and print it out
    console.log(arrOfArrs[0][0]);
    //Print "third" by using a dynamic index (hint: maybe indexOf or includes would help!)
    console.log(arrOfArrs[1][arrOfArrs[1].length - 1]);
    // Bonus: Loop through the second inner array! Print out the first item, the second item, then the third item
    arrOfArrs[1].forEach((item, index) => {
    console.log(`${item} is at index ${index}`);
    });
    // Create an array to hold your top five choices of something (dogs, books, presidents, whatever you want).
    const myTopChoices = ["green", "blue", "yellow", "white", "gray"];
    myTopChoices.forEach((item, index) => {
    console.log(`My #${index + 1} choice is ${item}.`);
    });
    // add suffix to number
    // 1. add a function to assign suffix to number
    function addSuffix(number) {
    switch (number % 10) {
        case 1:
        return number + "st";
        case 2:
        return number + "nd";
        case 3:
        return number + "rd";
        default:
        return number + "th";
    }
    }
    // 2. apply the funcion
    myTopChoices.forEach((item, index) => {
    console.log(`My ${addSuffix(index + 1)} choice is ${item}.`);
    });
