/Import the inquirer package to prompt users for input
import inquirer from 'inquirer';
import fs from 'fs';

//Define an array of questions to prompt the user. 
//Objects comain input types
const questions = [
    {
      type: 'input', //type of input
      name: 'title', //name to store user's response
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions?',
    },
    {
      type: 'list', //input of list of choices
      name: 'license',
      message: 'Choose a license for your project:', //tell user to select a license
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'], //the list of choices
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:', 
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];
 //this function generates the README content based on user input
  function generateReadme(answers) {
    return `
    # ${answers.title} //inserts title of project
  
    ## Description
    ${answers.description} //inserts the description
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation
    ${answers.installation} //inserts install instructions
  
    ## Usage
    ${answers.usage} //inserts user
  
    ## License
    This project is licensed under the ${answers.license} license. //displays user selected license
  
    ## Contributing
    ${answers.contributing} //inserts contribution guidelines
  
    ## Tests
    ${answers.tests} //inserts test instructions
  
    ## Questions
    If you have any questions, you can reach me at ${answers.email}. //adds email
    You can find more of my work at [${answers.github}](https://github.com/${answers.github}). //adds github link
    `;
  }

  //function to write the README content to a file
  function writeToFile(fileName, data) {
    //fs.writeFile writes the content to the specified file
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        //log an error if fail
        console.error('Error writing to file:', err);
      } else {
        //logs a success message when README file is generated
        console.log('README.md has been generated successfully!');
      }
    });
  }

  //function initializes the program
  function init() {
    //prompt the user with questions
  inquirer
    .prompt(questions)
    .then((answers) => {
      //after user provides answers, generate README content
      const readmeContent = generateReadme(answers);
      //write the content to README.md
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      //handle any errors during prompting process
      console.error('An error occurred while prompting the user:', error);
    });
}

//call the init function to start application
init();

