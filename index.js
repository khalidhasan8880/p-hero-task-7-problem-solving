// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const string = 'hello word';
let reversedString = '';
for (let i = string.length -1; i >= 0; i--) {
    const letter = string[i];
    reversedString += letter;
}
console.log(reversedString);
// ------------------------------------
// ------------------------------------

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfPositiveNumbers = (numbers) =>{
    let sum = 0;
    for (const number of numbers) {
        if (number > 0) {
            sum += number
        }
    }
    console.log(sum);
    return sum
}

sumOfPositiveNumbers([2, -5, 10, -3, 7])
// ------------------------------------
// ------------------------------------

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const arr = [3, 3, 3, 4];

// ---------------------------------------
// ---------------------------------------
// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

const addUp = (arr, num) => {
  let result = [];
  arr.sort((a, b) => {
    if (a + b === num) {
      result = [a, b];
    }
  });
  return result;
};

console.log(addUp([1, 3, 6, 8, 11, 15], 9));
// ---------------------------------------
// ---------------------------------------
// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const calculator = (num1, operator, num2) => {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return "Invalid operator!";
  }

  return result;
};

// console.log(calculator(5, "+", 3));
// ---------------------------------------
// ---------------------------------------

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

// ---------------------------------------
// ---------------------------------------
// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


