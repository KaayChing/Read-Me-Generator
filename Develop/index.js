// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkDown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    //title section
    {
        type: 'input',
        name: 'title',
        message: 'What will be the title for this project?',
    },
    //description section
    {
        type: 'input',
        name: 'description',
        message: 'What is the discription of this app?',
    },
    //installation Instruction section
    {
        type: 'input',
        name: 'instal',
        message: 'Please write the instruction on how install dependecies to run this app: ',
    },
    //usage info sections
    {
        type: 'input',
        name: 'usage',
        message: 'Please write the usage information for this app: ',
    },
    //test instruction
    {
        type: 'option',
        name: 'test',
        message: 'Please write down the instruction on how to test this app: ',
    },
    //contribution section
    {
        type: 'input',
        name: 'contributors',
        message: 'Please enter contributors, if applicable: ',
    },
    //license section
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a lincense for this app: ',
        choices: ['MIT', 'BSD 3', 'APACHE 2.0', 'GPL 3.0', 'None'],
    },
    //github
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username',
    },
    //email
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName + '.md', data, (err) => {
        err ? console.log("whoops, error") : console.log("made my day")
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log('README is being generated, please wait....');
            writeToFile('README', generateMarkDown(response))
        });
};
// Function call to initialize app
init();
