// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

questions = 
inquirer  
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title for your Project ReadMe file?',
    }
    .then((data) => {
        // const filename = `${data.name.toLowerCase().split(' ').join('')}`; 
        // fs.writeFile(filename); 

    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('output.md',`$
      OUTPUT MARKDOWN GOES HERE
      `, (err) => 
      err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {

    //USE INQUIRER PROMPT TO GET DATA
      // THEN CREATE TEXT FOR README FILE - CALL GENERATE MARKDOWN(ANSWERS) STORE IN MARKDOWNTEXT
      
    //USE GENERATED MARKDOWN TEXT TO WRITE TO FILE

}

// Function call to initialize app
init();