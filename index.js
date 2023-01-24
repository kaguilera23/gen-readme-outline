// TODO: Include packages needed for this application
var inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "input",
        name: "name",
        message:"What is the Name of your Project?",
    },
    {
        type: "input",
        name: "description",
        message:"Provide a Description"
    },
    {
        type: "list",
        name: "tableOfContents",
        message:"Will you have a Table of Contents?",
        choices: ["yes", "no"],
        default: "yes"
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the Installation Process"        
    },
    {
        type: "input",
        name: "usage",
        message:"Describe the Usage of your Project?"
    },
    {   
        type: "rawlist",
        name: "license",
        message:"What is your License?",
        choices: ["Apache", "BSD", "GNU", "IBM", "ISC", "MIT", "Unlicense", "Other"]
    },
    {
        type: "input", 
        name: "contributors",
        message: "Name Any Contributing Authors"
    },
    {
        type: "input",
        name: "tests",
        message: "Write any Tests for your Project", 
        default: "None"
    }

];

inquirer.prompt(questions).then((answers) => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
