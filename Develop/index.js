// variables that require all the necessary files and the command line interface
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown') 
const { writeFile } = require('fs').promises;

const questions = () => {
    return inquirer.prompt(
[
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license should your project have?',
        choices:[
            'mit',
            'apache2.0', 
            'unlicense', 
            'mpl2.0', 
            'None'
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command needs to be run to install dependencies'
    },
    {
        type: 'input',
        name: 'command',
        message: 'What command needs to be run to start tests?'
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    }
]);
}

// function that actually creates the readme file
const init = () => {
    questions ()
    .then((answers)=> writeFile('README.md', generateMarkdown(answers)))
    .then(() => console.log ('Successfully wrote a README!!'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
