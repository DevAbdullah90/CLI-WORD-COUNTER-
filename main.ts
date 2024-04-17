#!/usr/bin/env node

import inquirer from "inquirer";


//declare a constant 'answers' and assign it to the reult of inquirer.prompt function

const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "ENTER YOUR WORDS TO COUNT THE WORDS: "
    }
])

const words = answers.sentence.trim().split("")

//print the array of words to the console
console.log(words)
//print the word count of the sentence  to the console

console.log(`your sentence word count is ${words.length}`)