// function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.projectTitle}
  

  ## Description
  ${answer.description}

  ## Table of Contents ${answer.tableofContents}
  Instillation:  ${answer.installation}
  Usage: ${answer.usage}
  License: ${answer.license}
  

  ## Instillation
  ${answer.installation}

  ## Usage
  ${answer.usage}


  ## License
  ${answer.license}

  ## Contributing
  ${answer.contributing}

  ## Tests
  ${answer.tests}

  ## Questions
  ${answer.questions}

`;
}

module.exports = generateMarkdown;
