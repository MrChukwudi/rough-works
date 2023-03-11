let firstvariable = 100;
let secondvariable = 50;
let thirdvariable = "random string";
let sumNumnbers = firstvariable + secondvariable;

// firstvariable + secondvariable > 150
//   ? console.log("Nice")
//   : console.log("Not Nice");

/* if (firstvariable + secondvariable > 150) {
  console.log(`Nice`);
} else {
  console.log(`Not Nice`);
}
*/

/*let compared =
  typeof sumNumnbers === typeof thirdvariable
    ? `These are the same Data Types`
    : `These are not the same Data Types`;
*/

/*if (typeof sumNumnbers === typeof thirdvariable) {
  console.log(`These are the same Data Types`);
}
*/

let variable1 = 20;
let variable2 = 10;
let expression = variable1 > variable2;

console.log(expression);

if (expression) {
  console.log(`This Expression is true`);
} else if (variable1 > 22) {
  console.log(`This Expression is false and variable1 is greater than 0`);
} else {
  console.log(`This Expression is false and variable1 is 0 or less than 22`);
}
