function checkAge (age){

    if (age >= 13 && age < 18)
        return "Teen";

    else if (age <= 12)

        return "Child";

    else
       return "Adult";
}


let prompt = require("prompt-sync")();

let age = prompt("Enter your age: ")

console.log(checkAge(age))
