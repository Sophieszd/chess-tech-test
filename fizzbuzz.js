// First problem - FizzBuzz

// Write a function called fizzbuzz that takes in one number and returns the following: 
// 	If the number is a multiple of 3, return Fizz
// 	If the number is a multiple of 5, return Buzz
// 	If the number is a multiple of both, return FizzBuzz
// 	Otherwise, just return the number.
// take in a number, return a string

// const fizzbuzz = (number) => {
//     const output = number.toString();
//     if (number % 3 === 0 && number % 5 === 0) {
//         return "fizzbuzz";
//     } else if (number % 5 === 0) {
//         return "buzz";
//     } else if (number % 3 === 0) {
//         return "fizz";
//     } else {
//     return number.toString();
//     }
// }

class FizzBuzz {
    constructor(upperLimit) {
        this.upperLimit = upperLimit;
    }

        convertAll() {
            const numbersArray = [];
            for (let i = 0; i < this.upperLimit; i++) {
                numbersArray.push(this.convert(i));
            }
            return numbersArray;
        }

        convert(number) {
            if (number % 3 === 0 && number % 5 === 0) {
                return "fizzbuzz";
            } else if (number % 5 === 0) {
                return "buzz";
            } else if (number % 3 === 0) {
                return "fizz";
            } else {
                return number.toString();
        }
    }
}

const fizzbuzz = new FizzBuzz(729);
fizzbuzz.convert(1);
console.log(fizzbuzz.convertAll());

// console.log(fizzbuzz(1));
// console.log(fizzbuzz(3));
// console.log(fizzbuzz(5));
// console.log(fizzbuzz(15));
// console.log(fizzbuzz(16));
