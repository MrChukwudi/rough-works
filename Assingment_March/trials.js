// Challenge 1 : Something is wrong with this code. Fix it and make it work
//optimal solution that ensures users imputs numbers as variables

/*function multiply(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    console.log(`Thank you for passing in numbers as Integers`);
  } else {
    console.log("Make sure the arguments are numbers");
  }
  return a * b;
}

// console.log(multiply(10, "come"));
console.log(multiply(10, 2));
*/

//Challenge 2 : Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
/*function takeInteger(balablu) {
  if (balablu % 2 === 0) {
    console.log(`Yea my Gee, this is an even Number`);
  } else {
    console.log(`Taa! get out, this is not an even number`);
  }
  return "I am Finished";
}
*/

// try this in Arrow function and tenary operator:
/*let takeInteger = (num) => {
  return num % 2 === 0 ? "even Number" : "odd number";
};

// takeInteger("asiwaju");
// takeInteger(45);
// takeInteger(40);
console.log(takeInteger(3));
takeInteger(3);
*/

/*Challenge 3: You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20
  Note: if there is nothing to sum, the sum is default to 0.*/

/*let sumPositive = (arr) => {
  let positiveArr = 0;
  for (let i in arr) {
    if (arr[i] > 0) {
      positiveArr += arr[i];
    }
  }
  return positiveArr;
};

console.log(sumPositive([1, -4, 7, 12]));
*/

/* Challenge 4 : It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

/*function reduceString(str) {
  let arr = str.split("");
  arr.pop();
  arr.shift();
  return arr.join("");
}

console.log(reduceString("Metaphoric"));
*/

/*Challenge 5 In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
  makeNegative(1);    // return -1
  makeNegative(-5);   // return -5
  makeNegative(0);    // return 0
  makeNegative(0.12); // return -0.12
  */

/*
function makeNegative(num) {
  if (num > 0) {
    console.log(num * -1);
  } else {
    console.log(num * 1);
  }
  return `Your num is ${num}`;
}

console.log(makeNegative(3));
console.log(makeNegative(-3));
console.log(makeNegative(0));
console.log(makeNegative(0.12));
*/

/* Challenge 6 : Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
  Examples (input -> output)
  6, "I"     -> "IIIIII"
  5, "Hello" -> "HelloHelloHelloHelloHello"*/

/*
  function multiplystr(n, strong) {
  let mystr;
  for (let i = 0; i < n; i++) {
    mystr = mystr + strong;
  }
  return mystr;
}

console.log(multiplystr(3, "Hello"));
// console.log("Hello" + "Hello");
*/

/*Challenge 7: Simple, remove the spaces from the string, then return the resultant string.*/

/*
function simple(strim) {
  let myArr = strim.split(" ");
  return myArr.join("");
}
console.log(simple("this, is how I love you"));
*/

/*Challenge 8: Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
  For example (Input -> Output):
  2 -> 3 (1 + 2)
  8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)*/

/*
function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(6));
*/

/*Challenge 9 :Given an array of integers your solution should find the smallest integer.
  For example:
  Given [34, 15, 88, 2] your solution will return 2
  Given [34, -345, -1, 100] your solution will return -345
  You can assume, for the purpose of this kata, that the supplied array will not be empty.*/

/* function findSmallest(arr) {
 return Math.min(...arr);
}
*/

/*
function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    } else {
      smallest = smallest;
    }
  }
  return smallest;
}

console.log(findSmallest([0]));
*/

/* Challenge 10: Complete the solution so that it reverses the string passed into it.
  'world'  =>  'dlrow'
  'word'   =>  'drow'*/

/*
function reversedStr(str) {
  // Step 1: convert my string to an array so that I can reverse it:
  let myArr = str.split("");
  let reversedArr = myArr.reverse();
  return reversedArr.join("");
}

console.log(reversedStr("Bennie Mandela"));

*/

/* Challenge 11: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
  For example,
  [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
  The correct answer would be 17.
  Hint: Don't forget to check for bad values like null/undefined */

/*function count(arr, item) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      counter++;
    }
  }
  return counter;
}

console.log(
  count(
    [
      "Obi",
      "Obi",
      "Obi",
      "tinubu",
      "Obi",
      "Obi",
      "Obi",
      "Obi",
      "Obi",
      "Sowore",
      "Obi",
      "tinubu",
      "Obi",
      "Atiku",
      "Kwankwaso",
      "Obi",
      "Obi",
      "Obi",
      "Obi",
      "Obi",
      "Atiku",
      "Atiku",
      "Obi",
      "Obi",
    ],
    "Obi"
  )
);

*/

let mine = document.getElementById("me");

mine.textContent = "Go Gilr";
