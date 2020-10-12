const inquirer = require('inquirer')
const fs = require('fs')
const generateReadMe = require('./utils/generateMarkdown.js')


// array of questions for user
const questions = [

];

// function to write README file
fs.writeFile('./README.md', generateReadMe, err => {
    if (err) throw new Error(err);

    console.log('Page created! Check out README.md in this directory to see it!');
});

// function to initialize program
function init() {

}

// function call to initialize program
init();