const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
var axios =require('axios');



// array of questions for user
const questions = [
  {
    type: `input`,
    name: `Project Title`,
    message: `Title of your project `
  },

  {
    type: `input`,
    name: `Description`,
    message: `Description of your project `
  },

  {
    type: `input`,
    name: `Table of Contents`,
    message: `Table of Contents for your project `
  },

  {
    type: `input`,
    name: `Installation`,
    message: `Installation of your project `
  },

  {
    type: `input`,
    name: `Usage`,
    message: `Usage of your project `
  },

  {
    type: `list`,
    name: `License`,
    message: `License of your project `,
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
  },

  {
    type: `input`,
    name: `Contributing`,
    message: `Contributing of your project `
  },

  {
    type: `input`,
    name: `Tests`,
    message: `Tests of your project `
  },

  {
    type: `input`,
    name: `Questions`,
    message: `Questions of your project `
  }

];


inquirer
  .prompt(
    /* Pass your questions in here */
    questions
  )
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
