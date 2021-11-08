// The Reading List
// Keep track of which books you have read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you have read it yet).
// Iterate through that array of books
// For each book, log the book title and book author like so: "'Sapiens', by Yuval Noah Harari".
// Now use an if/else statement to change the output depending on whether you read it yet or not.
// If you have read it, log a string like 'You have already read "Sapiens", by Yuval Noah Harari'
// If not, log a string like 'You still need to read "A Life on Our Planet", by David Attenborough.'"

// let books = [
//   {
//     title: "The Witch of Portobello",
//     author: "Paulo Coelho",
//     alreadyRead: true,
//   },
//   { title: "Amnesia", author: "Peter Carey", alreadyRead: true },
//   { title: "The Confession", author: "Jessie Burton", alreadyRead: false },
//   { title: "Bad Science", author: "Ben Goldacre", alreadyRead: false },
//   {
//     title: "Good News for a Change",
//     author: "David Suzuki",
//     alreadyRead: false,
//   },
// ];

// for (let i = 0; i < books.length; i++) {
//   let currentBook = books[i];
//   if (currentBook.alreadyRead === true) {
//     console.log(
//       'You have already read "' +
//         currentBook.title +
//         '", by ' +
//         currentBook.author
//     );
//   } else if (currentBook.alreadyRead === false) {
//     console.log(
//       'You still need to read "' +
//         currentBook.title +
//         '", by ' +
//         currentBook.author
//     );
//   }
// }

// The Recipe Card
// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for a title (a string), a number of servings (call it numOfServings), and ingredients (an array of strings).

// On separate lines log the recipe information so it looks like this:

// Ginger, Apple and Banana Smoothie

// Serves: 2

// Ingredients:

// - 500ml Milk
// - 2/3 cups of vanilla protein powder
// - 2 tbs rolled oats
// - Pinch of cinnamon
// - 2 cups of baby spinach leaves
// - 2 frozen bananas
// - 2 roughly chopped apples
// - 1/2 avocado
// - 2 tsp fresh ginger
// - 6 ice cubes
// Note: That is actually a very nice smoothie

// let recipeCard = {
//   title: "Ginger, Apple and Banana Smoothie",
//   numOfServings: 2,
//   ingredients: [
//     " 500ml Milk",
//     " 2/3 cups of vanilla protein powder",
//     " 2 tbs rolled oats",
//     " Pinch of cinnamon",
//     " 2 cups of baby spinach leaves",
//     " 2 frozen bananas",
//     " 2 roughly chopped apples",
//     " 1/2 avocado",
//     " 2 tsp fresh ginger",
//     " 6 ice cubes",
//   ],
// };

// console.log(recipeCard);

// console.log(recipeCard.title);
// console.log("Serves: " + recipeCard.numOfServings);
// console.log("Ingredients: ");
// for (i = 0; i < recipeCard.ingredients.length; i++) {
//     console.log(`- ${recipeCard.ingredients[i]}`);
//     }

// The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), director (a string) and stars (an array of strings).
// Print out the movie information like so: "'The Life Aquatic' lasts for 118 minutes, and was directed by Wes Anderson. Stars: Bill Murray, Cate Blanchett, Anjelica Huston, Jeff Goldblum and Willem Dafoe."
// Maybe the join method will be helpful

// let movie = {
//   title: "Jurassic Park",
//   duration: 207,
//   director: "Steven Spielberg",
//   stars: [
//     "Bill Murray",
//     "Cate Blanchett",
//     "Anjelica Huston",
//     "Jeff Goldblum",
//     "Willem Dafoe",
//   ],
// };

// console.log(movie.title);
// console.log(
//   movie.title +
//     " lasts for " +
//     movie.duration +
//     " minutes, and was directed by " +
//     movie.director +
//     ". Stars: " +
//     movie.stars
// );
