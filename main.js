#! /usr/bin/env node
import inquirer from "inquirer";
// declear a constant ans and assign it to the result of inquirer.prompt function
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answer.Sentence.trim().split(" ");
// print the arrayof words to the console
console.log(words);
//print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
