let inquirer = require('inquirer')
let fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:?',
    },
    {
      type: 'input',
      name: 'installation',
      message:
        'What are the installation instructions step by step (split by comma, no space)',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Is there a test included?',
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information for your project:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines for your project:',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'What do I do if I have an issue? ',
    },
    {
      type: 'input',
      name: 'GitHub',
      message: 'Enter your GitHub Username:',
    },

    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Chose the appropriate license for this project:',
      choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open'],
    },
  ]
  
    
function init(){
inquirer.prompt(questions).then((responses)=>{

  fs.writeFile('Readme.md', generateMarkdown(responses), (err) =>
    err ? console.log(err) : console.log('Successfully created Readme.md!'),
  )
})
}

init();

// TODO: Create an array of questions for user input
//const questions = []

// TODO: Create a function to write README file
//
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init()
