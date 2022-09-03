// function that writes readme based off of user input known as 'answers'
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ![Badge](https://img.shields.io/badge/License-${answers.license}-red)
  ## Description
  ${answers.description}
  ## Table of Contents
  * [Instalation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation 
  ${answers.answersinstallation}
  ## Usage
  ${answers.usage}
  ## License 
  This project is licensed under the ${answers.license} license. Find out more about it at https://choosealicense.com/licenses/${answers.license}
  ## Contributing 
  ${answers.contributing}
  ## Tests
  To run tests, run the following command:
  ${answers.command}
  ## Questions
  If you have any questions about repo or project, you can contact me directly at ${answers.email}, or you can find more of my work at https://github.com/${answers.username}
`;
}

module.exports = generateMarkdown;
