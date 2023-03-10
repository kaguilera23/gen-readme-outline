 // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = function generateMarkdown(data) {
  return `# ${data.title}  

  ## Table of Contents  
  * [Description](#description)  
  * [Installation](#installation)  
  * [Usage](#usage)  
  * [License](#license)  
  * [Contribute](#contributing)  
  * [Tests](#tests)  
  * [Questions](#questions)  
  
  ## Description  
  ${data.description}

  ## Installation  
  ${data.installation}

  ## Usage  
  ${data.usage}


  ## License  
  ${data.license}

  ## How to Contribute  
  ${data.contributing}


  ## Tests  
  ${data.tests}


  ## Questions  
  For any other questions, please contact me at ${data.email} or visit my gitHub at ${data.github}


`;
}

var hello = "Hello"

module.exports = {generateMarkdown, hello};
