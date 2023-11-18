// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utls/generateMarkdown.js";

// TODO: Create an array of questions for user input using prompt().
const qs = [
  //Questions here:
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
    validate: function (input) {
      if (input.length) {
        return true;
      } else {
        console.log("Please provide valiate information");
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "short description of project",
  },
  {
    type: "input",
    name: "contents",
    message: "What are the sections you want in this readme?",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation Instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "How your project is used?",
  },
  {
    type: "input",
    name: "contribution",
    message: "How others will contribute to the project?",
  },
  {
    type: "list",
    name: "license",
    choices: ["MIT", "Apache_2.0", "GPL-3.0", "None"],
  },
  {
    type: "input",
    name: "test",
    message: "How would we test your project?",
  },

  {
    type: "input",
    name: "github",
    message: "Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Email address",
  },
];
//todo: Created a function to generate the README.md file
function writeToFile(fileNm, data) {
  fs.writeFile(fileNm, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success!");
    }
  });
}
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(qs)
    // .then((answer) => )
    .then(function (answer) {
      console.log(answer);
      writeToFile("./utls/README.md", generateMarkdown(answer));
    });
}
//todo: function to initialize app
init();
