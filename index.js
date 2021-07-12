// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

//Set variables for user replies
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
    message: 'What is the title for your Project ReadMe file (must end with .md extension)?',
  },
  {
    type:'input',
    name: 'description',
    message: 'Please enter a brief description for your project.'
  },
  {
    type:'editor',
    name: 'installation',
    message: 'Enter installation instructions for your project (opens an editor file for input).'
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
    type:'editor',
    name: 'contributing',
    message: 'Enter brief instructions for how to contribute to this project(opens an editor file for input).'
  },
  {
    type:'editor',
    name: 'tests',
    message: 'Enter testing information for project (opens an editor file for input).'
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

//User inquirer to set user answers, THEN call init function to create readme/write to file
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

    init(fullName, fileName, description, installation, usage, license, contributing, tests, githubName, email); 
  })
.catch((error) => {
  console.log(error);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // checkForMDExt(fileName);
  filepath=`./output/${fileName}`
  fs.writeFile(filepath,`
      ${data}
      `, (err) => 
      err ? console.error(err) : console.log('Success!'))
}

//function to check/correct for required .md file extension
function checkForMDExt(fileName) {
  let chars = fileName.slice(-3);
  if (chars !== '.md') {
    fileName = (fileName + '.md');
    return fileName;
  }
}

// TODO: Create a function to initialize app
function init(fullName, fileName, description, installation, usage, license, contributing, tests, githubName, email) {
  //create text block for readme file
  let response = generateMarkdown(fullName, fileName, description, installation, usage, license, contributing, tests, githubName, email);
  //add .md file extention if left off
  fileName = checkForMDExt(fileName);
  //use generated text block to generate readme file
  writeToFile(fileName, response); 
}

