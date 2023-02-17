// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "input",
        name: "title",
        message:"What is the Name of your Project?",
    },
    {
        type: "input",
        name: "description",
        message:"Provide a Description"
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
        choices: ["Apache", "BSD", "GNU", "ISC", "MIT", "Unlicense", "Other"]
    },
    {
        type: "input", 
        name: "contributing",
        message: "How Can Someone Contribute to your Project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Write any Tests for your Project", 
        default: "None"
    }, 
    {
        type: "input", 
        name: "email", 
        message: "What is your email address?"
    }, 
    {
        type: "input", 
        name: "github", 
        message: "What is your GitHub Username?"
    }

];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data , (err) => {
        if (!err) {
            console.log("Your README is ready!")
        } else {
            console.log(err)
        }
        })
}

// TODO: Create a function to initialize app


function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
        const readme = markdown.generateMarkdown(answers);
        writeToFile(readme)
        
    })
}


// Function call to initialize app
init();



