// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

let answers = [];

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'fullName',
    message: 'What is your full name?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title for your Project ReadMe file?',
  },
  {
    type:'input',
    name: 'description',
    message: 'Please enter a description for your project.'
  },
  {
    type:'input',
    name: 'installation',
    message: 'Enter brief installation instructions for your project.'
  },
  {
    type:'input',
    name: 'usage',
    message: 'Enter brief usage information.'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Which license do you wish to use (use space to select option)?',
    choices: ['Apache', 'Boost', 'BSD', 'GNU_GPLv2', 'GNU_GPLv3', 'MIT', 'Unlicense',],
  },
  {
    type:'input',
    name: 'contributing',
    message: 'Enter brief instructions for how to contribute to this project.'
  },
  {
    type:'input',
    name: 'tests',
    message: 'Enter testing information for project.'
  },
  {
    type:'input',
    name: 'githubName',
    message: 'Enter your GitHub user name.'
  },
  {
    type:'input',
    name: 'email',
    message: 'Enter your email address.'
  },
];

inquirer  
  .prompt(questions)
  .then((data) => {
    const fullName = `${data.fullName}`;
    const filename = `${data.title.toLowerCase().split(' ').join('')}`;
    const description = `${data.description}`;
    const installation = `${data.installation}`;
    const usage = `${data.usage}`;
    const license = `${data.license}`;
    const contributing = `${data.contributing}`;
    const tests = `${data.tests}`;
    const githubName = `${data.githubName}`;
    const email = `${data.email}`;

    answers.push(fullName, filename, description, installation, usage, license, contributing, tests, githubName, email);
    showMe();
    init(); 
  })
.catch((error) => {
  console.log(error);
});

function showMe() {
console.log(answers);
console.log('first item at 0: ', answers[0]); 
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,`
      OUTPUT MARKDOWN GOES HERE
      `, (err) => 
      err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
  // THEN CREATE TEXT FOR README FILE - CALL GENERATE MARKDOWN(ANSWERS) STORE IN MARKDOWNTEXT
  generateMarkdown(answers);
  // USE GENERATED MARKDOWN TEXT - call writeToFile - TO WRITE TO FILE

}

