const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')


// array of questions for user
const questions = [{

            type: 'input',
            name: 'name',
            message: "Please enter your name (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please fill out the form')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email(Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please fill out the form')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter your github(Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please fill out the form')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: "what is your README title?(Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please fill out the Title')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "enter a brief description for your README(Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please fill out the description')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "Steps required to install your project"
        },
        {
            type: 'input',
            name: 'usage',
            message: "Examples of use/instructions"
        },
    ]
    // function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('README.md was created!')
        }
    })
};

// function to initialize program
function init() {
    return inquirer
        .prompt(questions)
        .then(readmeData => {
            return writeToFile('./README.md', readmeData)
        })
        .catch(err => {
            console.log(err);
        })
};

// function call to initialize program
init();