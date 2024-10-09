import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
    {
      type: 'input',
      name: 'title',
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
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
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

  function generateReadme(answers) {
    return `
    # ${answers.title}
  
    ## Description
    ${answers.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation
    ${answers.installation}
  
    ## Usage
    ${answers.usage}
  
    ## License
    This project is licensed under the ${answers.license} license.
  
    ## Contributing
    ${answers.contributing}
  
    ## Tests
    ${answers.tests}
  
    ## Questions
    If you have any questions, you can reach me at ${answers.email}.
    You can find more of my work at [${answers.github}](https://github.com/${answers.github}).
    `;
  }

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('README.md has been generated successfully!');
      }
    });
  }

  function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const readmeContent = generateReadme(answers);
        writeToFile('README.md', readmeContent);
      })
      .catch((error) => {
        console.error('An error occurred while prompting the user:', error);
      });
  }
  
  init();

