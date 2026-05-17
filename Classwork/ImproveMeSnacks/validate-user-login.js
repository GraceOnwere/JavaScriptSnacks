let prompt = require("prompt-sync")();

let userName = prompt("Enter your user name: ");

let password = prompt("Enter your password: ");

function validateUserLogin (userName, password){

    if (userName == "Graceiee" && password == "1234567")

        return "Login Sucessful";

    return "Invalid Login Details";
}

console.log(validateUserLogin(userName,password))
