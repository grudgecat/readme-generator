// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// let answers = [];

let fullName = "";
let fileName = "";
let description = "";
let installation = "";
let usage = "";
let license = "";
let contributing = "";
let tests = "";
let githubName = "";
let email = "";

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
     fullName = `${data.fullName}`;
     fileName = `${data.title.toLowerCase().split(' ').join('')}`;
     description = `${data.description}`;
     installation = `${data.installation}`;
     usage = `${data.usage}`;
     license = `${data.license}`;
     contributing = `${data.contributing}`;
     tests = `${data.tests}`;
     githubName = `${data.githubName}`;
     email = `${data.email}`;

    // answers.push(fullName, fileName, description, installation, usage, license, contributing, tests, githubName, email);
    // showMe();
    init(fullName, fileName, description, installation, usage, license, contributing, tests, githubName, email); 
  })
.catch((error) => {
  console.log(error);
});

// function showMe() {
// console.log(answers);
// }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  filepath=`./${fileName}`
  fs.writeFile(filepath,`
      ${data}
      `, (err) => 
      err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init(fullName, fileName, description, installation, usage, license, contributing, tests, githubName, email) {
  //create text block for readme file
  let response = generateMarkdown(fullName, fileName, description, installation, usage, license, contributing, tests, githubName, email);
  //use text block to generate readme file
  writeToFile(fileName, response);
}

