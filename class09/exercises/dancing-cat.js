let img = document.querySelector("img");
let left = 0;
img.style.left = left + "px";

function catWalk() {
  left += 10;
  img.style.left = left + "px";
  if (left < window.innerWidth - 300) {
    setTimeout(catWalk, 50);
  }
}

//BONUS 1

// function catWalk() {
//   left += 10;
//   img.style.left = left + "px";
//   if (left < window.innerWidth) {
//     setTimeout(catWalk, 50);
//   } else {
//     left = -300;
//     catWalk();
//   }
// }

//BONUS 2

// let moonWalk = false;

// function catWalk() {
//   img.style.left = left + "px";
//   if (!moonWalk) {
//     left += 10;
//     if (left < window.innerWidth - 300) {
//       setTimeout(catWalk, 50);
//     } else {
//       moonWalk = true;
//       catWalk();
//     }
//   } else {
//     left -= 10;
//     if (left > 0) {
//       setTimeout(catWalk, 50);
//     } else {
//       moonWalk = false;
//       catWalk();
//     }
//   }
// }

//BONUS 3

// let dance = true;
// function catWalk() {
//   left += 10;
//   if (dance === true && left > window.innerWidth / 2 - 200) {
//     img.src = "https://media1.giphy.com/media/BK1EfIsdkKZMY/giphy.gif";
//     setTimeout(catDance, 10000);
//   } else {
//     img.style.left = left + "px";
//     if (left < window.innerWidth) {
//       setTimeout(catWalk, 50);
//     } else {
//       dance = true;
//       left = -300;
//       catWalk();
//     }
//   }
// }
// function catDance() {
//   dance = false;
//   img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
//   catWalk();
// }
catWalk();
