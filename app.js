"use strict";

let myName = "Rich";
console.log(myName);

// data types

let myPet = "Dog"; // this data type is a string

let myPetsAge = 7; // this data type is a number

let petDetails = "My pet is " + myPetsAge;
console.log(petDetails);

console.log(typeof petDetails);

let likesWalkies = false; // this data type is a boolean
console.log(likesWalkies);
console.log(typeof likesWalkies);

// There are also Arrays and Objects

// arethemetic operators - spelt incorrectly and i like it!

let addition = 7 + 7; // + is for addition
console.log(addition);

let subtraction = 5 - 2; // - is for subtraction
console.log(subtraction);

let multiplication = 10 * 10; // * is for multiplication
console.log(multiplication);

let division = 15 / 3; // / is for division
console.log(division);

let myNum = 5;
let thisNum = ++myNum; // ++ increments by one
console.log(thisNum);

let thatNum = --myNum; // decrements by one
console.log(thatNum);

// Comparison operators

// == eqaul to "7" == 7
// ===  equal value and equal type "7" === 7
// != not equal
// !== not equal value and not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

// conditional statement
// A conditional statement controls behaviour in javascript and determines whether or not a peice of code should run or not.

if (myNum === 5) {
  console.log("Bingo");
}

if (myNum == "five") {
  console.log("flamingo");
}

if (myNum === 6) {
  console.log("You will win 1 million dollars");
} else {
  console.log("If I had a million dollars to give away I wouldn't be teaching this course :(");
}

myNum = 3;

if (myNum === 10) {
  console.log("I'm on this course to win Tims 3d printed game");
} else if (myNum === 3) {
  console.log("I'm on this course because they told me there was Pizza");
} else {
  console.log("I'm on this course becasue I want to eat sleep code repeat!");
}

// To complete the lab you will need to know about a few built in methods
// prompt()
// document.write()

let userName = prompt("Hi User :) please tell me your name!");
console.log(userName);

const welcomeMsg = alert("Welcome to my page " + userName);

document.write("Hello " + userName + " thank you for visiting my site");

document.body.style.backgroundColor = userName;
