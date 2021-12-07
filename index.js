const inquirer = require('inquirer');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown.js');
const axios =require('axios');
const fs = require("fs");

//Array of Possible Inputs
const questions = [
  {
    type: `input`,
    name: `projectTitle`,
    message: `Title of your project `
  },

  {
    type: `input`,
    name: `description`,
    message: `Description of your project `
  },

  {
    type: `input`,
    name: `installation`,
    message: `Installation of your project `
  },

  {
    type: `input`,
    name: `usage`,
    message: `Usage of your project `
  },
   {
    type: `input`,
    name: `contributing`,
    message: `Contributing of your project `
  },

  {
    type: `input`,
    name: `tests`,
    message: `Tests of your project `
  },

  {
    type: `list`,
    name: `license`,
    message: `License of your project `,
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
  },

  {
    type: `input`,
    name: `username`,
    message: `What is ur GitHub Username?`
  },

  {
    type: `input`,
    name: `email`,
    message: `What is ur email?`
  }

];


// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err)
    }

    console.log(`YOU HAVE BEEN SUCCESFUL!`)

  })
}

// function to initialize program
function init() {
  inquirer.prompt(
    questions)
    .then((answer) => { 
      writeToFile("readMeFile.md", generateMarkdown(answer))
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error)
      }
    })
}

// function call to initialize program
init();
