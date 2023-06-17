"use strict";
// syntax - function keyword / function name / parameters / curly braces for the body

// function declaration
function mySum() {
  let x = 2 + 2;
  console.log(x);
}

mySum();

// function expression

const myFunc = function () {
  let x = 3 * 3;
  console.log(x);
};

myFunc();

// Parameters and arguments

function bestSum(param1, param2) {
  let x = param1 + param2;
  console.log(x);
}

bestSum(10, 10);
bestSum("My name is ", "Chris");
bestSum("I am only ", 23);

function theReturningSum(num1, num2, num3) {
  let sum = num1 + num2;
  let sumDivided = sum / num3;
  let help = "help";
  return help;
}
console.log(theReturningSum(30, 30, 3));
// console.log(theReturningSum(50, 50, 4));
// console.log(theReturningSum());
