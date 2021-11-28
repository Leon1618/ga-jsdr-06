Exercises: Animation
The Cat Walk
Who needs Milan when you have JavaScript?

Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dancing Cats</title>
    <style>
      .dancing-cat {
        position: absolute;
      }
    </style>
  </head>
  <body>
    <img
      src="http://www.anniemation.com/clip_art/images/cat-walk.gif"
      class="dancing-cat"
    />
  </body>
</html>
Steps
Create a new Javascript file and link to it with a script tag at the bottom

Create a variable to store a reference to the img DOM Node

Change the style of the img to have a "left" position of "0px", so that it starts at the left hand side of the screen

Create a function called catWalk that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

Hint: setTimeout or setInterval might come in handy here!
Bonuses
Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). They should keep walking from left to right across the screen, forever and ever.

Bonus #2: When the cat reaches the right-hand side of the screen, make them move backwards instead. They should keep walking back and forth forever and ever. If you want to make it actually look like it is walking backwards - try setting the transform property to scaleX(-1)

Bonus #3: When the cat reaches the middle of the screen, replace the img's src with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img's src with the original image and have it continue the walk.

Bonus #4: Do whatever you want! Add more images, more animations, etc.




++++++++++++++++++++++++++++++++++



suguna parimi  19:46
Hi Jack and Stacey,

My Cat Walk Home Work******************


let image=document.querySelector("img");
let left=image.offsetLeft;
//console.log(left);
let max= window.innerWidth-300;
//console.log(max);
function catWalk()
{
    left+=10;
    image.style.left=left+"px";
    if(left<max)
    {
setTimeout(catWalk,50);
    } else {flipImage();
        walkBack();
}
}
let image1= document.querySelector("img");
function flipImage(){
    image1.style.transform = "rotateY(180deg)";
}
let image2=document.querySelector("img");
function flipBack() { 
    image2.style.transform="rotateX(0deg)";
}
catWalk();
//flipImage();
//flipImage();
right=0;
function walkBack(){
    //console.log(left);
    left-=50;
    image1.style.left=left+'px';
    if(left>0)
    {setTimeout(walkBack,250);}
    else {
        flipBack();
        catWalk();
    }
    }

+++++++++++++++++++++++++++++++++++
  
  Robert Brown  10:42
Dancing Cat
Untitled 
// Dancing Cat
// Create a variable to store a reference to the img DOM Node
let img = document.querySelector("img");
// Change the style of the img to have a "left" position of "0px", so that it starts at the left hand side of the screen
let left = 0
img.style.left = left + "px";
// Create a function called catWalk that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
// Hint: setTimeout or setInterval might come in handy here!
// function catWalk() {
//     left += 10;
//     img.style.left = left + "px";
//     if (left < (window.innerWidth - 300)){
//         setTimeout(catWalk, 50);
//     }
// }
// Bonuses
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). They should keep walking from left to right across the screen, forever and ever.
// function catWalk() {
//     left += 10;
//     img.style.left = left + "px";
//     if (left < (window.innerWidth)){
//         setTimeout(catWalk, 50);
//     } else {
//         left = -300;
//         catWalk();
//     }
// }
// Bonus #2: When the cat reaches the right-hand side of the screen, make them move backwards instead. They should keep walking back and forth forever and ever. If you want to make it actually look like it is walking backwards - try setting the transform property to scaleX(-1)
// let backwards = false;
// function catWalk() {
//     img.style.left = left + "px";
//     if (!backwards){
//         left += 10;
//         if (left < (window.innerWidth - 300)){
//             setTimeout(catWalk, 50);
//         } else {
//             backwards = true;
//             catWalk();
//         } 
//     } else {
//         left -= 10;
//         if (left > 0){
//             setTimeout(catWalk, 50);
//         } else {
//             backwards = false;
//             catWalk();
//         }
//     }
// }
// Bonus #3: When the cat reaches the middle of the screen, replace the img's src with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img's src with the original image and have it continue the walk.
let dance = true;
function catWalk() {
    left += 10;
    if (dance === true && left > (window.innerWidth /2) - 200) {
        img.src = "https://media.giphy.com/media/J4li4awWEbGStTIeOf/giphy.gif";
        setTimeout(danceCat, 10000);
    } else{
        img.style.left = left + "px";
        if (left < (window.innerWidth)){
            setTimeout(catWalk, 50);
        } else {
          dance = true;
          left = -300;
           catWalk();
        }
    }
    
}
function danceCat() {
    dance = false;
    img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    catWalk();
}
catWalk();

+++++++++++++++++++++++++++++++++++
  
  Benedict Lawrence  17:19
here is my cat
let cat = document.querySelector("img");

cat.style.left = "0px";
cat.style.top = window.innerHeight - 296 + "px";
let left = 0;
let walksRight = true;
let colorsAreCrazy = false;

function catWalk(cat) {
  if (walksRight === true) {
    catWalkRight();
  } else {
    catWalkLeft();
  }
}

function walkingRight() {
  left += 10;
  cat.style.left = left + "px";
  setTimeout(catWalk, 50);
}

function walkingLeft() {
  left -= 10;
  cat.style.left = left + "px";
  setTimeout(catWalk, 50);
}

function makeCatDance() {
  cat.src =
    "https://i.pinimg.com/originals/44/dc/9c/44dc9c3abf24f851d23e40e7774ebeec.gif";
  colorsAreCrazy = true;
  setTimeout(makeCatNormal, 5000);
}

function makeCatNormal() {
  cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  colorsAreCrazy = false;
  if (walksRight === true) {
    walkingRight();
  } else {
    walkingLeft();
  }
}

function catWalkRight() {
  let diff = window.innerWidth - 296 - left * 2;
  if (diff < 10 && diff > -10) {
    makeCatDance();
  } else if (cat.x < window.innerWidth) {
    walkingRight();
  } else {
    walksRight = false;
    cat.style.transform = "scaleX(-1)";
    catWalk();
  }
}

function catWalkLeft() {
  let diff = window.innerWidth - 296 - left * 2;
  if (diff < 10 && diff > -10) {
    makeCatDance();
  } else if (cat.x > 0) {
    walkingLeft();
  } else {
    walksRight = true;
    cat.style.transform = "scaleX(1)";
    catWalk();
  }
}

function crazyColors() {
  if (colorsAreCrazy === true) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor =
      "rgb(" + r + ", " + g + ", " + b + ")";
    setTimeout(crazyColors, 100);
  } else {
    document.body.style.backgroundColor = "white";
    setTimeout(crazyColors, 100);
  }
}

function angryCat() {
  document.body.style.backgroundImage =
    'url("https://memegenerator.net/img/instances/73433836.jpg")';
}

function normalCat() {
  document.body.style.backgroundImage = "";
}

cat.addEventListener("mouseenter", angryCat);
cat.addEventListener("mouseout", normalCat);

catWalk();
crazyColors();

++++++++++++++++++++



