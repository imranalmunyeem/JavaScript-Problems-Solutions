// program to check pass or fail

let marks = prompt('Enter your marks :');

// check the condition
let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);


// check the age to determine the eligibility to vote
let age = 15;
let result2;

if (age >= 18) {
      result2 = "You are eligible to vote.";
} else {
      result2 = "You are not eligible to vote yet.";
}

console.log(result2);

// ternary operator to check the eligibility to vote
let age = 15;
let result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);


// program to check if number is positive, negative or zero
let a = 3;
let result3 = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result3}.`);