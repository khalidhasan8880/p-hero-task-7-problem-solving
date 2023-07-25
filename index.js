// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// const string = 'hello word';
// let reversedString = '';
// for (let i = string.length -1; i >= 0; i--) {
//     const letter = string[i];
//     reversedString += letter;
// }
// console.log(reversedString);
// ------------------------------------
// ------------------------------------

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const sumOfPositiveNumbers = (numbers) =>{
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            sum += number
        }
    }
    console.log(sum);
    return sum
}

sumOfPositiveNumbers([1,2,3,4])
// ------------------------------------
// ------------------------------------
