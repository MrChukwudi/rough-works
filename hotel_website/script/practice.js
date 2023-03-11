// Write a function that takes the array of weekly weather, and prints out the average temperature for the week

/*let weather = [70, 34, 48, 20, 55, 76, 30];
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let totalWeather = 0;
let average = 0;
for (let i = 0; i < weather.length; i++) {
  totalWeather += weather[i];
  average = totalWeather / weather.length;
}

 console.log(average);
 */

// Output the lowest lowest temperature and the highest temperature in the array

/*function getSmallest(arr) {
  let smallest = weather[0];
  for (let i = 0; i < weather.length; i++) {
    if (weather[i] < smallest) {
      smallest = weather[i];
    }
  }
  return smallest;
}
console.log(getSmallest());
*/

// To find the largest temperature change in the array

/*let deltaTemp = Math.abs(weather[0] - weather[1]);
for (let i = 0; i < weather.length; i++)
  if (Math.abs(weather[i] - weather[i + 1]) > deltaTemp) {
    deltaTemp = Math.abs(weather[i] - weather[i + 1]);
  }

console.log(deltaTemp);*/

// Write a Function that accepts an array of numbers and returns the sum of the difference of all the item pair in the array

/*function sumOfDifference(arr) {
  let diffSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    diffSum += Math.abs(arr[i] - arr[i + 1]);
  }
  return diffSum;
}

console.log(sumOfDifference([]));
*/

/*function isTrue(arr, item) {
  let result = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === item) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

console.log(isTrue([1, 2, 3, 4, 5], 4));
console.log(isTrue([1, 2, 3, 4, 5], 9));
*/

// Write a function that check if an array is sorted or not.

/*function isSorted(arr) {
  let result = `the array is sorted hence I return ${true}`;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      result = `the array is not sorted hence I return ${false}`;
    } else {
    }
  }
  return result;
}

console.log(isSorted([1, 2, 3, 7, 6]));
*/

// Write a Function that searches for a value in an array.

// The Logic will be to go through the array and compare every item in the array with the value, and output a result when the value is found:

function contains(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(contains([1, 2, 3, 7, 6], 9));

/*function isTrue(arr, item) {
  let result = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === item) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

console.log(isTrue([1, 2, 3, 4, 5], 4));
console.log(isTrue([1, 2, 3, 4, 5], 9));
*/
