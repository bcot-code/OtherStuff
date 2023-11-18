// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return `(<a href="http://choosealicense.com/licenses/${license}/">${renderLicenseBadge}
            .replace(/ /g,"%20")}</a>)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License ${renderLicenseLink}`;
  }
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

//     ## Description
//     ${data.description}
//     ## Table of Contents
//     ${data.contents}
//     ## Installation
//     ${data.installation}
//     ## Usage
//     ${data.usage}
//     ## License
//     This app is covered by ${data.license}.
//     ## Contributing
//     ${data.contribution}
//     ## Tests
//     ${data.test}
//     ## Questions
//     ${data.questions} to ${data.github} or via ${data.email}

// `;
// }
function generateMarkdown(data) {
  return `
  # ${data.title}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
${data.description}


## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- ${data.contents}

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples ...
${data.usage}

## License
This app is covered by ${data.license}.
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
Any further questions don't hestiate to reach me at  to ${data.github} or via ${data.email}

`;
}
// module.exports = generateMarkdown;
//this will be used for require
export default generateMarkdown;
//this will be used for import
