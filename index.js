#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessing Game");
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Cograts you guessed it right");
}
else {
    console.log("Oops! You guessed it wrong");
}
