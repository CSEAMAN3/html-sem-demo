function yourName() {
  let user = prompt("What is your name?");
  return document.write(user);
}

function timeOfDay() {
  let time = prompt("What hour is it? (0 -23)");
  let location = prompt("What country are you in?");
  let message = "";

  if (time <= 11 || location === "england") {
    message = "Good Morning ";
  } else if (time <= 18 || location === "england") {
    message = "Good Afternoon";
  } else if (time < 24 || location === "england") {
    message = "Good Night";
  } else {
    message = "Yo, thats not a time dude!";
  }

  return document.write(message);
}

// let myPets = ["dog", "cat", "goldfish"];

// for loop
// initialization / condition / after thought

// for (let i = 0; i < myPets.length; i--) {
//   console.log("I love my pet " + myPets[i]);
// }

// while loop

// while(condition){
// statment
// }

// let n = 0;
// let x = 0;

// while (n < 3) {
//   n++;
//   x += n;
//   console.log(n);
//   console.log(x);

//   if (x >= 3) {
//     break;
//   }
// }

let answer;

while (answer != 7) {
  answer = prompt("Guess a number between 1 and 10");
  if (answer != 7) {
    alert("Try Again");
  } else {
    alert("Congratulations, You Win");
  }
}

function displayRating() {
  let output = "";
  let rating = prompt("On a scale of 1 - 5, how much do you rate chris's haircut?");
  for (let i = 0; i < rating; i++) {
    output += "<img class='star-img' src='images/star.png' alt='star rating'>";
  }
  return document.write(output);
}
