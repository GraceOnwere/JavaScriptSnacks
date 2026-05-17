const prompt = require("prompt-sync")();

let numberOne = Number(prompt("Enter a number: "))

let numberTwo = Number(prompt("Enter a number: "))

const sumOfTwoNumbers = (numberOne,numberTwo) => {

    return numberOne + numberTwo;
};

console.log(sumOfTwoNumbers(numberOne,numberTwo));


