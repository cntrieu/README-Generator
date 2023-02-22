const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: title => {
            if(title === '') {
                return "Please enter a title for your project!"
            } return true;
        }
      },
      {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How would you like others to contribute to your project?',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'Do you have any tests to provide? If yes, indicate here or state n/a: ',
        name: 'test',
      },
      {
        type: 'list',
        message: 'Please select a license for your project.',
        name: 'license',
        choices: [
          'Apache License 2.0', 
          'Boost Software License 1.0',
          'BSD 2-Clause License', 
          'BSD 3-Clause License', 
          'Creative Commons Zero v1.0 Universal', 
          'Eclipse Public License 1.0', 
          'GNU Affero General Public License v3.0',
          'GNU General Public License v2.0',
          'GNU Lesser General Public License v3.0',
          'MIT License', 
          'Mozilla Public License 2.0',  
          'The Unlicense', 
        ],
      },
      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: username => {
            if(username === '') {
                return "A Github username is required"
            } return true;
        }
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: email => {
            if(email === '') {
                return "An email is required"
            } return true;
        }
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    
    err ? console.error(err) : console.log('README created!')
)};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then(data => {
        writeToFile('./sample/README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
