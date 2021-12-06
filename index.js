const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// var axios =require('axios');
const fs = require("fs");
const { default: axios } = require('axios');

// axios.get(``)
//   .then(res=>{
//     console.log(res.data)
//   })
//   .catch(err=> console.log(err))


// array of questions for user
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
    type: `list`,
    name: `license`,
    message: `License of your project `,
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
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
    type: `input`,
    name: `questions`,
    message: `Questions of your project `
  }

];


// function to write README file
function writeToFile (fileName, data){
  return fs.writeFile(fileName, data, err =>{
    if (err) {console.log(err)}
    
  })
}

// function to initialize program
function init() {
  inquirer.prompt(
    questions)
    .then((answers) => { //axios link goes here nested
      writeToFile("readMeFile.md", generateMarkdown(answers))
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error)
      } 
    });
}

// function call to initialize program
init();
